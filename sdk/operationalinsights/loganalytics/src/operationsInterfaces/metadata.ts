import {
  MetadataGetOptionalParams,
  MetadataGetResponse,
  MetadataPostOptionalParams,
  MetadataPostResponse
} from "../models";

/** Interface representing a Metadata. */
export interface Metadata {
  /**
   * Retrieve the metadata information for the workspace, including its schema, functions, workspace
   * info, categories etc.
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param options The options parameters.
   */
  get(
    workspaceId: string,
    options?: MetadataGetOptionalParams
  ): Promise<MetadataGetResponse>;
  /**
   * Retrieve the metadata information for the workspace, including its schema, functions, workspace
   * info, categories etc.
   * @param workspaceId ID of the workspace. This is Workspace ID from the Properties blade in the Azure
   *                    portal.
   * @param options The options parameters.
   */
  post(
    workspaceId: string,
    options?: MetadataPostOptionalParams
  ): Promise<MetadataPostResponse>;
}
