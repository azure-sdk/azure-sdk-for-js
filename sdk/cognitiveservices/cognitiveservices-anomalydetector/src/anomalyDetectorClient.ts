import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  AnomalyDetectorClientOptionalParams,
  ModelSnapshot,
  ListMultivariateModelNextOptionalParams,
  ListMultivariateModelOptionalParams,
  RootCauseAnalysisDataSetUnion,
  ListRootCauseAnalysisDataSetsNextOptionalParams,
  ListRootCauseAnalysisDataSetsOptionalParams,
  RootCauseAnalysisDataMeta,
  ListRootCauseAnalysisDataMetaByTimestampNextOptionalParams,
  ListRootCauseAnalysisDataMetaByTimestampOptionalParams,
  ListRootCauseAnalysisDataMetaByTimeRangeNextOptionalParams,
  ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams,
  RootCauseAnalysisInstanceUnion,
  ListRootCauseAnalysisInstancesNextOptionalParams,
  ListRootCauseAnalysisInstancesOptionalParams,
  RootCauseAnalysisTrainingResponse,
  ListRootCauseAnalysisTrainingStatesNextOptionalParams,
  ListRootCauseAnalysisTrainingStatesOptionalParams,
  DetectRequest,
  DetectEntireSeriesOptionalParams,
  DetectEntireSeriesResponse,
  DetectLastPointOptionalParams,
  DetectLastPointResponse,
  ChangePointDetectRequest,
  DetectChangePointOptionalParams,
  DetectChangePointResponse,
  ModelInfo,
  TrainMultivariateModelOptionalParams,
  TrainMultivariateModelResponse,
  ListMultivariateModelResponse,
  GetMultivariateModelOptionalParams,
  GetMultivariateModelResponse,
  DeleteMultivariateModelOptionalParams,
  DetectionRequest,
  DetectAnomalyOptionalParams,
  DetectAnomalyResponse,
  GetDetectionResultOptionalParams,
  GetDetectionResultResponse,
  ExportModelOptionalParams,
  ExportModelResponse,
  LastDetectionRequest,
  LastDetectAnomalyOptionalParams,
  LastDetectAnomalyResponse,
  CreateRootCauseAnalysisDataSetUnion,
  CreateRootCauseAnalysisDataSetOptionalParams,
  CreateRootCauseAnalysisDataSetResponse,
  GetRootCauseAnalysisDataSetOptionalParams,
  GetRootCauseAnalysisDataSetResponse,
  DeleteRootCauseAnalysisDataSetOptionalParams,
  ListRootCauseAnalysisDataSetsResponse,
  RootCauseAnalysisUploadDataPartitionRequest,
  UploadRootCauseAnalysisDataByPartitionOptionalParams,
  UploadRootCauseAnalysisDataByPartitionResponse,
  DeleteRootCauseAnalysisDataByPartitionIdOptionalParams,
  RootCauseAnalysisUploadDataBlockRequest,
  UploadRootCauseAnalysisDataByBlockOptionalParams,
  DeleteRootCauseAnalysisDataByTimeRangeOptionalParams,
  ListRootCauseAnalysisDataMetaByTimestampResponse,
  ListRootCauseAnalysisDataMetaByTimeRangeResponse,
  CreateRootCauseAnalysisInstanceUnion,
  CreateRootCauseAnalysisInstanceOptionalParams,
  CreateRootCauseAnalysisInstanceResponse,
  GetRootCauseAnalysisInstanceOptionalParams,
  GetRootCauseAnalysisInstanceResponse,
  DeleteRootCauseAnalysisInstanceOptionalParams,
  ListRootCauseAnalysisInstancesResponse,
  ListRootCauseAnalysisKindsOptionalParams,
  ListRootCauseAnalysisKindsResponse,
  RootCauseAnalysisTrainingRequest,
  CreateRootCauseAnalysisTrainingTaskOptionalParams,
  CreateRootCauseAnalysisTrainingTaskResponse,
  DeleteRootCauseAnalysisModelOptionalParams,
  GetRootCauseAnalysisTrainingStateOptionalParams,
  GetRootCauseAnalysisTrainingStateResponse,
  ListRootCauseAnalysisTrainingStatesResponse,
  RootCauseAnalysisInferenceRequest,
  CreateRootCauseAnalysisInferenceTaskOptionalParams,
  CreateRootCauseAnalysisInferenceTaskResponse,
  GetRootCauseAnalysisInferenceStateOptionalParams,
  GetRootCauseAnalysisInferenceStateResponse,
  ListMultivariateModelNextResponse,
  ListRootCauseAnalysisDataSetsNextResponse,
  ListRootCauseAnalysisDataMetaByTimestampNextResponse,
  ListRootCauseAnalysisDataMetaByTimeRangeNextResponse,
  ListRootCauseAnalysisInstancesNextResponse,
  ListRootCauseAnalysisTrainingStatesNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class AnomalyDetectorClient extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AnomalyDetectorClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus2.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    endpoint: string,
    options?: AnomalyDetectorClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AnomalyDetectorClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-cognitiveservices-anomalydetector/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "{Endpoint}/anomalydetector/{ApiVersion}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "v1.1-preview.2";
  }

  /**
   * List models of a subscription
   * @param options The options parameters.
   */
  public listMultivariateModel(
    options?: ListMultivariateModelOptionalParams
  ): PagedAsyncIterableIterator<ModelSnapshot> {
    const iter = this.listMultivariateModelPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMultivariateModelPagingPage(options);
      }
    };
  }

  private async *listMultivariateModelPagingPage(
    options?: ListMultivariateModelOptionalParams
  ): AsyncIterableIterator<ModelSnapshot[]> {
    let result = await this._listMultivariateModel(options);
    yield result.models || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listMultivariateModelNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.models || [];
    }
  }

  private async *listMultivariateModelPagingAll(
    options?: ListMultivariateModelOptionalParams
  ): AsyncIterableIterator<ModelSnapshot> {
    for await (const page of this.listMultivariateModelPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List root cause analysis data sets
   * @param options The options parameters.
   */
  public listRootCauseAnalysisDataSets(
    options?: ListRootCauseAnalysisDataSetsOptionalParams
  ): PagedAsyncIterableIterator<RootCauseAnalysisDataSetUnion> {
    const iter = this.listRootCauseAnalysisDataSetsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRootCauseAnalysisDataSetsPagingPage(options);
      }
    };
  }

  private async *listRootCauseAnalysisDataSetsPagingPage(
    options?: ListRootCauseAnalysisDataSetsOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataSetUnion[]> {
    let result = await this._listRootCauseAnalysisDataSets(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRootCauseAnalysisDataSetsNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRootCauseAnalysisDataSetsPagingAll(
    options?: ListRootCauseAnalysisDataSetsOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataSetUnion> {
    for await (const page of this.listRootCauseAnalysisDataSetsPagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * List data meta for a given timestamp
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param timestamp The time stamp to be queried, should be a string of ISO format
   * @param options The options parameters.
   */
  public listRootCauseAnalysisDataMetaByTimestamp(
    dataSetId: string,
    timestamp: Date,
    options?: ListRootCauseAnalysisDataMetaByTimestampOptionalParams
  ): PagedAsyncIterableIterator<RootCauseAnalysisDataMeta> {
    const iter = this.listRootCauseAnalysisDataMetaByTimestampPagingAll(
      dataSetId,
      timestamp,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRootCauseAnalysisDataMetaByTimestampPagingPage(
          dataSetId,
          timestamp,
          options
        );
      }
    };
  }

  private async *listRootCauseAnalysisDataMetaByTimestampPagingPage(
    dataSetId: string,
    timestamp: Date,
    options?: ListRootCauseAnalysisDataMetaByTimestampOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataMeta[]> {
    let result = await this._listRootCauseAnalysisDataMetaByTimestamp(
      dataSetId,
      timestamp,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRootCauseAnalysisDataMetaByTimestampNext(
        dataSetId,
        timestamp,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRootCauseAnalysisDataMetaByTimestampPagingAll(
    dataSetId: string,
    timestamp: Date,
    options?: ListRootCauseAnalysisDataMetaByTimestampOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataMeta> {
    for await (const page of this.listRootCauseAnalysisDataMetaByTimestampPagingPage(
      dataSetId,
      timestamp,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List data meta
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param options The options parameters.
   */
  public listRootCauseAnalysisDataMetaByTimeRange(
    dataSetId: string,
    options?: ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams
  ): PagedAsyncIterableIterator<RootCauseAnalysisDataMeta> {
    const iter = this.listRootCauseAnalysisDataMetaByTimeRangePagingAll(
      dataSetId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRootCauseAnalysisDataMetaByTimeRangePagingPage(
          dataSetId,
          options
        );
      }
    };
  }

  private async *listRootCauseAnalysisDataMetaByTimeRangePagingPage(
    dataSetId: string,
    options?: ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataMeta[]> {
    let result = await this._listRootCauseAnalysisDataMetaByTimeRange(
      dataSetId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRootCauseAnalysisDataMetaByTimeRangeNext(
        dataSetId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRootCauseAnalysisDataMetaByTimeRangePagingAll(
    dataSetId: string,
    options?: ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisDataMeta> {
    for await (const page of this.listRootCauseAnalysisDataMetaByTimeRangePagingPage(
      dataSetId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get instance list for root cause analysis
   * @param options The options parameters.
   */
  public listRootCauseAnalysisInstances(
    options?: ListRootCauseAnalysisInstancesOptionalParams
  ): PagedAsyncIterableIterator<RootCauseAnalysisInstanceUnion> {
    const iter = this.listRootCauseAnalysisInstancesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRootCauseAnalysisInstancesPagingPage(options);
      }
    };
  }

  private async *listRootCauseAnalysisInstancesPagingPage(
    options?: ListRootCauseAnalysisInstancesOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisInstanceUnion[]> {
    let result = await this._listRootCauseAnalysisInstances(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRootCauseAnalysisInstancesNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRootCauseAnalysisInstancesPagingAll(
    options?: ListRootCauseAnalysisInstancesOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisInstanceUnion> {
    for await (const page of this.listRootCauseAnalysisInstancesPagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * Query training task state list for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  public listRootCauseAnalysisTrainingStates(
    instanceId: string,
    options?: ListRootCauseAnalysisTrainingStatesOptionalParams
  ): PagedAsyncIterableIterator<RootCauseAnalysisTrainingResponse> {
    const iter = this.listRootCauseAnalysisTrainingStatesPagingAll(
      instanceId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listRootCauseAnalysisTrainingStatesPagingPage(
          instanceId,
          options
        );
      }
    };
  }

  private async *listRootCauseAnalysisTrainingStatesPagingPage(
    instanceId: string,
    options?: ListRootCauseAnalysisTrainingStatesOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisTrainingResponse[]> {
    let result = await this._listRootCauseAnalysisTrainingStates(
      instanceId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listRootCauseAnalysisTrainingStatesNext(
        instanceId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listRootCauseAnalysisTrainingStatesPagingAll(
    instanceId: string,
    options?: ListRootCauseAnalysisTrainingStatesOptionalParams
  ): AsyncIterableIterator<RootCauseAnalysisTrainingResponse> {
    for await (const page of this.listRootCauseAnalysisTrainingStatesPagingPage(
      instanceId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation generates a model with an entire series, each point is detected with the same model.
   * With this method, points before and after a certain point are used to determine whether it is an
   * anomaly. The entire detection can give user an overall status of the time series.
   * @param body Time series points and period if needed. Advanced model parameters can also be set in
   *             the request.
   * @param options The options parameters.
   */
  detectEntireSeries(
    body: DetectRequest,
    options?: DetectEntireSeriesOptionalParams
  ): Promise<DetectEntireSeriesResponse> {
    return this.sendOperationRequest(
      { body, options },
      detectEntireSeriesOperationSpec
    );
  }

  /**
   * This operation generates a model using points before the latest one. With this method, only
   * historical points are used to determine whether the target point is an anomaly. The latest point
   * detecting operation matches the scenario of real-time monitoring of business metrics.
   * @param body Time series points and period if needed. Advanced model parameters can also be set in
   *             the request.
   * @param options The options parameters.
   */
  detectLastPoint(
    body: DetectRequest,
    options?: DetectLastPointOptionalParams
  ): Promise<DetectLastPointResponse> {
    return this.sendOperationRequest(
      { body, options },
      detectLastPointOperationSpec
    );
  }

  /**
   * Evaluate change point score of every series point
   * @param body Time series points and granularity is needed. Advanced model parameters can also be set
   *             in the request if needed.
   * @param options The options parameters.
   */
  detectChangePoint(
    body: ChangePointDetectRequest,
    options?: DetectChangePointOptionalParams
  ): Promise<DetectChangePointResponse> {
    return this.sendOperationRequest(
      { body, options },
      detectChangePointOperationSpec
    );
  }

  /**
   * Create and train a multivariate anomaly detection model. The request must include a source parameter
   * to indicate an externally accessible Azure storage Uri (preferably a Shared Access Signature Uri).
   * All time-series used in generate the model must be zipped into one single file. Each time-series
   * will be in a single CSV file in which the first column is timestamp and the second column is value.
   * @param body Training request
   * @param options The options parameters.
   */
  trainMultivariateModel(
    body: ModelInfo,
    options?: TrainMultivariateModelOptionalParams
  ): Promise<TrainMultivariateModelResponse> {
    return this.sendOperationRequest(
      { body, options },
      trainMultivariateModelOperationSpec
    );
  }

  /**
   * List models of a subscription
   * @param options The options parameters.
   */
  private _listMultivariateModel(
    options?: ListMultivariateModelOptionalParams
  ): Promise<ListMultivariateModelResponse> {
    return this.sendOperationRequest(
      { options },
      listMultivariateModelOperationSpec
    );
  }

  /**
   * Get detailed information of multivariate model, including the training status and variables used in
   * the model.
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  getMultivariateModel(
    modelId: string,
    options?: GetMultivariateModelOptionalParams
  ): Promise<GetMultivariateModelResponse> {
    return this.sendOperationRequest(
      { modelId, options },
      getMultivariateModelOperationSpec
    );
  }

  /**
   * Delete an existing multivariate model according to the modelId
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  deleteMultivariateModel(
    modelId: string,
    options?: DeleteMultivariateModelOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { modelId, options },
      deleteMultivariateModelOperationSpec
    );
  }

  /**
   * Submit detection multivariate anomaly task with the trained model of modelId, the input schema
   * should be the same with the training request. Thus request will be complete asynchronously and will
   * return a resultId for querying the detection result.The request should be a source link to indicate
   * an externally accessible Azure storage Uri (preferably a Shared Access Signature Uri). All
   * time-series used in generate the model must be zipped into one single file. Each time-series will be
   * as follows: the first column is timestamp and the second column is value.
   * @param modelId Model identifier.
   * @param body Detect anomaly request
   * @param options The options parameters.
   */
  detectAnomaly(
    modelId: string,
    body: DetectionRequest,
    options?: DetectAnomalyOptionalParams
  ): Promise<DetectAnomalyResponse> {
    return this.sendOperationRequest(
      { modelId, body, options },
      detectAnomalyOperationSpec
    );
  }

  /**
   * Get multivariate anomaly detection result based on resultId returned by the DetectAnomalyAsync api
   * @param resultId Result identifier.
   * @param options The options parameters.
   */
  getDetectionResult(
    resultId: string,
    options?: GetDetectionResultOptionalParams
  ): Promise<GetDetectionResultResponse> {
    return this.sendOperationRequest(
      { resultId, options },
      getDetectionResultOperationSpec
    );
  }

  /**
   * Export multivariate anomaly detection model based on modelId
   * @param modelId Model identifier.
   * @param options The options parameters.
   */
  exportModel(
    modelId: string,
    options?: ExportModelOptionalParams
  ): Promise<ExportModelResponse> {
    return this.sendOperationRequest(
      { modelId, options },
      exportModelOperationSpec
    );
  }

  /**
   * Synchronized API for anomaly detection.
   * @param modelId Model identifier.
   * @param body Request for last detection.
   * @param options The options parameters.
   */
  lastDetectAnomaly(
    modelId: string,
    body: LastDetectionRequest,
    options?: LastDetectAnomalyOptionalParams
  ): Promise<LastDetectAnomalyResponse> {
    return this.sendOperationRequest(
      { modelId, body, options },
      lastDetectAnomalyOperationSpec
    );
  }

  /**
   * Create a root cause analysis data set
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param body create a root cause analysis data set request
   * @param options The options parameters.
   */
  createRootCauseAnalysisDataSet(
    dataSetId: string,
    body: CreateRootCauseAnalysisDataSetUnion,
    options?: CreateRootCauseAnalysisDataSetOptionalParams
  ): Promise<CreateRootCauseAnalysisDataSetResponse> {
    return this.sendOperationRequest(
      { dataSetId, body, options },
      createRootCauseAnalysisDataSetOperationSpec
    );
  }

  /**
   * Get a root cause analysis data set by its id
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param options The options parameters.
   */
  getRootCauseAnalysisDataSet(
    dataSetId: string,
    options?: GetRootCauseAnalysisDataSetOptionalParams
  ): Promise<GetRootCauseAnalysisDataSetResponse> {
    return this.sendOperationRequest(
      { dataSetId, options },
      getRootCauseAnalysisDataSetOperationSpec
    );
  }

  /**
   * Delete a root cause analysis data set
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param options The options parameters.
   */
  deleteRootCauseAnalysisDataSet(
    dataSetId: string,
    options?: DeleteRootCauseAnalysisDataSetOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { dataSetId, options },
      deleteRootCauseAnalysisDataSetOperationSpec
    );
  }

  /**
   * List root cause analysis data sets
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataSets(
    options?: ListRootCauseAnalysisDataSetsOptionalParams
  ): Promise<ListRootCauseAnalysisDataSetsResponse> {
    return this.sendOperationRequest(
      { options },
      listRootCauseAnalysisDataSetsOperationSpec
    );
  }

  /**
   * Upload data to root cause analysis data set by partition
   * @param dataSetId The root cause analysis data set unique id. Should be a string of uuid
   * @param timestamp Timestamp of the data, should be a string of ISO format
   * @param partitionId The partition unique id，should be a string of uuid
   * @param body Data to be uploaded to perform root cause analysis
   * @param options The options parameters.
   */
  uploadRootCauseAnalysisDataByPartition(
    dataSetId: string,
    timestamp: Date,
    partitionId: string,
    body: RootCauseAnalysisUploadDataPartitionRequest,
    options?: UploadRootCauseAnalysisDataByPartitionOptionalParams
  ): Promise<UploadRootCauseAnalysisDataByPartitionResponse> {
    return this.sendOperationRequest(
      { dataSetId, timestamp, partitionId, body, options },
      uploadRootCauseAnalysisDataByPartitionOperationSpec
    );
  }

  /**
   * Delete root cause analysis data by partition Id
   * @param dataSetId Data set unique id，should be a string of uuid
   * @param timestamp The time stamp to be queried, should be a string of ISO format
   * @param partitionId Data partition unique id，should be a string of uuid
   * @param options The options parameters.
   */
  deleteRootCauseAnalysisDataByPartitionId(
    dataSetId: string,
    timestamp: Date,
    partitionId: string,
    options?: DeleteRootCauseAnalysisDataByPartitionIdOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { dataSetId, timestamp, partitionId, options },
      deleteRootCauseAnalysisDataByPartitionIdOperationSpec
    );
  }

  /**
   * Upload data to root cause analysis data set by block
   * @param dataSetId The root cause analysis data set unique id，should be a string of uuid
   * @param body Data to be uploaded to perform root cause analysis
   * @param options The options parameters.
   */
  uploadRootCauseAnalysisDataByBlock(
    dataSetId: string,
    body: RootCauseAnalysisUploadDataBlockRequest,
    options?: UploadRootCauseAnalysisDataByBlockOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { dataSetId, body, options },
      uploadRootCauseAnalysisDataByBlockOperationSpec
    );
  }

  /**
   * Delete root cause analysis data by time range
   * @param dataSetId The root cause analysis data set unique id，should be a string of uuid
   * @param options The options parameters.
   */
  deleteRootCauseAnalysisDataByTimeRange(
    dataSetId: string,
    options?: DeleteRootCauseAnalysisDataByTimeRangeOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { dataSetId, options },
      deleteRootCauseAnalysisDataByTimeRangeOperationSpec
    );
  }

  /**
   * List data meta for a given timestamp
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param timestamp The time stamp to be queried, should be a string of ISO format
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataMetaByTimestamp(
    dataSetId: string,
    timestamp: Date,
    options?: ListRootCauseAnalysisDataMetaByTimestampOptionalParams
  ): Promise<ListRootCauseAnalysisDataMetaByTimestampResponse> {
    return this.sendOperationRequest(
      { dataSetId, timestamp, options },
      listRootCauseAnalysisDataMetaByTimestampOperationSpec
    );
  }

  /**
   * List data meta
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataMetaByTimeRange(
    dataSetId: string,
    options?: ListRootCauseAnalysisDataMetaByTimeRangeOptionalParams
  ): Promise<ListRootCauseAnalysisDataMetaByTimeRangeResponse> {
    return this.sendOperationRequest(
      { dataSetId, options },
      listRootCauseAnalysisDataMetaByTimeRangeOperationSpec
    );
  }

  /**
   * Create an instance for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param body Create a root cause analysis instance request
   * @param options The options parameters.
   */
  createRootCauseAnalysisInstance(
    instanceId: string,
    body: CreateRootCauseAnalysisInstanceUnion,
    options?: CreateRootCauseAnalysisInstanceOptionalParams
  ): Promise<CreateRootCauseAnalysisInstanceResponse> {
    return this.sendOperationRequest(
      { instanceId, body, options },
      createRootCauseAnalysisInstanceOperationSpec
    );
  }

  /**
   * Query an instance information for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  getRootCauseAnalysisInstance(
    instanceId: string,
    options?: GetRootCauseAnalysisInstanceOptionalParams
  ): Promise<GetRootCauseAnalysisInstanceResponse> {
    return this.sendOperationRequest(
      { instanceId, options },
      getRootCauseAnalysisInstanceOperationSpec
    );
  }

  /**
   * Delete an instance for root cause analysis
   * @param instanceId Instance unique id
   * @param options The options parameters.
   */
  deleteRootCauseAnalysisInstance(
    instanceId: string,
    options?: DeleteRootCauseAnalysisInstanceOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { instanceId, options },
      deleteRootCauseAnalysisInstanceOperationSpec
    );
  }

  /**
   * Get instance list for root cause analysis
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisInstances(
    options?: ListRootCauseAnalysisInstancesOptionalParams
  ): Promise<ListRootCauseAnalysisInstancesResponse> {
    return this.sendOperationRequest(
      { options },
      listRootCauseAnalysisInstancesOperationSpec
    );
  }

  /**
   * Get kind list for root cause analysis
   * @param options The options parameters.
   */
  listRootCauseAnalysisKinds(
    options?: ListRootCauseAnalysisKindsOptionalParams
  ): Promise<ListRootCauseAnalysisKindsResponse> {
    return this.sendOperationRequest(
      { options },
      listRootCauseAnalysisKindsOperationSpec
    );
  }

  /**
   * Create a training model for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid
   * @param modelId Model unique id, should be a string of uuid
   * @param body
   * @param options The options parameters.
   */
  createRootCauseAnalysisTrainingTask(
    instanceId: string,
    modelId: string,
    body: RootCauseAnalysisTrainingRequest,
    options?: CreateRootCauseAnalysisTrainingTaskOptionalParams
  ): Promise<CreateRootCauseAnalysisTrainingTaskResponse> {
    return this.sendOperationRequest(
      { instanceId, modelId, body, options },
      createRootCauseAnalysisTrainingTaskOperationSpec
    );
  }

  /**
   * Delete a model for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param modelId Model unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  deleteRootCauseAnalysisModel(
    instanceId: string,
    modelId: string,
    options?: DeleteRootCauseAnalysisModelOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { instanceId, modelId, options },
      deleteRootCauseAnalysisModelOperationSpec
    );
  }

  /**
   * Query a training task state for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param modelId Model unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  getRootCauseAnalysisTrainingState(
    instanceId: string,
    modelId: string,
    options?: GetRootCauseAnalysisTrainingStateOptionalParams
  ): Promise<GetRootCauseAnalysisTrainingStateResponse> {
    return this.sendOperationRequest(
      { instanceId, modelId, options },
      getRootCauseAnalysisTrainingStateOperationSpec
    );
  }

  /**
   * Query training task state list for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisTrainingStates(
    instanceId: string,
    options?: ListRootCauseAnalysisTrainingStatesOptionalParams
  ): Promise<ListRootCauseAnalysisTrainingStatesResponse> {
    return this.sendOperationRequest(
      { instanceId, options },
      listRootCauseAnalysisTrainingStatesOperationSpec
    );
  }

  /**
   * Create an inference task for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param modelId Model unique id, should be a string of uuid.
   * @param inferenceId Inference unique id, should be a string of uuid.
   * @param body Inference request of root cause analysis
   * @param options The options parameters.
   */
  createRootCauseAnalysisInferenceTask(
    instanceId: string,
    modelId: string,
    inferenceId: string,
    body: RootCauseAnalysisInferenceRequest,
    options?: CreateRootCauseAnalysisInferenceTaskOptionalParams
  ): Promise<CreateRootCauseAnalysisInferenceTaskResponse> {
    return this.sendOperationRequest(
      { instanceId, modelId, inferenceId, body, options },
      createRootCauseAnalysisInferenceTaskOperationSpec
    );
  }

  /**
   * Query an inference task state for root cause analysis
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param modelId Model unique id, should be a string of uuid.
   * @param inferenceId Inference unique id, should be a string of uuid.
   * @param options The options parameters.
   */
  getRootCauseAnalysisInferenceState(
    instanceId: string,
    modelId: string,
    inferenceId: string,
    options?: GetRootCauseAnalysisInferenceStateOptionalParams
  ): Promise<GetRootCauseAnalysisInferenceStateResponse> {
    return this.sendOperationRequest(
      { instanceId, modelId, inferenceId, options },
      getRootCauseAnalysisInferenceStateOperationSpec
    );
  }

  /**
   * ListMultivariateModelNext
   * @param nextLink The nextLink from the previous successful call to the ListMultivariateModel method.
   * @param options The options parameters.
   */
  private _listMultivariateModelNext(
    nextLink: string,
    options?: ListMultivariateModelNextOptionalParams
  ): Promise<ListMultivariateModelNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listMultivariateModelNextOperationSpec
    );
  }

  /**
   * ListRootCauseAnalysisDataSetsNext
   * @param nextLink The nextLink from the previous successful call to the ListRootCauseAnalysisDataSets
   *                 method.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataSetsNext(
    nextLink: string,
    options?: ListRootCauseAnalysisDataSetsNextOptionalParams
  ): Promise<ListRootCauseAnalysisDataSetsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listRootCauseAnalysisDataSetsNextOperationSpec
    );
  }

  /**
   * ListRootCauseAnalysisDataMetaByTimestampNext
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param timestamp The time stamp to be queried, should be a string of ISO format
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListRootCauseAnalysisDataMetaByTimestamp method.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataMetaByTimestampNext(
    dataSetId: string,
    timestamp: Date,
    nextLink: string,
    options?: ListRootCauseAnalysisDataMetaByTimestampNextOptionalParams
  ): Promise<ListRootCauseAnalysisDataMetaByTimestampNextResponse> {
    return this.sendOperationRequest(
      { dataSetId, timestamp, nextLink, options },
      listRootCauseAnalysisDataMetaByTimestampNextOperationSpec
    );
  }

  /**
   * ListRootCauseAnalysisDataMetaByTimeRangeNext
   * @param dataSetId The root cause analysis data set unique id, should be a string of uuid
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListRootCauseAnalysisDataMetaByTimeRange method.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisDataMetaByTimeRangeNext(
    dataSetId: string,
    nextLink: string,
    options?: ListRootCauseAnalysisDataMetaByTimeRangeNextOptionalParams
  ): Promise<ListRootCauseAnalysisDataMetaByTimeRangeNextResponse> {
    return this.sendOperationRequest(
      { dataSetId, nextLink, options },
      listRootCauseAnalysisDataMetaByTimeRangeNextOperationSpec
    );
  }

  /**
   * ListRootCauseAnalysisInstancesNext
   * @param nextLink The nextLink from the previous successful call to the ListRootCauseAnalysisInstances
   *                 method.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisInstancesNext(
    nextLink: string,
    options?: ListRootCauseAnalysisInstancesNextOptionalParams
  ): Promise<ListRootCauseAnalysisInstancesNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      listRootCauseAnalysisInstancesNextOperationSpec
    );
  }

  /**
   * ListRootCauseAnalysisTrainingStatesNext
   * @param instanceId Instance unique id, should be a string of uuid.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListRootCauseAnalysisTrainingStates method.
   * @param options The options parameters.
   */
  private _listRootCauseAnalysisTrainingStatesNext(
    instanceId: string,
    nextLink: string,
    options?: ListRootCauseAnalysisTrainingStatesNextOptionalParams
  ): Promise<ListRootCauseAnalysisTrainingStatesNextResponse> {
    return this.sendOperationRequest(
      { instanceId, nextLink, options },
      listRootCauseAnalysisTrainingStatesNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const detectEntireSeriesOperationSpec: coreClient.OperationSpec = {
  path: "/timeseries/entire/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntireDetectResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper:
        Mappers.AnomalyDetectorClientDetectEntireSeriesExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const detectLastPointOperationSpec: coreClient.OperationSpec = {
  path: "/timeseries/last/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LastDetectResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper:
        Mappers.AnomalyDetectorClientDetectLastPointExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const detectChangePointOperationSpec: coreClient.OperationSpec = {
  path: "/timeseries/changepoint/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ChangePointDetectResponse
    },
    default: {
      bodyMapper: Mappers.AnomalyDetectorError,
      headersMapper:
        Mappers.AnomalyDetectorClientDetectChangePointExceptionHeaders
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const trainMultivariateModelOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.AnomalyDetectorClientTrainMultivariateModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientTrainMultivariateModelExceptionHeaders
    }
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listMultivariateModelOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientListMultivariateModelExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.accept],
  serializer
};
const getMultivariateModelOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models/{modelId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Model
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientGetMultivariateModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteMultivariateModelOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models/{modelId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteMultivariateModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const detectAnomalyOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models/{modelId}/detect",
  httpMethod: "POST",
  responses: {
    201: {
      headersMapper: Mappers.AnomalyDetectorClientDetectAnomalyHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorClientDetectAnomalyExceptionHeaders
    }
  },
  requestBody: Parameters.body3,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getDetectionResultOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/results/{resultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DetectionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientGetDetectionResultExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.resultId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const exportModelOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models/{modelId}/export",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" }, serializedName: "parsedResponse" }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.AnomalyDetectorClientExportModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const lastDetectAnomalyOperationSpec: coreClient.OperationSpec = {
  path: "/multivariate/models/{modelId}/last/detect",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LastDetectionResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientLastDetectAnomalyExceptionHeaders
    }
  },
  requestBody: Parameters.body4,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const createRootCauseAnalysisDataSetOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisDataSetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisDataSetExceptionHeaders
    }
  },
  requestBody: Parameters.body5,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getRootCauseAnalysisDataSetOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataSet
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientGetRootCauseAnalysisDataSetExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteRootCauseAnalysisDataSetOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteRootCauseAnalysisDataSetExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataSetsOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataSetList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataSetsExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.accept],
  serializer
};
const uploadRootCauseAnalysisDataByPartitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps/{timestamp}/partitions/{partitionId}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper:
        Mappers.AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionExceptionHeaders
    }
  },
  requestBody: Parameters.body6,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId,
    Parameters.timestamp,
    Parameters.partitionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteRootCauseAnalysisDataByPartitionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps/{timestamp}/partitions/{partitionId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteRootCauseAnalysisDataByPartitionIdExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId,
    Parameters.timestamp,
    Parameters.partitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const uploadRootCauseAnalysisDataByBlockOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps:upload",
  httpMethod: "POST",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientUploadRootCauseAnalysisDataByBlockExceptionHeaders
    }
  },
  requestBody: Parameters.body7,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteRootCauseAnalysisDataByTimeRangeOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps:purge",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteRootCauseAnalysisDataByTimeRangeExceptionHeaders
    }
  },
  queryParameters: [Parameters.start, Parameters.end],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataMetaByTimestampOperationSpec: coreClient.OperationSpec = {
  path:
    "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps/{timestamp}/partitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataMetaListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip1, Parameters.maxpagesize],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId,
    Parameters.timestamp
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataMetaByTimeRangeOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/dataSets/{dataSetId}/timestamps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataMetaListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createRootCauseAnalysisInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisInstanceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisInstanceExceptionHeaders
    }
  },
  requestBody: Parameters.body8,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getRootCauseAnalysisInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisInstance
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientGetRootCauseAnalysisInstanceExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteRootCauseAnalysisInstanceOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteRootCauseAnalysisInstanceExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisInstancesOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisInstanceResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisInstancesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisKindsOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/kinds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisKindList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisKindsExceptionHeaders
    }
  },
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.accept],
  serializer
};
const createRootCauseAnalysisTrainingTaskOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}/models/{modelId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RootCauseAnalysisTrainingResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskExceptionHeaders
    }
  },
  requestBody: Parameters.body9,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteRootCauseAnalysisModelOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}/models/{modelId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientDeleteRootCauseAnalysisModelExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getRootCauseAnalysisTrainingStateOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}/models/{modelId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisTrainingResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientGetRootCauseAnalysisTrainingStateExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisTrainingStatesOperationSpec: coreClient.OperationSpec = {
  path: "/rootCauseAnalysis/instances/{instanceId}/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisTrainingResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisTrainingStatesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createRootCauseAnalysisInferenceTaskOperationSpec: coreClient.OperationSpec = {
  path:
    "/rootCauseAnalysis/instances/{instanceId}/models/{modelId}/inferences/{inferenceId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RootCauseAnalysisInferenceResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskExceptionHeaders
    }
  },
  requestBody: Parameters.body10,
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId,
    Parameters.instanceId,
    Parameters.inferenceId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getRootCauseAnalysisInferenceStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/rootCauseAnalysis/instances/{instanceId}/models/{modelId}/inferences/{inferenceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisInferenceResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientGetRootCauseAnalysisInferenceStateExceptionHeaders
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.modelId,
    Parameters.instanceId,
    Parameters.inferenceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMultivariateModelNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper:
        Mappers.AnomalyDetectorClientListMultivariateModelNextExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip, Parameters.top],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataSetsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataSetList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataSetsNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataMetaByTimestampNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataMetaListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampNextExceptionHeaders
    }
  },
  queryParameters: [Parameters.skip1, Parameters.maxpagesize],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId,
    Parameters.timestamp,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisDataMetaByTimeRangeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisDataMetaListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.dataSetId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisInstancesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisInstanceResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisInstancesNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRootCauseAnalysisTrainingStatesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootCauseAnalysisTrainingResponseList
    },
    default: {
      bodyMapper: Mappers.ErrorDetail,
      headersMapper:
        Mappers.AnomalyDetectorClientListRootCauseAnalysisTrainingStatesNextExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.skip1,
    Parameters.maxpagesize,
    Parameters.filter
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
