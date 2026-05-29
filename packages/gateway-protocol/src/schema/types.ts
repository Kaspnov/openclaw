// Shared types for packages/gateway-protocol/src/schema types behavior.
import type { Static } from "typebox";
import { ProtocolSchemas } from "./protocol-schemas.js";

type ProtocolSchemaName = keyof typeof ProtocolSchemas;
type SchemaType<TName extends ProtocolSchemaName> = Static<(typeof ProtocolSchemas)[TName]>;

/** Public type describing Connect Params for packages/gateway-protocol. */
export type ConnectParams = SchemaType<"ConnectParams">;
/** Public type describing Hello Ok for packages/gateway-protocol. */
export type HelloOk = SchemaType<"HelloOk">;
/** Public type describing Request Frame for packages/gateway-protocol. */
export type RequestFrame = SchemaType<"RequestFrame">;
/** Public type describing Response Frame for packages/gateway-protocol. */
export type ResponseFrame = SchemaType<"ResponseFrame">;
/** Public type describing Event Frame for packages/gateway-protocol. */
export type EventFrame = SchemaType<"EventFrame">;
/** Public type describing Gateway Frame for packages/gateway-protocol. */
export type GatewayFrame = SchemaType<"GatewayFrame">;
/** Public type describing Snapshot for packages/gateway-protocol. */
export type Snapshot = SchemaType<"Snapshot">;
/** Public type describing Presence Entry for packages/gateway-protocol. */
export type PresenceEntry = SchemaType<"PresenceEntry">;
/** Public type describing Error Shape for packages/gateway-protocol. */
export type ErrorShape = SchemaType<"ErrorShape">;
/** Public type describing State Version for packages/gateway-protocol. */
export type StateVersion = SchemaType<"StateVersion">;
/** Public type describing Environment Status for packages/gateway-protocol. */
export type EnvironmentStatus = SchemaType<"EnvironmentStatus">;
/** Public type describing Environment Summary for packages/gateway-protocol. */
export type EnvironmentSummary = SchemaType<"EnvironmentSummary">;
/** Public type describing Environments List Params for packages/gateway-protocol. */
export type EnvironmentsListParams = SchemaType<"EnvironmentsListParams">;
/** Public type describing Environments List Result for packages/gateway-protocol. */
export type EnvironmentsListResult = SchemaType<"EnvironmentsListResult">;
/** Public type describing Environments Status Params for packages/gateway-protocol. */
export type EnvironmentsStatusParams = SchemaType<"EnvironmentsStatusParams">;
/** Public type describing Environments Status Result for packages/gateway-protocol. */
export type EnvironmentsStatusResult = SchemaType<"EnvironmentsStatusResult">;
/** Public type describing Agent Event for packages/gateway-protocol. */
export type AgentEvent = SchemaType<"AgentEvent">;
/** Public type describing Agent Identity Params for packages/gateway-protocol. */
export type AgentIdentityParams = SchemaType<"AgentIdentityParams">;
/** Public type describing Agent Identity Result for packages/gateway-protocol. */
export type AgentIdentityResult = SchemaType<"AgentIdentityResult">;
/** Public type describing Message Action Params for packages/gateway-protocol. */
export type MessageActionParams = SchemaType<"MessageActionParams">;
/** Public type describing Poll Params for packages/gateway-protocol. */
export type PollParams = SchemaType<"PollParams">;
/** Public type describing Agent Wait Params for packages/gateway-protocol. */
export type AgentWaitParams = SchemaType<"AgentWaitParams">;
/** Public type describing Wake Params for packages/gateway-protocol. */
export type WakeParams = SchemaType<"WakeParams">;
/** Public type describing Node Pair Request Params for packages/gateway-protocol. */
export type NodePairRequestParams = SchemaType<"NodePairRequestParams">;
/** Public type describing Node Pair List Params for packages/gateway-protocol. */
export type NodePairListParams = SchemaType<"NodePairListParams">;
/** Public type describing Node Pair Approve Params for packages/gateway-protocol. */
export type NodePairApproveParams = SchemaType<"NodePairApproveParams">;
/** Public type describing Node Pair Reject Params for packages/gateway-protocol. */
export type NodePairRejectParams = SchemaType<"NodePairRejectParams">;
/** Public type describing Node Pair Remove Params for packages/gateway-protocol. */
export type NodePairRemoveParams = SchemaType<"NodePairRemoveParams">;
/** Public type describing Node Pair Verify Params for packages/gateway-protocol. */
export type NodePairVerifyParams = SchemaType<"NodePairVerifyParams">;
/** Public type describing Node Rename Params for packages/gateway-protocol. */
export type NodeRenameParams = SchemaType<"NodeRenameParams">;
/** Public type describing Node List Params for packages/gateway-protocol. */
export type NodeListParams = SchemaType<"NodeListParams">;
/** Public type describing Node Pending Ack Params for packages/gateway-protocol. */
export type NodePendingAckParams = SchemaType<"NodePendingAckParams">;
/** Public type describing Node Describe Params for packages/gateway-protocol. */
export type NodeDescribeParams = SchemaType<"NodeDescribeParams">;
/** Public type describing Node Invoke Params for packages/gateway-protocol. */
export type NodeInvokeParams = SchemaType<"NodeInvokeParams">;
/** Public type describing Node Invoke Result Params for packages/gateway-protocol. */
export type NodeInvokeResultParams = SchemaType<"NodeInvokeResultParams">;
/** Public type describing Node Event Params for packages/gateway-protocol. */
export type NodeEventParams = SchemaType<"NodeEventParams">;
/** Public type describing Node Event Result for packages/gateway-protocol. */
export type NodeEventResult = SchemaType<"NodeEventResult">;
/** Public type describing Node Presence Alive Payload for packages/gateway-protocol. */
export type NodePresenceAlivePayload = SchemaType<"NodePresenceAlivePayload">;
/** Public type describing Node Presence Alive Reason for packages/gateway-protocol. */
export type NodePresenceAliveReason = SchemaType<"NodePresenceAliveReason">;
/** Public type describing Node Pending Drain Params for packages/gateway-protocol. */
export type NodePendingDrainParams = SchemaType<"NodePendingDrainParams">;
/** Public type describing Node Pending Drain Result for packages/gateway-protocol. */
export type NodePendingDrainResult = SchemaType<"NodePendingDrainResult">;
/** Public type describing Node Pending Enqueue Params for packages/gateway-protocol. */
export type NodePendingEnqueueParams = SchemaType<"NodePendingEnqueueParams">;
/** Public type describing Node Pending Enqueue Result for packages/gateway-protocol. */
export type NodePendingEnqueueResult = SchemaType<"NodePendingEnqueueResult">;
/** Public type describing Push Test Params for packages/gateway-protocol. */
export type PushTestParams = SchemaType<"PushTestParams">;
/** Public type describing Push Test Result for packages/gateway-protocol. */
export type PushTestResult = SchemaType<"PushTestResult">;
/** Public type describing Sessions List Params for packages/gateway-protocol. */
export type SessionsListParams = SchemaType<"SessionsListParams">;
/** Public type describing Sessions Cleanup Params for packages/gateway-protocol. */
export type SessionsCleanupParams = SchemaType<"SessionsCleanupParams">;
/** Public type describing Sessions Preview Params for packages/gateway-protocol. */
export type SessionsPreviewParams = SchemaType<"SessionsPreviewParams">;
/** Public type describing Sessions Describe Params for packages/gateway-protocol. */
export type SessionsDescribeParams = SchemaType<"SessionsDescribeParams">;
/** Public type describing Sessions Resolve Params for packages/gateway-protocol. */
export type SessionsResolveParams = SchemaType<"SessionsResolveParams">;
/** Public type describing Session Compaction Checkpoint for packages/gateway-protocol. */
export type SessionCompactionCheckpoint = SchemaType<"SessionCompactionCheckpoint">;
/** Public type describing Session Operation Event for packages/gateway-protocol. */
export type SessionOperationEvent = SchemaType<"SessionOperationEvent">;
/** Public type describing Sessions Compaction List Params for packages/gateway-protocol. */
export type SessionsCompactionListParams = SchemaType<"SessionsCompactionListParams">;
/** Public type describing Sessions Compaction Get Params for packages/gateway-protocol. */
export type SessionsCompactionGetParams = SchemaType<"SessionsCompactionGetParams">;
/** Public type describing Sessions Compaction Branch Params for packages/gateway-protocol. */
export type SessionsCompactionBranchParams = SchemaType<"SessionsCompactionBranchParams">;
/** Public type describing Sessions Compaction Restore Params for packages/gateway-protocol. */
export type SessionsCompactionRestoreParams = SchemaType<"SessionsCompactionRestoreParams">;
/** Public type describing Sessions Compaction List Result for packages/gateway-protocol. */
export type SessionsCompactionListResult = SchemaType<"SessionsCompactionListResult">;
/** Public type describing Sessions Compaction Get Result for packages/gateway-protocol. */
export type SessionsCompactionGetResult = SchemaType<"SessionsCompactionGetResult">;
/** Public type describing Sessions Compaction Branch Result for packages/gateway-protocol. */
export type SessionsCompactionBranchResult = SchemaType<"SessionsCompactionBranchResult">;
/** Public type describing Sessions Compaction Restore Result for packages/gateway-protocol. */
export type SessionsCompactionRestoreResult = SchemaType<"SessionsCompactionRestoreResult">;
/** Public type describing Sessions Create Params for packages/gateway-protocol. */
export type SessionsCreateParams = SchemaType<"SessionsCreateParams">;
/** Public type describing Sessions Send Params for packages/gateway-protocol. */
export type SessionsSendParams = SchemaType<"SessionsSendParams">;
/** Public type describing Sessions Messages Subscribe Params for packages/gateway-protocol. */
export type SessionsMessagesSubscribeParams = SchemaType<"SessionsMessagesSubscribeParams">;
/** Public type describing Sessions Messages Unsubscribe Params for packages/gateway-protocol. */
export type SessionsMessagesUnsubscribeParams = SchemaType<"SessionsMessagesUnsubscribeParams">;
/** Public type describing Sessions Abort Params for packages/gateway-protocol. */
export type SessionsAbortParams = SchemaType<"SessionsAbortParams">;
/** Public type describing Sessions Patch Params for packages/gateway-protocol. */
export type SessionsPatchParams = SchemaType<"SessionsPatchParams">;
/** Public type describing Sessions Plugin Patch Params for packages/gateway-protocol. */
export type SessionsPluginPatchParams = SchemaType<"SessionsPluginPatchParams">;
/** Public type describing Sessions Plugin Patch Result for packages/gateway-protocol. */
export type SessionsPluginPatchResult = SchemaType<"SessionsPluginPatchResult">;
/** Public type describing Sessions Reset Params for packages/gateway-protocol. */
export type SessionsResetParams = SchemaType<"SessionsResetParams">;
/** Public type describing Sessions Delete Params for packages/gateway-protocol. */
export type SessionsDeleteParams = SchemaType<"SessionsDeleteParams">;
/** Public type describing Sessions Compact Params for packages/gateway-protocol. */
export type SessionsCompactParams = SchemaType<"SessionsCompactParams">;
/** Public type describing Sessions Usage Params for packages/gateway-protocol. */
export type SessionsUsageParams = SchemaType<"SessionsUsageParams">;
/** Public type describing Task Summary for packages/gateway-protocol. */
export type TaskSummary = SchemaType<"TaskSummary">;
/** Public type describing Tasks List Params for packages/gateway-protocol. */
export type TasksListParams = SchemaType<"TasksListParams">;
/** Public type describing Tasks List Result for packages/gateway-protocol. */
export type TasksListResult = SchemaType<"TasksListResult">;
/** Public type describing Tasks Get Params for packages/gateway-protocol. */
export type TasksGetParams = SchemaType<"TasksGetParams">;
/** Public type describing Tasks Get Result for packages/gateway-protocol. */
export type TasksGetResult = SchemaType<"TasksGetResult">;
/** Public type describing Tasks Cancel Params for packages/gateway-protocol. */
export type TasksCancelParams = SchemaType<"TasksCancelParams">;
/** Public type describing Tasks Cancel Result for packages/gateway-protocol. */
export type TasksCancelResult = SchemaType<"TasksCancelResult">;
/** Public type describing Config Get Params for packages/gateway-protocol. */
export type ConfigGetParams = SchemaType<"ConfigGetParams">;
/** Public type describing Config Set Params for packages/gateway-protocol. */
export type ConfigSetParams = SchemaType<"ConfigSetParams">;
/** Public type describing Config Apply Params for packages/gateway-protocol. */
export type ConfigApplyParams = SchemaType<"ConfigApplyParams">;
/** Public type describing Config Patch Params for packages/gateway-protocol. */
export type ConfigPatchParams = SchemaType<"ConfigPatchParams">;
/** Public type describing Config Schema Params for packages/gateway-protocol. */
export type ConfigSchemaParams = SchemaType<"ConfigSchemaParams">;
/** Public type describing Config Schema Lookup Params for packages/gateway-protocol. */
export type ConfigSchemaLookupParams = SchemaType<"ConfigSchemaLookupParams">;
/** Public type describing Config Schema Response for packages/gateway-protocol. */
export type ConfigSchemaResponse = SchemaType<"ConfigSchemaResponse">;
/** Public type describing Config Schema Lookup Result for packages/gateway-protocol. */
export type ConfigSchemaLookupResult = SchemaType<"ConfigSchemaLookupResult">;
/** Public type describing Update Status Params for packages/gateway-protocol. */
export type UpdateStatusParams = SchemaType<"UpdateStatusParams">;
/** Public type describing Wizard Start Params for packages/gateway-protocol. */
export type WizardStartParams = SchemaType<"WizardStartParams">;
/** Public type describing Wizard Next Params for packages/gateway-protocol. */
export type WizardNextParams = SchemaType<"WizardNextParams">;
/** Public type describing Wizard Cancel Params for packages/gateway-protocol. */
export type WizardCancelParams = SchemaType<"WizardCancelParams">;
/** Public type describing Wizard Status Params for packages/gateway-protocol. */
export type WizardStatusParams = SchemaType<"WizardStatusParams">;
/** Public type describing Wizard Step for packages/gateway-protocol. */
export type WizardStep = SchemaType<"WizardStep">;
/** Public type describing Wizard Next Result for packages/gateway-protocol. */
export type WizardNextResult = SchemaType<"WizardNextResult">;
/** Public type describing Wizard Start Result for packages/gateway-protocol. */
export type WizardStartResult = SchemaType<"WizardStartResult">;
/** Public type describing Wizard Status Result for packages/gateway-protocol. */
export type WizardStatusResult = SchemaType<"WizardStatusResult">;
/** Public type describing Talk Event for packages/gateway-protocol. */
export type TalkEvent = SchemaType<"TalkEvent">;
/** Public type describing Talk Mode Params for packages/gateway-protocol. */
export type TalkModeParams = SchemaType<"TalkModeParams">;
/** Public type describing Talk Catalog Params for packages/gateway-protocol. */
export type TalkCatalogParams = SchemaType<"TalkCatalogParams">;
/** Public type describing Talk Catalog Result for packages/gateway-protocol. */
export type TalkCatalogResult = SchemaType<"TalkCatalogResult">;
/** Public type describing Talk Config Params for packages/gateway-protocol. */
export type TalkConfigParams = SchemaType<"TalkConfigParams">;
/** Public type describing Talk Config Result for packages/gateway-protocol. */
export type TalkConfigResult = SchemaType<"TalkConfigResult">;
/** Public type describing Talk Client Create Params for packages/gateway-protocol. */
export type TalkClientCreateParams = SchemaType<"TalkClientCreateParams">;
/** Public type describing Talk Client Create Result for packages/gateway-protocol. */
export type TalkClientCreateResult = SchemaType<"TalkClientCreateResult">;
/** Public type describing Talk Client Steer Params for packages/gateway-protocol. */
export type TalkClientSteerParams = SchemaType<"TalkClientSteerParams">;
/** Public type describing Talk Agent Control Result for packages/gateway-protocol. */
export type TalkAgentControlResult = SchemaType<"TalkAgentControlResult">;
/** Public type describing Talk Client Tool Call Params for packages/gateway-protocol. */
export type TalkClientToolCallParams = SchemaType<"TalkClientToolCallParams">;
/** Public type describing Talk Client Tool Call Result for packages/gateway-protocol. */
export type TalkClientToolCallResult = SchemaType<"TalkClientToolCallResult">;
/** Public type describing Talk Session Create Params for packages/gateway-protocol. */
export type TalkSessionCreateParams = SchemaType<"TalkSessionCreateParams">;
/** Public type describing Talk Session Create Result for packages/gateway-protocol. */
export type TalkSessionCreateResult = SchemaType<"TalkSessionCreateResult">;
/** Public type describing Talk Session Join Params for packages/gateway-protocol. */
export type TalkSessionJoinParams = SchemaType<"TalkSessionJoinParams">;
/** Public type describing Talk Session Join Result for packages/gateway-protocol. */
export type TalkSessionJoinResult = SchemaType<"TalkSessionJoinResult">;
/** Public type describing Talk Session Append Audio Params for packages/gateway-protocol. */
export type TalkSessionAppendAudioParams = SchemaType<"TalkSessionAppendAudioParams">;
/** Public type describing Talk Session Turn Params for packages/gateway-protocol. */
export type TalkSessionTurnParams = SchemaType<"TalkSessionTurnParams">;
/** Public type describing Talk Session Cancel Turn Params for packages/gateway-protocol. */
export type TalkSessionCancelTurnParams = SchemaType<"TalkSessionCancelTurnParams">;
/** Public type describing Talk Session Cancel Output Params for packages/gateway-protocol. */
export type TalkSessionCancelOutputParams = SchemaType<"TalkSessionCancelOutputParams">;
/** Public type describing Talk Session Turn Result for packages/gateway-protocol. */
export type TalkSessionTurnResult = SchemaType<"TalkSessionTurnResult">;
/** Public type describing Talk Session Steer Params for packages/gateway-protocol. */
export type TalkSessionSteerParams = SchemaType<"TalkSessionSteerParams">;
/** Public type describing Talk Session Submit Tool Result Params for packages/gateway-protocol. */
export type TalkSessionSubmitToolResultParams = SchemaType<"TalkSessionSubmitToolResultParams">;
/** Public type describing Talk Session Close Params for packages/gateway-protocol. */
export type TalkSessionCloseParams = SchemaType<"TalkSessionCloseParams">;
/** Public type describing Talk Session Ok Result for packages/gateway-protocol. */
export type TalkSessionOkResult = SchemaType<"TalkSessionOkResult">;
/** Public type describing Talk Speak Params for packages/gateway-protocol. */
export type TalkSpeakParams = SchemaType<"TalkSpeakParams">;
/** Public type describing Talk Speak Result for packages/gateway-protocol. */
export type TalkSpeakResult = SchemaType<"TalkSpeakResult">;
/** Public type describing Channels Status Params for packages/gateway-protocol. */
export type ChannelsStatusParams = SchemaType<"ChannelsStatusParams">;
/** Public type describing Channels Status Result for packages/gateway-protocol. */
export type ChannelsStatusResult = SchemaType<"ChannelsStatusResult">;
/** Public type describing Channels Start Params for packages/gateway-protocol. */
export type ChannelsStartParams = SchemaType<"ChannelsStartParams">;
/** Public type describing Channels Stop Params for packages/gateway-protocol. */
export type ChannelsStopParams = SchemaType<"ChannelsStopParams">;
/** Public type describing Channels Logout Params for packages/gateway-protocol. */
export type ChannelsLogoutParams = SchemaType<"ChannelsLogoutParams">;
/** Public type describing Web Login Start Params for packages/gateway-protocol. */
export type WebLoginStartParams = SchemaType<"WebLoginStartParams">;
/** Public type describing Web Login Wait Params for packages/gateway-protocol. */
export type WebLoginWaitParams = SchemaType<"WebLoginWaitParams">;
/** Public type describing Agent Summary for packages/gateway-protocol. */
export type AgentSummary = SchemaType<"AgentSummary">;
/** Public type describing Agents File Entry for packages/gateway-protocol. */
export type AgentsFileEntry = SchemaType<"AgentsFileEntry">;
/** Public type describing Agents Create Params for packages/gateway-protocol. */
export type AgentsCreateParams = SchemaType<"AgentsCreateParams">;
/** Public type describing Agents Create Result for packages/gateway-protocol. */
export type AgentsCreateResult = SchemaType<"AgentsCreateResult">;
/** Public type describing Agents Update Params for packages/gateway-protocol. */
export type AgentsUpdateParams = SchemaType<"AgentsUpdateParams">;
/** Public type describing Agents Update Result for packages/gateway-protocol. */
export type AgentsUpdateResult = SchemaType<"AgentsUpdateResult">;
/** Public type describing Agents Delete Params for packages/gateway-protocol. */
export type AgentsDeleteParams = SchemaType<"AgentsDeleteParams">;
/** Public type describing Agents Delete Result for packages/gateway-protocol. */
export type AgentsDeleteResult = SchemaType<"AgentsDeleteResult">;
/** Public type describing Agents Files List Params for packages/gateway-protocol. */
export type AgentsFilesListParams = SchemaType<"AgentsFilesListParams">;
/** Public type describing Agents Files List Result for packages/gateway-protocol. */
export type AgentsFilesListResult = SchemaType<"AgentsFilesListResult">;
/** Public type describing Agents Files Get Params for packages/gateway-protocol. */
export type AgentsFilesGetParams = SchemaType<"AgentsFilesGetParams">;
/** Public type describing Agents Files Get Result for packages/gateway-protocol. */
export type AgentsFilesGetResult = SchemaType<"AgentsFilesGetResult">;
/** Public type describing Agents Files Set Params for packages/gateway-protocol. */
export type AgentsFilesSetParams = SchemaType<"AgentsFilesSetParams">;
/** Public type describing Agents Files Set Result for packages/gateway-protocol. */
export type AgentsFilesSetResult = SchemaType<"AgentsFilesSetResult">;
/** Public type describing Artifact Summary for packages/gateway-protocol. */
export type ArtifactSummary = SchemaType<"ArtifactSummary">;
/** Public type describing Artifacts List Params for packages/gateway-protocol. */
export type ArtifactsListParams = SchemaType<"ArtifactsListParams">;
/** Public type describing Artifacts List Result for packages/gateway-protocol. */
export type ArtifactsListResult = SchemaType<"ArtifactsListResult">;
/** Public type describing Artifacts Get Params for packages/gateway-protocol. */
export type ArtifactsGetParams = SchemaType<"ArtifactsGetParams">;
/** Public type describing Artifacts Get Result for packages/gateway-protocol. */
export type ArtifactsGetResult = SchemaType<"ArtifactsGetResult">;
/** Public type describing Artifacts Download Params for packages/gateway-protocol. */
export type ArtifactsDownloadParams = SchemaType<"ArtifactsDownloadParams">;
/** Public type describing Artifacts Download Result for packages/gateway-protocol. */
export type ArtifactsDownloadResult = SchemaType<"ArtifactsDownloadResult">;
/** Public type describing Agents List Params for packages/gateway-protocol. */
export type AgentsListParams = SchemaType<"AgentsListParams">;
/** Public type describing Agents List Result for packages/gateway-protocol. */
export type AgentsListResult = SchemaType<"AgentsListResult">;
/** Public type describing Model Choice for packages/gateway-protocol. */
export type ModelChoice = SchemaType<"ModelChoice">;
/** Public type describing Models List Params for packages/gateway-protocol. */
export type ModelsListParams = SchemaType<"ModelsListParams">;
/** Public type describing Models List Result for packages/gateway-protocol. */
export type ModelsListResult = SchemaType<"ModelsListResult">;
/** Public type describing Command Entry for packages/gateway-protocol. */
export type CommandEntry = SchemaType<"CommandEntry">;
/** Public type describing Commands List Params for packages/gateway-protocol. */
export type CommandsListParams = SchemaType<"CommandsListParams">;
/** Public type describing Commands List Result for packages/gateway-protocol. */
export type CommandsListResult = SchemaType<"CommandsListResult">;
/** Public type describing Plugin Control Ui Descriptor for packages/gateway-protocol. */
export type PluginControlUiDescriptor = SchemaType<"PluginControlUiDescriptor">;
/** Public type describing Plugins Ui Descriptors Params for packages/gateway-protocol. */
export type PluginsUiDescriptorsParams = SchemaType<"PluginsUiDescriptorsParams">;
/** Public type describing Plugins Ui Descriptors Result for packages/gateway-protocol. */
export type PluginsUiDescriptorsResult = SchemaType<"PluginsUiDescriptorsResult">;
/** Public type describing Plugins Session Action Params for packages/gateway-protocol. */
export type PluginsSessionActionParams = SchemaType<"PluginsSessionActionParams">;
/** Public type describing Plugins Session Action Result for packages/gateway-protocol. */
export type PluginsSessionActionResult = SchemaType<"PluginsSessionActionResult">;
/** Public type describing Skills Status Params for packages/gateway-protocol. */
export type SkillsStatusParams = SchemaType<"SkillsStatusParams">;
/** Public type describing Tools Catalog Params for packages/gateway-protocol. */
export type ToolsCatalogParams = SchemaType<"ToolsCatalogParams">;
/** Public type describing Tool Catalog Profile for packages/gateway-protocol. */
export type ToolCatalogProfile = SchemaType<"ToolCatalogProfile">;
/** Public type describing Tool Catalog Entry for packages/gateway-protocol. */
export type ToolCatalogEntry = SchemaType<"ToolCatalogEntry">;
/** Public type describing Tool Catalog Group for packages/gateway-protocol. */
export type ToolCatalogGroup = SchemaType<"ToolCatalogGroup">;
/** Public type describing Tools Catalog Result for packages/gateway-protocol. */
export type ToolsCatalogResult = SchemaType<"ToolsCatalogResult">;
/** Public type describing Tools Effective Params for packages/gateway-protocol. */
export type ToolsEffectiveParams = SchemaType<"ToolsEffectiveParams">;
/** Public type describing Tools Effective Entry for packages/gateway-protocol. */
export type ToolsEffectiveEntry = SchemaType<"ToolsEffectiveEntry">;
/** Public type describing Tools Effective Group for packages/gateway-protocol. */
export type ToolsEffectiveGroup = SchemaType<"ToolsEffectiveGroup">;
/** Public type describing Tools Effective Notice for packages/gateway-protocol. */
export type ToolsEffectiveNotice = SchemaType<"ToolsEffectiveNotice">;
/** Public type describing Tools Effective Result for packages/gateway-protocol. */
export type ToolsEffectiveResult = SchemaType<"ToolsEffectiveResult">;
/** Public type describing Tools Invoke Params for packages/gateway-protocol. */
export type ToolsInvokeParams = SchemaType<"ToolsInvokeParams">;
/** Public type describing Tools Invoke Result for packages/gateway-protocol. */
export type ToolsInvokeResult = SchemaType<"ToolsInvokeResult">;
/** Public type describing Skills Bins Params for packages/gateway-protocol. */
export type SkillsBinsParams = SchemaType<"SkillsBinsParams">;
/** Public type describing Skills Bins Result for packages/gateway-protocol. */
export type SkillsBinsResult = SchemaType<"SkillsBinsResult">;
/** Public type describing Skills Search Params for packages/gateway-protocol. */
export type SkillsSearchParams = SchemaType<"SkillsSearchParams">;
/** Public type describing Skills Search Result for packages/gateway-protocol. */
export type SkillsSearchResult = SchemaType<"SkillsSearchResult">;
/** Public type describing Skills Detail Params for packages/gateway-protocol. */
export type SkillsDetailParams = SchemaType<"SkillsDetailParams">;
/** Public type describing Skills Detail Result for packages/gateway-protocol. */
export type SkillsDetailResult = SchemaType<"SkillsDetailResult">;
/** Public type describing Skills Security Verdicts Params for packages/gateway-protocol. */
export type SkillsSecurityVerdictsParams = SchemaType<"SkillsSecurityVerdictsParams">;
/** Public type describing Skills Security Verdicts Result for packages/gateway-protocol. */
export type SkillsSecurityVerdictsResult = SchemaType<"SkillsSecurityVerdictsResult">;
/** Public type describing Skills Skill Card Params for packages/gateway-protocol. */
export type SkillsSkillCardParams = SchemaType<"SkillsSkillCardParams">;
/** Public type describing Skills Skill Card Result for packages/gateway-protocol. */
export type SkillsSkillCardResult = SchemaType<"SkillsSkillCardResult">;
/** Public type describing Skills Upload Begin Params for packages/gateway-protocol. */
export type SkillsUploadBeginParams = SchemaType<"SkillsUploadBeginParams">;
/** Public type describing Skills Upload Chunk Params for packages/gateway-protocol. */
export type SkillsUploadChunkParams = SchemaType<"SkillsUploadChunkParams">;
/** Public type describing Skills Upload Commit Params for packages/gateway-protocol. */
export type SkillsUploadCommitParams = SchemaType<"SkillsUploadCommitParams">;
/** Public type describing Skills Install Params for packages/gateway-protocol. */
export type SkillsInstallParams = SchemaType<"SkillsInstallParams">;
/** Public type describing Skills Update Params for packages/gateway-protocol. */
export type SkillsUpdateParams = SchemaType<"SkillsUpdateParams">;
/** Public type describing Cron Job for packages/gateway-protocol. */
export type CronJob = SchemaType<"CronJob">;
/** Public type describing Cron List Params for packages/gateway-protocol. */
export type CronListParams = SchemaType<"CronListParams">;
/** Public type describing Cron Status Params for packages/gateway-protocol. */
export type CronStatusParams = SchemaType<"CronStatusParams">;
/** Public type describing Cron Get Params for packages/gateway-protocol. */
export type CronGetParams = SchemaType<"CronGetParams">;
/** Public type describing Cron Add Params for packages/gateway-protocol. */
export type CronAddParams = SchemaType<"CronAddParams">;
/** Public type describing Cron Update Params for packages/gateway-protocol. */
export type CronUpdateParams = SchemaType<"CronUpdateParams">;
/** Public type describing Cron Remove Params for packages/gateway-protocol. */
export type CronRemoveParams = SchemaType<"CronRemoveParams">;
/** Public type describing Cron Run Params for packages/gateway-protocol. */
export type CronRunParams = SchemaType<"CronRunParams">;
/** Public type describing Cron Runs Params for packages/gateway-protocol. */
export type CronRunsParams = SchemaType<"CronRunsParams">;
/** Public type describing Cron Run Log Entry for packages/gateway-protocol. */
export type CronRunLogEntry = SchemaType<"CronRunLogEntry">;
/** Public type describing Logs Tail Params for packages/gateway-protocol. */
export type LogsTailParams = SchemaType<"LogsTailParams">;
/** Public type describing Logs Tail Result for packages/gateway-protocol. */
export type LogsTailResult = SchemaType<"LogsTailResult">;
/** Public type describing Exec Approvals Get Params for packages/gateway-protocol. */
export type ExecApprovalsGetParams = SchemaType<"ExecApprovalsGetParams">;
/** Public type describing Exec Approvals Set Params for packages/gateway-protocol. */
export type ExecApprovalsSetParams = SchemaType<"ExecApprovalsSetParams">;
/** Public type describing Exec Approvals Node Get Params for packages/gateway-protocol. */
export type ExecApprovalsNodeGetParams = SchemaType<"ExecApprovalsNodeGetParams">;
/** Public type describing Exec Approvals Node Set Params for packages/gateway-protocol. */
export type ExecApprovalsNodeSetParams = SchemaType<"ExecApprovalsNodeSetParams">;
/** Public type describing Exec Approvals Snapshot for packages/gateway-protocol. */
export type ExecApprovalsSnapshot = SchemaType<"ExecApprovalsSnapshot">;
/** Public type describing Exec Approval Get Params for packages/gateway-protocol. */
export type ExecApprovalGetParams = SchemaType<"ExecApprovalGetParams">;
/** Public type describing Exec Approval Request Params for packages/gateway-protocol. */
export type ExecApprovalRequestParams = SchemaType<"ExecApprovalRequestParams">;
/** Public type describing Exec Approval Resolve Params for packages/gateway-protocol. */
export type ExecApprovalResolveParams = SchemaType<"ExecApprovalResolveParams">;
/** Public type describing Plugin Approval Request Params for packages/gateway-protocol. */
export type PluginApprovalRequestParams = SchemaType<"PluginApprovalRequestParams">;
/** Public type describing Plugin Approval Resolve Params for packages/gateway-protocol. */
export type PluginApprovalResolveParams = SchemaType<"PluginApprovalResolveParams">;
/** Public type describing Device Pair List Params for packages/gateway-protocol. */
export type DevicePairListParams = SchemaType<"DevicePairListParams">;
/** Public type describing Device Pair Approve Params for packages/gateway-protocol. */
export type DevicePairApproveParams = SchemaType<"DevicePairApproveParams">;
/** Public type describing Device Pair Reject Params for packages/gateway-protocol. */
export type DevicePairRejectParams = SchemaType<"DevicePairRejectParams">;
/** Public type describing Device Pair Remove Params for packages/gateway-protocol. */
export type DevicePairRemoveParams = SchemaType<"DevicePairRemoveParams">;
/** Public type describing Device Token Rotate Params for packages/gateway-protocol. */
export type DeviceTokenRotateParams = SchemaType<"DeviceTokenRotateParams">;
/** Public type describing Device Token Revoke Params for packages/gateway-protocol. */
export type DeviceTokenRevokeParams = SchemaType<"DeviceTokenRevokeParams">;
/** Public type describing Chat Abort Params for packages/gateway-protocol. */
export type ChatAbortParams = SchemaType<"ChatAbortParams">;
/** Public type describing Chat Inject Params for packages/gateway-protocol. */
export type ChatInjectParams = SchemaType<"ChatInjectParams">;
/** Public type describing Chat Event for packages/gateway-protocol. */
export type ChatEvent = SchemaType<"ChatEvent">;
/** Public type describing Update Run Params for packages/gateway-protocol. */
export type UpdateRunParams = SchemaType<"UpdateRunParams">;
/** Public type describing Tick Event for packages/gateway-protocol. */
export type TickEvent = SchemaType<"TickEvent">;
/** Public type describing Shutdown Event for packages/gateway-protocol. */
export type ShutdownEvent = SchemaType<"ShutdownEvent">;
