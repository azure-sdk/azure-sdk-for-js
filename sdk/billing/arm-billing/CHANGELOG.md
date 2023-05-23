# Release History
    
## 5.0.0-beta.1 (2023-05-23)
    
**Features**

  - Added Interface BillingProfileInfo
  - Added Interface OperationsErrorDetails
  - Added Interface OperationsErrorResponse
  - Interface Agreement has a new optional parameter billingProfileInfo
  - Interface BillingProfileListResult has a new optional parameter totalCount

**Breaking Changes**

  - Interface AgreementsListByBillingAccountNextOptionalParams no longer has parameter expand
  - Interface BillingAccountsListNextOptionalParams no longer has parameter expand
  - Interface BillingPeriodsListNextOptionalParams no longer has parameter filter
  - Interface BillingPeriodsListNextOptionalParams no longer has parameter skiptoken
  - Interface BillingPeriodsListNextOptionalParams no longer has parameter top
  - Interface BillingProfilesListByBillingAccountNextOptionalParams no longer has parameter expand
  - Interface CustomersListByBillingAccountNextOptionalParams no longer has parameter filter
  - Interface CustomersListByBillingAccountNextOptionalParams no longer has parameter search
  - Interface CustomersListByBillingProfileNextOptionalParams no longer has parameter filter
  - Interface CustomersListByBillingProfileNextOptionalParams no longer has parameter search
  - Interface ProductsListByBillingAccountNextOptionalParams no longer has parameter filter
  - Interface ProductsListByBillingProfileNextOptionalParams no longer has parameter filter
  - Interface ProductsListByInvoiceSectionNextOptionalParams no longer has parameter filter
  - Interface ReservationsListByBillingAccountNextOptionalParams no longer has parameter filter
  - Interface ReservationsListByBillingAccountNextOptionalParams no longer has parameter orderby
  - Interface ReservationsListByBillingAccountNextOptionalParams no longer has parameter refreshSummary
  - Interface ReservationsListByBillingAccountNextOptionalParams no longer has parameter selectedState
  - Interface ReservationsListByBillingProfileNextOptionalParams no longer has parameter filter
  - Interface ReservationsListByBillingProfileNextOptionalParams no longer has parameter orderby
  - Interface ReservationsListByBillingProfileNextOptionalParams no longer has parameter refreshSummary
  - Interface ReservationsListByBillingProfileNextOptionalParams no longer has parameter selectedState
    
    
## 4.1.0 (2022-11-16)
    
**Features**

  - Added Interface Agreement
  - Added Interface AvailableBalance
  - Added Interface BillingAccount
  - Added Interface BillingPeriod
  - Added Interface BillingProfile
  - Added Interface BillingProperty
  - Added Interface BillingRoleAssignment
  - Added Interface BillingRoleDefinition
  - Added Interface BillingSubscription
  - Added Interface Customer
  - Added Interface CustomerPolicy
  - Added Interface Department
  - Added Interface EnrollmentAccount
  - Added Interface EnrollmentAccountSummary
  - Added Interface Instruction
  - Added Interface Invoice
  - Added Interface InvoiceSection
  - Added Interface Policy
  - Added Interface Product
  - Added Interface Transaction
    
## 4.0.1 (2022-04-11)

  - Bug fix

## 4.0.0 (2021-12-31)

The package of @azure/arm-billing is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
