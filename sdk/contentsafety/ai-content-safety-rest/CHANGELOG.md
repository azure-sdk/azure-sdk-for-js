# Release History
    
## 2.0.0 (2024-11-05)
    
### Features Added

  - Added operation group DetectTextProtectedMaterial
  - Added operation group ShieldPrompt
  - Added operation in Routes for path: "/text:shieldPrompt"
  - Added operation in Routes for path: "/text:detectProtectedMaterial"
  - Added Interface ContentSafetyClientOptions
  - Added Interface DetectTextProtectedMaterial200Response
  - Added Interface DetectTextProtectedMaterialResultOutput
  - Added Interface DocumentInjectionAnalysisResultOutput
  - Added Interface ShieldPrompt200Response
  - Added Interface ShieldPromptBodyParam
  - Added Interface ShieldPromptOptions
  - Added Interface ShieldPromptResultOutput
  - Added Interface TextProtectedMaterialAnalysisResultOutput
  - Added Interface UserPromptInjectionAnalysisResultOutput
  - Added Type Alias AnalyzeImageOutputType
  - Added Type Alias AnalyzeTextOutputType
  - Added Type Alias ImageCategory
  - Added Type Alias ImageCategoryOutput
  - Added Type Alias ShieldPromptParameters
  - Added Type Alias TextCategory
  - Added Type Alias TextCategoryOutput
  - Interface TextBlocklistItem has a new optional parameter isRegex
  - Interface TextBlocklistItemOutput has a new optional parameter isRegex
  - Added function overload "export function isUnexpected(response: ShieldPrompt200Response | ShieldPromptDefaultResponse): response is ShieldPromptDefaultResponse;"
  - Added function overload "export function isUnexpected(response: DetectTextProtectedMaterial200Response | DetectTextProtectedMaterialDefaultResponse): response is DetectTextProtectedMaterialDefaultResponse;"

### Breaking Changes

  - Interface AnalyzeTextOptions no longer has parameter text
  - Interface AnalyzeTextOptions has a new required parameter text2
  - Type of parameter categories of interface AnalyzeImageOptions is changed from string[] to ImageCategory[]
  - Type of parameter outputType of interface AnalyzeImageOptions is changed from string to AnalyzeImageOutputType
  - Type of parameter categories of interface AnalyzeTextOptions is changed from string[] to TextCategory[]
  - Type of parameter outputType of interface AnalyzeTextOptions is changed from string to AnalyzeTextOutputType
  - Type of parameter category of interface ImageCategoriesAnalysisOutput is changed from string to ImageCategoryOutput
  - Type of parameter category of interface TextCategoriesAnalysisOutput is changed from string to TextCategoryOutput
    
