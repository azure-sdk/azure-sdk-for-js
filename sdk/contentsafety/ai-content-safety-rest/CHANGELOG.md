# Release History
    
## 2.0.0 (2024-12-18)
    
### Features Added

  - Added operation in Routes for path: "/text:shieldPrompt"
  - Added operation in Routes for path: "/text:detectProtectedMaterial"
  - Added Interface ContentSafetyClientOptions
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
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
  - Removed Type Alias PagedTextBlocklistItemOutput
  - Removed Type Alias PagedTextBlocklistOutput
    
