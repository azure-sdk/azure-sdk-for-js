# Release History
    
## 2.0.0-beta.1 (2025-02-26)
Compared with version 1.0.0
    
### Features Added

  - Added operation group DiscountOperations
  - Added operation group Discounts
  - Added operation SavingsPlan.beginUpdate
  - Added operation SavingsPlan.beginUpdateAndWait
  - Added Interface AppliedDiscount
  - Added Interface CatalogClaimsItem
  - Added Interface ConditionsItem
  - Added Interface CustomPriceProperties
  - Added Interface Discount
  - Added Interface DiscountGetOptionalParams
  - Added Interface DiscountList
  - Added Interface DiscountPatchRequest
  - Added Interface DiscountProperties
  - Added Interface DiscountsCancelHeaders
  - Added Interface DiscountsCancelOptionalParams
  - Added Interface DiscountsCreateHeaders
  - Added Interface DiscountsCreateOptionalParams
  - Added Interface DiscountsDeleteHeaders
  - Added Interface DiscountsDeleteOptionalParams
  - Added Interface DiscountsResourceGroupListNextOptionalParams
  - Added Interface DiscountsResourceGroupListOptionalParams
  - Added Interface DiscountsScopeListNextOptionalParams
  - Added Interface DiscountsScopeListOptionalParams
  - Added Interface DiscountsSubscriptionListNextOptionalParams
  - Added Interface DiscountsSubscriptionListOptionalParams
  - Added Interface DiscountTypeCustomPrice
  - Added Interface DiscountTypeCustomPriceMultiCurrency
  - Added Interface DiscountTypeProduct
  - Added Interface DiscountTypeProductFamily
  - Added Interface DiscountTypeProductSku
  - Added Interface DiscountTypeProperties
  - Added Interface DiscountUpdateHeaders
  - Added Interface DiscountUpdateOptionalParams
  - Added Interface EntityTypeAffiliateDiscount
  - Added Interface EntityTypePrimaryDiscount
  - Added Interface ManagedServiceIdentity
  - Added Interface MarketSetPricesItems
  - Added Interface Plan
  - Added Interface PriceGuaranteeProperties
  - Added Interface ProxyResource
  - Added Interface ResourceModelWithAllowedPropertySet
  - Added Interface ResourceSku
  - Added Interface TrackedResource
  - Added Interface UserAssignedIdentity
  - Added Type Alias ApplyDiscountOn
  - Added Type Alias DiscountAppliedScopeType
  - Added Type Alias DiscountCombinationRule
  - Added Type Alias DiscountEntityType
  - Added Type Alias DiscountGetResponse
  - Added Type Alias DiscountPropertiesUnion
  - Added Type Alias DiscountProvisioningState
  - Added Type Alias DiscountProvisioningSubState
  - Added Type Alias DiscountRuleType
  - Added Type Alias DiscountsCancelResponse
  - Added Type Alias DiscountsCreateResponse
  - Added Type Alias DiscountsDeleteResponse
  - Added Type Alias DiscountsResourceGroupListNextResponse
  - Added Type Alias DiscountsResourceGroupListResponse
  - Added Type Alias DiscountsScopeListNextResponse
  - Added Type Alias DiscountsScopeListResponse
  - Added Type Alias DiscountsSubscriptionListNextResponse
  - Added Type Alias DiscountsSubscriptionListResponse
  - Added Type Alias DiscountStatus
  - Added Type Alias DiscountType
  - Added Type Alias DiscountTypeCustomPriceUnion
  - Added Type Alias DiscountTypePropertiesUnion
  - Added Type Alias DiscountUpdateResponse
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias PricingPolicy
  - Added Type Alias SkuTier
  - Interface SavingsPlanOrderAliasModel has a new optional parameter renew
  - Interface SavingsPlanUpdateOptionalParams has a new optional parameter resumeFrom
  - Interface SavingsPlanUpdateOptionalParams has a new optional parameter updateIntervalInMs
  - Interface Sku has a new optional parameter capacity
  - Interface Sku has a new optional parameter family
  - Interface Sku has a new optional parameter size
  - Interface Sku has a new optional parameter tier
  - Added Enum KnownApplyDiscountOn
  - Added Enum KnownDiscountAppliedScopeType
  - Added Enum KnownDiscountCombinationRule
  - Added Enum KnownDiscountEntityType
  - Added Enum KnownDiscountProvisioningState
  - Added Enum KnownDiscountProvisioningSubState
  - Added Enum KnownDiscountRuleType
  - Added Enum KnownDiscountStatus
  - Added Enum KnownDiscountType
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownPricingPolicy
  - Enum KnownCommitmentGrain has a new value FullTerm
  - Enum KnownCommitmentGrain has a new value Unknown

### Breaking Changes

  - Removed operation SavingsPlan.update
  - Parameter name of interface Sku is now required
  - Type of parameter sku of interface PurchaseRequest is changed from Sku to ResourceSku
  - Type of parameter sku of interface ReservationOrderAliasRequest is changed from Sku to ResourceSku
  - Type of parameter sku of interface ReservationOrderAliasResponse is changed from Sku to ResourceSku
  - Type of parameter sku of interface SavingsPlanModel is changed from Sku to ResourceSku
  - Type of parameter sku of interface SavingsPlanOrderAliasModel is changed from Sku to ResourceSku
  - Type of parameter sku of interface SavingsPlanOrderModel is changed from Sku to ResourceSku
    
    
## 1.0.0 (2022-12-12)

The package of @azure/arm-billingbenefits is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
