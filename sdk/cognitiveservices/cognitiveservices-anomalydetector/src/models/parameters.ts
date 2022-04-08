import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  DetectRequest as DetectRequestMapper,
  ChangePointDetectRequest as ChangePointDetectRequestMapper,
  ModelInfo as ModelInfoMapper,
  DetectionRequest as DetectionRequestMapper,
  LastDetectionRequest as LastDetectionRequestMapper,
  CreateRootCauseAnalysisDataSet as CreateRootCauseAnalysisDataSetMapper,
  RootCauseAnalysisUploadDataPartitionRequest as RootCauseAnalysisUploadDataPartitionRequestMapper,
  RootCauseAnalysisUploadDataBlockRequest as RootCauseAnalysisUploadDataBlockRequestMapper,
  CreateRootCauseAnalysisInstance as CreateRootCauseAnalysisInstanceMapper,
  RootCauseAnalysisTrainingRequest as RootCauseAnalysisTrainingRequestMapper,
  RootCauseAnalysisInferenceRequest as RootCauseAnalysisInferenceRequestMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: DetectRequestMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "Endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationURLParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "v1.1-preview.2",
    isConstant: true,
    serializedName: "ApiVersion",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: ChangePointDetectRequestMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: ModelInfoMapper
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    defaultValue: 0,
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    defaultValue: 5,
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const modelId: OperationURLParameter = {
  parameterPath: "modelId",
  mapper: {
    serializedName: "modelId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: DetectionRequestMapper
};

export const resultId: OperationURLParameter = {
  parameterPath: "resultId",
  mapper: {
    serializedName: "resultId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/zip, application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: LastDetectionRequestMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: CreateRootCauseAnalysisDataSetMapper
};

export const dataSetId: OperationURLParameter = {
  parameterPath: "dataSetId",
  mapper: {
    serializedName: "dataSetId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const skip1: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "skip",
    type: {
      name: "Number"
    }
  }
};

export const maxpagesize: OperationQueryParameter = {
  parameterPath: ["options", "maxpagesize"],
  mapper: {
    serializedName: "maxpagesize",
    type: {
      name: "Number"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "filter",
    type: {
      name: "String"
    }
  }
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: RootCauseAnalysisUploadDataPartitionRequestMapper
};

export const timestamp: OperationURLParameter = {
  parameterPath: "timestamp",
  mapper: {
    serializedName: "timestamp",
    required: true,
    type: {
      name: "DateTime"
    }
  }
};

export const partitionId: OperationURLParameter = {
  parameterPath: "partitionId",
  mapper: {
    serializedName: "partitionId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: RootCauseAnalysisUploadDataBlockRequestMapper
};

export const start: OperationQueryParameter = {
  parameterPath: ["options", "start"],
  mapper: {
    serializedName: "start",
    type: {
      name: "String"
    }
  }
};

export const end: OperationQueryParameter = {
  parameterPath: ["options", "end"],
  mapper: {
    serializedName: "end",
    type: {
      name: "String"
    }
  }
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: CreateRootCauseAnalysisInstanceMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: RootCauseAnalysisTrainingRequestMapper
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: RootCauseAnalysisInferenceRequestMapper
};

export const inferenceId: OperationURLParameter = {
  parameterPath: "inferenceId",
  mapper: {
    serializedName: "inferenceId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
