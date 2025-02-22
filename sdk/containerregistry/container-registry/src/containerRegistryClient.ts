// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { TokenCredential } from "@azure/core-auth";
import { isTokenCredential } from "@azure/core-auth";
import type { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { bearerTokenAuthenticationPolicy } from "@azure/core-rest-pipeline";
import type { CommonClientOptions, OperationOptions } from "@azure/core-client";

import type { PageSettings, PagedAsyncIterableIterator } from "@azure/core-paging";

import { logger } from "./logger.js";
import { GeneratedClient } from "./generated/index.js";
import { tracingClient } from "./tracing.js";
import type { RepositoryPageResponse } from "./models.js";
import { extractNextLink } from "./utils/helpers.js";
import { ChallengeHandler } from "./containerRegistryChallengeHandler.js";
import type { ContainerRepository, DeleteRepositoryOptions } from "./containerRepository.js";
import { ContainerRepositoryImpl } from "./containerRepository.js";
import type { RegistryArtifact } from "./registryArtifact.js";
import { ContainerRegistryRefreshTokenCredential } from "./containerRegistryTokenCredential.js";

const LATEST_API_VERSION = "2021-07-01";

/**
 * Client options used to configure Container Registry Repository API requests.
 */
export interface ContainerRegistryClientOptions extends CommonClientOptions {
  /**
   * Gets or sets the audience to use for authentication with Azure Active Directory.
   * The authentication scope will be set from this audience.
   * See {@link KnownContainerRegistryAudience} for known audience values.
   */
  audience?: string;
  /**
   * The version of service API to make calls against.
   */
  serviceVersion?: "2021-07-01";
}

/**
 * Options for the `listRepositories` method of `ContainerRegistryClient`.
 */
export interface ListRepositoriesOptions extends OperationOptions {}

/**
 * The client class used to interact with the Container Registry service.
 */
export class ContainerRegistryClient {
  /**
   * The Azure Container Registry endpoint.
   */
  public readonly endpoint: string;

  private client: GeneratedClient;

  /**
   * Creates an instance of a ContainerRegistryClient.
   *
   * Example usage:
   * ```ts snippet:ReadmeSampleCreateClient_Node
   * import { ContainerRegistryClient, KnownContainerRegistryAudience } from "@azure/container-registry";
   * import { DefaultAzureCredential } from "@azure/identity";
   *
   * const endpoint = "https://myregistryname.azurecr.io";
   * // Create a ContainerRegistryClient that will authenticate through Active Directory
   * const client = new ContainerRegistryClient(endpoint, new DefaultAzureCredential(), {
   *   audience: KnownContainerRegistryAudience.AzureResourceManagerPublicCloud,
   * });
   * ```
   * @param endpoint - the URL endpoint of the container registry
   * @param credential - used to authenticate requests to the service
   * @param options - optional configuration used to send requests to the service
   */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    options?: ContainerRegistryClientOptions,
  );

  /**
   * Creates an instance of a ContainerRegistryClient to interact with
   * an Azure Container Registry that has anonymous pull access enabled.
   * Only operations that support anonymous access are enabled. Other service
   * methods will throw errors.
   *
   * Example usage:
   * ```ts snippet:ReadmeSampleCreateClient_Anonymous
   * import { ContainerRegistryClient, KnownContainerRegistryAudience } from "@azure/container-registry";
   *
   * const endpoint = "https://myregistryname.azurecr.io";
   * // Create a new ContainerRegistryClient for anonymous access
   * const client = new ContainerRegistryClient(endpoint, {
   *   audience: KnownContainerRegistryAudience.AzureResourceManagerPublicCloud,
   * });
   * ```
   * @param endpoint - the URL endpoint of the container registry
   * @param options - optional configuration used to send requests to the service
   */
  constructor(endpoint: string, options?: ContainerRegistryClientOptions);

  constructor(
    endpoint: string,
    credentialOrOptions?: TokenCredential | ContainerRegistryClientOptions,
    clientOptions: ContainerRegistryClientOptions = {},
  ) {
    if (!endpoint) {
      throw new Error("invalid endpoint");
    }

    this.endpoint = endpoint;

    let credential: TokenCredential | undefined;
    let options: ContainerRegistryClientOptions | undefined;
    if (isTokenCredential(credentialOrOptions)) {
      credential = credentialOrOptions;
      options = clientOptions;
    } else {
      options = credentialOrOptions ?? {};
    }

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      loggingOptions: {
        logger: logger.info,
        // This array contains header names we want to log that are not already
        // included as safe. Unknown/unsafe headers are logged as "<REDACTED>".
        additionalAllowedQueryParameters: ["last", "n", "orderby", "digest"],
      },
    };

    const defaultScope = `${options.audience ?? "https://containerregistry.azure.net"}/.default`;
    const serviceVersion = options.serviceVersion ?? LATEST_API_VERSION;
    const authClient = new GeneratedClient(endpoint, serviceVersion, internalPipelineOptions);
    this.client = new GeneratedClient(endpoint, serviceVersion, internalPipelineOptions);
    this.client.pipeline.addPolicy(
      bearerTokenAuthenticationPolicy({
        credential,
        scopes: [defaultScope],
        challengeCallbacks: new ChallengeHandler(
          new ContainerRegistryRefreshTokenCredential(authClient, defaultScope, credential),
        ),
      }),
    );
  }

  /**
   * Deletes the repository identified by the given name and all associated artifacts.
   *
   * @param repositoryName - the name of repository to delete
   * @param options - optional configuration for the operation
   */
  public async deleteRepository(
    repositoryName: string,
    options: DeleteRepositoryOptions = {},
  ): Promise<void> {
    if (!repositoryName) {
      throw new Error("invalid repositoryName");
    }

    return tracingClient.withSpan(
      "ContainerRegistryClient.deleteRepository",
      options,
      async (updatedOptions) => {
        await this.client.containerRegistry.deleteRepository(repositoryName, updatedOptions);
      },
    );
  }

  /**
   * Returns an instance of {@link RegistryArtifact} for calling service methods related to the artifact specified by `repositoryName` and `tagOrDigest`.
   *
   * @param repositoryName - the name of repository
   * @param tagOrDigest - tag or digest of the artifact to retrieve
   */
  public getArtifact(repositoryName: string, tagOrDigest: string): RegistryArtifact {
    if (!repositoryName) {
      throw new Error("invalid repositoryName");
    }
    if (!tagOrDigest) {
      throw new Error("invalid tagOrDigest");
    }

    return new ContainerRepositoryImpl(this.endpoint, repositoryName, this.client).getArtifact(
      tagOrDigest,
    );
  }

  /**
   * Returns an instance of {@link ContainerRepository} for calling service methods related to the repository specified by `repositoryName`.
   *
   * @param repositoryName - the name of repository
   */
  public getRepository(repositoryName: string): ContainerRepository {
    if (!repositoryName) {
      throw new Error("invalid repositoryName");
    }

    return new ContainerRepositoryImpl(this.endpoint, repositoryName, this.client);
  }

  /**
   * Returns an async iterable iterator to list names of repositories in this registry.
   *
   * Example usage:
   * ```ts snippet:SampleReadmeListRepositories
   * import { ContainerRegistryClient, KnownContainerRegistryAudience } from "@azure/container-registry";
   * import { DefaultAzureCredential } from "@azure/identity";
   *
   * const endpoint = "https://myregistryname.azurecr.io";
   * const client = new ContainerRegistryClient(endpoint, new DefaultAzureCredential(), {
   *   audience: KnownContainerRegistryAudience.AzureResourceManagerPublicCloud,
   * });
   *
   * const iterator = client.listRepositoryNames();
   * for await (const repository of iterator) {
   *   console.log(`  repository: ${repository}`);
   * }
   * ```
   *
   * @param options - The options for the request
   */
  public listRepositoryNames(
    // eslint-disable-next-line @azure/azure-sdk/ts-naming-options
    options: ListRepositoriesOptions = {},
  ): PagedAsyncIterableIterator<string, RepositoryPageResponse> {
    const iter = this.listRepositoryItems(options);

    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) => this.listRepositoriesPage(settings, options),
    };
  }

  private async *listRepositoryItems(
    options: ListRepositoriesOptions = {},
  ): AsyncIterableIterator<string> {
    for await (const page of this.listRepositoriesPage({}, options)) {
      yield* page;
    }
  }

  private async *listRepositoriesPage(
    continuationState: PageSettings,
    options: ListRepositoriesOptions = {},
  ): AsyncIterableIterator<RepositoryPageResponse> {
    if (!continuationState.continuationToken) {
      const optionsComplete = {
        ...options,
        n: continuationState.maxPageSize,
      };
      const currentPage = await this.client.containerRegistry.getRepositories(optionsComplete);
      continuationState.continuationToken = extractNextLink(currentPage.link);
      if (currentPage.repositories) {
        const array = currentPage.repositories;
        yield Object.defineProperty(array, "continuationToken", {
          value: continuationState.continuationToken,
          enumerable: true,
        });
      }
    }
    while (continuationState.continuationToken) {
      const currentPage = await this.client.containerRegistry.getRepositoriesNext(
        continuationState.continuationToken,
        options,
      );
      continuationState.continuationToken = extractNextLink(currentPage.link);
      if (currentPage.repositories) {
        const array = currentPage.repositories;
        yield Object.defineProperty(array, "continuationToken", {
          value: continuationState.continuationToken,
          enumerable: true,
        });
      }
    }
  }
}
