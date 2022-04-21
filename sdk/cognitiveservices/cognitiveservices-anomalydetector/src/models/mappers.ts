import * as coreClient from "@azure/core-client";

export const DetectRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectRequest",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TimeSeriesPoint"
            }
          }
        }
      },
      granularity: {
        serializedName: "granularity",
        type: {
          name: "Enum",
          allowedValues: [
            "yearly",
            "monthly",
            "weekly",
            "daily",
            "hourly",
            "minutely",
            "secondly",
            "microsecond",
            "none"
          ]
        }
      },
      customInterval: {
        serializedName: "customInterval",
        type: {
          name: "Number"
        }
      },
      period: {
        serializedName: "period",
        type: {
          name: "Number"
        }
      },
      maxAnomalyRatio: {
        serializedName: "maxAnomalyRatio",
        type: {
          name: "Number"
        }
      },
      sensitivity: {
        serializedName: "sensitivity",
        type: {
          name: "Number"
        }
      },
      imputeMode: {
        serializedName: "imputeMode",
        type: {
          name: "String"
        }
      },
      imputeFixedValue: {
        serializedName: "imputeFixedValue",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TimeSeriesPoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TimeSeriesPoint",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EntireDetectResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EntireDetectResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "Number"
        }
      },
      expectedValues: {
        serializedName: "expectedValues",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      upperMargins: {
        serializedName: "upperMargins",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      lowerMargins: {
        serializedName: "lowerMargins",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Boolean"
            }
          }
        }
      },
      isNegativeAnomaly: {
        serializedName: "isNegativeAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Boolean"
            }
          }
        }
      },
      isPositiveAnomaly: {
        serializedName: "isPositiveAnomaly",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Boolean"
            }
          }
        }
      },
      severity: {
        serializedName: "severity",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const AnomalyDetectorError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LastDetectResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LastDetectResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "Number"
        }
      },
      suggestedWindow: {
        serializedName: "suggestedWindow",
        required: true,
        type: {
          name: "Number"
        }
      },
      expectedValue: {
        serializedName: "expectedValue",
        required: true,
        type: {
          name: "Number"
        }
      },
      upperMargin: {
        serializedName: "upperMargin",
        required: true,
        type: {
          name: "Number"
        }
      },
      lowerMargin: {
        serializedName: "lowerMargin",
        required: true,
        type: {
          name: "Number"
        }
      },
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      isNegativeAnomaly: {
        serializedName: "isNegativeAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      isPositiveAnomaly: {
        serializedName: "isPositiveAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      severity: {
        serializedName: "severity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ChangePointDetectRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChangePointDetectRequest",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TimeSeriesPoint"
            }
          }
        }
      },
      granularity: {
        serializedName: "granularity",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "yearly",
            "monthly",
            "weekly",
            "daily",
            "hourly",
            "minutely",
            "secondly",
            "microsecond",
            "none"
          ]
        }
      },
      customInterval: {
        serializedName: "customInterval",
        type: {
          name: "Number"
        }
      },
      period: {
        serializedName: "period",
        type: {
          name: "Number"
        }
      },
      stableTrendWindow: {
        serializedName: "stableTrendWindow",
        type: {
          name: "Number"
        }
      },
      threshold: {
        serializedName: "threshold",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ChangePointDetectResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ChangePointDetectResponse",
    modelProperties: {
      period: {
        serializedName: "period",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      isChangePoint: {
        serializedName: "isChangePoint",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Boolean"
            }
          }
        }
      },
      confidenceScores: {
        serializedName: "confidenceScores",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const ModelInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelInfo",
    modelProperties: {
      slidingWindow: {
        serializedName: "slidingWindow",
        type: {
          name: "Number"
        }
      },
      alignPolicy: {
        serializedName: "alignPolicy",
        type: {
          name: "Composite",
          className: "AlignPolicy"
        }
      },
      source: {
        serializedName: "source",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      displayName: {
        constraints: {
          MaxLength: 24
        },
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      errors: {
        serializedName: "errors",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      diagnosticsInfo: {
        serializedName: "diagnosticsInfo",
        type: {
          name: "Composite",
          className: "DiagnosticsInfo"
        }
      }
    }
  }
};

export const AlignPolicy: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AlignPolicy",
    modelProperties: {
      alignMode: {
        serializedName: "alignMode",
        type: {
          name: "Enum",
          allowedValues: ["Inner", "Outer"]
        }
      },
      fillNAMethod: {
        serializedName: "fillNAMethod",
        type: {
          name: "String"
        }
      },
      paddingValue: {
        serializedName: "paddingValue",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DiagnosticsInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiagnosticsInfo",
    modelProperties: {
      modelState: {
        serializedName: "modelState",
        type: {
          name: "Composite",
          className: "ModelState"
        }
      },
      variableStates: {
        serializedName: "variableStates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VariableState"
            }
          }
        }
      }
    }
  }
};

export const ModelState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelState",
    modelProperties: {
      epochIds: {
        serializedName: "epochIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      trainLosses: {
        serializedName: "trainLosses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      validationLosses: {
        serializedName: "validationLosses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      latenciesInSeconds: {
        serializedName: "latenciesInSeconds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const VariableState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VariableState",
    modelProperties: {
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      },
      filledNARatio: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "filledNARatio",
        type: {
          name: "Number"
        }
      },
      effectiveCount: {
        serializedName: "effectiveCount",
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ModelList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelList",
    modelProperties: {
      models: {
        serializedName: "models",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ModelSnapshot"
            }
          }
        }
      },
      currentCount: {
        serializedName: "currentCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      maxCount: {
        serializedName: "maxCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ModelSnapshot: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ModelSnapshot",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTime: {
        serializedName: "lastUpdatedTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      variablesCount: {
        serializedName: "variablesCount",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Model: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Model",
    modelProperties: {
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      createdTime: {
        serializedName: "createdTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedTime: {
        serializedName: "lastUpdatedTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      modelInfo: {
        serializedName: "modelInfo",
        type: {
          name: "Composite",
          className: "ModelInfo"
        }
      }
    }
  }
};

export const DetectionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionRequest",
    modelProperties: {
      source: {
        serializedName: "source",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const DetectionResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionResult",
    modelProperties: {
      resultId: {
        serializedName: "resultId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      summary: {
        serializedName: "summary",
        type: {
          name: "Composite",
          className: "DetectionResultSummary"
        }
      },
      results: {
        serializedName: "results",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AnomalyState"
            }
          }
        }
      }
    }
  }
};

export const DetectionResultSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetectionResultSummary",
    modelProperties: {
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["CREATED", "RUNNING", "READY", "FAILED"]
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      variableStates: {
        serializedName: "variableStates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VariableState"
            }
          }
        }
      },
      setupInfo: {
        serializedName: "setupInfo",
        type: {
          name: "Composite",
          className: "DetectionRequest"
        }
      }
    }
  }
};

export const AnomalyState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyState",
    modelProperties: {
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "AnomalyValue"
        }
      },
      errors: {
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      }
    }
  }
};

export const AnomalyValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyValue",
    modelProperties: {
      isAnomaly: {
        serializedName: "isAnomaly",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      severity: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 0
        },
        serializedName: "severity",
        required: true,
        type: {
          name: "Number"
        }
      },
      score: {
        constraints: {
          InclusiveMaximum: 2,
          InclusiveMinimum: 0
        },
        serializedName: "score",
        required: true,
        type: {
          name: "Number"
        }
      },
      interpretation: {
        serializedName: "interpretation",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AnomalyInterpretation"
            }
          }
        }
      }
    }
  }
};

export const AnomalyInterpretation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyInterpretation",
    modelProperties: {
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      },
      contributionScore: {
        serializedName: "contributionScore",
        type: {
          name: "Number"
        }
      },
      correlationChanges: {
        serializedName: "correlationChanges",
        type: {
          name: "Composite",
          className: "CorrelationChanges"
        }
      }
    }
  }
};

export const CorrelationChanges: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CorrelationChanges",
    modelProperties: {
      changedVariables: {
        serializedName: "changedVariables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      changedValues: {
        serializedName: "changedValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const LastDetectionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LastDetectionRequest",
    modelProperties: {
      variables: {
        serializedName: "variables",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VariableValues"
            }
          }
        }
      },
      detectingPoints: {
        serializedName: "detectingPoints",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VariableValues: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VariableValues",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      timestamps: {
        serializedName: "timestamps",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      values: {
        serializedName: "values",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const LastDetectionResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LastDetectionResult",
    modelProperties: {
      variableStates: {
        serializedName: "variableStates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VariableState"
            }
          }
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AnomalyState"
            }
          }
        }
      }
    }
  }
};

export const CreateRootCauseAnalysisDataSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRootCauseAnalysisDataSet",
    uberParent: "CreateRootCauseAnalysisDataSet",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisDataSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisDataSet",
    uberParent: "RootCauseAnalysisDataSet",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      dataSetId: {
        serializedName: "dataSetId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisDataSetList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisDataSetList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisDataSet"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisUploadDataPartitionRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisUploadDataPartitionRequest",
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Dictionary",
                  value: { type: { name: "any" } }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisUploadDataBlockRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisUploadDataBlockRequest",
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisDataPartition"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisDataPartition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisDataPartition",
    modelProperties: {
      partitionId: {
        serializedName: "partitionId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      data: {
        serializedName: "data",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Dictionary",
                  value: { type: { name: "any" } }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisDataMetaListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisDataMetaListResponse",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisDataMeta"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisDataMeta: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisDataMeta",
    modelProperties: {
      partitionId: {
        serializedName: "partitionId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      rowCount: {
        serializedName: "rowCount",
        required: true,
        type: {
          name: "Number"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedDateTime: {
        serializedName: "lastModifiedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CreateRootCauseAnalysisInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRootCauseAnalysisInstance",
    uberParent: "CreateRootCauseAnalysisInstance",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisInstance: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInstance",
    uberParent: "RootCauseAnalysisInstance",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      instanceId: {
        serializedName: "instanceId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisInstanceResponseList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInstanceResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisInstance"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisKindList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisKindList",
    modelProperties: {
      kinds: {
        serializedName: "kinds",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisTrainingRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisTrainingRequest",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      parameter: {
        serializedName: "parameter",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RootCauseAnalysisTrainingResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisTrainingResponse",
    modelProperties: {
      taskId: {
        serializedName: "taskId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      instanceId: {
        serializedName: "instanceId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedDateTime: {
        serializedName: "lastModifiedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      },
      taskInfo: {
        serializedName: "taskInfo",
        type: {
          name: "any"
        }
      },
      parameter: {
        serializedName: "parameter",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RootCauseAnalysisTrainingResponseList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisTrainingResponseList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisTrainingResponse"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisInferenceRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInferenceRequest",
    modelProperties: {
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      parameter: {
        serializedName: "parameter",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RootCauseAnalysisInferenceResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInferenceResponse",
    modelProperties: {
      inferenceId: {
        serializedName: "inferenceId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      instanceId: {
        serializedName: "instanceId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      modelId: {
        serializedName: "modelId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      kind: {
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        required: true,
        type: {
          name: "String"
        }
      },
      createdDateTime: {
        serializedName: "createdDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastModifiedDateTime: {
        serializedName: "lastModifiedDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      },
      result: {
        serializedName: "result",
        type: {
          name: "any"
        }
      },
      parameter: {
        serializedName: "parameter",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RootCauseAnalysisMeasure: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisMeasure",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MultiDimRCAMeasure: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MultiDimRCAMeasure",
    modelProperties: {
      dataSetId: {
        serializedName: "dataSetId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      measureName: {
        serializedName: "measureName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisTrainingParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisTrainingParameter",
    uberParent: "RootCauseAnalysisTrainingParameter",
    polymorphicDiscriminator: {
      serializedName: "$type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "$type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisTrainingTaskInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisTrainingTaskInfo",
    uberParent: "RootCauseAnalysisTrainingTaskInfo",
    polymorphicDiscriminator: {
      serializedName: "$type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "$type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootCauseAnalysisInferenceParameter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInferenceParameter",
    uberParent: "RootCauseAnalysisInferenceParameter",
    polymorphicDiscriminator: {
      serializedName: "$type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "$type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MultiDimRootCauseMeasure: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MultiDimRootCauseMeasure",
    modelProperties: {
      dataSetId: {
        serializedName: "dataSetId",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      trendType: {
        serializedName: "trendType",
        required: true,
        type: {
          name: "String"
        }
      },
      contributionScore: {
        serializedName: "contributionScore",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MultiDimRootCause: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MultiDimRootCause",
    modelProperties: {
      dimension: {
        serializedName: "dimension",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      score: {
        serializedName: "score",
        required: true,
        type: {
          name: "Number"
        }
      },
      measures: {
        serializedName: "measures",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiDimRootCauseMeasure"
            }
          }
        }
      }
    }
  }
};

export const RootCauseAnalysisInferenceResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RootCauseAnalysisInferenceResult",
    uberParent: "RootCauseAnalysisInferenceResult",
    polymorphicDiscriminator: {
      serializedName: "$type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "$type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateMultiDimRCADataSet: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "CreateMultiDimRCADataSet",
    uberParent: "CreateRootCauseAnalysisDataSet",
    polymorphicDiscriminator:
      CreateRootCauseAnalysisDataSet.type.polymorphicDiscriminator,
    modelProperties: {
      ...CreateRootCauseAnalysisDataSet.type.modelProperties,
      granularity: {
        serializedName: "granularity",
        required: true,
        type: {
          name: "String"
        }
      },
      customInterval: {
        serializedName: "customInterval",
        required: true,
        type: {
          name: "Number"
        }
      },
      dimensionKeys: {
        serializedName: "dimensionKeys",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      aggregatedIdentifier: {
        serializedName: "aggregatedIdentifier",
        required: true,
        type: {
          name: "String"
        }
      },
      measures: {
        serializedName: "measures",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisMeasure"
            }
          }
        }
      }
    }
  }
};

export const MultiDimRCADataSet: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiDimRCADataSet",
    uberParent: "RootCauseAnalysisDataSet",
    polymorphicDiscriminator:
      RootCauseAnalysisDataSet.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisDataSet.type.modelProperties,
      granularity: {
        serializedName: "granularity",
        required: true,
        type: {
          name: "String"
        }
      },
      customInterval: {
        serializedName: "customInterval",
        required: true,
        type: {
          name: "Number"
        }
      },
      dimensionKeys: {
        serializedName: "dimensionKeys",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      aggregatedIdentifier: {
        serializedName: "aggregatedIdentifier",
        required: true,
        type: {
          name: "String"
        }
      },
      measures: {
        serializedName: "measures",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RootCauseAnalysisMeasure"
            }
          }
        }
      }
    }
  }
};

export const CreateMultiRCADimInstance: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "CreateMultiRCADimInstance",
    uberParent: "CreateRootCauseAnalysisInstance",
    polymorphicDiscriminator:
      CreateRootCauseAnalysisInstance.type.polymorphicDiscriminator,
    modelProperties: {
      ...CreateRootCauseAnalysisInstance.type.modelProperties,
      targetMeasure: {
        serializedName: "targetMeasure",
        type: {
          name: "Composite",
          className: "MultiDimRCAMeasure"
        }
      },
      assistiveMeasures: {
        serializedName: "assistiveMeasures",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiDimRCAMeasure"
            }
          }
        }
      }
    }
  }
};

export const MultiRCADimInstance: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiRCADimInstance",
    uberParent: "RootCauseAnalysisInstance",
    polymorphicDiscriminator:
      RootCauseAnalysisInstance.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisInstance.type.modelProperties,
      targetMeasure: {
        serializedName: "targetMeasure",
        type: {
          name: "Composite",
          className: "MultiDimRCAMeasure"
        }
      },
      assistiveMeasures: {
        serializedName: "assistiveMeasures",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiDimRCAMeasure"
            }
          }
        }
      }
    }
  }
};

export const MultiDimRCATrainingParameter: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiDimRCATrainingParameter",
    uberParent: "RootCauseAnalysisTrainingParameter",
    polymorphicDiscriminator:
      RootCauseAnalysisTrainingParameter.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisTrainingParameter.type.modelProperties,
      startDateTime: {
        serializedName: "startDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endDateTime: {
        serializedName: "endDateTime",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const MultiDimRCATrainingTaskInfo: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiDimRCATrainingTaskInfo",
    uberParent: "RootCauseAnalysisTrainingTaskInfo",
    polymorphicDiscriminator:
      RootCauseAnalysisTrainingTaskInfo.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisTrainingTaskInfo.type.modelProperties,
      epoch: {
        serializedName: "epoch",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      trainLoss: {
        serializedName: "trainLoss",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      validationLoss: {
        serializedName: "validationLoss",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      latencyInSecond: {
        serializedName: "latencyInSecond",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      bestEpoch: {
        serializedName: "bestEpoch",
        required: true,
        type: {
          name: "Number"
        }
      },
      bestValidationLoss: {
        serializedName: "bestValidationLoss",
        required: true,
        type: {
          name: "Number"
        }
      },
      nodeSize: {
        serializedName: "nodeSize",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      edgeSize: {
        serializedName: "edgeSize",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const MultiDimRCAInferenceParameter: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiDimRCAInferenceParameter",
    uberParent: "RootCauseAnalysisInferenceParameter",
    polymorphicDiscriminator:
      RootCauseAnalysisInferenceParameter.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisInferenceParameter.type.modelProperties,
      timestamp: {
        serializedName: "timestamp",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      dimensionScope: {
        serializedName: "dimensionScope",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const MultiDimRCAInferenceResult: coreClient.CompositeMapper = {
  serializedName: "multidimensional",
  type: {
    name: "Composite",
    className: "MultiDimRCAInferenceResult",
    uberParent: "RootCauseAnalysisInferenceResult",
    polymorphicDiscriminator:
      RootCauseAnalysisInferenceResult.type.polymorphicDiscriminator,
    modelProperties: {
      ...RootCauseAnalysisInferenceResult.type.modelProperties,
      rootCauses: {
        serializedName: "rootCauses",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiDimRootCause"
            }
          }
        }
      }
    }
  }
};

export const AnomalyDetectorClientDetectEntireSeriesExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDetectEntireSeriesExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDetectLastPointExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDetectLastPointExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDetectChangePointExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDetectChangePointExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientTrainMultivariateModelHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientTrainMultivariateModelHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientTrainMultivariateModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientTrainMultivariateModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListMultivariateModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientListMultivariateModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetMultivariateModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientGetMultivariateModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteMultivariateModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDeleteMultivariateModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDetectAnomalyHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDetectAnomalyHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDetectAnomalyExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientDetectAnomalyExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetDetectionResultExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientGetDetectionResultExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientExportModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientExportModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientLastDetectAnomalyExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientLastDetectAnomalyExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisDataSetHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientCreateRootCauseAnalysisDataSetHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisDataSetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisDataSetExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetRootCauseAnalysisDataSetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientGetRootCauseAnalysisDataSetExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteRootCauseAnalysisDataSetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientDeleteRootCauseAnalysisDataSetExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataSetsExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataSetsExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientUploadRootCauseAnalysisDataByPartitionExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteRootCauseAnalysisDataByPartitionIdExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientDeleteRootCauseAnalysisDataByPartitionIdExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientUploadRootCauseAnalysisDataByBlockExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientUploadRootCauseAnalysisDataByBlockExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteRootCauseAnalysisDataByTimeRangeExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientDeleteRootCauseAnalysisDataByTimeRangeExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisInstanceHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientCreateRootCauseAnalysisInstanceHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisInstanceExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisInstanceExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetRootCauseAnalysisInstanceExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientGetRootCauseAnalysisInstanceExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteRootCauseAnalysisInstanceExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientDeleteRootCauseAnalysisInstanceExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisInstancesExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisInstancesExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisKindsExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisKindsExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisTrainingTaskExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientDeleteRootCauseAnalysisModelExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientDeleteRootCauseAnalysisModelExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetRootCauseAnalysisTrainingStateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientGetRootCauseAnalysisTrainingStateExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisTrainingStatesExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisTrainingStatesExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientCreateRootCauseAnalysisInferenceTaskExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientGetRootCauseAnalysisInferenceStateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientGetRootCauseAnalysisInferenceStateExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListMultivariateModelNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AnomalyDetectorClientListMultivariateModelNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataSetsNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataSetsNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimestampNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisDataMetaByTimeRangeNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisInstancesNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisInstancesNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AnomalyDetectorClientListRootCauseAnalysisTrainingStatesNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "AnomalyDetectorClientListRootCauseAnalysisTrainingStatesNextExceptionHeaders",
    modelProperties: {
      xMsErrorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  CreateRootCauseAnalysisDataSet: CreateRootCauseAnalysisDataSet,
  RootCauseAnalysisDataSet: RootCauseAnalysisDataSet,
  CreateRootCauseAnalysisInstance: CreateRootCauseAnalysisInstance,
  RootCauseAnalysisInstance: RootCauseAnalysisInstance,
  RootCauseAnalysisTrainingParameter: RootCauseAnalysisTrainingParameter,
  RootCauseAnalysisTrainingTaskInfo: RootCauseAnalysisTrainingTaskInfo,
  RootCauseAnalysisInferenceParameter: RootCauseAnalysisInferenceParameter,
  RootCauseAnalysisInferenceResult: RootCauseAnalysisInferenceResult,
  "CreateRootCauseAnalysisDataSet.multidimensional": CreateMultiDimRCADataSet,
  "RootCauseAnalysisDataSet.multidimensional": MultiDimRCADataSet,
  "CreateRootCauseAnalysisInstance.multidimensional": CreateMultiRCADimInstance,
  "RootCauseAnalysisInstance.multidimensional": MultiRCADimInstance,
  "RootCauseAnalysisTrainingParameter.multidimensional": MultiDimRCATrainingParameter,
  "RootCauseAnalysisTrainingTaskInfo.multidimensional": MultiDimRCATrainingTaskInfo,
  "RootCauseAnalysisInferenceParameter.multidimensional": MultiDimRCAInferenceParameter,
  "RootCauseAnalysisInferenceResult.multidimensional": MultiDimRCAInferenceResult
};
