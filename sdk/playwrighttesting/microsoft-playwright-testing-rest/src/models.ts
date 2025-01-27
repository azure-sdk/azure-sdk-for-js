// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Model representing detailed information about a test run. */
export interface TestRun {
  /** Display name of the test run, unicode characters allowed. */
  displayName?: string;
  /** Start time of the test run -RFC 3339 literal format */
  startTime: Date | string;
  /** Continuous integration configuration. */
  ciConfig?: CiConfig;
  /** Client configuration for the test run. */
  testRunConfig?: TestRunConfig;
  /** Must be set to true when Customers want to use Reporting Feature */
  cloudReportingEnabled: boolean;
}

/** Model representing summary information about a test run. */
export interface CloudRunSummary {
  /**
   * Status of the test run. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  status: TestRunStatus;
  /** Start time of the test run in datetime(RFC 3339 literal format). */
  startTime: Date | string;
  /** End time of the test run. */
  endTime: Date | string;
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
export interface CloudReportingSummary {
  /**
   * Processing Status of the the uploaded. Allowed values: RUNNING  | CLIENT_COMPLETE | SERVER_COMPLETE
   *
   * Possible values: "Running", "ClientComplete", "ServerComplete"
   */
  resultProcessingstatus: TestRunStatus;
}

/** Model representing continuous integration (CI) configuration. */
export interface CiConfig {
  /**
   * Name of the CI provider.  GitHub | ADO
   *
   * Possible values: "GitHub", "Ado", "Default"
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
  workers?: number;
  /** Details of the test framework used. */
  testFramework?: TestFramework;
  /** Details of the shards used in the test. */
  shardDetails?: ShardDetails;
  /** Timeout duration for test execution. */
  timeoutInMs: string;
  /** Type of test being executed (default: WebTest). */
  testType?: string;
  /**
   * Programming language used for the test SDK. Supported languages are 'JavaScript', 'TypeScript', 'Csharp'
   *
   * Possible values: "JavaScript", "TypeScript", "CSharp"
   */
  testSdkLanguage: TestSdkLanguage;
  /** Version of the reporter package. */
  reporterPackageVersion?: string;
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

/** Model representing a shard. */
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
  /** Shard Id for the shard- indexed 0,1,2 */
  shardId: number;
  /** Summary of the test run shard. */
  summary: UpdateShardExecutionSummary;
  /** number of workers used by playwright client. */
  workers: number;
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
  /** Identifier of the test run. */
  runId: string;
  /** Identifier of the shard. */
  shardId: string;
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
  status: TestStatus;
  /** Configuration for the web test. */
  webTestConfig?: WebTestConfig;
  /** Continuous integration configuration. */
  ciConfig?: CiConfig;
  /** Previous retryCount summaries. */
  previousRetries?: Array<PreviousRetrySummary>;
  /** List of tags associated with the test result. */
  tags?: string[];
  /** List of annotations. */
  annotations?: string[];
  /** Relative path in Storage for all the artifacts of this test */
  artifactsPath?: string;
}

/** Configuration details for the web test. */
export interface WebTestConfig {
  /** Name of the job. */
  jobName: string;
  /** Name of the project. */
  projectName: string;
  /**
   * Name of the browser.
   *
   * Possible values: "Chromium", "Webkit", "FireFox"
   */
  browserType: BrowserType;
  /**
   * Operating system details.
   *
   * Possible values: "Windows", "Linux", "Mac"
   */
  os: OsType;
}

/** Summary of test results. */
export interface TestResult {
  /**
   * Status of the test results.
   *
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  status: TestStatus;
  /** Duration of the test execution in milliseconds. */
  durationInMs: number;
  /** Start time of the test execution.- (RFC 3339 literal format) */
  startTime: Date | string;
  /** Metadata related to attachments- comma separated IMAGE, VIDEO, TRACE as applicable */
  attachmentsMetadata?: AttachmentKind[];
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
   * Possible values: "Passed", "Failed", "Skipped", "Interrupted", "TimedOut"
   */
  status: TestStatus;
  /** Duration of the test execution. */
  duration: string;
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
