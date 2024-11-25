// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The current status of an async operation. */
export interface OperationStatusResult {
  /** Fully qualified ID for the async operation. */
  id?: string;
  /** Name of the async operation. */
  name?: string;
  /** Operation status. */
  status: string;
  /** Percent of the operation that is complete. */
  percentComplete?: number;
  /** The start time of the operation. */
  startTime?: Date;
  /** The end time of the operation. */
  endTime?: Date;
  /** The operations list. */
  operations?: OperationStatusResult[];
  /** If present, details of the operation error. */
  error?: ErrorDetail;
}

export function operationStatusResultDeserializer(
  item: any,
): OperationStatusResult {
  return {
    id: item["id"],
    name: item["name"],
    status: item["status"],
    percentComplete: item["percentComplete"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    operations: !item["operations"]
      ? item["operations"]
      : operationStatusResultArrayDeserializer(item["operations"]),
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

export function operationStatusResultArrayDeserializer(
  result: Array<OperationStatusResult>,
): any[] {
  return result.map((item) => {
    return operationStatusResultDeserializer(item);
  });
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"]
      ? item["info"]
      : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(
  item: any,
): _ErrorAdditionalInfoInfo {
  return item;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

/** Model that represents the execution of an Experiment. */
export interface ChaosExperimentExecution extends ProxyResource {
  /** The properties of experiment execution status. */
  properties?: ExperimentExecutionProperties;
}

export function chaosExperimentExecutionDeserializer(
  item: any,
): ChaosExperimentExecution {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : experimentExecutionPropertiesDeserializer(item["properties"]),
  };
}

/** Model that represents the execution properties of an Experiment. */
export interface ExperimentExecutionProperties {
  /** The status of the execution. */
  readonly status?: string;
  /** String that represents the start date time. */
  readonly startedAt?: Date;
  /** String that represents the stop date time. */
  readonly stoppedAt?: Date;
}

export function experimentExecutionPropertiesDeserializer(
  item: any,
): ExperimentExecutionProperties {
  return {
    status: item["status"],
    startedAt: !item["startedAt"]
      ? item["startedAt"]
      : new Date(item["startedAt"]),
    stoppedAt: !item["stoppedAt"]
      ? item["stoppedAt"]
      : new Date(item["stoppedAt"]),
  };
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource): any {
  return item;
}

export function proxyResourceDeserializer(item: any): ProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnowncreatedByType} can be used interchangeably with createdByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** Model that represents a list of Experiment executions and a link for pagination. */
export interface _ExperimentExecutionListResult {
  /** The ExperimentExecution items on this page */
  value?: ChaosExperimentExecution[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _experimentExecutionListResultDeserializer(
  item: any,
): _ExperimentExecutionListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosExperimentExecutionArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosExperimentExecutionArrayDeserializer(
  result: Array<ChaosExperimentExecution>,
): any[] {
  return result.map((item) => {
    return chaosExperimentExecutionDeserializer(item);
  });
}

/** Model that represents the execution details of an Experiment. */
export interface ExperimentExecutionDetails {
  /** String of the resource type. */
  readonly type?: string;
  /** String of the fully qualified resource ID. */
  readonly id?: string;
  /** String of the resource name. */
  readonly name?: string;
  /** The properties of the experiment execution details. */
  readonly properties?: ExperimentExecutionDetailsProperties;
}

export function experimentExecutionDetailsDeserializer(
  item: any,
): ExperimentExecutionDetails {
  return {
    type: item["type"],
    id: item["id"],
    name: item["name"],
    properties: !item["properties"]
      ? item["properties"]
      : experimentExecutionDetailsPropertiesDeserializer(item["properties"]),
  };
}

/** Model that represents the extended properties of an experiment execution. */
export interface ExperimentExecutionDetailsProperties {
  /** The status of the execution. */
  readonly status?: string;
  /** String that represents the start date time. */
  readonly startedAt?: Date;
  /** String that represents the stop date time. */
  readonly stoppedAt?: Date;
  /** The reason why the execution failed. */
  readonly failureReason?: string;
  /** String that represents the last action date time. */
  readonly lastActionAt?: Date;
  /** The information of the experiment run. */
  readonly runInformation?: ExperimentExecutionDetailsPropertiesRunInformation;
}

export function experimentExecutionDetailsPropertiesDeserializer(
  item: any,
): ExperimentExecutionDetailsProperties {
  return {
    status: item["status"],
    startedAt: !item["startedAt"]
      ? item["startedAt"]
      : new Date(item["startedAt"]),
    stoppedAt: !item["stoppedAt"]
      ? item["stoppedAt"]
      : new Date(item["stoppedAt"]),
    failureReason: item["failureReason"],
    lastActionAt: !item["lastActionAt"]
      ? item["lastActionAt"]
      : new Date(item["lastActionAt"]),
    runInformation: !item["runInformation"]
      ? item["runInformation"]
      : experimentExecutionDetailsPropertiesRunInformationDeserializer(
          item["runInformation"],
        ),
  };
}

/** The information of the experiment run. */
export interface ExperimentExecutionDetailsPropertiesRunInformation {
  /** The steps of the experiment run. */
  readonly steps?: ChaosExperimentRunStepStatus[];
}

export function experimentExecutionDetailsPropertiesRunInformationDeserializer(
  item: any,
): ExperimentExecutionDetailsPropertiesRunInformation {
  return {
    steps: !item["steps"]
      ? item["steps"]
      : chaosExperimentRunStepStatusArrayDeserializer(item["steps"]),
  };
}

export function chaosExperimentRunStepStatusArrayDeserializer(
  result: Array<ChaosExperimentRunStepStatus>,
): any[] {
  return result.map((item) => {
    return chaosExperimentRunStepStatusDeserializer(item);
  });
}

/** Model that represents the a list of branches and branch statuses. */
export interface ChaosExperimentRunStepStatus {
  /** The name of the step. */
  readonly stepName?: string;
  /** The id of the step. */
  readonly stepId?: string;
  /** The value of the status of the step. */
  readonly status?: string;
  /** The array of branches. */
  readonly branches?: ChaosExperimentRunBranchStatus[];
}

export function chaosExperimentRunStepStatusDeserializer(
  item: any,
): ChaosExperimentRunStepStatus {
  return {
    stepName: item["stepName"],
    stepId: item["stepId"],
    status: item["status"],
    branches: !item["branches"]
      ? item["branches"]
      : chaosExperimentRunBranchStatusArrayDeserializer(item["branches"]),
  };
}

export function chaosExperimentRunBranchStatusArrayDeserializer(
  result: Array<ChaosExperimentRunBranchStatus>,
): any[] {
  return result.map((item) => {
    return chaosExperimentRunBranchStatusDeserializer(item);
  });
}

/** Model that represents the a list of actions and action statuses. */
export interface ChaosExperimentRunBranchStatus {
  /** The name of the branch status. */
  readonly branchName?: string;
  /** The id of the branch status. */
  readonly branchId?: string;
  /** The status of the branch. */
  readonly status?: string;
  /** The array of actions. */
  readonly actions?: ChaosExperimentRunActionStatus[];
}

export function chaosExperimentRunBranchStatusDeserializer(
  item: any,
): ChaosExperimentRunBranchStatus {
  return {
    branchName: item["branchName"],
    branchId: item["branchId"],
    status: item["status"],
    actions: !item["actions"]
      ? item["actions"]
      : chaosExperimentRunActionStatusArrayDeserializer(item["actions"]),
  };
}

export function chaosExperimentRunActionStatusArrayDeserializer(
  result: Array<ChaosExperimentRunActionStatus>,
): any[] {
  return result.map((item) => {
    return chaosExperimentRunActionStatusDeserializer(item);
  });
}

/** Model that represents the an action and its status. */
export interface ChaosExperimentRunActionStatus {
  /** The name of the action status. */
  readonly actionName?: string;
  /** The id of the action status. */
  readonly actionId?: string;
  /** The status of the action. */
  readonly status?: string;
  /** String that represents the start time of the action. */
  readonly startTime?: Date;
  /** String that represents the end time of the action. */
  readonly endTime?: Date;
  /** The array of targets. */
  readonly targets?: ExperimentExecutionActionTargetDetailsProperties[];
}

export function chaosExperimentRunActionStatusDeserializer(
  item: any,
): ChaosExperimentRunActionStatus {
  return {
    actionName: item["actionName"],
    actionId: item["actionId"],
    status: item["status"],
    startTime: !item["startTime"]
      ? item["startTime"]
      : new Date(item["startTime"]),
    endTime: !item["endTime"] ? item["endTime"] : new Date(item["endTime"]),
    targets: !item["targets"]
      ? item["targets"]
      : experimentExecutionActionTargetDetailsPropertiesArrayDeserializer(
          item["targets"],
        ),
  };
}

export function experimentExecutionActionTargetDetailsPropertiesArrayDeserializer(
  result: Array<ExperimentExecutionActionTargetDetailsProperties>,
): any[] {
  return result.map((item) => {
    return experimentExecutionActionTargetDetailsPropertiesDeserializer(item);
  });
}

/** Model that represents the Experiment action target details properties model. */
export interface ExperimentExecutionActionTargetDetailsProperties {
  /** The status of the execution. */
  readonly status?: string;
  /** The target for the action. */
  readonly target?: string;
  /** String that represents the failed date time. */
  readonly targetFailedTime?: Date;
  /** String that represents the completed date time. */
  readonly targetCompletedTime?: Date;
  /** The error of the action. */
  readonly error?: ExperimentExecutionActionTargetDetailsError;
}

export function experimentExecutionActionTargetDetailsPropertiesDeserializer(
  item: any,
): ExperimentExecutionActionTargetDetailsProperties {
  return {
    status: item["status"],
    target: item["target"],
    targetFailedTime: !item["targetFailedTime"]
      ? item["targetFailedTime"]
      : new Date(item["targetFailedTime"]),
    targetCompletedTime: !item["targetCompletedTime"]
      ? item["targetCompletedTime"]
      : new Date(item["targetCompletedTime"]),
    error: !item["error"]
      ? item["error"]
      : experimentExecutionActionTargetDetailsErrorDeserializer(item["error"]),
  };
}

/** Model that represents the Experiment action target details error model. */
export interface ExperimentExecutionActionTargetDetailsError {
  /** The error code. */
  readonly code?: string;
  /** The error message */
  readonly message?: string;
}

export function experimentExecutionActionTargetDetailsErrorDeserializer(
  item: any,
): ExperimentExecutionActionTargetDetailsError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** Model that represents a Experiment resource. */
export interface ChaosExperiment extends TrackedResource {
  /** The properties of the experiment resource. */
  properties: ExperimentProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function chaosExperimentSerializer(item: ChaosExperiment): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: experimentPropertiesSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

export function chaosExperimentDeserializer(item: any): ChaosExperiment {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: experimentPropertiesDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
  };
}

/** Model that represents the Experiment properties model. */
export interface ExperimentProperties {
  /** Most recent provisioning state for the given experiment resource. */
  readonly provisioningState?: ChaosProvisioningState;
  /** List of steps. */
  steps: ChaosExperimentStep[];
  /** List of selectors. */
  selectors: ChaosTargetSelectorUnion[];
}

export function experimentPropertiesSerializer(
  item: ExperimentProperties,
): any {
  return {
    steps: chaosExperimentStepArraySerializer(item["steps"]),
    selectors: chaosTargetSelectorUnionArraySerializer(item["selectors"]),
  };
}

export function experimentPropertiesDeserializer(
  item: any,
): ExperimentProperties {
  return {
    provisioningState: item["provisioningState"],
    steps: chaosExperimentStepArrayDeserializer(item["steps"]),
    selectors: chaosTargetSelectorUnionArrayDeserializer(item["selectors"]),
  };
}

/** Current provisioning state for a given Azure Chaos resource. */
export enum KnownChaosProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Initial creation in progress. */
  Creating = "Creating",
  /** Update in progress. */
  Updating = "Updating",
  /** Deletion in progress. */
  Deleting = "Deleting",
}

/**
 * Current provisioning state for a given Azure Chaos resource. \
 * {@link KnownChaosProvisioningState} can be used interchangeably with ChaosProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Creating**: Initial creation in progress. \
 * **Updating**: Update in progress. \
 * **Deleting**: Deletion in progress.
 */
export type ChaosProvisioningState = string;

export function chaosExperimentStepArraySerializer(
  result: Array<ChaosExperimentStep>,
): any[] {
  return result.map((item) => {
    return chaosExperimentStepSerializer(item);
  });
}

export function chaosExperimentStepArrayDeserializer(
  result: Array<ChaosExperimentStep>,
): any[] {
  return result.map((item) => {
    return chaosExperimentStepDeserializer(item);
  });
}

/** Model that represents a step in the Experiment resource. */
export interface ChaosExperimentStep {
  /** String of the step name. */
  name: string;
  /** List of branches. */
  branches: ChaosExperimentBranch[];
}

export function chaosExperimentStepSerializer(item: ChaosExperimentStep): any {
  return {
    name: item["name"],
    branches: chaosExperimentBranchArraySerializer(item["branches"]),
  };
}

export function chaosExperimentStepDeserializer(
  item: any,
): ChaosExperimentStep {
  return {
    name: item["name"],
    branches: chaosExperimentBranchArrayDeserializer(item["branches"]),
  };
}

export function chaosExperimentBranchArraySerializer(
  result: Array<ChaosExperimentBranch>,
): any[] {
  return result.map((item) => {
    return chaosExperimentBranchSerializer(item);
  });
}

export function chaosExperimentBranchArrayDeserializer(
  result: Array<ChaosExperimentBranch>,
): any[] {
  return result.map((item) => {
    return chaosExperimentBranchDeserializer(item);
  });
}

/** Model that represents a branch in the step. 9 total per experiment. */
export interface ChaosExperimentBranch {
  /** String of the branch name. */
  name: string;
  /** List of actions. */
  actions: ChaosExperimentActionUnion[];
}

export function chaosExperimentBranchSerializer(
  item: ChaosExperimentBranch,
): any {
  return {
    name: item["name"],
    actions: chaosExperimentActionUnionArraySerializer(item["actions"]),
  };
}

export function chaosExperimentBranchDeserializer(
  item: any,
): ChaosExperimentBranch {
  return {
    name: item["name"],
    actions: chaosExperimentActionUnionArrayDeserializer(item["actions"]),
  };
}

export function chaosExperimentActionUnionArraySerializer(
  result: Array<ChaosExperimentActionUnion>,
): any[] {
  return result.map((item) => {
    return chaosExperimentActionUnionSerializer(item);
  });
}

export function chaosExperimentActionUnionArrayDeserializer(
  result: Array<ChaosExperimentActionUnion>,
): any[] {
  return result.map((item) => {
    return chaosExperimentActionUnionDeserializer(item);
  });
}

/** Model that represents the base action model. 9 total per experiment. */
export interface ChaosExperimentAction {
  /** String that represents a Capability URN. */
  name: string;
  /** Chaos experiment action discriminator type */
  /** The discriminator possible values: delay, discrete, continuous */
  type: ExperimentActionType;
}

export function chaosExperimentActionSerializer(
  item: ChaosExperimentAction,
): any {
  return { name: item["name"], type: item["type"] };
}

export function chaosExperimentActionDeserializer(
  item: any,
): ChaosExperimentAction {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** Alias for ChaosExperimentActionUnion */
export type ChaosExperimentActionUnion =
  | ChaosDelayAction
  | ChaosDiscreteAction
  | ChaosContinuousAction
  | ChaosExperimentAction;

export function chaosExperimentActionUnionSerializer(
  item: ChaosExperimentActionUnion,
): any {
  switch (item.type) {
    case "delay":
      return chaosDelayActionSerializer(item as ChaosDelayAction);

    case "discrete":
      return chaosDiscreteActionSerializer(item as ChaosDiscreteAction);

    case "continuous":
      return chaosContinuousActionSerializer(item as ChaosContinuousAction);

    default:
      return chaosExperimentActionSerializer(item);
  }
}

export function chaosExperimentActionUnionDeserializer(
  item: any,
): ChaosExperimentActionUnion {
  switch (item.type) {
    case "delay":
      return chaosDelayActionDeserializer(item as ChaosDelayAction);

    case "discrete":
      return chaosDiscreteActionDeserializer(item as ChaosDiscreteAction);

    case "continuous":
      return chaosContinuousActionDeserializer(item as ChaosContinuousAction);

    default:
      return chaosExperimentActionDeserializer(item);
  }
}

/** Enum union of Chaos experiment action types. */
export enum KnownExperimentActionType {
  delay = "delay",
  discrete = "discrete",
  continuous = "continuous",
}

/**
 * Enum union of Chaos experiment action types. \
 * {@link KnownExperimentActionType} can be used interchangeably with ExperimentActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **delay** \
 * **discrete** \
 * **continuous**
 */
export type ExperimentActionType = string;

/** Model that represents a delay action. */
export interface ChaosDelayAction extends ChaosExperimentAction {
  /** ISO8601 formatted string that represents a duration. */
  duration: string;
  /** Enum that discriminates between action models. */
  type: "delay";
}

export function chaosDelayActionSerializer(item: ChaosDelayAction): any {
  return { name: item["name"], type: item["type"], duration: item["duration"] };
}

export function chaosDelayActionDeserializer(item: any): ChaosDelayAction {
  return {
    name: item["name"],
    type: item["type"],
    duration: item["duration"],
  };
}

/** Model that represents a discrete action. */
export interface ChaosDiscreteAction extends ChaosExperimentAction {
  /** List of key value pairs. */
  parameters: ChaosKeyValuePair[];
  /** String that represents a selector. */
  selectorId: string;
  /** Enum that discriminates between action models. */
  type: "discrete";
}

export function chaosDiscreteActionSerializer(item: ChaosDiscreteAction): any {
  return {
    name: item["name"],
    type: item["type"],
    parameters: chaosKeyValuePairArraySerializer(item["parameters"]),
    selectorId: item["selectorId"],
  };
}

export function chaosDiscreteActionDeserializer(
  item: any,
): ChaosDiscreteAction {
  return {
    name: item["name"],
    type: item["type"],
    parameters: chaosKeyValuePairArrayDeserializer(item["parameters"]),
    selectorId: item["selectorId"],
  };
}

export function chaosKeyValuePairArraySerializer(
  result: Array<ChaosKeyValuePair>,
): any[] {
  return result.map((item) => {
    return chaosKeyValuePairSerializer(item);
  });
}

export function chaosKeyValuePairArrayDeserializer(
  result: Array<ChaosKeyValuePair>,
): any[] {
  return result.map((item) => {
    return chaosKeyValuePairDeserializer(item);
  });
}

/** A map to describe the settings of an action. */
export interface ChaosKeyValuePair {
  /** The name of the setting for the action. */
  key: string;
  /** The value of the setting for the action. */
  value: string;
}

export function chaosKeyValuePairSerializer(item: ChaosKeyValuePair): any {
  return { key: item["key"], value: item["value"] };
}

export function chaosKeyValuePairDeserializer(item: any): ChaosKeyValuePair {
  return {
    key: item["key"],
    value: item["value"],
  };
}

/** Model that represents a continuous action. */
export interface ChaosContinuousAction extends ChaosExperimentAction {
  /** ISO8601 formatted string that represents a duration. */
  duration: string;
  /** List of key value pairs. */
  parameters: ChaosKeyValuePair[];
  /** String that represents a selector. */
  selectorId: string;
  /** Enum that discriminates between action models. */
  type: "continuous";
}

export function chaosContinuousActionSerializer(
  item: ChaosContinuousAction,
): any {
  return {
    name: item["name"],
    type: item["type"],
    duration: item["duration"],
    parameters: chaosKeyValuePairArraySerializer(item["parameters"]),
    selectorId: item["selectorId"],
  };
}

export function chaosContinuousActionDeserializer(
  item: any,
): ChaosContinuousAction {
  return {
    name: item["name"],
    type: item["type"],
    duration: item["duration"],
    parameters: chaosKeyValuePairArrayDeserializer(item["parameters"]),
    selectorId: item["selectorId"],
  };
}

export function chaosTargetSelectorUnionArraySerializer(
  result: Array<ChaosTargetSelectorUnion>,
): any[] {
  return result.map((item) => {
    return chaosTargetSelectorUnionSerializer(item);
  });
}

export function chaosTargetSelectorUnionArrayDeserializer(
  result: Array<ChaosTargetSelectorUnion>,
): any[] {
  return result.map((item) => {
    return chaosTargetSelectorUnionDeserializer(item);
  });
}

/** Model that represents a selector in the Experiment resource. */
export interface ChaosTargetSelector {
  /** String of the selector ID. */
  id: string;
  /** Chaos target selector discriminator type */
  /** The discriminator possible values: List, Query */
  type: SelectorType;
  /** Model that represents available filter types that can be applied to a targets list. */
  filter?: ChaosTargetFilterUnion;
}

export function chaosTargetSelectorSerializer(item: ChaosTargetSelector): any {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionSerializer(item["filter"]),
  };
}

export function chaosTargetSelectorDeserializer(
  item: any,
): ChaosTargetSelector {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionDeserializer(item["filter"]),
  };
}

/** Alias for ChaosTargetSelectorUnion */
export type ChaosTargetSelectorUnion =
  | ChaosTargetListSelector
  | ChaosTargetQuerySelector
  | ChaosTargetSelector;

export function chaosTargetSelectorUnionSerializer(
  item: ChaosTargetSelectorUnion,
): any {
  switch (item.type) {
    case "List":
      return chaosTargetListSelectorSerializer(item as ChaosTargetListSelector);

    case "Query":
      return chaosTargetQuerySelectorSerializer(
        item as ChaosTargetQuerySelector,
      );

    default:
      return chaosTargetSelectorSerializer(item);
  }
}

export function chaosTargetSelectorUnionDeserializer(
  item: any,
): ChaosTargetSelectorUnion {
  switch (item.type) {
    case "List":
      return chaosTargetListSelectorDeserializer(
        item as ChaosTargetListSelector,
      );

    case "Query":
      return chaosTargetQuerySelectorDeserializer(
        item as ChaosTargetQuerySelector,
      );

    default:
      return chaosTargetSelectorDeserializer(item);
  }
}

/** Enum of the selector type. */
export enum KnownSelectorType {
  List = "List",
  Query = "Query",
}

/**
 * Enum of the selector type. \
 * {@link KnownSelectorType} can be used interchangeably with SelectorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **List** \
 * **Query**
 */
export type SelectorType = string;

/** Model that represents available filter types that can be applied to a targets list. */
export interface ChaosTargetFilter {
  /** Chaos target filter discriminator type */
  /** The discriminator possible values: Simple */
  type: FilterType;
}

export function chaosTargetFilterSerializer(item: ChaosTargetFilter): any {
  return { type: item["type"] };
}

export function chaosTargetFilterDeserializer(item: any): ChaosTargetFilter {
  return {
    type: item["type"],
  };
}

/** Alias for ChaosTargetFilterUnion */
export type ChaosTargetFilterUnion =
  | ChaosTargetSimpleFilter
  | ChaosTargetFilter;

export function chaosTargetFilterUnionSerializer(
  item: ChaosTargetFilterUnion,
): any {
  switch (item.type) {
    case "Simple":
      return chaosTargetSimpleFilterSerializer(item as ChaosTargetSimpleFilter);

    default:
      return chaosTargetFilterSerializer(item);
  }
}

export function chaosTargetFilterUnionDeserializer(
  item: any,
): ChaosTargetFilterUnion {
  switch (item.type) {
    case "Simple":
      return chaosTargetSimpleFilterDeserializer(
        item as ChaosTargetSimpleFilter,
      );

    default:
      return chaosTargetFilterDeserializer(item);
  }
}

/** Enum that discriminates between filter types. Currently only `Simple` type is supported. */
export enum KnownFilterType {
  Simple = "Simple",
}

/**
 * Enum that discriminates between filter types. Currently only `Simple` type is supported. \
 * {@link KnownFilterType} can be used interchangeably with FilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Simple**
 */
export type FilterType = string;

/** Model that represents a simple target filter. */
export interface ChaosTargetSimpleFilter extends ChaosTargetFilter {
  /** Model that represents the Simple filter parameters. */
  parameters?: ChaosTargetSimpleFilterParameters;
  /** Enum that discriminates between filter types. Currently only `Simple` type is supported. */
  type: "Simple";
}

export function chaosTargetSimpleFilterSerializer(
  item: ChaosTargetSimpleFilter,
): any {
  return {
    type: item["type"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : chaosTargetSimpleFilterParametersSerializer(item["parameters"]),
  };
}

export function chaosTargetSimpleFilterDeserializer(
  item: any,
): ChaosTargetSimpleFilter {
  return {
    type: item["type"],
    parameters: !item["parameters"]
      ? item["parameters"]
      : chaosTargetSimpleFilterParametersDeserializer(item["parameters"]),
  };
}

/** Model that represents the Simple filter parameters. */
export interface ChaosTargetSimpleFilterParameters {
  /** List of Azure availability zones to filter targets by. */
  zones?: string[];
}

export function chaosTargetSimpleFilterParametersSerializer(
  item: ChaosTargetSimpleFilterParameters,
): any {
  return {
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

export function chaosTargetSimpleFilterParametersDeserializer(
  item: any,
): ChaosTargetSimpleFilterParameters {
  return {
    zones: !item["zones"]
      ? item["zones"]
      : item["zones"].map((p: any) => {
          return p;
        }),
  };
}

/** Model that represents a list selector. */
export interface ChaosTargetListSelector extends ChaosTargetSelector {
  /** List of Target references. */
  targets: ChaosTargetReference[];
  /** Enum of the selector type. */
  type: "List";
}

export function chaosTargetListSelectorSerializer(
  item: ChaosTargetListSelector,
): any {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionSerializer(item["filter"]),
    targets: chaosTargetReferenceArraySerializer(item["targets"]),
  };
}

export function chaosTargetListSelectorDeserializer(
  item: any,
): ChaosTargetListSelector {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionDeserializer(item["filter"]),
    targets: chaosTargetReferenceArrayDeserializer(item["targets"]),
  };
}

export function chaosTargetReferenceArraySerializer(
  result: Array<ChaosTargetReference>,
): any[] {
  return result.map((item) => {
    return chaosTargetReferenceSerializer(item);
  });
}

export function chaosTargetReferenceArrayDeserializer(
  result: Array<ChaosTargetReference>,
): any[] {
  return result.map((item) => {
    return chaosTargetReferenceDeserializer(item);
  });
}

/** Model that represents a reference to a Target in the selector. */
export interface ChaosTargetReference {
  /** Enum of the Target reference type. */
  referenceType: ChaosTargetReferenceType;
  /** Resource identifier of a Target resource. */
  id: string;
}

export function chaosTargetReferenceSerializer(
  item: ChaosTargetReference,
): any {
  return { type: item["referenceType"], id: item["id"] };
}

export function chaosTargetReferenceDeserializer(
  item: any,
): ChaosTargetReference {
  return {
    referenceType: item["type"],
    id: item["id"],
  };
}

/** Enum of the Target reference type. */
export enum KnownChaosTargetReferenceType {
  /** Chaos target reference type. */
  ChaosTarget = "ChaosTarget",
}

/**
 * Enum of the Target reference type. \
 * {@link KnownChaosTargetReferenceType} can be used interchangeably with ChaosTargetReferenceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ChaosTarget**: Chaos target reference type.
 */
export type ChaosTargetReferenceType = string;

/** Model that represents a query selector. */
export interface ChaosTargetQuerySelector extends ChaosTargetSelector {
  /** Azure Resource Graph (ARG) Query Language query for target resources. */
  queryString: string;
  /** Subscription id list to scope resource query. */
  subscriptionIds: string[];
  /** Enum of the selector type. */
  type: "Query";
}

export function chaosTargetQuerySelectorSerializer(
  item: ChaosTargetQuerySelector,
): any {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionSerializer(item["filter"]),
    queryString: item["queryString"],
    subscriptionIds: item["subscriptionIds"].map((p: any) => {
      return p;
    }),
  };
}

export function chaosTargetQuerySelectorDeserializer(
  item: any,
): ChaosTargetQuerySelector {
  return {
    id: item["id"],
    type: item["type"],
    filter: !item["filter"]
      ? item["filter"]
      : chaosTargetFilterUnionDeserializer(item["filter"]),
    queryString: item["queryString"],
    subscriptionIds: item["subscriptionIds"].map((p: any) => {
      return p;
    }),
  };
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity | null>;
}

export function managedServiceIdentitySerializer(
  item: ManagedServiceIdentity,
): any {
  return {
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

export function managedServiceIdentityDeserializer(
  item: any,
): ManagedServiceIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum KnownManagedServiceIdentityType {
  /** No managed identity. */
  None = "None",
  /** System assigned managed identity. */
  SystemAssigned = "SystemAssigned",
  /** User assigned managed identity. */
  UserAssigned = "UserAssigned",
  /** System and user assigned managed identity. */
  "SystemAssigned,UserAssigned" = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned,UserAssigned**: System and user assigned managed identity.
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(
  item: UserAssignedIdentity,
): any {
  return item;
}

export function userAssignedIdentityDeserializer(
  item: any,
): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    location: item["location"],
  };
}

/** Describes an experiment update. */
export interface ExperimentUpdate {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** Experiment managed identity. */
  identity?: ManagedServiceIdentity;
}

export function experimentUpdateSerializer(item: ExperimentUpdate): any {
  return {
    tags: item["tags"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

/** Model that represents a list of Experiment resources and a link for pagination. */
export interface _ExperimentListResult {
  /** The Experiment items on this page */
  value?: ChaosExperiment[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _experimentListResultDeserializer(
  item: any,
): _ExperimentListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosExperimentArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosExperimentArraySerializer(
  result: Array<ChaosExperiment>,
): any[] {
  return result.map((item) => {
    return chaosExperimentSerializer(item);
  });
}

export function chaosExperimentArrayDeserializer(
  result: Array<ChaosExperiment>,
): any[] {
  return result.map((item) => {
    return chaosExperimentDeserializer(item);
  });
}

/** Model that represents the post action response. */
export interface PostActionResult {
  /** The name of the resource. */
  readonly name?: string;
  /** The statusUrl of the post action. */
  readonly statusUrl?: string;
}

export function postActionResultDeserializer(item: any): PostActionResult {
  return {
    name: item["name"],
    statusUrl: item["statusUrl"],
  };
}

/** Model that represents a Target Type resource. */
export interface ChaosTargetMetadata extends ProxyResource {
  /** The properties of the target type resource. */
  properties: TargetTypeProperties;
}

export function chaosTargetMetadataDeserializer(
  item: any,
): ChaosTargetMetadata {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: targetTypePropertiesDeserializer(item["properties"]),
  };
}

/** Model that represents the base Target Type properties model. */
export interface TargetTypeProperties {
  /** Localized string of the display name. */
  readonly displayName?: string;
  /** Localized string of the description. */
  readonly description?: string;
  /** URL to retrieve JSON schema of the Target Type properties. */
  readonly propertiesSchema?: string;
  /** List of resource types this Target Type can extend. */
  readonly resourceTypes?: string[];
}

export function targetTypePropertiesDeserializer(
  item: any,
): TargetTypeProperties {
  return {
    displayName: item["displayName"],
    description: item["description"],
    propertiesSchema: item["propertiesSchema"],
    resourceTypes: !item["resourceTypes"]
      ? item["resourceTypes"]
      : item["resourceTypes"].map((p: any) => {
          return p;
        }),
  };
}

/** Model that represents a list of Target Type resources and a link for pagination. */
export interface _TargetTypeListResult {
  /** The TargetType items on this page */
  value?: ChaosTargetMetadata[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _targetTypeListResultDeserializer(
  item: any,
): _TargetTypeListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosTargetMetadataArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosTargetMetadataArrayDeserializer(
  result: Array<ChaosTargetMetadata>,
): any[] {
  return result.map((item) => {
    return chaosTargetMetadataDeserializer(item);
  });
}

/** Model that represents a Capability Type resource. */
export interface ChaosCapabilityMetadata extends ProxyResource {
  /** The properties of the capability type resource. */
  properties?: CapabilityTypeProperties;
}

export function chaosCapabilityMetadataDeserializer(
  item: any,
): ChaosCapabilityMetadata {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : capabilityTypePropertiesDeserializer(item["properties"]),
  };
}

/** Model that represents the Capability Type properties model.Model that represents the Capability Type properties model. */
export interface CapabilityTypeProperties {
  /** String of the Publisher that this Capability Type extends. */
  readonly publisher?: string;
  /** String of the Target Type that this Capability Type extends. */
  readonly targetType?: string;
  /** Localized string of the display name. */
  readonly displayName?: string;
  /** Localized string of the description. */
  readonly description?: string;
  /** URL to retrieve JSON schema of the Capability Type parameters. */
  readonly parametersSchema?: string;
  /** String of the URN for this Capability Type. */
  readonly urn?: string;
  /** String of the kind of this Capability Type. */
  readonly kind?: string;
  /** Control plane actions necessary to execute capability type. */
  readonly azureRbacActions?: string[];
  /** Data plane actions necessary to execute capability type. */
  readonly azureRbacDataActions?: string[];
  /** Runtime properties of this Capability Type. */
  readonly runtimeProperties?: ChaosCapabilityMetadataRuntimeProperties;
}

export function capabilityTypePropertiesDeserializer(
  item: any,
): CapabilityTypeProperties {
  return {
    publisher: item["publisher"],
    targetType: item["targetType"],
    displayName: item["displayName"],
    description: item["description"],
    parametersSchema: item["parametersSchema"],
    urn: item["urn"],
    kind: item["kind"],
    azureRbacActions: !item["azureRbacActions"]
      ? item["azureRbacActions"]
      : item["azureRbacActions"].map((p: any) => {
          return p;
        }),
    azureRbacDataActions: !item["azureRbacDataActions"]
      ? item["azureRbacDataActions"]
      : item["azureRbacDataActions"].map((p: any) => {
          return p;
        }),
    runtimeProperties: !item["runtimeProperties"]
      ? item["runtimeProperties"]
      : chaosCapabilityMetadataRuntimePropertiesDeserializer(
          item["runtimeProperties"],
        ),
  };
}

/** Runtime properties of this Capability Type. */
export interface ChaosCapabilityMetadataRuntimeProperties {
  /** String of the kind of the resource's action type (continuous or discrete). */
  readonly kind?: string;
}

export function chaosCapabilityMetadataRuntimePropertiesDeserializer(
  item: any,
): ChaosCapabilityMetadataRuntimeProperties {
  return {
    kind: item["kind"],
  };
}

/** Model that represents a list of Capability Type resources and a link for pagination. */
export interface _CapabilityTypeListResult {
  /** The CapabilityType items on this page */
  readonly value?: ChaosCapabilityMetadata[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _capabilityTypeListResultDeserializer(
  item: any,
): _CapabilityTypeListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosCapabilityMetadataArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosCapabilityMetadataArrayDeserializer(
  result: Array<ChaosCapabilityMetadata>,
): any[] {
  return result.map((item) => {
    return chaosCapabilityMetadataDeserializer(item);
  });
}

/** Model that represents a Target resource. */
export interface ChaosTarget extends ProxyResource {
  /** The properties of the target resource. */
  properties?: Record<string, any>;
  /** Azure resource location. */
  readonly location?: string;
}

export function chaosTargetSerializer(item: ChaosTarget): any {
  return { properties: item["properties"] };
}

export function chaosTargetDeserializer(item: any): ChaosTarget {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: item["properties"],
    location: item["location"],
  };
}

/** Model that represents a list of Target resources and a link for pagination. */
export interface _TargetListResult {
  /** The Target items on this page */
  value?: ChaosTarget[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _targetListResultDeserializer(item: any): _TargetListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosTargetArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosTargetArraySerializer(result: Array<ChaosTarget>): any[] {
  return result.map((item) => {
    return chaosTargetSerializer(item);
  });
}

export function chaosTargetArrayDeserializer(
  result: Array<ChaosTarget>,
): any[] {
  return result.map((item) => {
    return chaosTargetDeserializer(item);
  });
}

/** Model that represents a Capability resource. */
export interface ChaosCapability extends ProxyResource {
  /** The properties of a capability resource. */
  properties?: CapabilityProperties;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function chaosCapabilitySerializer(item: ChaosCapability): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : capabilityPropertiesSerializer(item["properties"]),
  };
}

export function chaosCapabilityDeserializer(item: any): ChaosCapability {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : capabilityPropertiesDeserializer(item["properties"]),
  };
}

/** Model that represents the Capability properties model. */
export interface CapabilityProperties {
  /** String of the Publisher that this Capability extends. */
  readonly publisher?: string;
  /** String of the Target Type that this Capability extends. */
  readonly targetType?: string;
  /** Localized string of the description. */
  readonly description?: string;
  /** URL to retrieve JSON schema of the Capability parameters. */
  readonly parametersSchema?: string;
  /** String of the URN for this Capability Type. */
  readonly urn?: string;
}

export function capabilityPropertiesSerializer(
  item: CapabilityProperties,
): any {
  return item;
}

export function capabilityPropertiesDeserializer(
  item: any,
): CapabilityProperties {
  return {
    publisher: item["publisher"],
    targetType: item["targetType"],
    description: item["description"],
    parametersSchema: item["parametersSchema"],
    urn: item["urn"],
  };
}

/** Model that represents a list of Capability resources and a link for pagination. */
export interface _CapabilityListResult {
  /** The Capability items on this page */
  readonly value?: ChaosCapability[];
  /** The link to the next page of items */
  readonly nextLink?: string;
}

export function _capabilityListResultDeserializer(
  item: any,
): _CapabilityListResult {
  return {
    value: !item["value"]
      ? item["value"]
      : chaosCapabilityArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function chaosCapabilityArraySerializer(
  result: Array<ChaosCapability>,
): any[] {
  return result.map((item) => {
    return chaosCapabilitySerializer(item);
  });
}

export function chaosCapabilityArrayDeserializer(
  result: Array<ChaosCapability>,
): any[] {
  return result.map((item) => {
    return chaosCapabilityDeserializer(item);
  });
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(
  item: any,
): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  readonly display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"]
      ? item["display"]
      : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  user = "user",
  /** Indicates the operation is initiated by a system. */
  system = "system",
  /** Indicates the operation is initiated by a user or system. */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** The available API versions. */
export enum KnownVersions {
  /** The 2025-01-01 API version. */
  v2025_01_01 = "2025-01-01",
}
