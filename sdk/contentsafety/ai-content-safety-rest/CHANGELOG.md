## 2.0.0 (2024-10-22)
    
### Features Added

  - Added operation group DetectTextProtectedMaterial
  - Added operation group ShieldPrompt
  - Added Interface ContentSafetyClientOptions
  - Added Interface DetectTextProtectedMaterial200Response
  - Added Interface DetectTextProtectedMaterialBodyParam
  - Added Interface DetectTextProtectedMaterialDefaultHeaders
  - Added Interface DetectTextProtectedMaterialDefaultResponse
  - Added Interface DetectTextProtectedMaterialOptions
  - Added Interface DetectTextProtectedMaterialResultOutput
  - Added Interface DocumentInjectionAnalysisResultOutput
  - Added Interface ImageData
  - Added Interface ShieldPrompt200Response
  - Added Interface ShieldPromptBodyParam
  - Added Interface ShieldPromptDefaultHeaders
  - Added Interface ShieldPromptDefaultResponse
  - Added Interface ShieldPromptOptions
  - Added Interface ShieldPromptResultOutput
  - Added Interface TextProtectedMaterialAnalysisResultOutput
  - Added Interface UserPromptInjectionAnalysisResultOutput
  - Added Type Alias AnalyzeImageOutputType
  - Added Type Alias AnalyzeTextOutputType
  - Added Type Alias DetectTextProtectedMaterialParameters
  - Added Type Alias ImageCategory
  - Added Type Alias ImageCategoryOutput
  - Added Type Alias ShieldPromptParameters
  - Added Type Alias TextCategory
  - Interface TextBlocklistItem has a new optional parameter isRegex
  - Interface TextBlocklistItemOutput has a new optional parameter isRegex

### Breaking Changes

  - Interface AnalyzeTextResultOutput no longer has parameter categoriesAnalysis
  - Interface TextBlocklistMatchOutput no longer has parameter blocklistItemText
  - Type of parameter categories of interface AnalyzeImageOptions is changed from string[] to ImageCategory[]
  - Type of parameter image of interface AnalyzeImageOptions is changed from ImageData_2 to ImageData
  - Type of parameter outputType of interface AnalyzeImageOptions is changed from string to AnalyzeImageOutputType
  - Type of parameter categories of interface AnalyzeTextOptions is changed from string[] to TextCategory[]
  - Type of parameter outputType of interface AnalyzeTextOptions is changed from string to AnalyzeTextOutputType
  - Type of parameter category of interface ImageCategoriesAnalysisOutput is changed from string to ImageCategoryOutput
    
