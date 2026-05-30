// Schema-derived TypeScript aliases for the gateway protocol public API.
import type { Static } from "typebox";
import { ProtocolSchemas } from "./protocol-schemas.js";

type ProtocolSchemaName = keyof typeof ProtocolSchemas;
type SchemaType<TName extends ProtocolSchemaName> = Static<(typeof ProtocolSchemas)[TName]>;

/** Public alias for the Connect Params schema-derived TypeScript type. */
export type ConnectParams = SchemaType<"ConnectParams">;
/** Public alias for the Hello Ok schema-derived TypeScript type. */
export type HelloOk = SchemaType<"HelloOk">;
/** Public alias for the Request Frame schema-derived TypeScript type. */
export type RequestFrame = SchemaType<"RequestFrame">;
/** Public alias for the Response Frame schema-derived TypeScript type. */
export type ResponseFrame = SchemaType<"ResponseFrame">;
/** Public alias for the Event Frame schema-derived TypeScript type. */
export type EventFrame = SchemaType<"EventFrame">;
/** Public alias for the Gateway Frame schema-derived TypeScript type. */
export type GatewayFrame = SchemaType<"GatewayFrame">;
/** Public alias for the Snapshot schema-derived TypeScript type. */
export type Snapshot = SchemaType<"Snapshot">;
/** Public alias for the Presence Entry schema-derived TypeScript type. */
export type PresenceEntry = SchemaType<"PresenceEntry">;
/** Public alias for the Error Shape schema-derived TypeScript type. */
export type ErrorShape = SchemaType<"ErrorShape">;
/** Public alias for the State Version schema-derived TypeScript type. */
export type StateVersion = SchemaType<"StateVersion">;
/** Public alias for the Environment Status schema-derived TypeScript type. */
export type EnvironmentStatus = SchemaType<"EnvironmentStatus">;
/** Public alias for the Environment Summary schema-derived TypeScript type. */
export type EnvironmentSummary = SchemaType<"EnvironmentSummary">;
/** Public alias for the Environments List Params schema-derived TypeScript type. */
export type EnvironmentsListParams = SchemaType<"EnvironmentsListParams">;
/** Public alias for the Environments List Result schema-derived TypeScript type. */
export type EnvironmentsListResult = SchemaType<"EnvironmentsListResult">;
/** Public alias for the Environments Status Params schema-derived TypeScript type. */
export type EnvironmentsStatusParams = SchemaType<"EnvironmentsStatusParams">;
/** Public alias for the Environments Status Result schema-derived TypeScript type. */
export type EnvironmentsStatusResult = SchemaType<"EnvironmentsStatusResult">;
/** Public alias for the Agent Event schema-derived TypeScript type. */
export type AgentEvent = SchemaType<"AgentEvent">;
/** Public alias for the Agent Identity Params schema-derived TypeScript type. */
export type AgentIdentityParams = SchemaType<"AgentIdentityParams">;
/** Public alias for the Agent Identity Result schema-derived TypeScript type. */
export type AgentIdentityResult = SchemaType<"AgentIdentityResult">;
/** Public alias for the Message Action Params schema-derived TypeScript type. */
export type MessageActionParams = SchemaType<"MessageActionParams">;
/** Public alias for the Poll Params schema-derived TypeScript type. */
export type PollParams = SchemaType<"PollParams">;
/** Public alias for the Agent Wait Params schema-derived TypeScript type. */
export type AgentWaitParams = SchemaType<"AgentWaitParams">;
/** Public alias for the Wake Params schema-derived TypeScript type. */
export type WakeParams = SchemaType<"WakeParams">;
/** Public alias for the Node Pair Request Params schema-derived TypeScript type. */
export type NodePairRequestParams = SchemaType<"NodePairRequestParams">;
/** Public alias for the Node Pair List Params schema-derived TypeScript type. */
export type NodePairListParams = SchemaType<"NodePairListParams">;
/** Public alias for the Node Pair Approve Params schema-derived TypeScript type. */
export type NodePairApproveParams = SchemaType<"NodePairApproveParams">;
/** Public alias for the Node Pair Reject Params schema-derived TypeScript type. */
export type NodePairRejectParams = SchemaType<"NodePairRejectParams">;
/** Public alias for the Node Pair Remove Params schema-derived TypeScript type. */
export type NodePairRemoveParams = SchemaType<"NodePairRemoveParams">;
/** Public alias for the Node Pair Verify Params schema-derived TypeScript type. */
export type NodePairVerifyParams = SchemaType<"NodePairVerifyParams">;
/** Public alias for the Node Rename Params schema-derived TypeScript type. */
export type NodeRenameParams = SchemaType<"NodeRenameParams">;
/** Public alias for the Node List Params schema-derived TypeScript type. */
export type NodeListParams = SchemaType<"NodeListParams">;
/** Public alias for the Node Pending Ack Params schema-derived TypeScript type. */
export type NodePendingAckParams = SchemaType<"NodePendingAckParams">;
/** Public alias for the Node Describe Params schema-derived TypeScript type. */
export type NodeDescribeParams = SchemaType<"NodeDescribeParams">;
/** Public alias for the Node Invoke Params schema-derived TypeScript type. */
export type NodeInvokeParams = SchemaType<"NodeInvokeParams">;
/** Public alias for the Node Invoke Result Params schema-derived TypeScript type. */
export type NodeInvokeResultParams = SchemaType<"NodeInvokeResultParams">;
/** Public alias for the Node Event Params schema-derived TypeScript type. */
export type NodeEventParams = SchemaType<"NodeEventParams">;
/** Public alias for the Node Event Result schema-derived TypeScript type. */
export type NodeEventResult = SchemaType<"NodeEventResult">;
/** Public alias for the Node Presence Alive Payload schema-derived TypeScript type. */
export type NodePresenceAlivePayload = SchemaType<"NodePresenceAlivePayload">;
/** Public alias for the Node Presence Alive Reason schema-derived TypeScript type. */
export type NodePresenceAliveReason = SchemaType<"NodePresenceAliveReason">;
/** Public alias for the Node Pending Drain Params schema-derived TypeScript type. */
export type NodePendingDrainParams = SchemaType<"NodePendingDrainParams">;
/** Public alias for the Node Pending Drain Result schema-derived TypeScript type. */
export type NodePendingDrainResult = SchemaType<"NodePendingDrainResult">;
/** Public alias for the Node Pending Enqueue Params schema-derived TypeScript type. */
export type NodePendingEnqueueParams = SchemaType<"NodePendingEnqueueParams">;
/** Public alias for the Node Pending Enqueue Result schema-derived TypeScript type. */
export type NodePendingEnqueueResult = SchemaType<"NodePendingEnqueueResult">;
/** Public alias for the Push Test Params schema-derived TypeScript type. */
export type PushTestParams = SchemaType<"PushTestParams">;
/** Public alias for the Push Test Result schema-derived TypeScript type. */
export type PushTestResult = SchemaType<"PushTestResult">;
/** Public alias for the Sessions List Params schema-derived TypeScript type. */
export type SessionsListParams = SchemaType<"SessionsListParams">;
/** Public alias for the Sessions Cleanup Params schema-derived TypeScript type. */
export type SessionsCleanupParams = SchemaType<"SessionsCleanupParams">;
/** Public alias for the Sessions Preview Params schema-derived TypeScript type. */
export type SessionsPreviewParams = SchemaType<"SessionsPreviewParams">;
/** Public alias for the Sessions Describe Params schema-derived TypeScript type. */
export type SessionsDescribeParams = SchemaType<"SessionsDescribeParams">;
/** Public alias for the Sessions Resolve Params schema-derived TypeScript type. */
export type SessionsResolveParams = SchemaType<"SessionsResolveParams">;
/** Public alias for the Session Compaction Checkpoint schema-derived TypeScript type. */
export type SessionCompactionCheckpoint = SchemaType<"SessionCompactionCheckpoint">;
/** Public alias for the Session Operation Event schema-derived TypeScript type. */
export type SessionOperationEvent = SchemaType<"SessionOperationEvent">;
/** Public alias for the Sessions Compaction List Params schema-derived TypeScript type. */
export type SessionsCompactionListParams = SchemaType<"SessionsCompactionListParams">;
/** Public alias for the Sessions Compaction Get Params schema-derived TypeScript type. */
export type SessionsCompactionGetParams = SchemaType<"SessionsCompactionGetParams">;
/** Public alias for the Sessions Compaction Branch Params schema-derived TypeScript type. */
export type SessionsCompactionBranchParams = SchemaType<"SessionsCompactionBranchParams">;
/** Public alias for the Sessions Compaction Restore Params schema-derived TypeScript type. */
export type SessionsCompactionRestoreParams = SchemaType<"SessionsCompactionRestoreParams">;
/** Public alias for the Sessions Compaction List Result schema-derived TypeScript type. */
export type SessionsCompactionListResult = SchemaType<"SessionsCompactionListResult">;
/** Public alias for the Sessions Compaction Get Result schema-derived TypeScript type. */
export type SessionsCompactionGetResult = SchemaType<"SessionsCompactionGetResult">;
/** Public alias for the Sessions Compaction Branch Result schema-derived TypeScript type. */
export type SessionsCompactionBranchResult = SchemaType<"SessionsCompactionBranchResult">;
/** Public alias for the Sessions Compaction Restore Result schema-derived TypeScript type. */
export type SessionsCompactionRestoreResult = SchemaType<"SessionsCompactionRestoreResult">;
/** Public alias for the Sessions Create Params schema-derived TypeScript type. */
export type SessionsCreateParams = SchemaType<"SessionsCreateParams">;
/** Public alias for the Sessions Send Params schema-derived TypeScript type. */
export type SessionsSendParams = SchemaType<"SessionsSendParams">;
/** Public alias for the Sessions Messages Subscribe Params schema-derived TypeScript type. */
export type SessionsMessagesSubscribeParams = SchemaType<"SessionsMessagesSubscribeParams">;
/** Public alias for the Sessions Messages Unsubscribe Params schema-derived TypeScript type. */
export type SessionsMessagesUnsubscribeParams = SchemaType<"SessionsMessagesUnsubscribeParams">;
/** Public alias for the Sessions Abort Params schema-derived TypeScript type. */
export type SessionsAbortParams = SchemaType<"SessionsAbortParams">;
/** Public alias for the Sessions Patch Params schema-derived TypeScript type. */
export type SessionsPatchParams = SchemaType<"SessionsPatchParams">;
/** Public alias for the Sessions Plugin Patch Params schema-derived TypeScript type. */
export type SessionsPluginPatchParams = SchemaType<"SessionsPluginPatchParams">;
/** Public alias for the Sessions Plugin Patch Result schema-derived TypeScript type. */
export type SessionsPluginPatchResult = SchemaType<"SessionsPluginPatchResult">;
/** Public alias for the Sessions Reset Params schema-derived TypeScript type. */
export type SessionsResetParams = SchemaType<"SessionsResetParams">;
/** Public alias for the Sessions Delete Params schema-derived TypeScript type. */
export type SessionsDeleteParams = SchemaType<"SessionsDeleteParams">;
/** Public alias for the Sessions Compact Params schema-derived TypeScript type. */
export type SessionsCompactParams = SchemaType<"SessionsCompactParams">;
/** Public alias for the Sessions Usage Params schema-derived TypeScript type. */
export type SessionsUsageParams = SchemaType<"SessionsUsageParams">;
/** Public alias for the Task Summary schema-derived TypeScript type. */
export type TaskSummary = SchemaType<"TaskSummary">;
/** Public alias for the Tasks List Params schema-derived TypeScript type. */
export type TasksListParams = SchemaType<"TasksListParams">;
/** Public alias for the Tasks List Result schema-derived TypeScript type. */
export type TasksListResult = SchemaType<"TasksListResult">;
/** Public alias for the Tasks Get Params schema-derived TypeScript type. */
export type TasksGetParams = SchemaType<"TasksGetParams">;
/** Public alias for the Tasks Get Result schema-derived TypeScript type. */
export type TasksGetResult = SchemaType<"TasksGetResult">;
/** Public alias for the Tasks Cancel Params schema-derived TypeScript type. */
export type TasksCancelParams = SchemaType<"TasksCancelParams">;
/** Public alias for the Tasks Cancel Result schema-derived TypeScript type. */
export type TasksCancelResult = SchemaType<"TasksCancelResult">;
/** Public alias for the Config Get Params schema-derived TypeScript type. */
export type ConfigGetParams = SchemaType<"ConfigGetParams">;
/** Public alias for the Config Set Params schema-derived TypeScript type. */
export type ConfigSetParams = SchemaType<"ConfigSetParams">;
/** Public alias for the Config Apply Params schema-derived TypeScript type. */
export type ConfigApplyParams = SchemaType<"ConfigApplyParams">;
/** Public alias for the Config Patch Params schema-derived TypeScript type. */
export type ConfigPatchParams = SchemaType<"ConfigPatchParams">;
/** Public alias for the Config Schema Params schema-derived TypeScript type. */
export type ConfigSchemaParams = SchemaType<"ConfigSchemaParams">;
/** Public alias for the Config Schema Lookup Params schema-derived TypeScript type. */
export type ConfigSchemaLookupParams = SchemaType<"ConfigSchemaLookupParams">;
/** Public alias for the Config Schema Response schema-derived TypeScript type. */
export type ConfigSchemaResponse = SchemaType<"ConfigSchemaResponse">;
/** Public alias for the Config Schema Lookup Result schema-derived TypeScript type. */
export type ConfigSchemaLookupResult = SchemaType<"ConfigSchemaLookupResult">;
/** Public alias for the Update Status Params schema-derived TypeScript type. */
export type UpdateStatusParams = SchemaType<"UpdateStatusParams">;
/** Public alias for the Wizard Start Params schema-derived TypeScript type. */
export type WizardStartParams = SchemaType<"WizardStartParams">;
/** Public alias for the Wizard Next Params schema-derived TypeScript type. */
export type WizardNextParams = SchemaType<"WizardNextParams">;
/** Public alias for the Wizard Cancel Params schema-derived TypeScript type. */
export type WizardCancelParams = SchemaType<"WizardCancelParams">;
/** Public alias for the Wizard Status Params schema-derived TypeScript type. */
export type WizardStatusParams = SchemaType<"WizardStatusParams">;
/** Public alias for the Wizard Step schema-derived TypeScript type. */
export type WizardStep = SchemaType<"WizardStep">;
/** Public alias for the Wizard Next Result schema-derived TypeScript type. */
export type WizardNextResult = SchemaType<"WizardNextResult">;
/** Public alias for the Wizard Start Result schema-derived TypeScript type. */
export type WizardStartResult = SchemaType<"WizardStartResult">;
/** Public alias for the Wizard Status Result schema-derived TypeScript type. */
export type WizardStatusResult = SchemaType<"WizardStatusResult">;
/** Public alias for the Talk Event schema-derived TypeScript type. */
export type TalkEvent = SchemaType<"TalkEvent">;
/** Public alias for the Talk Mode Params schema-derived TypeScript type. */
export type TalkModeParams = SchemaType<"TalkModeParams">;
/** Public alias for the Talk Catalog Params schema-derived TypeScript type. */
export type TalkCatalogParams = SchemaType<"TalkCatalogParams">;
/** Public alias for the Talk Catalog Result schema-derived TypeScript type. */
export type TalkCatalogResult = SchemaType<"TalkCatalogResult">;
/** Public alias for the Talk Config Params schema-derived TypeScript type. */
export type TalkConfigParams = SchemaType<"TalkConfigParams">;
/** Public alias for the Talk Config Result schema-derived TypeScript type. */
export type TalkConfigResult = SchemaType<"TalkConfigResult">;
/** Public alias for the Talk Client Create Params schema-derived TypeScript type. */
export type TalkClientCreateParams = SchemaType<"TalkClientCreateParams">;
/** Public alias for the Talk Client Create Result schema-derived TypeScript type. */
export type TalkClientCreateResult = SchemaType<"TalkClientCreateResult">;
/** Public alias for the Talk Client Steer Params schema-derived TypeScript type. */
export type TalkClientSteerParams = SchemaType<"TalkClientSteerParams">;
/** Public alias for the Talk Agent Control Result schema-derived TypeScript type. */
export type TalkAgentControlResult = SchemaType<"TalkAgentControlResult">;
/** Public alias for the Talk Client Tool Call Params schema-derived TypeScript type. */
export type TalkClientToolCallParams = SchemaType<"TalkClientToolCallParams">;
/** Public alias for the Talk Client Tool Call Result schema-derived TypeScript type. */
export type TalkClientToolCallResult = SchemaType<"TalkClientToolCallResult">;
/** Public alias for the Talk Session Create Params schema-derived TypeScript type. */
export type TalkSessionCreateParams = SchemaType<"TalkSessionCreateParams">;
/** Public alias for the Talk Session Create Result schema-derived TypeScript type. */
export type TalkSessionCreateResult = SchemaType<"TalkSessionCreateResult">;
/** Public alias for the Talk Session Join Params schema-derived TypeScript type. */
export type TalkSessionJoinParams = SchemaType<"TalkSessionJoinParams">;
/** Public alias for the Talk Session Join Result schema-derived TypeScript type. */
export type TalkSessionJoinResult = SchemaType<"TalkSessionJoinResult">;
/** Public alias for the Talk Session Append Audio Params schema-derived TypeScript type. */
export type TalkSessionAppendAudioParams = SchemaType<"TalkSessionAppendAudioParams">;
/** Public alias for the Talk Session Turn Params schema-derived TypeScript type. */
export type TalkSessionTurnParams = SchemaType<"TalkSessionTurnParams">;
/** Public alias for the Talk Session Cancel Turn Params schema-derived TypeScript type. */
export type TalkSessionCancelTurnParams = SchemaType<"TalkSessionCancelTurnParams">;
/** Public alias for the Talk Session Cancel Output Params schema-derived TypeScript type. */
export type TalkSessionCancelOutputParams = SchemaType<"TalkSessionCancelOutputParams">;
/** Public alias for the Talk Session Turn Result schema-derived TypeScript type. */
export type TalkSessionTurnResult = SchemaType<"TalkSessionTurnResult">;
/** Public alias for the Talk Session Steer Params schema-derived TypeScript type. */
export type TalkSessionSteerParams = SchemaType<"TalkSessionSteerParams">;
/** Public alias for the Talk Session Submit Tool Result Params schema-derived TypeScript type. */
export type TalkSessionSubmitToolResultParams = SchemaType<"TalkSessionSubmitToolResultParams">;
/** Public alias for the Talk Session Close Params schema-derived TypeScript type. */
export type TalkSessionCloseParams = SchemaType<"TalkSessionCloseParams">;
/** Public alias for the Talk Session Ok Result schema-derived TypeScript type. */
export type TalkSessionOkResult = SchemaType<"TalkSessionOkResult">;
/** Public alias for the Talk Speak Params schema-derived TypeScript type. */
export type TalkSpeakParams = SchemaType<"TalkSpeakParams">;
/** Public alias for the Talk Speak Result schema-derived TypeScript type. */
export type TalkSpeakResult = SchemaType<"TalkSpeakResult">;
/** Public alias for the Channels Status Params schema-derived TypeScript type. */
export type ChannelsStatusParams = SchemaType<"ChannelsStatusParams">;
/** Public alias for the Channels Status Result schema-derived TypeScript type. */
export type ChannelsStatusResult = SchemaType<"ChannelsStatusResult">;
/** Public alias for the Channels Start Params schema-derived TypeScript type. */
export type ChannelsStartParams = SchemaType<"ChannelsStartParams">;
/** Public alias for the Channels Stop Params schema-derived TypeScript type. */
export type ChannelsStopParams = SchemaType<"ChannelsStopParams">;
/** Public alias for the Channels Logout Params schema-derived TypeScript type. */
export type ChannelsLogoutParams = SchemaType<"ChannelsLogoutParams">;
/** Public alias for the Web Login Start Params schema-derived TypeScript type. */
export type WebLoginStartParams = SchemaType<"WebLoginStartParams">;
/** Public alias for the Web Login Wait Params schema-derived TypeScript type. */
export type WebLoginWaitParams = SchemaType<"WebLoginWaitParams">;
/** Public alias for the Agent Summary schema-derived TypeScript type. */
export type AgentSummary = SchemaType<"AgentSummary">;
/** Public alias for the Agents File Entry schema-derived TypeScript type. */
export type AgentsFileEntry = SchemaType<"AgentsFileEntry">;
/** Public alias for the Agents Create Params schema-derived TypeScript type. */
export type AgentsCreateParams = SchemaType<"AgentsCreateParams">;
/** Public alias for the Agents Create Result schema-derived TypeScript type. */
export type AgentsCreateResult = SchemaType<"AgentsCreateResult">;
/** Public alias for the Agents Update Params schema-derived TypeScript type. */
export type AgentsUpdateParams = SchemaType<"AgentsUpdateParams">;
/** Public alias for the Agents Update Result schema-derived TypeScript type. */
export type AgentsUpdateResult = SchemaType<"AgentsUpdateResult">;
/** Public alias for the Agents Delete Params schema-derived TypeScript type. */
export type AgentsDeleteParams = SchemaType<"AgentsDeleteParams">;
/** Public alias for the Agents Delete Result schema-derived TypeScript type. */
export type AgentsDeleteResult = SchemaType<"AgentsDeleteResult">;
/** Public alias for the Agents Files List Params schema-derived TypeScript type. */
export type AgentsFilesListParams = SchemaType<"AgentsFilesListParams">;
/** Public alias for the Agents Files List Result schema-derived TypeScript type. */
export type AgentsFilesListResult = SchemaType<"AgentsFilesListResult">;
/** Public alias for the Agents Files Get Params schema-derived TypeScript type. */
export type AgentsFilesGetParams = SchemaType<"AgentsFilesGetParams">;
/** Public alias for the Agents Files Get Result schema-derived TypeScript type. */
export type AgentsFilesGetResult = SchemaType<"AgentsFilesGetResult">;
/** Public alias for the Agents Files Set Params schema-derived TypeScript type. */
export type AgentsFilesSetParams = SchemaType<"AgentsFilesSetParams">;
/** Public alias for the Agents Files Set Result schema-derived TypeScript type. */
export type AgentsFilesSetResult = SchemaType<"AgentsFilesSetResult">;
/** Public alias for the Artifact Summary schema-derived TypeScript type. */
export type ArtifactSummary = SchemaType<"ArtifactSummary">;
/** Public alias for the Artifacts List Params schema-derived TypeScript type. */
export type ArtifactsListParams = SchemaType<"ArtifactsListParams">;
/** Public alias for the Artifacts List Result schema-derived TypeScript type. */
export type ArtifactsListResult = SchemaType<"ArtifactsListResult">;
/** Public alias for the Artifacts Get Params schema-derived TypeScript type. */
export type ArtifactsGetParams = SchemaType<"ArtifactsGetParams">;
/** Public alias for the Artifacts Get Result schema-derived TypeScript type. */
export type ArtifactsGetResult = SchemaType<"ArtifactsGetResult">;
/** Public alias for the Artifacts Download Params schema-derived TypeScript type. */
export type ArtifactsDownloadParams = SchemaType<"ArtifactsDownloadParams">;
/** Public alias for the Artifacts Download Result schema-derived TypeScript type. */
export type ArtifactsDownloadResult = SchemaType<"ArtifactsDownloadResult">;
/** Public alias for the Agents List Params schema-derived TypeScript type. */
export type AgentsListParams = SchemaType<"AgentsListParams">;
/** Public alias for the Agents List Result schema-derived TypeScript type. */
export type AgentsListResult = SchemaType<"AgentsListResult">;
/** Public alias for the Model Choice schema-derived TypeScript type. */
export type ModelChoice = SchemaType<"ModelChoice">;
/** Public alias for the Models List Params schema-derived TypeScript type. */
export type ModelsListParams = SchemaType<"ModelsListParams">;
/** Public alias for the Models List Result schema-derived TypeScript type. */
export type ModelsListResult = SchemaType<"ModelsListResult">;
/** Public alias for the Command Entry schema-derived TypeScript type. */
export type CommandEntry = SchemaType<"CommandEntry">;
/** Public alias for the Commands List Params schema-derived TypeScript type. */
export type CommandsListParams = SchemaType<"CommandsListParams">;
/** Public alias for the Commands List Result schema-derived TypeScript type. */
export type CommandsListResult = SchemaType<"CommandsListResult">;
/** Public alias for the Plugin Control Ui Descriptor schema-derived TypeScript type. */
export type PluginControlUiDescriptor = SchemaType<"PluginControlUiDescriptor">;
/** Public alias for the Plugins Ui Descriptors Params schema-derived TypeScript type. */
export type PluginsUiDescriptorsParams = SchemaType<"PluginsUiDescriptorsParams">;
/** Public alias for the Plugins Ui Descriptors Result schema-derived TypeScript type. */
export type PluginsUiDescriptorsResult = SchemaType<"PluginsUiDescriptorsResult">;
/** Public alias for the Plugins Session Action Params schema-derived TypeScript type. */
export type PluginsSessionActionParams = SchemaType<"PluginsSessionActionParams">;
/** Public alias for the Plugins Session Action Result schema-derived TypeScript type. */
export type PluginsSessionActionResult = SchemaType<"PluginsSessionActionResult">;
/** Public alias for the Skills Status Params schema-derived TypeScript type. */
export type SkillsStatusParams = SchemaType<"SkillsStatusParams">;
/** Public alias for the Tools Catalog Params schema-derived TypeScript type. */
export type ToolsCatalogParams = SchemaType<"ToolsCatalogParams">;
/** Public alias for the Tool Catalog Profile schema-derived TypeScript type. */
export type ToolCatalogProfile = SchemaType<"ToolCatalogProfile">;
/** Public alias for the Tool Catalog Entry schema-derived TypeScript type. */
export type ToolCatalogEntry = SchemaType<"ToolCatalogEntry">;
/** Public alias for the Tool Catalog Group schema-derived TypeScript type. */
export type ToolCatalogGroup = SchemaType<"ToolCatalogGroup">;
/** Public alias for the Tools Catalog Result schema-derived TypeScript type. */
export type ToolsCatalogResult = SchemaType<"ToolsCatalogResult">;
/** Public alias for the Tools Effective Params schema-derived TypeScript type. */
export type ToolsEffectiveParams = SchemaType<"ToolsEffectiveParams">;
/** Public alias for the Tools Effective Entry schema-derived TypeScript type. */
export type ToolsEffectiveEntry = SchemaType<"ToolsEffectiveEntry">;
/** Public alias for the Tools Effective Group schema-derived TypeScript type. */
export type ToolsEffectiveGroup = SchemaType<"ToolsEffectiveGroup">;
/** Public alias for the Tools Effective Notice schema-derived TypeScript type. */
export type ToolsEffectiveNotice = SchemaType<"ToolsEffectiveNotice">;
/** Public alias for the Tools Effective Result schema-derived TypeScript type. */
export type ToolsEffectiveResult = SchemaType<"ToolsEffectiveResult">;
/** Public alias for the Tools Invoke Params schema-derived TypeScript type. */
export type ToolsInvokeParams = SchemaType<"ToolsInvokeParams">;
/** Public alias for the Tools Invoke Result schema-derived TypeScript type. */
export type ToolsInvokeResult = SchemaType<"ToolsInvokeResult">;
/** Public alias for the Skills Bins Params schema-derived TypeScript type. */
export type SkillsBinsParams = SchemaType<"SkillsBinsParams">;
/** Public alias for the Skills Bins Result schema-derived TypeScript type. */
export type SkillsBinsResult = SchemaType<"SkillsBinsResult">;
/** Public alias for the Skills Search Params schema-derived TypeScript type. */
export type SkillsSearchParams = SchemaType<"SkillsSearchParams">;
/** Public alias for the Skills Search Result schema-derived TypeScript type. */
export type SkillsSearchResult = SchemaType<"SkillsSearchResult">;
/** Public alias for the Skills Detail Params schema-derived TypeScript type. */
export type SkillsDetailParams = SchemaType<"SkillsDetailParams">;
/** Public alias for the Skills Detail Result schema-derived TypeScript type. */
export type SkillsDetailResult = SchemaType<"SkillsDetailResult">;
/** Public alias for the Skills Security Verdicts Params schema-derived TypeScript type. */
export type SkillsSecurityVerdictsParams = SchemaType<"SkillsSecurityVerdictsParams">;
/** Public alias for the Skills Security Verdicts Result schema-derived TypeScript type. */
export type SkillsSecurityVerdictsResult = SchemaType<"SkillsSecurityVerdictsResult">;
/** Public alias for the Skills Skill Card Params schema-derived TypeScript type. */
export type SkillsSkillCardParams = SchemaType<"SkillsSkillCardParams">;
/** Public alias for the Skills Skill Card Result schema-derived TypeScript type. */
export type SkillsSkillCardResult = SchemaType<"SkillsSkillCardResult">;
/** Public alias for the Skills Upload Begin Params schema-derived TypeScript type. */
export type SkillsUploadBeginParams = SchemaType<"SkillsUploadBeginParams">;
/** Public alias for the Skills Upload Chunk Params schema-derived TypeScript type. */
export type SkillsUploadChunkParams = SchemaType<"SkillsUploadChunkParams">;
/** Public alias for the Skills Upload Commit Params schema-derived TypeScript type. */
export type SkillsUploadCommitParams = SchemaType<"SkillsUploadCommitParams">;
/** Public alias for the Skills Install Params schema-derived TypeScript type. */
export type SkillsInstallParams = SchemaType<"SkillsInstallParams">;
/** Public alias for the Skills Update Params schema-derived TypeScript type. */
export type SkillsUpdateParams = SchemaType<"SkillsUpdateParams">;
/** Public alias for the Cron Job schema-derived TypeScript type. */
export type CronJob = SchemaType<"CronJob">;
/** Public alias for the Cron List Params schema-derived TypeScript type. */
export type CronListParams = SchemaType<"CronListParams">;
/** Public alias for the Cron Status Params schema-derived TypeScript type. */
export type CronStatusParams = SchemaType<"CronStatusParams">;
/** Public alias for the Cron Get Params schema-derived TypeScript type. */
export type CronGetParams = SchemaType<"CronGetParams">;
/** Public alias for the Cron Add Params schema-derived TypeScript type. */
export type CronAddParams = SchemaType<"CronAddParams">;
/** Public alias for the Cron Update Params schema-derived TypeScript type. */
export type CronUpdateParams = SchemaType<"CronUpdateParams">;
/** Public alias for the Cron Remove Params schema-derived TypeScript type. */
export type CronRemoveParams = SchemaType<"CronRemoveParams">;
/** Public alias for the Cron Run Params schema-derived TypeScript type. */
export type CronRunParams = SchemaType<"CronRunParams">;
/** Public alias for the Cron Runs Params schema-derived TypeScript type. */
export type CronRunsParams = SchemaType<"CronRunsParams">;
/** Public alias for the Cron Run Log Entry schema-derived TypeScript type. */
export type CronRunLogEntry = SchemaType<"CronRunLogEntry">;
/** Public alias for the Logs Tail Params schema-derived TypeScript type. */
export type LogsTailParams = SchemaType<"LogsTailParams">;
/** Public alias for the Logs Tail Result schema-derived TypeScript type. */
export type LogsTailResult = SchemaType<"LogsTailResult">;
/** Public alias for the Exec Approvals Get Params schema-derived TypeScript type. */
export type ExecApprovalsGetParams = SchemaType<"ExecApprovalsGetParams">;
/** Public alias for the Exec Approvals Set Params schema-derived TypeScript type. */
export type ExecApprovalsSetParams = SchemaType<"ExecApprovalsSetParams">;
/** Public alias for the Exec Approvals Node Get Params schema-derived TypeScript type. */
export type ExecApprovalsNodeGetParams = SchemaType<"ExecApprovalsNodeGetParams">;
/** Public alias for the Exec Approvals Node Set Params schema-derived TypeScript type. */
export type ExecApprovalsNodeSetParams = SchemaType<"ExecApprovalsNodeSetParams">;
/** Public alias for the Exec Approvals Snapshot schema-derived TypeScript type. */
export type ExecApprovalsSnapshot = SchemaType<"ExecApprovalsSnapshot">;
/** Public alias for the Exec Approval Get Params schema-derived TypeScript type. */
export type ExecApprovalGetParams = SchemaType<"ExecApprovalGetParams">;
/** Public alias for the Exec Approval Request Params schema-derived TypeScript type. */
export type ExecApprovalRequestParams = SchemaType<"ExecApprovalRequestParams">;
/** Public alias for the Exec Approval Resolve Params schema-derived TypeScript type. */
export type ExecApprovalResolveParams = SchemaType<"ExecApprovalResolveParams">;
/** Public alias for the Plugin Approval Request Params schema-derived TypeScript type. */
export type PluginApprovalRequestParams = SchemaType<"PluginApprovalRequestParams">;
/** Public alias for the Plugin Approval Resolve Params schema-derived TypeScript type. */
export type PluginApprovalResolveParams = SchemaType<"PluginApprovalResolveParams">;
/** Public alias for the Device Pair List Params schema-derived TypeScript type. */
export type DevicePairListParams = SchemaType<"DevicePairListParams">;
/** Public alias for the Device Pair Approve Params schema-derived TypeScript type. */
export type DevicePairApproveParams = SchemaType<"DevicePairApproveParams">;
/** Public alias for the Device Pair Reject Params schema-derived TypeScript type. */
export type DevicePairRejectParams = SchemaType<"DevicePairRejectParams">;
/** Public alias for the Device Pair Remove Params schema-derived TypeScript type. */
export type DevicePairRemoveParams = SchemaType<"DevicePairRemoveParams">;
/** Public alias for the Device Token Rotate Params schema-derived TypeScript type. */
export type DeviceTokenRotateParams = SchemaType<"DeviceTokenRotateParams">;
/** Public alias for the Device Token Revoke Params schema-derived TypeScript type. */
export type DeviceTokenRevokeParams = SchemaType<"DeviceTokenRevokeParams">;
/** Public alias for the Chat Abort Params schema-derived TypeScript type. */
export type ChatAbortParams = SchemaType<"ChatAbortParams">;
/** Public alias for the Chat Inject Params schema-derived TypeScript type. */
export type ChatInjectParams = SchemaType<"ChatInjectParams">;
/** Public alias for the Chat Event schema-derived TypeScript type. */
export type ChatEvent = SchemaType<"ChatEvent">;
/** Public alias for the Update Run Params schema-derived TypeScript type. */
export type UpdateRunParams = SchemaType<"UpdateRunParams">;
/** Public alias for the Tick Event schema-derived TypeScript type. */
export type TickEvent = SchemaType<"TickEvent">;
/** Public alias for the Shutdown Event schema-derived TypeScript type. */
export type ShutdownEvent = SchemaType<"ShutdownEvent">;
