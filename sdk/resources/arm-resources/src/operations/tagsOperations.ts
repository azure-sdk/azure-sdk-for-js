/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { TagsOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ResourceManagementClient } from "../resourceManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  TagDetails,
  TagsListNextOptionalParams,
  TagsListOptionalParams,
  TagsListResponse,
  TagsDeleteValueOptionalParams,
  TagsCreateOrUpdateValueOptionalParams,
  TagsCreateOrUpdateValueResponse,
  TagsCreateOrUpdateOptionalParams,
  TagsCreateOrUpdateResponse,
  TagsDeleteOptionalParams,
  TagsResource,
  TagsCreateOrUpdateAtScopeOptionalParams,
  TagsCreateOrUpdateAtScopeResponse,
  TagsPatchResource,
  TagsUpdateAtScopeOptionalParams,
  TagsUpdateAtScopeResponse,
  TagsGetAtScopeOptionalParams,
  TagsGetAtScopeResponse,
  TagsDeleteAtScopeOptionalParams,
  TagsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing TagsOperations operations. */
export class TagsOperationsImpl implements TagsOperations {
  private readonly client: ResourceManagementClient;

  /**
   * Initialize a new instance of the class TagsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClient) {
    this.client = client;
  }

  /**
   * This operation performs a union of predefined tags, resource tags, resource group tags and
   * subscription tags, and returns a summary of usage for each tag name and value under the given
   * subscription. In case of a large number of tags, this operation may return a previously cached
   * result.
   * @param options The options parameters.
   */
  public list(
    options?: TagsListOptionalParams,
  ): PagedAsyncIterableIterator<TagDetails> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: TagsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TagDetails[]> {
    let result: TagsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: TagsListOptionalParams,
  ): AsyncIterableIterator<TagDetails> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation allows deleting a value from the list of predefined values for an existing predefined
   * tag name. The value being deleted must not be in use as a tag value for the given tag name for any
   * resource.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param options The options parameters.
   */
  deleteValue(
    tagName: string,
    tagValue: string,
    options?: TagsDeleteValueOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { tagName, tagValue, options },
      deleteValueOperationSpec,
    );
  }

  /**
   * This operation allows adding a value to the list of predefined values for an existing predefined tag
   * name. A tag value can have a maximum of 256 characters.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdateValue(
    tagName: string,
    tagValue: string,
    options?: TagsCreateOrUpdateValueOptionalParams,
  ): Promise<TagsCreateOrUpdateValueResponse> {
    return this.client.sendOperationRequest(
      { tagName, tagValue, options },
      createOrUpdateValueOperationSpec,
    );
  }

  /**
   * This operation allows adding a name to the list of predefined tag names for the given subscription.
   * A tag name can have a maximum of 512 characters and is case-insensitive. Tag names cannot have the
   * following prefixes which are reserved for Azure use: 'microsoft', 'azure', 'windows'.
   * @param tagName The name of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdate(
    tagName: string,
    options?: TagsCreateOrUpdateOptionalParams,
  ): Promise<TagsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { tagName, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * This operation allows deleting a name from the list of predefined tag names for the given
   * subscription. The name being deleted must not be in use as a tag name for any resource. All
   * predefined values for the given name must have already been deleted.
   * @param tagName The name of the tag.
   * @param options The options parameters.
   */
  delete(tagName: string, options?: TagsDeleteOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { tagName, options },
      deleteOperationSpec,
    );
  }

  /**
   * This operation performs a union of predefined tags, resource tags, resource group tags and
   * subscription tags, and returns a summary of usage for each tag name and value under the given
   * subscription. In case of a large number of tags, this operation may return a previously cached
   * result.
   * @param options The options parameters.
   */
  private _list(options?: TagsListOptionalParams): Promise<TagsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This operation allows adding or replacing the entire set of tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags API requests and responses.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtScope(
    scope: string,
    parameters: TagsResource,
    options?: TagsCreateOrUpdateAtScopeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TagsCreateOrUpdateAtScopeResponse>,
      TagsCreateOrUpdateAtScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TagsCreateOrUpdateAtScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, parameters, options },
      spec: createOrUpdateAtScopeOperationSpec,
    });
    const poller = await createHttpPoller<
      TagsCreateOrUpdateAtScopeResponse,
      OperationState<TagsCreateOrUpdateAtScopeResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * This operation allows adding or replacing the entire set of tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags API requests and responses.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtScopeAndWait(
    scope: string,
    parameters: TagsResource,
    options?: TagsCreateOrUpdateAtScopeOptionalParams,
  ): Promise<TagsCreateOrUpdateAtScopeResponse> {
    const poller = await this.beginCreateOrUpdateAtScope(
      scope,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * This operation allows replacing, merging or selectively deleting tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The
   * 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows
   * adding tags with new names and updating the values of tags with existing names. The 'delete' option
   * allows selectively deleting tags based on given names or name/value pairs.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags patch API request only.
   * @param options The options parameters.
   */
  async beginUpdateAtScope(
    scope: string,
    parameters: TagsPatchResource,
    options?: TagsUpdateAtScopeOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TagsUpdateAtScopeResponse>,
      TagsUpdateAtScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TagsUpdateAtScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, parameters, options },
      spec: updateAtScopeOperationSpec,
    });
    const poller = await createHttpPoller<
      TagsUpdateAtScopeResponse,
      OperationState<TagsUpdateAtScopeResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * This operation allows replacing, merging or selectively deleting tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The
   * 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows
   * adding tags with new names and updating the values of tags with existing names. The 'delete' option
   * allows selectively deleting tags based on given names or name/value pairs.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags patch API request only.
   * @param options The options parameters.
   */
  async beginUpdateAtScopeAndWait(
    scope: string,
    parameters: TagsPatchResource,
    options?: TagsUpdateAtScopeOptionalParams,
  ): Promise<TagsUpdateAtScopeResponse> {
    const poller = await this.beginUpdateAtScope(scope, parameters, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    options?: TagsGetAtScopeOptionalParams,
  ): Promise<TagsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getAtScopeOperationSpec,
    );
  }

  /**
   * Deletes the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  async beginDeleteAtScope(
    scope: string,
    options?: TagsDeleteAtScopeOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, options },
      spec: deleteAtScopeOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  async beginDeleteAtScopeAndWait(
    scope: string,
    options?: TagsDeleteAtScopeOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDeleteAtScope(scope, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TagsListNextOptionalParams,
  ): Promise<TagsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteValueOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateValueOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagValue,
    },
    201: {
      bodyMapper: Mappers.TagValue,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagDetails,
    },
    201: {
      bodyMapper: Mappers.TagDetails,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource,
    },
    201: {
      bodyMapper: Mappers.TagsResource,
    },
    202: {
      bodyMapper: Mappers.TagsResource,
    },
    204: {
      bodyMapper: Mappers.TagsResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource,
    },
    201: {
      bodyMapper: Mappers.TagsResource,
    },
    202: {
      bodyMapper: Mappers.TagsResource,
    },
    204: {
      bodyMapper: Mappers.TagsResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
