// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  UnivariateDetectionOptions,
  UnivariateChangePointDetectionOptions,
  MultivariateModelDetails,
  MultivariateBatchDetectionSettings,
  MultivariateLastDetectionSettings,
} from "./models";

export interface DetectUnivariateEntireSeriesBodyParam {
  /** Method of univariate anomaly detection. */
  body: UnivariateDetectionOptions;
}

export type DetectUnivariateEntireSeriesParameters =
  DetectUnivariateEntireSeriesBodyParam & RequestParameters;

export interface DetectUnivariateLastPointBodyParam {
  /** Method of univariate anomaly detection. */
  body: UnivariateDetectionOptions;
}

export type DetectUnivariateLastPointParameters =
  DetectUnivariateLastPointBodyParam & RequestParameters;

export interface DetectUnivariateChangePointBodyParam {
  /** Method of univariate anomaly detection. */
  body: UnivariateChangePointDetectionOptions;
}

export type DetectUnivariateChangePointParameters =
  DetectUnivariateChangePointBodyParam & RequestParameters;
export type GetMultivariateBatchDetectionResultParameters = RequestParameters;

export interface TrainMultivariateModelBodyParam {
  /** Model information. */
  body: MultivariateModelDetails;
}

export type TrainMultivariateModelParameters = TrainMultivariateModelBodyParam &
  RequestParameters;

export interface ListMultivariateModelsQueryParamProperties {
  /** The number of result items to skip. */
  skip?: number;
  /** The number of result items to return. */
  top?: number;
}

export interface ListMultivariateModelsQueryParam {
  queryParameters?: ListMultivariateModelsQueryParamProperties;
}

export type ListMultivariateModelsParameters =
  ListMultivariateModelsQueryParam & RequestParameters;
export type DeleteMultivariateModelParameters = RequestParameters;
export type GetMultivariateModelParameters = RequestParameters;

export interface DetectMultivariateBatchAnomalyBodyParam {
  /** Request of multivariate anomaly detection. */
  body: MultivariateBatchDetectionSettings;
}

export type DetectMultivariateBatchAnomalyParameters =
  DetectMultivariateBatchAnomalyBodyParam & RequestParameters;

export interface DetectMultivariateLastAnomalyBodyParam {
  /** Request of the last detection. */
  body: MultivariateLastDetectionSettings;
}

export type DetectMultivariateLastAnomalyParameters =
  DetectMultivariateLastAnomalyBodyParam & RequestParameters;
