# Release History
    
## 2.0.0 (2025-01-08)
    
### Features Added

  - Added Interface AzureDeveloperDevCenterClientOptions
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added function overload "export function getLongRunningPoller<TResult extends CreateDevBoxLogicalResponse | CreateDevBoxDefaultResponse>(client: Client, initialResponse: CreateDevBox200Response | CreateDevBox201Response | CreateDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends DeleteDevBoxLogicalResponse | DeleteDevBoxDefaultResponse>(client: Client, initialResponse: DeleteDevBox202Response | DeleteDevBox204Response | DeleteDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends StartDevBoxLogicalResponse | StartDevBoxDefaultResponse>(client: Client, initialResponse: StartDevBox202Response | StartDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends StopDevBoxLogicalResponse | StopDevBoxDefaultResponse>(client: Client, initialResponse: StopDevBox202Response | StopDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends RestartDevBoxLogicalResponse | RestartDevBoxDefaultResponse>(client: Client, initialResponse: RestartDevBox202Response | RestartDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends CreateOrReplaceEnvironmentLogicalResponse | CreateOrReplaceEnvironmentDefaultResponse>(client: Client, initialResponse: CreateOrReplaceEnvironment201Response | CreateOrReplaceEnvironmentDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function getLongRunningPoller<TResult extends DeleteEnvironmentLogicalResponse | DeleteEnvironmentDefaultResponse>(client: Client, initialResponse: DeleteEnvironment202Response | DeleteEnvironment204Response | DeleteEnvironmentDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Added function overload "export function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;"
  - Added function overload "export function isUnexpected(response: DeleteDevBox202Response | DeleteDevBox204Response | DeleteDevBoxLogicalResponse | DeleteDevBoxDefaultResponse): response is DeleteDevBoxDefaultResponse;"
  - Added function overload "export function isUnexpected(response: StartDevBox202Response | StartDevBoxLogicalResponse | StartDevBoxDefaultResponse): response is StartDevBoxDefaultResponse;"
  - Added function overload "export function isUnexpected(response: StopDevBox202Response | StopDevBoxLogicalResponse | StopDevBoxDefaultResponse): response is StopDevBoxDefaultResponse;"
  - Added function overload "export function isUnexpected(response: RestartDevBox202Response | RestartDevBoxLogicalResponse | RestartDevBoxDefaultResponse): response is RestartDevBoxDefaultResponse;"
  - Added function overload "export function isUnexpected(response: DeleteEnvironment202Response | DeleteEnvironment204Response | DeleteEnvironmentLogicalResponse | DeleteEnvironmentDefaultResponse): response is DeleteEnvironmentDefaultResponse;"

### Breaking Changes

  - Interface DevBox no longer has parameter localAdministrator
  - Removed function overload "export function getLongRunningPoller<TResult extends CreateDevBoxLogicalResponse | CreateDevBoxDefaultResponse>(client: Client, initialResponse: CreateDevBox200Response | CreateDevBox201Response | CreateDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends DeleteDevBoxLogicalResponse | DeleteDevBoxDefaultResponse>(client: Client, initialResponse: DeleteDevBox202Response | DeleteDevBox204Response | DeleteDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends StartDevBoxLogicalResponse | StartDevBoxDefaultResponse>(client: Client, initialResponse: StartDevBox202Response | StartDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends StopDevBoxLogicalResponse | StopDevBoxDefaultResponse>(client: Client, initialResponse: StopDevBox202Response | StopDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends RestartDevBoxLogicalResponse | RestartDevBoxDefaultResponse>(client: Client, initialResponse: RestartDevBox202Response | RestartDevBoxDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends CreateOrReplaceEnvironmentLogicalResponse | CreateOrReplaceEnvironmentDefaultResponse>(client: Client, initialResponse: CreateOrReplaceEnvironment201Response | CreateOrReplaceEnvironmentDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function getLongRunningPoller<TResult extends DeleteEnvironmentLogicalResponse | DeleteEnvironmentDefaultResponse>(client: Client, initialResponse: DeleteEnvironment202Response | DeleteEnvironment204Response | DeleteEnvironmentDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;"
  - Removed function overload "export function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: DeleteDevBox202Response | DeleteDevBox204Response | DeleteDevBoxLogicalResponse | DeleteDevBoxDefaultResponse): response is DeleteDevBoxDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: StartDevBox202Response | StartDevBoxLogicalResponse | StartDevBoxDefaultResponse): response is StartDevBoxDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: StopDevBox202Response | StopDevBoxLogicalResponse | StopDevBoxDefaultResponse): response is StopDevBoxDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: RestartDevBox202Response | RestartDevBoxLogicalResponse | RestartDevBoxDefaultResponse): response is RestartDevBoxDefaultResponse;"
  - Removed function overload "export function isUnexpected(response: DeleteEnvironment202Response | DeleteEnvironment204Response | DeleteEnvironmentLogicalResponse | DeleteEnvironmentDefaultResponse): response is DeleteEnvironmentDefaultResponse;"
  - Removed Type Alias PagedCatalogOutput
  - Removed Type Alias PagedDevBoxActionDelayResultOutput
  - Removed Type Alias PagedDevBoxActionOutput
  - Removed Type Alias PagedDevBoxOutput
  - Removed Type Alias PagedEnvironmentDefinitionOutput
  - Removed Type Alias PagedEnvironmentOutput
  - Removed Type Alias PagedEnvironmentTypeOutput
  - Removed Type Alias PagedPoolOutput
  - Removed Type Alias PagedProjectOutput
  - Removed Type Alias PagedScheduleOutput
  - Type alias "OperationStateOutput" has been changed
    
