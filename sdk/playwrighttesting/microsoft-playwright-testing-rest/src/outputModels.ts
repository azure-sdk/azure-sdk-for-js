// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Model representing detailed information about a test run. */
export interface TestRunOutput {
  /** Identifier of the test run. */
  readonly testRunId: string;
  /** Display name of the test run, unicode characters allowed. */
  displayName?: string;
  /** Start time of the test run -RFC 3339 literal format */
  startTime: string;
  /** Creator's identifier. */
  readonly creatorId: string;
  /** Creator's name. */
  readonly creatorName: string;
  /** Summary of the Cloud executed run. Only available if cloud run is enabled */
  readonly cloudRunSummary?: CloudRunSummaryOutput;
  /** Summary of reports uploaded on cloud.Only available if cloud reporting is enabled */
  readonly cloudReportSummary?: CloudReportingSummaryOutput;
  /** Continuous integration configuration. */
  ciConfig?: CiConfigOutput;
  /** Client configuration for the test run. */
  testRunConfig?: TestRunConfigOutput;
  /** URL for accessing test results. */
  readonly testResultsUrl?: TestResultsUrlOutput;
  /** Flag indicating if cloud run is enabled. */
  readonly cloudRunEnabled: boolean;
  /** Must be set to true when Customers want to use Reporting Feature */
  cloudReportingEnabled: boolean;
}

/** Model representing summary information about a test run. */
export interface CloudRunSummaryOutput {
  /**
   * Status of the test run. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  status: TestRunStatusOutput;
  /** Start time of the test run in datetime(RFC 3339 literal format). */
  startTime: string;
  /** End time of the test run. */
  endTime: string;
  /** Billable time for the test run. Available after testRun Ends */
  billableTime: number;
  /** Total time taken for the test run. */
  totalTime: number;
  /** Number of browser sessions used in the test run. */
  numBrowserSessions: number;
  /** Flag indicating if a test-run was throttled because requested browser Quota exceeded */
  browserQuotaExceeded: boolean;
}

/** Model representing summary of test run results. */
export interface CloudReportingSummaryOutput {
  /**
   * Processing Status of the the uploaded. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  resultProcessingstatus: TestRunStatusOutput;
  /** Total number of tests executed. */
  readonly numTotalTests: number;
  /** Number of tests that passed. */
  readonly numPassedTests: number;
  /** Number of tests that failed. */
  readonly numFailedTests: number;
  /** Number of tests that were skipped. */
  readonly numSkippedTests: number;
  /** Number of tests that were flaky. */
  readonly numFlakyTests: number;
  /**
   * Status of the test run - PASSED | FAILED | INTERRUPTED | TIMEDOUT
   *
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  readonly status: TestStatusOutput;
  /** List of jobs associated with the test run. */
  readonly jobs?: string[];
  /** List of projects associated with the test run. */
  readonly projects?: string[];
  /** List of tags associated with the test run. */
  readonly tags?: string[];
}

/** Model representing continuous integration (CI) configuration. */
export interface CiConfigOutput {
  /**
   * Name of the CI provider.  GitHub | ADO
   *
   * Possible values: "GitHub", "Ado", "Default"
   */
  ciProviderName?: CiProviderNameOutput;
  /** Branch name in the source code repository. */
  branch?: string;
  /** Author of the commit triggering the test run. */
  author?: string;
  /** ID of the commit triggering the test run. */
  commitId?: string;
  /** URL linking to the revision details. */
  revisionUrl?: string;
}

/** Model representing client configuration. */
export interface TestRunConfigOutput {
  /** Number of retry attempts. */
  retryCount?: number;
  /** Interval between repeated test runs. */
  repeatEach?: number;
  /** Number of worker instances. */
  workers?: number;
  /** Details of the test framework used. */
  testFramework?: TestFrameworkOutput;
  /** Details of the shards used in the test. */
  shardDetails?: ShardDetailsOutput;
  /** Timeout duration for test execution. */
  timeoutInMs: string;
  /** Type of test being executed (default: WebTest). */
  testType?: string;
  /**
   * Programming language used for the test SDK. Supported languages are 'JavaScript', 'TypeScript', 'Csharp'
   *
   * Possible values: "JavaScript", "TypeScript", "CSharp"
   */
  testSdkLanguage: TestSdkLanguageOutput;
  /** Version of the reporter package. */
  reporterPackageVersion?: string;
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

/** Model representing a shard. */
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
  /** List of CI branches for a testrun */
  branches: string[];
}

/** Details of a single test result. */
export interface TestResultDetailsOutput {
  /** Identifier of the test execution. */
  testExecutionId: string;
  /** Identifier of the test. */
  testId: string;
  /** Identifier of the test combination. */
  testCombinationId: string;
  /** Identifier of the test run. */
  runId: string;
  /** Identifier of the shard. */
  shardId: string;
  /** Identifier of the account. */
  readonly accountId: string;
  /** Identifier of the suite. */
  suiteId: string;
  /** Title of the test. */
  testTitle: string;
  /** Title of the suite. */
  suiteTitle: string;
  /** Name of the file. */
  fileName: string;
  /** Line number. */
  lineNumber: number;
  /** Number of retryCount attempts. max retryCount is 20. After which testresults metadata will not be stored */
  retryCount: number;
  /**
   * Status of the test.
   *
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  status: TestStatusOutput;
  /** Configuration for the web test. */
  webTestConfig?: WebTestConfigOutput;
  /** Continuous integration configuration. */
  ciConfig?: CiConfigOutput;
  /** Summary of test results. */
  readonly result: TestResultOutput;
  /** Previous retryCount summaries. */
  previousRetries?: Array<PreviousRetrySummaryOutput>;
  /** List of tags associated with the test result. */
  tags?: string[];
  /** List of annotations. */
  annotations?: string[];
  /** Relative path in Storage for all the artifacts of this test */
  artifactsPath?: string;
}

/** Configuration details for the web test. */
export interface WebTestConfigOutput {
  /** Name of the job. */
  jobName: string;
  /** Name of the project. */
  projectName: string;
  /**
   * Name of the browser.
   *
   * Possible values: "Chromium", "Webkit", "FireFox"
   */
  browserType: BrowserTypeOutput;
  /**
   * Operating system details.
   *
   * Possible values: "Windows", "Linux", "Mac"
   */
  os: OsTypeOutput;
}

/** Summary of test results. */
export interface TestResultOutput {
  /**
   * Status of the test results.
   *
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  status: TestStatusOutput;
  /** Duration of the test execution in milliseconds. */
  durationInMs: number;
  /** Start time of the test execution.- (RFC 3339 literal format) */
  startTime: string;
  /** Metadata related to attachments- comma separated IMAGE, VIDEO, TRACE as applicable */
  attachmentsMetadata?: AttachmentKindOutput[];
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
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  status: TestStatusOutput;
  /** Duration of the test execution. */
  duration: string;
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
