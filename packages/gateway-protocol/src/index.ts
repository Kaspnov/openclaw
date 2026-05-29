// packages/gateway-protocol/src index helpers and runtime behavior.
import { Compile, type Validator as TypeBoxValidator } from "typebox/compile";
import {
  type AgentEvent,
  AgentEventSchema,
  type AgentIdentityParams,
  AgentIdentityParamsSchema,
  type AgentIdentityResult,
  AgentIdentityResultSchema,
  AgentParamsSchema,
  type MessageActionParams,
  MessageActionParamsSchema,
  type AgentSummary,
  AgentSummarySchema,
  type AgentsFileEntry,
  AgentsFileEntrySchema,
  type AgentsCreateParams,
  AgentsCreateParamsSchema,
  type AgentsCreateResult,
  AgentsCreateResultSchema,
  type AgentsUpdateParams,
  AgentsUpdateParamsSchema,
  type AgentsUpdateResult,
  AgentsUpdateResultSchema,
  type AgentsDeleteParams,
  AgentsDeleteParamsSchema,
  type AgentsDeleteResult,
  AgentsDeleteResultSchema,
  type AgentsFilesGetParams,
  AgentsFilesGetParamsSchema,
  type AgentsFilesGetResult,
  AgentsFilesGetResultSchema,
  type AgentsFilesListParams,
  AgentsFilesListParamsSchema,
  type AgentsFilesListResult,
  AgentsFilesListResultSchema,
  type AgentsFilesSetParams,
  AgentsFilesSetParamsSchema,
  type AgentsFilesSetResult,
  AgentsFilesSetResultSchema,
  type ArtifactsDownloadParams,
  ArtifactsDownloadParamsSchema,
  type ArtifactsDownloadResult,
  type ArtifactsGetParams,
  ArtifactsGetParamsSchema,
  type ArtifactsGetResult,
  type ArtifactsListParams,
  ArtifactsListParamsSchema,
  type ArtifactsListResult,
  type ArtifactSummary,
  ArtifactSummarySchema,
  type AgentsListParams,
  AgentsListParamsSchema,
  type AgentsListResult,
  AgentsListResultSchema,
  type AgentWaitParams,
  AgentWaitParamsSchema,
  type ChannelsStartParams,
  ChannelsStartParamsSchema,
  type ChannelsStopParams,
  ChannelsStopParamsSchema,
  type ChannelsLogoutParams,
  ChannelsLogoutParamsSchema,
  type TalkEvent,
  TalkEventSchema,
  type TalkCatalogParams,
  TalkCatalogParamsSchema,
  type TalkCatalogResult,
  TalkCatalogResultSchema,
  type TalkClientCreateParams,
  TalkClientCreateParamsSchema,
  type TalkClientCreateResult,
  TalkClientCreateResultSchema,
  type TalkAgentControlResult,
  TalkAgentControlResultSchema,
  type TalkClientSteerParams,
  TalkClientSteerParamsSchema,
  type TalkClientToolCallParams,
  TalkClientToolCallParamsSchema,
  type TalkClientToolCallResult,
  TalkClientToolCallResultSchema,
  type TalkConfigParams,
  TalkConfigParamsSchema,
  type TalkConfigResult,
  TalkConfigResultSchema,
  type TalkSessionAppendAudioParams,
  TalkSessionAppendAudioParamsSchema,
  type TalkSessionCancelOutputParams,
  TalkSessionCancelOutputParamsSchema,
  type TalkSessionCancelTurnParams,
  TalkSessionCancelTurnParamsSchema,
  type TalkSessionCloseParams,
  TalkSessionCloseParamsSchema,
  type TalkSessionCreateParams,
  TalkSessionCreateParamsSchema,
  type TalkSessionCreateResult,
  TalkSessionCreateResultSchema,
  type TalkSessionJoinParams,
  TalkSessionJoinParamsSchema,
  type TalkSessionJoinResult,
  TalkSessionJoinResultSchema,
  type TalkSessionOkResult,
  TalkSessionOkResultSchema,
  type TalkSessionSteerParams,
  TalkSessionSteerParamsSchema,
  type TalkSessionSubmitToolResultParams,
  TalkSessionSubmitToolResultParamsSchema,
  type TalkSessionTurnResult,
  TalkSessionTurnResultSchema,
  type TalkSessionTurnParams,
  TalkSessionTurnParamsSchema,
  type TalkSpeakParams,
  TalkSpeakParamsSchema,
  type TalkSpeakResult,
  TalkSpeakResultSchema,
  type ChannelsStatusParams,
  ChannelsStatusParamsSchema,
  type ChannelsStatusResult,
  ChannelsStatusResultSchema,
  type CommandEntry,
  type CommandsListParams,
  CommandsListParamsSchema,
  type CommandsListResult,
  CommandsListResultSchema,
  type ChatAbortParams,
  ChatAbortParamsSchema,
  type ChatEvent,
  ChatEventSchema,
  ChatHistoryParamsSchema,
  type ChatInjectParams,
  ChatInjectParamsSchema,
  ChatSendParamsSchema,
  type ConfigApplyParams,
  ConfigApplyParamsSchema,
  type ConfigGetParams,
  ConfigGetParamsSchema,
  type ConfigPatchParams,
  ConfigPatchParamsSchema,
  type ConfigSchemaLookupParams,
  ConfigSchemaLookupParamsSchema,
  type ConfigSchemaLookupResult,
  ConfigSchemaLookupResultSchema,
  type ConfigSchemaParams,
  ConfigSchemaParamsSchema,
  type ConfigSchemaResponse,
  ConfigSchemaResponseSchema,
  type ConfigSetParams,
  ConfigSetParamsSchema,
  type UpdateStatusParams,
  UpdateStatusParamsSchema,
  type ConnectParams,
  ConnectParamsSchema,
  type CronAddParams,
  CronAddParamsSchema,
  type CronGetParams,
  CronGetParamsSchema,
  type CronJob,
  CronJobSchema,
  type CronListParams,
  CronListParamsSchema,
  type CronRemoveParams,
  CronRemoveParamsSchema,
  type CronRunLogEntry,
  type CronRunParams,
  CronRunParamsSchema,
  type CronRunsParams,
  CronRunsParamsSchema,
  type CronStatusParams,
  CronStatusParamsSchema,
  type CronUpdateParams,
  CronUpdateParamsSchema,
  type DevicePairApproveParams,
  DevicePairApproveParamsSchema,
  type DevicePairListParams,
  DevicePairListParamsSchema,
  type DevicePairRemoveParams,
  DevicePairRemoveParamsSchema,
  type DevicePairRejectParams,
  DevicePairRejectParamsSchema,
  type DeviceTokenRevokeParams,
  DeviceTokenRevokeParamsSchema,
  type DeviceTokenRotateParams,
  DeviceTokenRotateParamsSchema,
  type ExecApprovalsGetParams,
  ExecApprovalsGetParamsSchema,
  type ExecApprovalsNodeGetParams,
  ExecApprovalsNodeGetParamsSchema,
  type ExecApprovalsNodeSetParams,
  ExecApprovalsNodeSetParamsSchema,
  type ExecApprovalsSetParams,
  ExecApprovalsSetParamsSchema,
  type ExecApprovalsSnapshot,
  type ExecApprovalGetParams,
  ExecApprovalGetParamsSchema,
  type ExecApprovalRequestParams,
  ExecApprovalRequestParamsSchema,
  type ExecApprovalResolveParams,
  ExecApprovalResolveParamsSchema,
  type PluginApprovalRequestParams,
  PluginApprovalRequestParamsSchema,
  type PluginApprovalResolveParams,
  PluginApprovalResolveParamsSchema,
  type PluginsSessionActionParams,
  type PluginsSessionActionResult,
  PluginsSessionActionParamsSchema,
  PluginsSessionActionResultSchema,
  type PluginsUiDescriptorsParams,
  PluginsUiDescriptorsParamsSchema,
  ErrorCodes,
  type EnvironmentSummary,
  EnvironmentSummarySchema,
  type EnvironmentsListParams,
  EnvironmentsListParamsSchema,
  type EnvironmentsListResult,
  EnvironmentsListResultSchema,
  type EnvironmentsStatusParams,
  EnvironmentsStatusParamsSchema,
  type EnvironmentsStatusResult,
  EnvironmentsStatusResultSchema,
  type EnvironmentStatus,
  EnvironmentStatusSchema,
  type ErrorShape,
  ErrorShapeSchema,
  type EventFrame,
  EventFrameSchema,
  errorShape,
  type GatewayFrame,
  GatewayFrameSchema,
  type HelloOk,
  HelloOkSchema,
  type LogsTailParams,
  LogsTailParamsSchema,
  type LogsTailResult,
  LogsTailResultSchema,
  type ModelsListParams,
  ModelsListParamsSchema,
  type NodeDescribeParams,
  NodeDescribeParamsSchema,
  type NodeEventParams,
  NodeEventParamsSchema,
  type NodeEventResult,
  NodeEventResultSchema,
  type NodePendingDrainParams,
  NodePendingDrainParamsSchema,
  type NodePendingDrainResult,
  NodePendingDrainResultSchema,
  type NodePendingEnqueueParams,
  NodePendingEnqueueParamsSchema,
  type NodePendingEnqueueResult,
  NodePendingEnqueueResultSchema,
  type NodePresenceAlivePayload,
  NodePresenceAlivePayloadSchema,
  type NodePresenceAliveReason,
  NodePresenceAliveReasonSchema,
  type NodeInvokeParams,
  NodeInvokeParamsSchema,
  type NodeInvokeResultParams,
  NodeInvokeResultParamsSchema,
  type NodeListParams,
  NodeListParamsSchema,
  type NodePendingAckParams,
  NodePendingAckParamsSchema,
  type NodePairApproveParams,
  NodePairApproveParamsSchema,
  type NodePairListParams,
  NodePairListParamsSchema,
  type NodePairRejectParams,
  NodePairRejectParamsSchema,
  type NodePairRemoveParams,
  NodePairRemoveParamsSchema,
  type NodePairRequestParams,
  NodePairRequestParamsSchema,
  type NodePairVerifyParams,
  NodePairVerifyParamsSchema,
  type NodeRenameParams,
  NodeRenameParamsSchema,
  type PollParams,
  PollParamsSchema,
  MIN_CLIENT_PROTOCOL_VERSION,
  MIN_PROBE_PROTOCOL_VERSION,
  PROTOCOL_VERSION,
  type PushTestParams,
  PushTestParamsSchema,
  PushTestResultSchema,
  type WebPushVapidPublicKeyParams,
  WebPushVapidPublicKeyParamsSchema,
  type WebPushSubscribeParams,
  WebPushSubscribeParamsSchema,
  type WebPushUnsubscribeParams,
  WebPushUnsubscribeParamsSchema,
  type WebPushTestParams,
  WebPushTestParamsSchema,
  type PresenceEntry,
  PresenceEntrySchema,
  ProtocolSchemas,
  type RequestFrame,
  RequestFrameSchema,
  type ResponseFrame,
  ResponseFrameSchema,
  SendParamsSchema,
  type SecretsResolveParams,
  type SecretsResolveResult,
  SecretsResolveParamsSchema,
  SecretsResolveResultSchema,
  type SessionsAbortParams,
  SessionsAbortParamsSchema,
  type SessionsCompactParams,
  SessionsCompactParamsSchema,
  type SessionsCleanupParams,
  SessionsCleanupParamsSchema,
  type SessionsCompactionBranchParams,
  SessionsCompactionBranchParamsSchema,
  type SessionsCompactionGetParams,
  SessionsCompactionGetParamsSchema,
  type SessionsCompactionListParams,
  SessionsCompactionListParamsSchema,
  type SessionsCompactionRestoreParams,
  SessionsCompactionRestoreParamsSchema,
  type SessionOperationEvent,
  type SessionsCreateParams,
  SessionsCreateParamsSchema,
  type SessionsDeleteParams,
  SessionsDeleteParamsSchema,
  type SessionsDescribeParams,
  SessionsDescribeParamsSchema,
  type SessionsListParams,
  SessionsListParamsSchema,
  type SessionsMessagesSubscribeParams,
  SessionsMessagesSubscribeParamsSchema,
  type SessionsMessagesUnsubscribeParams,
  SessionsMessagesUnsubscribeParamsSchema,
  type SessionsPatchParams,
  SessionsPatchParamsSchema,
  type SessionsPluginPatchParams,
  SessionsPluginPatchParamsSchema,
  type SessionsPreviewParams,
  SessionsPreviewParamsSchema,
  type SessionsResetParams,
  SessionsResetParamsSchema,
  type SessionsResolveParams,
  SessionsResolveParamsSchema,
  type SessionsSendParams,
  SessionsSendParamsSchema,
  type SessionsUsageParams,
  SessionsUsageParamsSchema,
  type TaskSummary,
  TaskSummarySchema,
  type TasksCancelParams,
  TasksCancelParamsSchema,
  type TasksCancelResult,
  TasksCancelResultSchema,
  type TasksGetParams,
  TasksGetParamsSchema,
  type TasksGetResult,
  TasksGetResultSchema,
  type TasksListParams,
  TasksListParamsSchema,
  type TasksListResult,
  TasksListResultSchema,
  type ShutdownEvent,
  ShutdownEventSchema,
  type SkillsBinsParams,
  SkillsBinsParamsSchema,
  type SkillsBinsResult,
  type SkillsDetailParams,
  SkillsDetailParamsSchema,
  type SkillsDetailResult,
  SkillsDetailResultSchema,
  type SkillsInstallParams,
  SkillsInstallParamsSchema,
  type SkillsSearchParams,
  SkillsSearchParamsSchema,
  type SkillsSearchResult,
  SkillsSearchResultSchema,
  type SkillsSecurityVerdictsParams,
  SkillsSecurityVerdictsParamsSchema,
  type SkillsSecurityVerdictsResult,
  SkillsSecurityVerdictsResultSchema,
  type SkillsSkillCardParams,
  SkillsSkillCardParamsSchema,
  type SkillsSkillCardResult,
  SkillsSkillCardResultSchema,
  type SkillsStatusParams,
  SkillsStatusParamsSchema,
  type SkillsUploadBeginParams,
  SkillsUploadBeginParamsSchema,
  type SkillsUploadChunkParams,
  SkillsUploadChunkParamsSchema,
  type SkillsUploadCommitParams,
  SkillsUploadCommitParamsSchema,
  type SkillsUpdateParams,
  SkillsUpdateParamsSchema,
  type ToolsCatalogParams,
  ToolsCatalogParamsSchema,
  type ToolsCatalogResult,
  type ToolsEffectiveParams,
  ToolsEffectiveParamsSchema,
  type ToolsEffectiveResult,
  type ToolsInvokeParams,
  ToolsInvokeParamsSchema,
  type ToolsInvokeResult,
  type Snapshot,
  SnapshotSchema,
  type StateVersion,
  StateVersionSchema,
  type TalkModeParams,
  TalkModeParamsSchema,
  type TickEvent,
  TickEventSchema,
  type UpdateRunParams,
  UpdateRunParamsSchema,
  type WakeParams,
  WakeParamsSchema,
  type WebLoginStartParams,
  WebLoginStartParamsSchema,
  type WebLoginWaitParams,
  WebLoginWaitParamsSchema,
  type WizardCancelParams,
  WizardCancelParamsSchema,
  type WizardNextParams,
  WizardNextParamsSchema,
  type WizardNextResult,
  WizardNextResultSchema,
  type WizardStartParams,
  WizardStartParamsSchema,
  type WizardStartResult,
  WizardStartResultSchema,
  type WizardStatusParams,
  WizardStatusParamsSchema,
  type WizardStatusResult,
  WizardStatusResultSchema,
  type WizardStep,
  WizardStepSchema,
} from "./schema.js";

/** Public type describing Validation Error for packages/gateway-protocol. */
export type ValidationError = {
  keyword?: string;
  instancePath?: string;
  schemaPath?: string;
  params?: Record<string, unknown>;
  message?: string;
};

/** Public type describing Protocol Validator for packages/gateway-protocol. */
export type ProtocolValidator<T = unknown> = ((data: unknown) => data is T) & {
  errors: ValidationError[] | null;
  schema: unknown;
};

function lazyCompile<T = unknown>(schema: unknown): ProtocolValidator<T> {
  let compiled: TypeBoxValidator | undefined;
  let errors: ValidationError[] | null = null;

  const getCompiled = () => {
    compiled ??= Compile(schema as never);
    return compiled;
  };

  const validate = ((data: unknown): data is T => {
    const current = getCompiled();
    const valid = current.Check(data);
    errors = valid ? null : ([...current.Errors(data)] as ValidationError[]);
    return valid;
  }) as ProtocolValidator<T>;

  Object.defineProperties(validate, {
    errors: {
      configurable: true,
      enumerable: true,
      get: () => errors,
      set: (nextErrors: ValidationError[] | null | undefined) => {
        errors = nextErrors ?? null;
      },
    },
    schema: {
      configurable: true,
      enumerable: true,
      get: () => schema,
    },
  });

  return validate;
}

/** Public constant for validate Commands List Params behavior in packages/gateway-protocol. */
export const validateCommandsListParams = lazyCompile<CommandsListParams>(CommandsListParamsSchema);
/** Public constant for validate Connect Params behavior in packages/gateway-protocol. */
export const validateConnectParams = lazyCompile<ConnectParams>(ConnectParamsSchema);
/** Public constant for validate Request Frame behavior in packages/gateway-protocol. */
export const validateRequestFrame = lazyCompile<RequestFrame>(RequestFrameSchema);
/** Public constant for validate Response Frame behavior in packages/gateway-protocol. */
export const validateResponseFrame = lazyCompile<ResponseFrame>(ResponseFrameSchema);
/** Public constant for validate Event Frame behavior in packages/gateway-protocol. */
export const validateEventFrame = lazyCompile<EventFrame>(EventFrameSchema);
/** Public constant for validate Message Action Params behavior in packages/gateway-protocol. */
export const validateMessageActionParams =
  lazyCompile<MessageActionParams>(MessageActionParamsSchema);
/** Public constant for validate Send Params behavior in packages/gateway-protocol. */
export const validateSendParams = lazyCompile(SendParamsSchema);
/** Public constant for validate Poll Params behavior in packages/gateway-protocol. */
export const validatePollParams = lazyCompile<PollParams>(PollParamsSchema);
/** Public constant for validate Agent Params behavior in packages/gateway-protocol. */
export const validateAgentParams = lazyCompile(AgentParamsSchema);
/** Public constant for validate Agent Identity Params behavior in packages/gateway-protocol. */
export const validateAgentIdentityParams =
  lazyCompile<AgentIdentityParams>(AgentIdentityParamsSchema);
/** Public constant for validate Agent Wait Params behavior in packages/gateway-protocol. */
export const validateAgentWaitParams = lazyCompile<AgentWaitParams>(AgentWaitParamsSchema);
/** Public constant for validate Wake Params behavior in packages/gateway-protocol. */
export const validateWakeParams = lazyCompile<WakeParams>(WakeParamsSchema);
/** Public constant for validate Agents List Params behavior in packages/gateway-protocol. */
export const validateAgentsListParams = lazyCompile<AgentsListParams>(AgentsListParamsSchema);
/** Public constant for validate Agents Create Params behavior in packages/gateway-protocol. */
export const validateAgentsCreateParams = lazyCompile<AgentsCreateParams>(AgentsCreateParamsSchema);
/** Public constant for validate Agents Update Params behavior in packages/gateway-protocol. */
export const validateAgentsUpdateParams = lazyCompile<AgentsUpdateParams>(AgentsUpdateParamsSchema);
/** Public constant for validate Agents Delete Params behavior in packages/gateway-protocol. */
export const validateAgentsDeleteParams = lazyCompile<AgentsDeleteParams>(AgentsDeleteParamsSchema);
/** Public constant for validate Agents Files List Params behavior in packages/gateway-protocol. */
export const validateAgentsFilesListParams = lazyCompile<AgentsFilesListParams>(
  AgentsFilesListParamsSchema,
);
/** Public constant for validate Agents Files Get Params behavior in packages/gateway-protocol. */
export const validateAgentsFilesGetParams = lazyCompile<AgentsFilesGetParams>(
  AgentsFilesGetParamsSchema,
);
/** Public constant for validate Agents Files Set Params behavior in packages/gateway-protocol. */
export const validateAgentsFilesSetParams = lazyCompile<AgentsFilesSetParams>(
  AgentsFilesSetParamsSchema,
);
/** Public constant for validate Artifacts List Params behavior in packages/gateway-protocol. */
export const validateArtifactsListParams =
  lazyCompile<ArtifactsListParams>(ArtifactsListParamsSchema);
/** Public constant for validate Artifacts Get Params behavior in packages/gateway-protocol. */
export const validateArtifactsGetParams = lazyCompile<ArtifactsGetParams>(ArtifactsGetParamsSchema);
/** Public constant for validate Artifacts Download Params behavior in packages/gateway-protocol. */
export const validateArtifactsDownloadParams = lazyCompile<ArtifactsDownloadParams>(
  ArtifactsDownloadParamsSchema,
);
/** Public constant for validate Node Pair Request Params behavior in packages/gateway-protocol. */
export const validateNodePairRequestParams = lazyCompile<NodePairRequestParams>(
  NodePairRequestParamsSchema,
);
/** Public constant for validate Node Pair List Params behavior in packages/gateway-protocol. */
export const validateNodePairListParams = lazyCompile<NodePairListParams>(NodePairListParamsSchema);
/** Public constant for validate Node Pair Approve Params behavior in packages/gateway-protocol. */
export const validateNodePairApproveParams = lazyCompile<NodePairApproveParams>(
  NodePairApproveParamsSchema,
);
/** Public constant for validate Node Pair Reject Params behavior in packages/gateway-protocol. */
export const validateNodePairRejectParams = lazyCompile<NodePairRejectParams>(
  NodePairRejectParamsSchema,
);
/** Public constant for validate Node Pair Remove Params behavior in packages/gateway-protocol. */
export const validateNodePairRemoveParams = lazyCompile<NodePairRemoveParams>(
  NodePairRemoveParamsSchema,
);
/** Public constant for validate Node Pair Verify Params behavior in packages/gateway-protocol. */
export const validateNodePairVerifyParams = lazyCompile<NodePairVerifyParams>(
  NodePairVerifyParamsSchema,
);
/** Public constant for validate Node Rename Params behavior in packages/gateway-protocol. */
export const validateNodeRenameParams = lazyCompile<NodeRenameParams>(NodeRenameParamsSchema);
/** Public constant for validate Node List Params behavior in packages/gateway-protocol. */
export const validateNodeListParams = lazyCompile<NodeListParams>(NodeListParamsSchema);
/** Public constant for validate Environments List Params behavior in packages/gateway-protocol. */
export const validateEnvironmentsListParams = lazyCompile<EnvironmentsListParams>(
  EnvironmentsListParamsSchema,
);
/** Public constant for validate Environments Status Params behavior in packages/gateway-protocol. */
export const validateEnvironmentsStatusParams = lazyCompile<EnvironmentsStatusParams>(
  EnvironmentsStatusParamsSchema,
);
/** Public constant for validate Node Pending Ack Params behavior in packages/gateway-protocol. */
export const validateNodePendingAckParams = lazyCompile<NodePendingAckParams>(
  NodePendingAckParamsSchema,
);
/** Public constant for validate Node Describe Params behavior in packages/gateway-protocol. */
export const validateNodeDescribeParams = lazyCompile<NodeDescribeParams>(NodeDescribeParamsSchema);
/** Public constant for validate Node Invoke Params behavior in packages/gateway-protocol. */
export const validateNodeInvokeParams = lazyCompile<NodeInvokeParams>(NodeInvokeParamsSchema);
/** Public constant for validate Node Invoke Result Params behavior in packages/gateway-protocol. */
export const validateNodeInvokeResultParams = lazyCompile<NodeInvokeResultParams>(
  NodeInvokeResultParamsSchema,
);
/** Public constant for validate Node Event Params behavior in packages/gateway-protocol. */
export const validateNodeEventParams = lazyCompile<NodeEventParams>(NodeEventParamsSchema);
/** Public constant for validate Node Event Result behavior in packages/gateway-protocol. */
export const validateNodeEventResult = lazyCompile<NodeEventResult>(NodeEventResultSchema);
/** Public constant for validate Node Presence Alive Payload behavior in packages/gateway-protocol. */
export const validateNodePresenceAlivePayload = lazyCompile<NodePresenceAlivePayload>(
  NodePresenceAlivePayloadSchema,
);
/** Public constant for validate Node Pending Drain Params behavior in packages/gateway-protocol. */
export const validateNodePendingDrainParams = lazyCompile<NodePendingDrainParams>(
  NodePendingDrainParamsSchema,
);
/** Public constant for validate Node Pending Enqueue Params behavior in packages/gateway-protocol. */
export const validateNodePendingEnqueueParams = lazyCompile<NodePendingEnqueueParams>(
  NodePendingEnqueueParamsSchema,
);
/** Public constant for validate Push Test Params behavior in packages/gateway-protocol. */
export const validatePushTestParams = lazyCompile<PushTestParams>(PushTestParamsSchema);
/** Public constant for validate Web Push Vapid Public Key Params behavior in packages/gateway-protocol. */
export const validateWebPushVapidPublicKeyParams = lazyCompile<WebPushVapidPublicKeyParams>(
  WebPushVapidPublicKeyParamsSchema,
);
/** Public constant for validate Web Push Subscribe Params behavior in packages/gateway-protocol. */
export const validateWebPushSubscribeParams = lazyCompile<WebPushSubscribeParams>(
  WebPushSubscribeParamsSchema,
);
/** Public constant for validate Web Push Unsubscribe Params behavior in packages/gateway-protocol. */
export const validateWebPushUnsubscribeParams = lazyCompile<WebPushUnsubscribeParams>(
  WebPushUnsubscribeParamsSchema,
);
/** Public constant for validate Web Push Test Params behavior in packages/gateway-protocol. */
export const validateWebPushTestParams = lazyCompile<WebPushTestParams>(WebPushTestParamsSchema);
/** Public constant for validate Secrets Resolve Params behavior in packages/gateway-protocol. */
export const validateSecretsResolveParams = lazyCompile<SecretsResolveParams>(
  SecretsResolveParamsSchema,
);
/** Public constant for validate Secrets Resolve Result behavior in packages/gateway-protocol. */
export const validateSecretsResolveResult = lazyCompile<SecretsResolveResult>(
  SecretsResolveResultSchema,
);
/** Public constant for validate Sessions List Params behavior in packages/gateway-protocol. */
export const validateSessionsListParams = lazyCompile<SessionsListParams>(SessionsListParamsSchema);
/** Public constant for validate Sessions Cleanup Params behavior in packages/gateway-protocol. */
export const validateSessionsCleanupParams = lazyCompile<SessionsCleanupParams>(
  SessionsCleanupParamsSchema,
);
/** Public constant for validate Sessions Preview Params behavior in packages/gateway-protocol. */
export const validateSessionsPreviewParams = lazyCompile<SessionsPreviewParams>(
  SessionsPreviewParamsSchema,
);
/** Public constant for validate Sessions Describe Params behavior in packages/gateway-protocol. */
export const validateSessionsDescribeParams = lazyCompile<SessionsDescribeParams>(
  SessionsDescribeParamsSchema,
);
/** Public constant for validate Sessions Resolve Params behavior in packages/gateway-protocol. */
export const validateSessionsResolveParams = lazyCompile<SessionsResolveParams>(
  SessionsResolveParamsSchema,
);
/** Public constant for validate Sessions Create Params behavior in packages/gateway-protocol. */
export const validateSessionsCreateParams = lazyCompile<SessionsCreateParams>(
  SessionsCreateParamsSchema,
);
/** Public constant for validate Sessions Send Params behavior in packages/gateway-protocol. */
export const validateSessionsSendParams = lazyCompile<SessionsSendParams>(SessionsSendParamsSchema);
/** Public constant for validate Sessions Messages Subscribe Params behavior in packages/gateway-protocol. */
export const validateSessionsMessagesSubscribeParams = lazyCompile<SessionsMessagesSubscribeParams>(
  SessionsMessagesSubscribeParamsSchema,
);
/** Public constant for validate Sessions Messages Unsubscribe Params behavior in packages/gateway-protocol. */
export const validateSessionsMessagesUnsubscribeParams =
  lazyCompile<SessionsMessagesUnsubscribeParams>(SessionsMessagesUnsubscribeParamsSchema);
/** Public constant for validate Sessions Abort Params behavior in packages/gateway-protocol. */
export const validateSessionsAbortParams =
  lazyCompile<SessionsAbortParams>(SessionsAbortParamsSchema);
/** Public constant for validate Sessions Patch Params behavior in packages/gateway-protocol. */
export const validateSessionsPatchParams =
  lazyCompile<SessionsPatchParams>(SessionsPatchParamsSchema);
/** Public constant for validate Sessions Plugin Patch Params behavior in packages/gateway-protocol. */
export const validateSessionsPluginPatchParams = lazyCompile<SessionsPluginPatchParams>(
  SessionsPluginPatchParamsSchema,
);
/** Public constant for validate Sessions Reset Params behavior in packages/gateway-protocol. */
export const validateSessionsResetParams =
  lazyCompile<SessionsResetParams>(SessionsResetParamsSchema);
/** Public constant for validate Sessions Delete Params behavior in packages/gateway-protocol. */
export const validateSessionsDeleteParams = lazyCompile<SessionsDeleteParams>(
  SessionsDeleteParamsSchema,
);
/** Public constant for validate Sessions Compact Params behavior in packages/gateway-protocol. */
export const validateSessionsCompactParams = lazyCompile<SessionsCompactParams>(
  SessionsCompactParamsSchema,
);
/** Public constant for validate Sessions Compaction List Params behavior in packages/gateway-protocol. */
export const validateSessionsCompactionListParams = lazyCompile<SessionsCompactionListParams>(
  SessionsCompactionListParamsSchema,
);
/** Public constant for validate Sessions Compaction Get Params behavior in packages/gateway-protocol. */
export const validateSessionsCompactionGetParams = lazyCompile<SessionsCompactionGetParams>(
  SessionsCompactionGetParamsSchema,
);
/** Public constant for validate Sessions Compaction Branch Params behavior in packages/gateway-protocol. */
export const validateSessionsCompactionBranchParams = lazyCompile<SessionsCompactionBranchParams>(
  SessionsCompactionBranchParamsSchema,
);
/** Public constant for validate Sessions Compaction Restore Params behavior in packages/gateway-protocol. */
export const validateSessionsCompactionRestoreParams = lazyCompile<SessionsCompactionRestoreParams>(
  SessionsCompactionRestoreParamsSchema,
);
/** Public constant for validate Sessions Usage Params behavior in packages/gateway-protocol. */
export const validateSessionsUsageParams =
  lazyCompile<SessionsUsageParams>(SessionsUsageParamsSchema);
/** Public constant for validate Tasks List Params behavior in packages/gateway-protocol. */
export const validateTasksListParams = lazyCompile<TasksListParams>(TasksListParamsSchema);
/** Public constant for validate Tasks Get Params behavior in packages/gateway-protocol. */
export const validateTasksGetParams = lazyCompile<TasksGetParams>(TasksGetParamsSchema);
/** Public constant for validate Tasks Cancel Params behavior in packages/gateway-protocol. */
export const validateTasksCancelParams = lazyCompile<TasksCancelParams>(TasksCancelParamsSchema);
/** Public constant for validate Config Get Params behavior in packages/gateway-protocol. */
export const validateConfigGetParams = lazyCompile<ConfigGetParams>(ConfigGetParamsSchema);
/** Public constant for validate Config Set Params behavior in packages/gateway-protocol. */
export const validateConfigSetParams = lazyCompile<ConfigSetParams>(ConfigSetParamsSchema);
/** Public constant for validate Config Apply Params behavior in packages/gateway-protocol. */
export const validateConfigApplyParams = lazyCompile<ConfigApplyParams>(ConfigApplyParamsSchema);
/** Public constant for validate Config Patch Params behavior in packages/gateway-protocol. */
export const validateConfigPatchParams = lazyCompile<ConfigPatchParams>(ConfigPatchParamsSchema);
/** Public constant for validate Config Schema Params behavior in packages/gateway-protocol. */
export const validateConfigSchemaParams = lazyCompile<ConfigSchemaParams>(ConfigSchemaParamsSchema);
/** Public constant for validate Config Schema Lookup Params behavior in packages/gateway-protocol. */
export const validateConfigSchemaLookupParams = lazyCompile<ConfigSchemaLookupParams>(
  ConfigSchemaLookupParamsSchema,
);
/** Public constant for validate Config Schema Lookup Result behavior in packages/gateway-protocol. */
export const validateConfigSchemaLookupResult = lazyCompile<ConfigSchemaLookupResult>(
  ConfigSchemaLookupResultSchema,
);
/** Public constant for validate Wizard Start Params behavior in packages/gateway-protocol. */
export const validateWizardStartParams = lazyCompile<WizardStartParams>(WizardStartParamsSchema);
/** Public constant for validate Wizard Next Params behavior in packages/gateway-protocol. */
export const validateWizardNextParams = lazyCompile<WizardNextParams>(WizardNextParamsSchema);
/** Public constant for validate Wizard Cancel Params behavior in packages/gateway-protocol. */
export const validateWizardCancelParams = lazyCompile<WizardCancelParams>(WizardCancelParamsSchema);
/** Public constant for validate Wizard Status Params behavior in packages/gateway-protocol. */
export const validateWizardStatusParams = lazyCompile<WizardStatusParams>(WizardStatusParamsSchema);
/** Public constant for validate Talk Mode Params behavior in packages/gateway-protocol. */
export const validateTalkModeParams = lazyCompile<TalkModeParams>(TalkModeParamsSchema);
/** Public constant for validate Talk Event behavior in packages/gateway-protocol. */
export const validateTalkEvent = lazyCompile<TalkEvent>(TalkEventSchema);
/** Public constant for validate Talk Catalog Params behavior in packages/gateway-protocol. */
export const validateTalkCatalogParams = lazyCompile<TalkCatalogParams>(TalkCatalogParamsSchema);
/** Public constant for validate Talk Catalog Result behavior in packages/gateway-protocol. */
export const validateTalkCatalogResult = lazyCompile<TalkCatalogResult>(TalkCatalogResultSchema);
/** Public constant for validate Talk Config Params behavior in packages/gateway-protocol. */
export const validateTalkConfigParams = lazyCompile<TalkConfigParams>(TalkConfigParamsSchema);
/** Public constant for validate Talk Config Result behavior in packages/gateway-protocol. */
export const validateTalkConfigResult = lazyCompile<TalkConfigResult>(TalkConfigResultSchema);
/** Public constant for validate Talk Client Create Params behavior in packages/gateway-protocol. */
export const validateTalkClientCreateParams = lazyCompile<TalkClientCreateParams>(
  TalkClientCreateParamsSchema,
);
/** Public constant for validate Talk Client Create Result behavior in packages/gateway-protocol. */
export const validateTalkClientCreateResult = lazyCompile<TalkClientCreateResult>(
  TalkClientCreateResultSchema,
);
/** Public constant for validate Talk Client Tool Call Params behavior in packages/gateway-protocol. */
export const validateTalkClientToolCallParams = lazyCompile<TalkClientToolCallParams>(
  TalkClientToolCallParamsSchema,
);
/** Public constant for validate Talk Client Tool Call Result behavior in packages/gateway-protocol. */
export const validateTalkClientToolCallResult = lazyCompile<TalkClientToolCallResult>(
  TalkClientToolCallResultSchema,
);
/** Public constant for validate Talk Client Steer Params behavior in packages/gateway-protocol. */
export const validateTalkClientSteerParams = lazyCompile<TalkClientSteerParams>(
  TalkClientSteerParamsSchema,
);
/** Public constant for validate Talk Agent Control Result behavior in packages/gateway-protocol. */
export const validateTalkAgentControlResult = lazyCompile<TalkAgentControlResult>(
  TalkAgentControlResultSchema,
);
/** Public constant for validate Talk Session Create Params behavior in packages/gateway-protocol. */
export const validateTalkSessionCreateParams = lazyCompile<TalkSessionCreateParams>(
  TalkSessionCreateParamsSchema,
);
/** Public constant for validate Talk Session Create Result behavior in packages/gateway-protocol. */
export const validateTalkSessionCreateResult = lazyCompile<TalkSessionCreateResult>(
  TalkSessionCreateResultSchema,
);
/** Public constant for validate Talk Session Join Params behavior in packages/gateway-protocol. */
export const validateTalkSessionJoinParams = lazyCompile<TalkSessionJoinParams>(
  TalkSessionJoinParamsSchema,
);
/** Public constant for validate Talk Session Join Result behavior in packages/gateway-protocol. */
export const validateTalkSessionJoinResult = lazyCompile<TalkSessionJoinResult>(
  TalkSessionJoinResultSchema,
);
/** Public constant for validate Talk Session Append Audio Params behavior in packages/gateway-protocol. */
export const validateTalkSessionAppendAudioParams = lazyCompile<TalkSessionAppendAudioParams>(
  TalkSessionAppendAudioParamsSchema,
);
/** Public constant for validate Talk Session Turn Params behavior in packages/gateway-protocol. */
export const validateTalkSessionTurnParams = lazyCompile<TalkSessionTurnParams>(
  TalkSessionTurnParamsSchema,
);
/** Public constant for validate Talk Session Cancel Turn Params behavior in packages/gateway-protocol. */
export const validateTalkSessionCancelTurnParams = lazyCompile<TalkSessionCancelTurnParams>(
  TalkSessionCancelTurnParamsSchema,
);
/** Public constant for validate Talk Session Cancel Output Params behavior in packages/gateway-protocol. */
export const validateTalkSessionCancelOutputParams = lazyCompile<TalkSessionCancelOutputParams>(
  TalkSessionCancelOutputParamsSchema,
);
/** Public constant for validate Talk Session Turn Result behavior in packages/gateway-protocol. */
export const validateTalkSessionTurnResult = lazyCompile<TalkSessionTurnResult>(
  TalkSessionTurnResultSchema,
);
/** Public constant for validate Talk Session Steer Params behavior in packages/gateway-protocol. */
export const validateTalkSessionSteerParams = lazyCompile<TalkSessionSteerParams>(
  TalkSessionSteerParamsSchema,
);
/** Public constant for validate Talk Session Submit Tool Result Params behavior in packages/gateway-protocol. */
export const validateTalkSessionSubmitToolResultParams =
  lazyCompile<TalkSessionSubmitToolResultParams>(TalkSessionSubmitToolResultParamsSchema);
/** Public constant for validate Talk Session Close Params behavior in packages/gateway-protocol. */
export const validateTalkSessionCloseParams = lazyCompile<TalkSessionCloseParams>(
  TalkSessionCloseParamsSchema,
);
/** Public constant for validate Talk Session Ok Result behavior in packages/gateway-protocol. */
export const validateTalkSessionOkResult =
  lazyCompile<TalkSessionOkResult>(TalkSessionOkResultSchema);
/** Public constant for validate Talk Speak Params behavior in packages/gateway-protocol. */
export const validateTalkSpeakParams = lazyCompile<TalkSpeakParams>(TalkSpeakParamsSchema);
/** Public constant for validate Talk Speak Result behavior in packages/gateway-protocol. */
export const validateTalkSpeakResult = lazyCompile<TalkSpeakResult>(TalkSpeakResultSchema);
/** Public constant for validate Channels Status Params behavior in packages/gateway-protocol. */
export const validateChannelsStatusParams = lazyCompile<ChannelsStatusParams>(
  ChannelsStatusParamsSchema,
);
/** Public constant for validate Channels Start Params behavior in packages/gateway-protocol. */
export const validateChannelsStartParams =
  lazyCompile<ChannelsStartParams>(ChannelsStartParamsSchema);
/** Public constant for validate Channels Stop Params behavior in packages/gateway-protocol. */
export const validateChannelsStopParams = lazyCompile<ChannelsStopParams>(ChannelsStopParamsSchema);
/** Public constant for validate Channels Logout Params behavior in packages/gateway-protocol. */
export const validateChannelsLogoutParams = lazyCompile<ChannelsLogoutParams>(
  ChannelsLogoutParamsSchema,
);
/** Public constant for validate Models List Params behavior in packages/gateway-protocol. */
export const validateModelsListParams = lazyCompile<ModelsListParams>(ModelsListParamsSchema);
/** Public constant for validate Skills Status Params behavior in packages/gateway-protocol. */
export const validateSkillsStatusParams = lazyCompile<SkillsStatusParams>(SkillsStatusParamsSchema);
/** Public constant for validate Tools Catalog Params behavior in packages/gateway-protocol. */
export const validateToolsCatalogParams = lazyCompile<ToolsCatalogParams>(ToolsCatalogParamsSchema);
/** Public constant for validate Tools Effective Params behavior in packages/gateway-protocol. */
export const validateToolsEffectiveParams = lazyCompile<ToolsEffectiveParams>(
  ToolsEffectiveParamsSchema,
);
/** Public constant for validate Tools Invoke Params behavior in packages/gateway-protocol. */
export const validateToolsInvokeParams = lazyCompile<ToolsInvokeParams>(ToolsInvokeParamsSchema);
/** Public constant for validate Skills Bins Params behavior in packages/gateway-protocol. */
export const validateSkillsBinsParams = lazyCompile<SkillsBinsParams>(SkillsBinsParamsSchema);
/** Public constant for validate Skills Install Params behavior in packages/gateway-protocol. */
export const validateSkillsInstallParams =
  lazyCompile<SkillsInstallParams>(SkillsInstallParamsSchema);
/** Public constant for validate Skills Upload Begin Params behavior in packages/gateway-protocol. */
export const validateSkillsUploadBeginParams = lazyCompile<SkillsUploadBeginParams>(
  SkillsUploadBeginParamsSchema,
);
/** Public constant for validate Skills Upload Chunk Params behavior in packages/gateway-protocol. */
export const validateSkillsUploadChunkParams = lazyCompile<SkillsUploadChunkParams>(
  SkillsUploadChunkParamsSchema,
);
/** Public constant for validate Skills Upload Commit Params behavior in packages/gateway-protocol. */
export const validateSkillsUploadCommitParams = lazyCompile<SkillsUploadCommitParams>(
  SkillsUploadCommitParamsSchema,
);
/** Public constant for validate Skills Update Params behavior in packages/gateway-protocol. */
export const validateSkillsUpdateParams = lazyCompile<SkillsUpdateParams>(SkillsUpdateParamsSchema);
/** Public constant for validate Skills Search Params behavior in packages/gateway-protocol. */
export const validateSkillsSearchParams = lazyCompile<SkillsSearchParams>(SkillsSearchParamsSchema);
/** Public constant for validate Skills Detail Params behavior in packages/gateway-protocol. */
export const validateSkillsDetailParams = lazyCompile<SkillsDetailParams>(SkillsDetailParamsSchema);
/** Public constant for validate Skills Security Verdicts Params behavior in packages/gateway-protocol. */
export const validateSkillsSecurityVerdictsParams = lazyCompile<SkillsSecurityVerdictsParams>(
  SkillsSecurityVerdictsParamsSchema,
);
/** Public constant for validate Skills Skill Card Params behavior in packages/gateway-protocol. */
export const validateSkillsSkillCardParams = lazyCompile<SkillsSkillCardParams>(
  SkillsSkillCardParamsSchema,
);
/** Public constant for validate Cron List Params behavior in packages/gateway-protocol. */
export const validateCronListParams = lazyCompile<CronListParams>(CronListParamsSchema);
/** Public constant for validate Cron Status Params behavior in packages/gateway-protocol. */
export const validateCronStatusParams = lazyCompile<CronStatusParams>(CronStatusParamsSchema);
/** Public constant for validate Cron Get Params behavior in packages/gateway-protocol. */
export const validateCronGetParams = lazyCompile<CronGetParams>(CronGetParamsSchema);
/** Public constant for validate Cron Add Params behavior in packages/gateway-protocol. */
export const validateCronAddParams = lazyCompile<CronAddParams>(CronAddParamsSchema);
/** Public constant for validate Cron Update Params behavior in packages/gateway-protocol. */
export const validateCronUpdateParams = lazyCompile<CronUpdateParams>(CronUpdateParamsSchema);
/** Public constant for validate Cron Remove Params behavior in packages/gateway-protocol. */
export const validateCronRemoveParams = lazyCompile<CronRemoveParams>(CronRemoveParamsSchema);
/** Public constant for validate Cron Run Params behavior in packages/gateway-protocol. */
export const validateCronRunParams = lazyCompile<CronRunParams>(CronRunParamsSchema);
/** Public constant for validate Cron Runs Params behavior in packages/gateway-protocol. */
export const validateCronRunsParams = lazyCompile<CronRunsParams>(CronRunsParamsSchema);
/** Public constant for validate Device Pair List Params behavior in packages/gateway-protocol. */
export const validateDevicePairListParams = lazyCompile<DevicePairListParams>(
  DevicePairListParamsSchema,
);
/** Public constant for validate Device Pair Approve Params behavior in packages/gateway-protocol. */
export const validateDevicePairApproveParams = lazyCompile<DevicePairApproveParams>(
  DevicePairApproveParamsSchema,
);
/** Public constant for validate Device Pair Reject Params behavior in packages/gateway-protocol. */
export const validateDevicePairRejectParams = lazyCompile<DevicePairRejectParams>(
  DevicePairRejectParamsSchema,
);
/** Public constant for validate Device Pair Remove Params behavior in packages/gateway-protocol. */
export const validateDevicePairRemoveParams = lazyCompile<DevicePairRemoveParams>(
  DevicePairRemoveParamsSchema,
);
/** Public constant for validate Device Token Rotate Params behavior in packages/gateway-protocol. */
export const validateDeviceTokenRotateParams = lazyCompile<DeviceTokenRotateParams>(
  DeviceTokenRotateParamsSchema,
);
/** Public constant for validate Device Token Revoke Params behavior in packages/gateway-protocol. */
export const validateDeviceTokenRevokeParams = lazyCompile<DeviceTokenRevokeParams>(
  DeviceTokenRevokeParamsSchema,
);
/** Public constant for validate Exec Approvals Get Params behavior in packages/gateway-protocol. */
export const validateExecApprovalsGetParams = lazyCompile<ExecApprovalsGetParams>(
  ExecApprovalsGetParamsSchema,
);
/** Public constant for validate Exec Approvals Set Params behavior in packages/gateway-protocol. */
export const validateExecApprovalsSetParams = lazyCompile<ExecApprovalsSetParams>(
  ExecApprovalsSetParamsSchema,
);
/** Public constant for validate Exec Approval Get Params behavior in packages/gateway-protocol. */
export const validateExecApprovalGetParams = lazyCompile<ExecApprovalGetParams>(
  ExecApprovalGetParamsSchema,
);
/** Public constant for validate Exec Approval Request Params behavior in packages/gateway-protocol. */
export const validateExecApprovalRequestParams = lazyCompile<ExecApprovalRequestParams>(
  ExecApprovalRequestParamsSchema,
);
/** Public constant for validate Exec Approval Resolve Params behavior in packages/gateway-protocol. */
export const validateExecApprovalResolveParams = lazyCompile<ExecApprovalResolveParams>(
  ExecApprovalResolveParamsSchema,
);
/** Public constant for validate Plugin Approval Request Params behavior in packages/gateway-protocol. */
export const validatePluginApprovalRequestParams = lazyCompile<PluginApprovalRequestParams>(
  PluginApprovalRequestParamsSchema,
);
/** Public constant for validate Plugin Approval Resolve Params behavior in packages/gateway-protocol. */
export const validatePluginApprovalResolveParams = lazyCompile<PluginApprovalResolveParams>(
  PluginApprovalResolveParamsSchema,
);
/** Public constant for validate Plugins Ui Descriptors Params behavior in packages/gateway-protocol. */
export const validatePluginsUiDescriptorsParams = lazyCompile<PluginsUiDescriptorsParams>(
  PluginsUiDescriptorsParamsSchema,
);
/** Public constant for validate Plugins Session Action Params behavior in packages/gateway-protocol. */
export const validatePluginsSessionActionParams = lazyCompile<PluginsSessionActionParams>(
  PluginsSessionActionParamsSchema,
);
/** Public constant for validate Plugins Session Action Result behavior in packages/gateway-protocol. */
export const validatePluginsSessionActionResult = lazyCompile<PluginsSessionActionResult>(
  PluginsSessionActionResultSchema,
);
/** Public constant for validate Exec Approvals Node Get Params behavior in packages/gateway-protocol. */
export const validateExecApprovalsNodeGetParams = lazyCompile<ExecApprovalsNodeGetParams>(
  ExecApprovalsNodeGetParamsSchema,
);
/** Public constant for validate Exec Approvals Node Set Params behavior in packages/gateway-protocol. */
export const validateExecApprovalsNodeSetParams = lazyCompile<ExecApprovalsNodeSetParams>(
  ExecApprovalsNodeSetParamsSchema,
);
/** Public constant for validate Logs Tail Params behavior in packages/gateway-protocol. */
export const validateLogsTailParams = lazyCompile<LogsTailParams>(LogsTailParamsSchema);
/** Public constant for validate Chat History Params behavior in packages/gateway-protocol. */
export const validateChatHistoryParams = lazyCompile(ChatHistoryParamsSchema);
/** Public constant for validate Chat Send Params behavior in packages/gateway-protocol. */
export const validateChatSendParams = lazyCompile(ChatSendParamsSchema);
/** Public constant for validate Chat Abort Params behavior in packages/gateway-protocol. */
export const validateChatAbortParams = lazyCompile<ChatAbortParams>(ChatAbortParamsSchema);
/** Public constant for validate Chat Inject Params behavior in packages/gateway-protocol. */
export const validateChatInjectParams = lazyCompile<ChatInjectParams>(ChatInjectParamsSchema);
/** Public constant for validate Chat Event behavior in packages/gateway-protocol. */
export const validateChatEvent = lazyCompile(ChatEventSchema);
/** Public constant for validate Update Status Params behavior in packages/gateway-protocol. */
export const validateUpdateStatusParams = lazyCompile<UpdateStatusParams>(UpdateStatusParamsSchema);
/** Public constant for validate Update Run Params behavior in packages/gateway-protocol. */
export const validateUpdateRunParams = lazyCompile<UpdateRunParams>(UpdateRunParamsSchema);
/** Public constant for validate Web Login Start Params behavior in packages/gateway-protocol. */
export const validateWebLoginStartParams =
  lazyCompile<WebLoginStartParams>(WebLoginStartParamsSchema);
/** Public constant for validate Web Login Wait Params behavior in packages/gateway-protocol. */
export const validateWebLoginWaitParams = lazyCompile<WebLoginWaitParams>(WebLoginWaitParamsSchema);

function firstStringParam(value: unknown): string | undefined {
  if (typeof value === "string" && value.trim()) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.find(
      (entry): entry is string => typeof entry === "string" && entry.trim().length > 0,
    );
  }
  return undefined;
}

/** Public helper for format Validation Errors behavior in packages/gateway-protocol. */
export function formatValidationErrors(errors: ValidationError[] | null | undefined) {
  if (!errors?.length) {
    return "unknown validation error";
  }

  const parts: string[] = [];

  for (const err of errors) {
    const keyword = typeof err?.keyword === "string" ? err.keyword : "";
    const instancePath = typeof err?.instancePath === "string" ? err.instancePath : "";

    if (keyword === "additionalProperties") {
      const additionalProperty =
        firstStringParam(err?.params?.additionalProperty) ??
        firstStringParam(err?.params?.additionalProperties);
      if (additionalProperty) {
        const where = instancePath ? `at ${instancePath}` : "at root";
        parts.push(`${where}: unexpected property '${additionalProperty}'`);
        continue;
      }
    }
    if (keyword === "required") {
      const missingProperty =
        firstStringParam(err?.params?.missingProperty) ??
        firstStringParam(err?.params?.requiredProperties);
      if (missingProperty) {
        const where = instancePath ? `at ${instancePath}: ` : "";
        parts.push(`${where}must have required property '${missingProperty}'`);
        continue;
      }
    }

    const failingKeyword =
      typeof err?.params?.failingKeyword === "string" ? err.params.failingKeyword : "";
    const message =
      keyword === "then" || (keyword === "if" && failingKeyword === "then")
        ? "must have required conditional properties"
        : typeof err?.message === "string" && err.message.trim()
          ? err.message
          : "validation error";
    const where = instancePath ? `at ${instancePath}: ` : "";
    parts.push(`${where}${message}`);
  }

  // De-dupe while preserving order.
  const unique = uniqueStrings(parts.filter((part) => part.trim()));
  if (!unique.length) {
    return "unknown validation error";
  }
  return unique.join("; ");
}

/** Re-exported public API for packages/gateway-protocol. */
export {
  ConnectParamsSchema,
  HelloOkSchema,
  RequestFrameSchema,
  ResponseFrameSchema,
  EventFrameSchema,
  GatewayFrameSchema,
  PresenceEntrySchema,
  SnapshotSchema,
  ErrorShapeSchema,
  EnvironmentStatusSchema,
  EnvironmentSummarySchema,
  EnvironmentsListParamsSchema,
  EnvironmentsListResultSchema,
  EnvironmentsStatusParamsSchema,
  EnvironmentsStatusResultSchema,
  StateVersionSchema,
  AgentEventSchema,
  MessageActionParamsSchema,
  ChatEventSchema,
  SendParamsSchema,
  PollParamsSchema,
  AgentParamsSchema,
  AgentIdentityParamsSchema,
  AgentIdentityResultSchema,
  WakeParamsSchema,
  PushTestParamsSchema,
  PushTestResultSchema,
  WebPushVapidPublicKeyParamsSchema,
  WebPushSubscribeParamsSchema,
  WebPushUnsubscribeParamsSchema,
  WebPushTestParamsSchema,
  NodePairRequestParamsSchema,
  NodePairListParamsSchema,
  NodePairApproveParamsSchema,
  NodePairRejectParamsSchema,
  NodePairRemoveParamsSchema,
  NodePairVerifyParamsSchema,
  NodeListParamsSchema,
  NodePendingAckParamsSchema,
  NodeInvokeParamsSchema,
  NodeEventResultSchema,
  NodePresenceAlivePayloadSchema,
  NodePresenceAliveReasonSchema,
  NodePendingDrainParamsSchema,
  NodePendingDrainResultSchema,
  NodePendingEnqueueParamsSchema,
  NodePendingEnqueueResultSchema,
  SessionsListParamsSchema,
  SessionsCleanupParamsSchema,
  SessionsPreviewParamsSchema,
  SessionsDescribeParamsSchema,
  SessionsResolveParamsSchema,
  SessionsCompactionListParamsSchema,
  SessionsCompactionGetParamsSchema,
  SessionsCompactionBranchParamsSchema,
  SessionsCompactionRestoreParamsSchema,
  SessionsCreateParamsSchema,
  SessionsSendParamsSchema,
  SessionsAbortParamsSchema,
  SessionsPatchParamsSchema,
  SessionsPluginPatchParamsSchema,
  SessionsResetParamsSchema,
  SessionsDeleteParamsSchema,
  SessionsCompactParamsSchema,
  SessionsUsageParamsSchema,
  ArtifactSummarySchema,
  ArtifactsListParamsSchema,
  ArtifactsGetParamsSchema,
  ArtifactsDownloadParamsSchema,
  TaskSummarySchema,
  TasksListParamsSchema,
  TasksListResultSchema,
  TasksGetParamsSchema,
  TasksGetResultSchema,
  TasksCancelParamsSchema,
  TasksCancelResultSchema,
  ConfigGetParamsSchema,
  ConfigSetParamsSchema,
  ConfigApplyParamsSchema,
  ConfigPatchParamsSchema,
  ConfigSchemaParamsSchema,
  ConfigSchemaLookupParamsSchema,
  ConfigSchemaResponseSchema,
  ConfigSchemaLookupResultSchema,
  UpdateStatusParamsSchema,
  WizardStartParamsSchema,
  WizardNextParamsSchema,
  WizardCancelParamsSchema,
  WizardStatusParamsSchema,
  WizardStepSchema,
  WizardNextResultSchema,
  WizardStartResultSchema,
  WizardStatusResultSchema,
  TalkEventSchema,
  TalkCatalogParamsSchema,
  TalkCatalogResultSchema,
  TalkClientCreateParamsSchema,
  TalkClientCreateResultSchema,
  TalkAgentControlResultSchema,
  TalkClientSteerParamsSchema,
  TalkClientToolCallParamsSchema,
  TalkClientToolCallResultSchema,
  TalkConfigParamsSchema,
  TalkConfigResultSchema,
  TalkSessionAppendAudioParamsSchema,
  TalkSessionCancelOutputParamsSchema,
  TalkSessionCancelTurnParamsSchema,
  TalkSessionCreateParamsSchema,
  TalkSessionCreateResultSchema,
  TalkSessionJoinParamsSchema,
  TalkSessionJoinResultSchema,
  TalkSessionTurnParamsSchema,
  TalkSessionTurnResultSchema,
  TalkSessionSteerParamsSchema,
  TalkSessionSubmitToolResultParamsSchema,
  TalkSessionCloseParamsSchema,
  TalkSessionOkResultSchema,
  TalkSpeakParamsSchema,
  TalkSpeakResultSchema,
  ChannelsStatusParamsSchema,
  ChannelsStatusResultSchema,
  ChannelsStartParamsSchema,
  ChannelsStopParamsSchema,
  ChannelsLogoutParamsSchema,
  WebLoginStartParamsSchema,
  WebLoginWaitParamsSchema,
  AgentSummarySchema,
  AgentsFileEntrySchema,
  AgentsCreateParamsSchema,
  AgentsCreateResultSchema,
  AgentsUpdateParamsSchema,
  AgentsUpdateResultSchema,
  AgentsDeleteParamsSchema,
  AgentsDeleteResultSchema,
  AgentsFilesListParamsSchema,
  AgentsFilesListResultSchema,
  AgentsFilesGetParamsSchema,
  AgentsFilesGetResultSchema,
  AgentsFilesSetParamsSchema,
  AgentsFilesSetResultSchema,
  AgentsListParamsSchema,
  AgentsListResultSchema,
  CommandsListParamsSchema,
  CommandsListResultSchema,
  PluginsSessionActionParamsSchema,
  PluginsSessionActionResultSchema,
  PluginsUiDescriptorsParamsSchema,
  ModelsListParamsSchema,
  SkillsStatusParamsSchema,
  ToolsCatalogParamsSchema,
  ToolsEffectiveParamsSchema,
  ToolsInvokeParamsSchema,
  SkillsInstallParamsSchema,
  SkillsSearchParamsSchema,
  SkillsSearchResultSchema,
  SkillsDetailParamsSchema,
  SkillsDetailResultSchema,
  SkillsSecurityVerdictsParamsSchema,
  SkillsSecurityVerdictsResultSchema,
  SkillsSkillCardParamsSchema,
  SkillsSkillCardResultSchema,
  SkillsUploadBeginParamsSchema,
  SkillsUploadChunkParamsSchema,
  SkillsUploadCommitParamsSchema,
  SkillsUpdateParamsSchema,
  CronJobSchema,
  CronListParamsSchema,
  CronStatusParamsSchema,
  CronGetParamsSchema,
  CronAddParamsSchema,
  CronUpdateParamsSchema,
  CronRemoveParamsSchema,
  CronRunParamsSchema,
  CronRunsParamsSchema,
  LogsTailParamsSchema,
  LogsTailResultSchema,
  ExecApprovalsGetParamsSchema,
  ExecApprovalsSetParamsSchema,
  ExecApprovalGetParamsSchema,
  ExecApprovalRequestParamsSchema,
  ExecApprovalResolveParamsSchema,
  ChatHistoryParamsSchema,
  ChatSendParamsSchema,
  ChatInjectParamsSchema,
  UpdateRunParamsSchema,
  TickEventSchema,
  ShutdownEventSchema,
  ProtocolSchemas,
  MIN_CLIENT_PROTOCOL_VERSION,
  MIN_PROBE_PROTOCOL_VERSION,
  PROTOCOL_VERSION,
  ErrorCodes,
  errorShape,
};

/** Re-exported public API for packages/gateway-protocol. */
export type {
  GatewayFrame,
  ConnectParams,
  HelloOk,
  RequestFrame,
  ResponseFrame,
  EventFrame,
  PresenceEntry,
  Snapshot,
  ErrorShape,
  StateVersion,
  AgentEvent,
  AgentIdentityParams,
  AgentIdentityResult,
  AgentWaitParams,
  ChatEvent,
  TickEvent,
  ShutdownEvent,
  WakeParams,
  NodePairRequestParams,
  NodePairListParams,
  NodePairApproveParams,
  DevicePairListParams,
  DevicePairApproveParams,
  DevicePairRejectParams,
  ConfigGetParams,
  ConfigSetParams,
  ConfigApplyParams,
  ConfigPatchParams,
  ConfigSchemaParams,
  ConfigSchemaResponse,
  WizardStartParams,
  WizardNextParams,
  WizardCancelParams,
  WizardStatusParams,
  WizardStep,
  WizardNextResult,
  WizardStartResult,
  WizardStatusResult,
  TalkCatalogParams,
  TalkCatalogResult,
  TalkClientCreateParams,
  TalkClientCreateResult,
  TalkClientSteerParams,
  TalkAgentControlResult,
  TalkClientToolCallParams,
  TalkClientToolCallResult,
  TalkConfigParams,
  TalkConfigResult,
  TalkSessionAppendAudioParams,
  TalkSessionCancelOutputParams,
  TalkSessionCancelTurnParams,
  TalkSessionCreateParams,
  TalkSessionCreateResult,
  TalkSessionJoinParams,
  TalkSessionJoinResult,
  TalkSessionTurnParams,
  TalkSessionTurnResult,
  TalkSessionSteerParams,
  TalkSessionSubmitToolResultParams,
  TalkSessionCloseParams,
  TalkSessionOkResult,
  TalkSpeakParams,
  TalkSpeakResult,
  TalkModeParams,
  ChannelsStatusParams,
  ChannelsStatusResult,
  ChannelsStartParams,
  ChannelsStopParams,
  ChannelsLogoutParams,
  WebLoginStartParams,
  WebLoginWaitParams,
  AgentSummary,
  AgentsFileEntry,
  AgentsCreateParams,
  AgentsCreateResult,
  AgentsUpdateParams,
  AgentsUpdateResult,
  AgentsDeleteParams,
  AgentsDeleteResult,
  AgentsFilesListParams,
  AgentsFilesListResult,
  AgentsFilesGetParams,
  AgentsFilesGetResult,
  AgentsFilesSetParams,
  AgentsFilesSetResult,
  ArtifactSummary,
  ArtifactsListParams,
  ArtifactsListResult,
  ArtifactsGetParams,
  ArtifactsGetResult,
  ArtifactsDownloadParams,
  ArtifactsDownloadResult,
  AgentsListParams,
  AgentsListResult,
  CommandsListParams,
  CommandsListResult,
  CommandEntry,
  PluginsSessionActionParams,
  PluginsSessionActionResult,
  SkillsStatusParams,
  ToolsCatalogParams,
  ToolsCatalogResult,
  ToolsEffectiveParams,
  ToolsEffectiveResult,
  ToolsInvokeParams,
  ToolsInvokeResult,
  SkillsBinsParams,
  SkillsBinsResult,
  SkillsSearchParams,
  SkillsSearchResult,
  SkillsDetailParams,
  SkillsDetailResult,
  SkillsSecurityVerdictsParams,
  SkillsSecurityVerdictsResult,
  SkillsSkillCardParams,
  SkillsSkillCardResult,
  SkillsUploadBeginParams,
  SkillsUploadChunkParams,
  SkillsUploadCommitParams,
  SkillsInstallParams,
  SkillsUpdateParams,
  EnvironmentStatus,
  EnvironmentSummary,
  EnvironmentsListParams,
  EnvironmentsListResult,
  EnvironmentsStatusParams,
  EnvironmentsStatusResult,
  NodePairRejectParams,
  NodePairRemoveParams,
  NodePairVerifyParams,
  NodeListParams,
  NodeInvokeParams,
  NodeInvokeResultParams,
  NodeEventParams,
  NodeEventResult,
  NodePresenceAlivePayload,
  NodePresenceAliveReason,
  NodePendingDrainParams,
  NodePendingDrainResult,
  NodePendingEnqueueParams,
  NodePendingEnqueueResult,
  SessionsListParams,
  SessionsCleanupParams,
  SessionsPreviewParams,
  SessionsDescribeParams,
  SessionsResolveParams,
  SessionOperationEvent,
  SessionsPatchParams,
  SessionsPatchResult,
  SessionsResetParams,
  SessionsDeleteParams,
  SessionsCompactParams,
  SessionsUsageParams,
  TaskSummary,
  TasksListParams,
  TasksListResult,
  TasksGetParams,
  TasksGetResult,
  TasksCancelParams,
  TasksCancelResult,
  CronJob,
  CronListParams,
  CronStatusParams,
  CronGetParams,
  CronAddParams,
  CronUpdateParams,
  CronRemoveParams,
  CronRunParams,
  CronRunsParams,
  CronRunLogEntry,
  ExecApprovalsGetParams,
  ExecApprovalsSetParams,
  ExecApprovalsSnapshot,
  ExecApprovalGetParams,
  ExecApprovalRequestParams,
  ExecApprovalResolveParams,
  LogsTailParams,
  LogsTailResult,
  PollParams,
  WebPushVapidPublicKeyParams,
  WebPushSubscribeParams,
  WebPushUnsubscribeParams,
  WebPushTestParams,
  UpdateStatusParams,
  UpdateRunParams,
  ChatInjectParams,
};
function uniqueStrings(values: string[]): string[] {
  return [...new Set(values)];
}

// The protocol package cannot import core session types. This local structural
// result mirrors the wire contract and keeps the package independent of src/.
type SessionsPatchResult = {
  ok: true;
  path: string;
  key: string;
  entry: Record<string, unknown>;
  resolved?: {
    modelProvider?: string;
    model?: string;
    agentRuntime?: GatewayAgentRuntime;
  };
};

type GatewayAgentRuntime = {
  id: string;
  fallback?: "openclaw" | "none";
  source: "env" | "agent" | "defaults" | "model" | "provider" | "implicit" | "session-key";
};
