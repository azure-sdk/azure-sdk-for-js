// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Model representing detailed information about a test run. */
export interface TestRunOutput {
  /** Identifier of the test run. All unicode characters except spaces, ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.) */
  readonly testRunId: string;
  /** Display name of the test run All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  displayName: string;
  /** Creation time of the test run -RFC 3339 literal format */
  creationTime: string;
  /** Creator's identifier. It's the Id referred in the access/Entra token */
  readonly creatorId: string;
  /** Creator's name. */
  readonly creatorName: string;
  /** Summary of the Cloud executed run. Only available if cloud run is enabled */
  readonly cloudRunSummary?: CloudRunSummaryOutput;
  /** Summary of reports uploaded on cloud. Only available if cloud reporting is enabled */
  readonly cloudReportSummary?: CloudReportingSummaryOutput;
  /** Continuous integration configuration. */
  ciConfig?: CiConfigOutput;
  /** Client configuration for the test run. */
  testRunConfig?: TestRunConfigOutput;
  /** URL for accessing test results. */
  readonly testResultsUrl?: TestResultsUrlOutput;
  /** Flag indicating if cloud run is enabled. */
  readonly cloudRunEnabled: boolean;
  /** Must be set to true when users want to use Reporting Feature */
  cloudReportingEnabled: boolean;
}

/** Model representing summary information about a test run. */
export interface CloudRunSummaryOutput {
  /**
   * Status of the test run. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  serverStatus: TestRunStatusOutput;
  /** Billable time for the test run. Available after testRun Ends */
  billableTimeInMs?: number;
  /** Total time taken for the test run. */
  totalTimeInMs?: number;
  /** Number of browser sessions used in the test run. */
  browserSessionsCount?: number;
  /** Flag indicating whether the test run was throttled due to reaching the maximum allowed parallel browser limit for the workspace. */
  browserQuotaExceeded: boolean;
}

/** Model representing summary of test run results. */
export interface CloudReportingSummaryOutput {
  /** Start time of the test run in datetime(RFC 3339 literal format). */
  startTime: string;
  /** End time of the test run. */
  endTime: string;
  /**
   * Processing Status of the testresults on the Server Side.
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  serverStatus: TestRunStatusOutput;
  /** Total number of tests executed */
  readonly totalTestsCount?: number;
  /** Number of tests that passed. */
  readonly passedTestsCount?: number;
  /** Number of tests that failed. */
  readonly failedTestsCount?: number;
  /** Number of tests that were skipped. */
  readonly skippedTestsCount?: number;
  /** Number of tests that were flaky (passed on retry). */
  readonly flakyTestsCount?: number;
  /**
   * Status of the test run
   *
   * Possible values: "Passed", "Failed", "Skipped", "Flaky", "Interrupted", "TimedOut"
   */
  readonly status: TestStatusOutput;
  /** List of CI jobs associated with the test run. */
  readonly jobs?: string[];
  /** List of Playwright projects (https://playwright.dev/docs/test-projects) associated with the test run. */
  readonly projects?: string[];
  /** List of tags associated with the test run. */
  readonly tags?: string[];
  /** Number of worker instances. */
  workersCount?: number;
}

/** Model representing continuous integration (CI) configuration. */
export interface CiConfigOutput {
  /**
   * Name of the CI provider.  GitHub | Azure DevOps | Default
   *
   * Possible values: "GitHub", "Azure DevOps", "Default"
   */
  ciProviderName?: CiProviderNameOutput;
  /** Branch name in the source code repository. All unicode characters except spaces, ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  branch?: string;
  /** Author of the commit triggering the test run. All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  author?: string;
  /** ID of the commit triggering the test run. This is the SHA-1 hash */
  commitId?: string;
  /** URL linking to the revision details. Should be a valid Url. Allowed characters- alphanumeric characters (A-Z, a-z, 0-9), hyphens (-), underscores (_), periods (.), tildes (~), and forward slashes (/) for hierarchy. Special characters must be URL-encoded. */
  revisionUrl?: string;
}

/** Model representing client configuration. */
export interface TestRunConfigOutput {
  /** Number of retry attempts. */
  retryCount?: number;
  /** Interval between repeated test runs. */
  repeatEach?: number;
  /** Details of the test framework used. */
  testFramework?: TestFrameworkOutput;
  /** Details of the shards used in the test. */
  shardDetails?: ShardDetailsOutput;
  /** Timeout duration for test execution. */
  timeoutInMs: number;
  /** Type of test being executed (default: WebTest). */
  testType?: string;
  /**
   * Programming language used for the test SDK. Supported languages are 'JavaScript', 'TypeScript', 'Csharp'
   *
   * Possible values: "JavaScript", "TypeScript", "CSharp"
   */
  testSdkLanguage: TestSdkLanguageOutput;
  /** Version of the reporter package. */
  servicePackageVersion?: string;
}

/** Model representing a test framework. */
export interface TestFrameworkOutput {
  /**
   * Name of the test framework. Supported Frameworks are Playwright
   *
   * Possible values: "Playwright"
   */
  name: TestFrameworkNameOutput;
  /** Version of the test framework. */
  version: string;
  /**
   * Name of the test runner.Supported Frameworks are MSTEST, Playwright, NUNIT
   *
   * Possible values: "MsTest", "Nunit", "Playwright"
   */
  runnerType: RunnerTypeOutput;
}

/** Model representing a shard. Learn about Playwright sharding here: https://playwright.dev/docs/test-sharding */
export interface ShardDetailsOutput {
  /** Total number of shards. */
  total: number;
}

/** Model representing a test results URL. */
export interface TestResultsUrlOutput {
  /** URL for accessing test results. */
  url: string;
  /** Creation timestamp of the test results URL- RFC 3339 literal format */
  createdAt: string;
  /** Expiration timestamp of the test results URL- RFC 3339 literal format */
  expiresAt: string;
  /**
   * Access level for the test results URL.
   *
   * Possible values: "Read", "Write", "ReadWrite", "ReadAddCreateWrite"
   */
  accessLevel: AccessLevelOutput;
}

/** Paged collection of TestRun items */
export interface PagedTestRunOutput {
  /** The TestRun items on this page */
  value: Array<TestRunOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Summary statistics of Testrun in an account. */
export interface AccountTestRunStatsOutput {
  /** Passed  runs within an account */
  passed: number;
  /** Failed  runs within an account */
  failed: number;
  /** Flaky  runs within an account */
  flaky: number;
  /** Total  runs within an account */
  all: number;
  /** Cloud Executed runs within an account */
  cloudExecutionRuns: number;
}

/** Metadata for  testruns/builds. */
export interface TestRunsMetadataOutput {
  /** List of CI branches for a testrun, All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  branches: string[];
}

/** Details of a single test result. */
export interface TestResultDetailsOutput {
  /** Identifier of the test execution. Should be a guid */
  testExecutionId: string;
  /** Identifier of the test. */
  testId: string;
  /** Identifier of the test combination.This is SHA-1 hash */
  testCombinationId: string;
  /** Identifier of the test run. */
  readonly runId: string;
  /** Identifier of the shard. */
  shardId: number;
  /** Identifier of the account. */
  readonly accountId: string;
  /** Identifier of the suite. */
  suiteId: string;
  /** Title of the test. All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  testTitle: string;
  /** Title of the suite. All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  suiteTitle: string;
  /** Name of the file- subject to constraints of OS and programming language */
  fileName: string;
  /** Line number. */
  lineNumber: number;
  /** Number of retryCount attempts. Max retryCount is 100, after which testresults metadata will not be stored */
  retryCount: number;
  /**
   * Status of the test result. While uploading results, a single test execution status can't be Flaky
   *
   * Possible values: "Passed", "Failed", "Skipped", "Flaky", "Interrupted", "TimedOut"
   */
  status: TestStatusOutput;
  /** Configuration for the web test. */
  webTestConfig?: WebTestConfigOutput;
  /** Continuous integration configuration. */
  readonly ciConfig?: CiConfigOutput;
  /** Duration of the test execution in milliseconds. */
  durationInMs: number;
  /** Start time of the test execution.- (RFC 3339 literal format) */
  startTime: string;
  /** Metadata related to attachments- comma separated IMAGE, VIDEO, TRACE as applicable */
  attachmentsMetadata?: AttachmentKindOutput[];
  /** Previous retry summaries. While uploading results, each retry is uploaded separately.However, all the retries of a test gets grouped on the server side and can be retrieved as a single entity using GET API. */
  readonly previousRetries?: Array<PreviousRetrySummaryOutput>;
  /** List of tags associated with the test result. All unicode characters except ASCII control characters, special  characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  tags?: string[];
  /** List of annotations (https://playwright.dev/docs/test-annotations).All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  annotations?: string[];
  /** Relative path in storage for all the artifacts of this test. contain only lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen or contain consecutive hyphens */
  artifactsPath?: string;
}

/** Configuration details for the web test. */
export interface WebTestConfigOutput {
  /** Name of the CI job running the test. All unicode characters except ASCII control characters, special  characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  jobName: string;
  /** Name of the Playwright project.All unicode characters except ASCII control characters, special Git characters (^, ~, :, ?, *, [, ]), double dots (..), multiple consecutive slashes (//), or start/end with a slash (/) or start with period (.). */
  projectName: string;
  /**
   * Name of the browser.
   *
   * Possible values: "Chromium", "Webkit", "Firefox"
   */
  browserType: BrowserTypeOutput;
  /**
   * Operating system where the browser is hosted.
   *
   * Possible values: "Windows", "Linux", "Mac"
   */
  os: OsTypeOutput;
}

/** Summary of previous retries. */
export interface PreviousRetrySummaryOutput {
  /** Identifier of the test execution. */
  testExecutionId: string;
  /** Number of retryCount attempts. */
  retryCount: number;
  /**
   * Status of the test execution.
   *
   * Possible values: "Passed", "Failed", "Skipped", "Flaky", "Interrupted", "TimedOut"
   */
  status: TestStatusOutput;
  /** Duration of the test execution. */
  durationInMs: string;
  /** Start time of the test execution- RFC 3339 literal format */
  startTime: string;
  /** Metadata related to attachments. */
  attachmentsMetadata: AttachmentKindOutput[];
  /** List of artifacts paths. */
  readonly artifactsPath?: string;
}

/** Paged collection of TestResultDetails items */
export interface PagedTestResultDetailsOutput {
  /** The TestResultDetails items on this page */
  value: Array<TestResultDetailsOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Summary statistics of testresults in a run. */
export interface ResultsStatsOutput {
  /** Passed test-results within a run */
  passed: number;
  /** Failed tests within a run */
  failed: number;
  /** Flaky tests within a run */
  flaky: number;
  /** Skipped tests within a run */
  skipped: number;
  /** Total tests within a run */
  all: number;
}

/** Alias for TestRunStatusOutput */
export type TestRunStatusOutput = string;
/** Alias for TestStatusOutput */
export type TestStatusOutput = string;
/** Alias for CiProviderNameOutput */
export type CiProviderNameOutput = string;
/** Alias for TestFrameworkNameOutput */
export type TestFrameworkNameOutput = string;
/** Alias for RunnerTypeOutput */
export type RunnerTypeOutput = string;
/** Alias for TestSdkLanguageOutput */
export type TestSdkLanguageOutput = string;
/** Alias for AccessLevelOutput */
export type AccessLevelOutput = string;
/** Alias for BrowserTypeOutput */
export type BrowserTypeOutput = string;
/** Alias for OsTypeOutput */
export type OsTypeOutput = string;
/** Alias for AttachmentKindOutput */
export type AttachmentKindOutput = string;
