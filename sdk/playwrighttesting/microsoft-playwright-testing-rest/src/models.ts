// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Model representing detailed information about a test run. */
export interface TestRun {
  /** Display name of the test run (unicode characters allowed). */
  displayName: string;
  /** Creation time of the test run -RFC 3339 literal format */
  creationTime: Date | string;
  /** Continuous integration configuration. */
  ciConfig?: CiConfig;
  /** Client configuration for the test run. */
  testRunConfig?: TestRunConfig;
  /** Must be set to true when users want to use Reporting Feature */
  cloudReportingEnabled: boolean;
}

/** Model representing summary information about a test run. */
export interface CloudRunSummary {
  /**
   * Status of the test run. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  serverStatus: TestRunStatus;
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
export interface CloudReportingSummary {
  /** Start time of the test run in datetime(RFC 3339 literal format). */
  startTime: Date | string;
  /** End time of the test run. */
  endTime: Date | string;
  /**
   * Processing Status of the testresults on the Server Side.
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  serverStatus: TestRunStatus;
}

/** Model representing continuous integration (CI) configuration. */
export interface CiConfig {
  /**
   * Name of the CI provider.  GitHub | Azure DevOps | Default
   *
   * Possible values: "GitHub", "Azure DevOps", "Default"
   */
  ciProviderName?: CiProviderName;
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
export interface TestRunConfig {
  /** Number of retry attempts. */
  retryCount?: number;
  /** Interval between repeated test runs. */
  repeatEach?: number;
  /** Number of worker instances. */
  workersCount?: number;
  /** Details of the test framework used. */
  testFramework?: TestFramework;
  /** Details of the shards used in the test. */
  shardDetails?: ShardDetails;
  /** Timeout duration for test execution. */
  timeoutInMs: number;
  /** Type of test being executed (default: WebTest). */
  testType?: string;
  /**
   * Programming language used for the test SDK. Supported languages are 'JavaScript', 'TypeScript', 'Csharp'
   *
   * Possible values: "JavaScript", "TypeScript", "CSharp"
   */
  testSdkLanguage: TestSdkLanguage;
  /** Version of the reporter package. */
  servicePackageVersion?: string;
}

/** Model representing a test framework. */
export interface TestFramework {
  /**
   * Name of the test framework. Supported Frameworks are Playwright
   *
   * Possible values: "Playwright"
   */
  name: TestFrameworkName;
  /** Version of the test framework. */
  version: string;
  /**
   * Name of the test runner.Supported Frameworks are MSTEST, Playwright, NUNIT
   *
   * Possible values: "MsTest", "Nunit", "Playwright"
   */
  runnerType: RunnerType;
}

/** Model representing a shard. Learn about Playwright sharding here: https://playwright.dev/docs/test-sharding */
export interface ShardDetails {
  /** Total number of shards. */
  total: number;
}

/** Model representing a test results URL. */
export interface TestResultsUrl {
  /** URL for accessing test results. */
  url: string;
  /** Creation timestamp of the test results URL- RFC 3339 literal format */
  createdAt: Date | string;
  /** Expiration timestamp of the test results URL- RFC 3339 literal format */
  expiresAt: Date | string;
  /**
   * Access level for the test results URL.
   *
   * Possible values: "Read", "Write", "ReadWrite", "ReadAddCreateWrite"
   */
  accessLevel: AccessLevel;
}

/** Execution details of a Shard. */
export interface ShardExecutionDetails {
  /** Shard Id for the shard- indexed 1,2,3 etc. */
  shardId: number;
  /** Summary of the test run shard. */
  summary: UpdateShardExecutionSummary;
  /** number of workers used by playwright client. */
  workersCount: number;
  /** Flag indicating if upload is completed for the shard. */
  uploadCompleted?: boolean;
}

/** Model to update shard result. */
export interface UpdateShardExecutionSummary {
  /** Start time of the test run in datetime(RFC 3339 literal format). */
  startTime: Date | string;
  /** End time of the test run. */
  endTime: Date | string;
  /** Metadata related to test run uploads. */
  uploadMetadata?: UploadMetadata;
}

/** Model representing upload metadata. */
export interface UploadMetadata {
  /** Total number of test results uploaded. */
  testResultsCount: number;
  /** Total number of attachments uploaded. */
  totalAttachmentsCount: number;
  /** Total size of attachments uploaded in Bytes. */
  totalAttachmentsSize: number;
}

/** Request object for uploading test results. */
export interface UploadTestResultsRequest {
  /** List of test results. */
  values: Array<TestResultDetails>;
}

/** Details of a single test result. */
export interface TestResultDetails {
  /** Identifier of the test execution. */
  testExecutionId: string;
  /** Identifier of the test. */
  testId: string;
  /** Identifier of the test combination. */
  testCombinationId: string;
  /** Identifier of the shard. */
  shardId: number;
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
  /** Number of retryCount attempts. Max retryCount is 100, after which testresults metadata will not be stored */
  retryCount: number;
  /**
   * Status of the test result. While uploading results, a single test execution status can't be Flaky
   *
   * Possible values: "Passed", "Failed", "Skipped", "Flaky", "Interrupted", "TimedOut"
   */
  status: TestStatus;
  /** Configuration for the web test. */
  webTestConfig?: WebTestConfig;
  /** Duration of the test execution in milliseconds. */
  durationInMs: number;
  /** Start time of the test execution.- (RFC 3339 literal format) */
  startTime: Date | string;
  /** Metadata related to attachments- comma separated IMAGE, VIDEO, TRACE as applicable */
  attachmentsMetadata?: AttachmentKind[];
  /** List of tags associated with the test result. */
  tags?: string[];
  /** List of annotations (https://playwright.dev/docs/test-annotations). */
  annotations?: string[];
  /** Relative path in storage for all the artifacts of this test */
  artifactsPath?: string;
}

/** Configuration details for the web test. */
export interface WebTestConfig {
  /** Name of the CI job running the test. */
  jobName: string;
  /** Name of the Playwright project. */
  projectName: string;
  /**
   * Name of the browser.
   *
   * Possible values: "Chromium", "Webkit", "Firefox"
   */
  browserType: BrowserType;
  /**
   * Operating system where the browser is hosted.
   *
   * Possible values: "Windows", "Linux", "Mac"
   */
  os: OsType;
}

/** Summary of previous retries. */
export interface PreviousRetrySummary {
  /** Identifier of the test execution. */
  testExecutionId: string;
  /** Number of retryCount attempts. */
  retryCount: number;
  /**
   * Status of the test execution.
   *
   * Possible values: "Passed", "Failed", "Skipped", "Flaky", "Interrupted", "TimedOut"
   */
  status: TestStatus;
  /** Duration of the test execution. */
  durationInMs: string;
  /** Start time of the test execution- RFC 3339 literal format */
  startTime: Date | string;
  /** Metadata related to attachments. */
  attachmentsMetadata: AttachmentKind[];
}

/** Alias for TestRunStatus */
export type TestRunStatus = string;
/** Alias for TestStatus */
export type TestStatus = string;
/** Alias for CiProviderName */
export type CiProviderName = string;
/** Alias for TestFrameworkName */
export type TestFrameworkName = string;
/** Alias for RunnerType */
export type RunnerType = string;
/** Alias for TestSdkLanguage */
export type TestSdkLanguage = string;
/** Alias for AccessLevel */
export type AccessLevel = string;
/** Alias for BrowserType */
export type BrowserType = string;
/** Alias for OsType */
export type OsType = string;
/** Alias for AttachmentKind */
export type AttachmentKind = string;
