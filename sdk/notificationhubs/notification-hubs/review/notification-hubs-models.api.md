## API Report File for "@azure/notification-hubs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { SimplePollerLike } from '@azure/core-lro';

// @public
export interface AdmInstallation extends DeviceTokenInstallation {
    platform: "adm";
}

// @public
export interface AdmNativeMessage {
    consolidationKey?: string;
    data?: Record<string, string>;
    expiresAfter?: number;
    md5?: string;
    notification?: AdmNativeNotification;
    priority?: "normal" | "high";
}

// @public
export interface AdmNativeNotification {
    body?: string;
    body_loc_args?: string[];
    body_loc_key?: string;
    channel_id?: string;
    click_action?: string;
    color?: string;
    default_sound?: boolean;
    event_time?: string;
    icon?: string;
    image?: string;
    local_only?: boolean;
    notification_count?: number;
    notification_priority?: number;
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    title_loc_args?: string[];
    title_loc_key?: string;
    visibility?: number;
}

// @public
export interface AdmNotification extends JsonNotification {
    platform: "adm";
}

// @public
export interface AdmNotificationParams {
    body: string | AdmNativeMessage;
    headers?: Record<string, string>;
}

// @public
export interface AdmRegistrationChannel {
    admRegistrationId: string;
    kind: "adm";
}

// @public
export interface AdmRegistrationDescription extends AdmRegistrationDescriptionCommon {
    kind: "Adm";
}

// @public (undocumented)
export interface AdmRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    admRegistrationId: string;
}

// @public
export interface AdmTemplateRegistrationDescription extends AdmTemplateRegistrationDescriptionCommon {
    kind: "AdmTemplate";
}

// @public
export interface AdmTemplateRegistrationDescriptionCommon extends AdmRegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// @public
export type ApnsPushTypes = "alert" | "background" | "voip" | "complication" | "fileprovider" | "mdm" | "location" | "liveactivity" | "pushtotalk";

// @public
export interface AppleAlert {
    "launch-image"?: string;
    "loc-args"?: string[];
    "loc-key"?: string;
    "subtitle-loc-args"?: string[];
    "subtitle-loc-key"?: string;
    "title-loc-args"?: string[];
    "title-loc-key"?: string;
    body?: string;
    subtitle?: string;
    title?: string;
}

// @public
export interface AppleApsNativeMessage extends Record<string, any> {
    "content-available"?: number;
    "content-state"?: Record<string, any>;
    "dismissal-date"?: number;
    "filter-criteria"?: string;
    "interruption-level"?: "passive" | "active" | "time-sensitive" | "critical";
    "mutable-content"?: number;
    "relevance-score"?: number;
    "stale-date"?: number;
    "target-content-id"?: string;
    "thread-id"?: string;
    alert?: string | AppleAlert;
    badge?: number;
    category?: string;
    events?: string;
    sound?: string | AppleCriticalSound;
    timestamp?: number;
}

// @public
export interface AppleCriticalSound {
    critical: number;
    name: string;
    volume: number;
}

// @public
export interface AppleHeaders extends Record<string, unknown> {
    "apns-collapse-id"?: string;
    "apns-expiration"?: string;
    "apns-id"?: string;
    "apns-priority"?: "5" | "10";
    "apns-push-type"?: ApnsPushTypes;
    "apns-topic"?: string;
}

// @public
export interface AppleInstallation extends DeviceTokenInstallation {
    platform: "apns";
}

// @public
export interface AppleNativeMessage extends Record<string, any> {
    aps?: AppleApsNativeMessage;
}

// @public
export interface AppleNotification extends JsonNotification {
    platform: "apple";
}

// @public
export interface AppleNotificationParams {
    body: string | AppleNativeMessage;
    headers?: AppleHeaders;
}

// @public
export interface AppleRegistrationChannel {
    deviceToken: string;
    kind: "apple";
}

// @public
export interface AppleRegistrationDescription extends AppleRegistrationDescriptionCommon {
    kind: "Apple";
}

// @public
export interface AppleRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    deviceToken: string;
}

// @public
export interface AppleTemplateRegistrationDescription extends AppleTemplateRegistrationDescriptionCommon {
    kind: "AppleTemplate";
}

// @public
export interface AppleTemplateRegistrationDescriptionCommon extends AppleRegistrationDescriptionCommon, TemplateRegistrationDescription {
    apnsHeaders?: Record<string, string>;
    expiry?: Date;
    priority?: "10" | "5";
}

// @public
export interface BaiduAppleNativePayload {
    alert?: string;
    badge?: number;
    sound?: string;
}

// @public
export interface BaiduInstallation extends DeviceTokenInstallation {
    platform: "baidu";
}

// @public
export interface BaiduNativeMessage extends Record<string, any> {
    aps?: BaiduAppleNativePayload;
    custom_content?: Record<string, any>;
    description?: string;
    net_support?: number;
    notification_basic_style?: number;
    notification_builder_id?: number;
    open_type?: number;
    pkg_content?: string;
    pkg_version?: string;
    title?: string;
    url?: string;
    user_confirm?: number;
}

// @public
export interface BaiduNotification extends JsonNotification {
    platform: "baidu";
}

// @public
export interface BaiduRegistrationChannel {
    baiduChannelId: string;
    baiduUserId: string;
    kind: "baidu";
}

// @public
export interface BaiduRegistrationDescription extends BaiduRegistrationDescriptionCommon {
    kind: "Baidu";
}

// @public (undocumented)
export interface BaiduRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    baiduChannelId: string;
    baiduUserId: string;
}

// @public
export interface BaiduTemplateRegistrationDescription extends BaiduTemplateRegistrationDescriptionCommon {
    kind: "BaiduTemplate";
}

// @public
export interface BaiduTemplateRegistrationDescriptionCommon extends BaiduRegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// @public
export interface BrowserInstallation extends BrowserInstallationCommon {
    platform: "browser";
}

// @public
export interface BrowserInstallationCommon extends InstallationCommon {
    pushChannel: BrowserPushChannel;
}

// @public
export interface BrowserNotification extends JsonNotification {
    platform: "browser";
}

// @public
export interface BrowserPushChannel {
    auth: string;
    endpoint: string;
    p256dh: string;
}

// @public
export interface BrowserRegistrationChannel {
    auth: string;
    endpoint: string;
    kind: "browser";
    p256dh: string;
}

// @public
export interface BrowserRegistrationDescription extends BrowserRegistrationDescriptionCommon {
    kind: "Browser";
}

// @public
export interface BrowserRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    auth: string;
    endpoint: string;
    p256dh: string;
}

// @public
export interface BrowserTemplateRegistrationDescription extends BrowserTemplateRegistrationDescriptionCommon {
    kind: "BrowserTemplate";
}

// @public
export interface BrowserTemplateRegistrationDescriptionCommon extends BrowserRegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// @public
export function createAdmInstallation(installation: DeviceTokenInstallation): AdmInstallation;

// @public
export function createAdmNotification(notification: AdmNotificationParams): AdmNotification;

// @public
export function createAdmNotificationBody(nativeMessage: AdmNativeMessage): string;

// @public
export function createAdmRegistrationDescription(description: AdmRegistrationDescriptionCommon): AdmRegistrationDescription;

// @public
export function createAdmTemplateRegistrationDescription(description: AdmTemplateRegistrationDescriptionCommon): AdmTemplateRegistrationDescription;

// @public
export function createAppleInstallation(installation: DeviceTokenInstallation): AppleInstallation;

// @public
export function createAppleNotification(notification: AppleNotificationParams): AppleNotification;

// @public
export function createAppleNotificationBody(nativeMessage: AppleNativeMessage): string;

// @public
export function createAppleRegistrationDescription(description: AppleRegistrationDescriptionCommon): AppleRegistrationDescription;

// @public
export function createAppleTemplateRegistrationDescription(description: AppleTemplateRegistrationDescriptionCommon): AppleTemplateRegistrationDescription;

// @public
export function createBaiduInstallation(installation: DeviceTokenInstallation): BaiduInstallation;

// @public
export function createBaiduNotification(notification: NotificationCommonParams): BaiduNotification;

// @public
export function createBaiduNotificationBody(nativeMessage: BaiduNativeMessage): string;

// @public
export function createBaiduRegistrationDescription(description: BaiduRegistrationDescriptionCommon): BaiduRegistrationDescription;

// @public
export function createBaiduTemplateRegistrationDescription(description: BaiduTemplateRegistrationDescriptionCommon): BaiduTemplateRegistrationDescription;

// @public
export function createBrowserInstallation(installation: BrowserInstallationCommon): BrowserInstallation;

// @public
export function createBrowserNotification(notification: NotificationCommonParams): BrowserNotification;

// @public
export function createBrowserRegistrationDescription(description: BrowserRegistrationDescriptionCommon): BrowserRegistrationDescription;

// @public
export function createBrowserTemplateRegistrationDescription(description: BrowserTemplateRegistrationDescriptionCommon): BrowserTemplateRegistrationDescription;

// @public
export function createFcmLegacyInstallation(installation: DeviceTokenInstallation): FcmLegacyInstallation;

// @public
export function createFcmLegacyNotification(notification: FcmLegacyNotificationParams): FcmLegacyNotification;

// @public
export function createFcmLegacyRegistrationDescription(description: GcmRegistrationDescriptionCommon): GcmRegistrationDescription;

// @public
export function createFcmLegacyTemplateRegistrationDescription(description: GcmTemplateRegistrationDescriptionCommon): GcmTemplateRegistrationDescription;

// @public
export function createFcmV1Installation(installation: DeviceTokenInstallation): FcmV1Installation;

// @public
export function createFcmV1Notification(notification: FcmV1NotificationParams): FcmV1Notification;

// @public
export function createFcmV1RegistrationDescription(description: FcmV1RegistrationDescriptionCommon): FcmV1RegistrationDescription;

// @public
export function createFcmV1TemplateRegistrationDescription(description: FcmV1TemplateRegistrationDescriptionCommon): FcmV1TemplateRegistrationDescription;

// @public
export function createFirebaseLegacyNotificationBody(nativeMessage: FirebaseLegacyNativeMessage): string;

// @public
export function createFirebaseV1NotificationBody(nativeMessage: FirebaseV1NativeMessage): string;

// @public
export function createTagExpression(tags: string[]): string;

// @public
export function createTemplateNotification(notification: NotificationCommonParams): TemplateNotification;

// @public
export function createWindowsBadgeNotification(notification: WnsNotificationParams): WindowsNotification;

// @public
export function createWindowsBadgeNotificationBody(nativeMessage: WindowsBadgeNativeMessage): string;

// @public
export function createWindowsInstallation(installation: DeviceTokenInstallation): WindowsInstallation;

// @public
export function createWindowsNotification(notification: WnsNotificationParams): WindowsNotification;

// @public
export function createWindowsRawNotification(notification: WnsNotificationParams): WindowsNotification;

// @public
export function createWindowsRegistrationDescription(description: WindowsRegistrationDescriptionCommon): WindowsRegistrationDescription;

// @public
export function createWindowsTemplateRegistrationDescription(description: WindowsTemplateRegistrationDescriptionCommon): WindowsTemplateRegistrationDescription;

// @public
export function createWindowsTileNotification(notification: WnsNotificationParams): WindowsNotification;

// @public
export function createWindowsToastNotification(notification: WnsNotificationParams): WindowsNotification;

// @public
export function createXiaomiInstallation(installation: DeviceTokenInstallation): XiaomiInstallation;

// @public
export function createXiaomiNotification(notification: NotificationCommonParams): XiaomiNotification;

// @public
export function createXiaomiRegistrationDescription(description: XiaomiRegistrationDescriptionCommon): XiaomiRegistrationDescription;

// @public
export function createXiaomiTemplateRegistrationDescription(description: XiaomiTemplateRegistrationDescriptionCommon): XiaomiTemplateRegistrationDescription;

// @public
export interface DeviceTokenInstallation extends InstallationCommon {
    pushChannel: string;
}

// @public
export interface DirectSendNotificationOptions extends OperationOptions {
    deviceHandle: string | BrowserPushChannel | string[];
}

// @public
export interface EntityOperationOptions extends OperationOptions {
    etag?: string;
}

// @public
export interface FcmLegacyInstallation extends DeviceTokenInstallation {
    platform: "gcm";
}

// @public
export interface FcmLegacyNotification extends JsonNotification {
    platform: "gcm";
}

// @public
export interface FcmLegacyNotificationParams {
    body: string | FirebaseLegacyNativeMessage;
    headers?: Record<string, string>;
}

// @public
export interface FcmV1Installation extends DeviceTokenInstallation {
    platform: "fcmv1";
}

// @public
export interface FcmV1Notification extends JsonNotification {
    platform: "fcmv1";
}

// @public
export interface FcmV1NotificationParams {
    body: string | FirebaseV1NativeMessage;
    headers?: Record<string, string>;
}

// @public
export interface FcmV1RegistrationDescription extends FcmV1RegistrationDescriptionCommon {
    kind: "FcmV1";
}

// @public
export interface FcmV1RegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    fcmV1RegistrationId: string;
}

// @public
export interface FcmV1TemplateRegistrationDescription extends FcmV1TemplateRegistrationDescriptionCommon {
    kind: "FcmV1Template";
}

// @public
export interface FcmV1TemplateRegistrationDescriptionCommon extends FcmV1RegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// @public
export interface FirebaseLegacyAndroidNativePayload {
    android_channel_id?: string;
    body?: string;
    body_loc_args?: string[];
    body_loc_key?: string;
    click_action?: string;
    color?: string;
    icon?: string;
    sound?: string;
    tag?: string;
    title?: string;
    title_loc_args?: string[];
    title_loc_key?: string;
}

// @public
export interface FirebaseLegacyAppleNativePayload {
    badge?: string;
    body?: string;
    body_loc_args?: string[];
    body_loc_key?: string;
    click_action?: string;
    sound?: string;
    subtitle?: string;
    title?: string;
    title_loc_args?: string[];
    title_loc_key?: string;
}

// @public
export interface FirebaseLegacyNativeMessage {
    collapse_key?: string;
    condition?: string;
    content_available?: boolean;
    data?: Record<string, any>;
    dry_run?: boolean;
    mutable_content?: number;
    notification?: FirebaseLegacyAppleNativePayload | FirebaseLegacyAndroidNativePayload | FirebaseLegacyWebNativePayload;
    priority?: "normal" | "high";
    registration_ids?: string[];
    restricted_package_name?: string;
    time_to_live?: number;
    to?: string;
}

// @public
export interface FirebaseLegacyRegistrationChannel {
    gcmRegistrationId: string;
    kind: "gcm";
}

// @public
export interface FirebaseLegacyWebNativePayload {
    body?: string;
    click_action?: string;
    icon?: string;
    title?: string;
}

// @public
export interface FirebaseV1AndroidConfig {
    collapse_key?: string;
    data?: Record<string, any>;
    direct_boot_ok?: boolean;
    fcm_options?: FirebaseV1AndroidFcmOptions;
    notification?: FirebaseV1AndroidNotification;
    priority?: "normal" | "high";
    restricted_package_name?: string;
    ttl?: string;
}

// @public
export interface FirebaseV1AndroidFcmOptions {
    analytics_label?: string;
}

// @public
export interface FirebaseV1AndroidNotification {
    body?: string;
    body_loc_args?: string[];
    body_loc_key?: string;
    channel_id?: string;
    click_action?: string;
    color?: string;
    default_light_settings?: boolean;
    default_sound?: boolean;
    default_vibrate_timings?: boolean;
    event_time?: string;
    icon?: string;
    image?: string;
    light_settings?: {
        color: {
            red: number;
            green: number;
            blue: number;
            alpha: number;
        };
        light_on_duration: string;
        light_off_duration: string;
    };
    local_only?: boolean;
    notification_count?: number;
    notification_priority?: number;
    sound?: string;
    sticky?: boolean;
    tag?: string;
    ticker?: string;
    title?: string;
    title_loc_args?: string[];
    title_loc_key?: string;
    vibrate_timings?: string[];
    visibility?: number;
}

// @public
export interface FirebaseV1ApnsConfig {
    fcm_options?: FirebaseV1ApnsFcmOptions;
    headers?: Record<string, string>;
    payload?: AppleNativeMessage;
}

// @public
export interface FirebaseV1ApnsFcmOptions {
    analytics_label?: string;
    image?: string;
}

// @public (undocumented)
export interface FirebaseV1FcmOptions {
    analytics_label?: string;
}

// @public
export interface FirebaseV1NativeMessage {
    android?: FirebaseV1AndroidConfig;
    apns?: FirebaseV1ApnsConfig;
    condition?: string;
    data?: Record<string, any>;
    fcm_options?: FirebaseV1FcmOptions;
    notification?: FirebaseV1NativeNotification;
    token?: string;
    topic?: string;
    webpush?: FirebaseV1WebPushConfig;
}

// @public
export interface FirebaseV1NativeNotification {
    body?: string;
    image?: string;
    title?: string;
}

// @public
export interface FirebaseV1RegistrationChannel {
    fcmV1RegistrationId: string;
    kind: "fcmv1";
}

// @public (undocumented)
export interface FirebaseV1WebPushConfig {
    data?: Record<string, string>;
    fcm_options?: FirebaseV1WebPushFcmOptions;
    headers?: Record<string, string>;
    notification?: FirebaseV1WebPushNotification;
}

// @public
export interface FirebaseV1WebPushFcmOptions {
    analytics_label?: string;
    link?: string;
}

// @public
export interface FirebaseV1WebPushNotification {
    actions?: {
        action?: string;
        title?: string;
        icon?: string;
    }[];
    badge?: string;
    body?: string;
    data?: Record<string, any>;
    dir?: "auto" | "ltr" | "rtl";
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: number;
    title?: string;
    vibrate?: number[];
}

// @public
export interface GcmRegistrationDescription extends GcmRegistrationDescriptionCommon {
    kind: "Gcm";
}

// @public
export interface GcmRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    gcmRegistrationId: string;
}

// @public
export interface GcmTemplateRegistrationDescription extends GcmTemplateRegistrationDescriptionCommon {
    kind: "GcmTemplate";
}

// @public
export interface GcmTemplateRegistrationDescriptionCommon extends GcmRegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// @public
export type Installation = AppleInstallation | AdmInstallation | BaiduInstallation | BrowserInstallation | FcmLegacyInstallation | FcmV1Installation | XiaomiInstallation | WindowsInstallation;

// @public
export interface InstallationCommon {
    readonly expirationTime?: string;
    installationId: string;
    readonly lastUpdate?: string;
    tags?: string[];
    templates?: Record<string, InstallationTemplate>;
    userId?: string;
}

// @public
export interface InstallationTemplate {
    body: string;
    headers: Record<string, string>;
    tags?: string[];
}

// @public
export interface JsonNotification extends NotificationCommon {
    contentType: "application/json;charset=utf-8";
}

// @public
export interface JsonPatch {
    op: JsonPatchOperation;
    path: string;
    value?: string;
}

// @public
export type JsonPatchOperation = "add" | "remove" | "replace";

// @public @deprecated
export interface MpnsRegistrationDescription extends MpnsRegistrationDescriptionCommon {
    kind: "Mpns";
}

// @public @deprecated
export interface MpnsRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    channelUri: string;
}

// @public @deprecated
export interface MpnsTemplateRegistrationDescription extends MpnsRegistrationDescriptionCommon, TemplateRegistrationDescription {
    kind: "MpnsTemplate";
    mpnsHeaders?: Record<string, string>;
}

// @public @deprecated
export interface MpnsTemplateRegistrationDescription extends MpnsTemplateRegistrationDescriptionCommon {
    kind: "MpnsTemplate";
}

// @public @deprecated
export interface MpnsTemplateRegistrationDescriptionCommon extends MpnsRegistrationDescriptionCommon, TemplateRegistrationDescription {
    mpnsHeaders?: Record<string, string>;
}

// @public
export type Notification = AppleNotification | AdmNotification | BaiduNotification | BrowserNotification | FcmLegacyNotification | FcmV1Notification | XiaomiNotification | WindowsNotification | TemplateNotification;

// @public
export interface NotificationCommon {
    body: string;
    headers?: Record<string, unknown>;
}

// @public
export interface NotificationCommonParams {
    body: string | unknown;
    headers?: Record<string, unknown>;
}

// @public
export interface NotificationDetails {
    admOutcomeCounts?: NotificationOutcome[];
    apnsOutcomeCounts?: NotificationOutcome[];
    baiduOutcomeCounts?: NotificationOutcome[];
    browserOutcomeCounts?: NotificationOutcome[];
    endTime?: Date;
    enqueueTime?: Date;
    fcmOutcomeCounts?: NotificationOutcome[];
    location?: string;
    notificationBody?: string;
    notificationId?: string;
    pnsErrorDetailsUrl?: string;
    startTime?: Date;
    state?: NotificationOutcomeState;
    tags?: string;
    targetPlatforms?: string;
    wnsOutcomeCounts?: NotificationOutcome[];
    xiaomiOutcomeCounts?: NotificationOutcome[];
}

// @public
export interface NotificationHubJob {
    createdAt?: Date;
    failure?: string;
    failuresFileName?: string;
    importFileUrl?: string;
    inputProperties?: Record<string, string>;
    jobId?: string;
    outputContainerUrl: string;
    outputFileName?: string;
    outputProperties?: Record<string, string>;
    progress?: number;
    status?: NotificationHubJobStatus;
    type: NotificationHubJobType;
    updatedAt?: Date;
}

// @public
export type NotificationHubJobPoller = SimplePollerLike<OperationState<NotificationHubJob>, NotificationHubJob>;

// @public
export type NotificationHubJobStatus =
/**
* Indicates that the NotificationHubJob was accepted.
*/
"Started"
/**
* Indicates that the NotificationHubJob is currently running. Depending on the amount of data,
* a job may stay in this state for several hours.
*/
| "Running"
/**
* Indicates that the NotificationHubJob was completed successfully. Any output
* will be ready where configured via the NotificationHubJob object.
*/
| "Completed"
/**
* Indicates that the NotificationHubJob has failed.
*/
| "Failed";

// @public
export type NotificationHubJobType =
/**
* Job type to bulk get registrations.
*/
"ExportRegistrations"
/**
* Job type to bulk create registrations.
*/
| "ImportCreateRegistrations"
/**
* Job type to bulk update registrations.
*/
| "ImportUpdateRegistrations"
/**
* Job type to bulk delete registrations.
*/
| "ImportDeleteRegistrations"
/**
* Job type to bulk upsert registrations.
*/
| "ImportUpsertRegistrations";

// @public
export interface NotificationHubsClientOptions extends ClientOptions {
}

// @public
export interface NotificationHubsMessageResponse extends NotificationHubsResponse {
    failureCount: number;
    notificationId?: string;
    results: RegistrationResult[];
    state: NotificationOutcomeState;
    successCount: number;
}

// @public
export interface NotificationHubsResponse {
    correlationId?: string;
    location?: string;
    trackingId?: string;
}

// @public
export interface NotificationOutcome {
    count: number;
    state: string;
}

// @public
export type NotificationOutcomeState = "Enqueued" | "DetailedStateAvailable" | "Processing" | "Completed" | "Abandoned" | "Unknown" | "NoTargetFound" | "Cancelled";

// @public
export interface PolledOperationOptions extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export type PushHandle = BrowserPushChannel | string;

// @public
export type RegistrationChannel = AdmRegistrationChannel | AppleRegistrationChannel | BaiduRegistrationChannel | BrowserRegistrationChannel | FirebaseLegacyRegistrationChannel | FirebaseV1RegistrationChannel | XiaomiRegistrationChannel | WindowsRegistrationChannel;

// @public
export type RegistrationDescription = AdmRegistrationDescription | AdmTemplateRegistrationDescription | AppleRegistrationDescription | AppleTemplateRegistrationDescription | BaiduRegistrationDescription | BaiduTemplateRegistrationDescription | BrowserRegistrationDescription | BrowserTemplateRegistrationDescription | GcmRegistrationDescription | GcmTemplateRegistrationDescription | FcmV1RegistrationDescription | FcmV1TemplateRegistrationDescription | MpnsRegistrationDescription | MpnsTemplateRegistrationDescription | XiaomiRegistrationDescription | XiaomiTemplateRegistrationDescription | WindowsRegistrationDescription | WindowsTemplateRegistrationDescription;

// @public
export interface RegistrationDescriptionCommon {
    etag?: string;
    expirationTime?: Date;
    pushVariables?: Record<string, string>;
    registrationId?: string;
    tags?: string[];
}

// @public
export interface RegistrationQueryLimitOptions extends OperationOptions {
    top?: number;
}

// @public
export interface RegistrationQueryOptions extends RegistrationQueryLimitOptions {
    filter?: string;
}

// @public
export interface RegistrationQueryResponse {
    continuationToken?: string;
    registrations: RegistrationDescription[];
}

// @public
export interface RegistrationResult {
    applicationPlatform: string;
    outcome: string;
    pnsHandle: string;
    registrationId: string;
}

// @public
export type RegistrationType = "Adm" | "AdmTemplate" | "Apple" | "AppleTemplate" | "Baidu" | "BaiduTemplate" | "Browser" | "BrowserTemplate" | "Gcm" | "GcmTemplate" | "FcmV1" | "FcmV1Template" | "Mpns" | "MpnsTemplate" | "Xiaomi" | "XiaomiTemplate" | "Windows" | "WindowsTemplate";

// @public
export interface ScheduleNotificationOptions extends OperationOptions {
    tagExpression?: string;
}

// @public
export interface SendNotificationOptions extends OperationOptions {
    enableTestSend?: boolean;
    tagExpression?: string;
}

// @public
export interface TemplateNotification extends JsonNotification {
    platform: "template";
}

// @public
export interface TemplateRegistrationDescription {
    bodyTemplate: string;
    templateName?: string;
}

// @public
export type WindowsBadgeGlyphType = "none" | "activity" | "alarm" | "alert" | "attention" | "available" | "away" | "busy" | "error" | "newMessage" | "paused" | "playing" | "unavailable";

// @public
export interface WindowsBadgeNativeMessage {
    value: WindowsBadgeGlyphType | number;
}

// @public
export type WindowsContentType = "application/xml" | "application/octet-stream";

// @public
export interface WindowsHeaders extends Record<string, unknown> {
    "X-WNS-Type"?: WnsTypes;
}

// @public
export interface WindowsInstallation extends DeviceTokenInstallation {
    platform: "wns";
}

// @public
export interface WindowsNotification extends NotificationCommon {
    contentType: WindowsContentType;
    platform: "windows";
}

// @public
export interface WindowsRegistrationChannel {
    channelUri: string;
    kind: "windows";
}

// @public
export interface WindowsRegistrationDescription extends WindowsRegistrationDescriptionCommon {
    kind: "Windows";
}

// @public
export interface WindowsRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    channelUri: string;
}

// @public
export interface WindowsTemplateRegistrationDescription extends WindowsTemplateRegistrationDescriptionCommon {
    kind: "WindowsTemplate";
}

// @public
export interface WindowsTemplateRegistrationDescriptionCommon extends WindowsRegistrationDescriptionCommon, TemplateRegistrationDescription {
    wnsHeaders?: Record<string, string>;
}

// @public
export interface WnsNotificationParams {
    body: string;
    headers?: WindowsHeaders;
}

// @public
export type WnsTypes = "wns/toast" | "wns/badge" | "wns/tile" | "wns/raw";

// @public
export interface XiaomiInstallation extends DeviceTokenInstallation {
    platform: "xiaomi";
}

// @public
export interface XiaomiNotification extends JsonNotification {
    platform: "xiaomi";
}

// @public
export interface XiaomiRegistrationChannel {
    kind: "xiaomi";
    xiaomiRegistrationId: string;
}

// @public
export interface XiaomiRegistrationDescription extends XiaomiRegistrationDescriptionCommon {
    kind: "Xiaomi";
}

// @public
export interface XiaomiRegistrationDescriptionCommon extends RegistrationDescriptionCommon {
    xiaomiRegistrationId: string;
}

// @public
export interface XiaomiTemplateRegistrationDescription extends XiaomiTemplateRegistrationDescriptionCommon {
    kind: "XiaomiTemplate";
}

// @public
export interface XiaomiTemplateRegistrationDescriptionCommon extends XiaomiRegistrationDescriptionCommon, TemplateRegistrationDescription {
}

// (No @packageDocumentation comment for this package)

```