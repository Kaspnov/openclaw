// Public gateway protocol validator bundle generated from the shared schema module.
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

/** Normalized validation error shape exposed by compiled protocol validators. */
export type ValidationError = {
  keyword?: string;
  instancePath?: string;
  schemaPath?: string;
  params?: Record<string, unknown>;
  message?: string;
};

/** TypeBox-backed validator function that retains last errors and source schema. */
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

/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCommandsListParams = lazyCompile<CommandsListParams>(CommandsListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConnectParams = lazyCompile<ConnectParams>(ConnectParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateRequestFrame = lazyCompile<RequestFrame>(RequestFrameSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateResponseFrame = lazyCompile<ResponseFrame>(ResponseFrameSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateEventFrame = lazyCompile<EventFrame>(EventFrameSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateMessageActionParams =
  lazyCompile<MessageActionParams>(MessageActionParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSendParams = lazyCompile(SendParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePollParams = lazyCompile<PollParams>(PollParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentParams = lazyCompile(AgentParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentIdentityParams =
  lazyCompile<AgentIdentityParams>(AgentIdentityParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentWaitParams = lazyCompile<AgentWaitParams>(AgentWaitParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWakeParams = lazyCompile<WakeParams>(WakeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsListParams = lazyCompile<AgentsListParams>(AgentsListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsCreateParams = lazyCompile<AgentsCreateParams>(AgentsCreateParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsUpdateParams = lazyCompile<AgentsUpdateParams>(AgentsUpdateParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsDeleteParams = lazyCompile<AgentsDeleteParams>(AgentsDeleteParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsFilesListParams = lazyCompile<AgentsFilesListParams>(
  AgentsFilesListParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsFilesGetParams = lazyCompile<AgentsFilesGetParams>(
  AgentsFilesGetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateAgentsFilesSetParams = lazyCompile<AgentsFilesSetParams>(
  AgentsFilesSetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateArtifactsListParams =
  lazyCompile<ArtifactsListParams>(ArtifactsListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateArtifactsGetParams = lazyCompile<ArtifactsGetParams>(ArtifactsGetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateArtifactsDownloadParams = lazyCompile<ArtifactsDownloadParams>(
  ArtifactsDownloadParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairRequestParams = lazyCompile<NodePairRequestParams>(
  NodePairRequestParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairListParams = lazyCompile<NodePairListParams>(NodePairListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairApproveParams = lazyCompile<NodePairApproveParams>(
  NodePairApproveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairRejectParams = lazyCompile<NodePairRejectParams>(
  NodePairRejectParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairRemoveParams = lazyCompile<NodePairRemoveParams>(
  NodePairRemoveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePairVerifyParams = lazyCompile<NodePairVerifyParams>(
  NodePairVerifyParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeRenameParams = lazyCompile<NodeRenameParams>(NodeRenameParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeListParams = lazyCompile<NodeListParams>(NodeListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateEnvironmentsListParams = lazyCompile<EnvironmentsListParams>(
  EnvironmentsListParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateEnvironmentsStatusParams = lazyCompile<EnvironmentsStatusParams>(
  EnvironmentsStatusParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePendingAckParams = lazyCompile<NodePendingAckParams>(
  NodePendingAckParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeDescribeParams = lazyCompile<NodeDescribeParams>(NodeDescribeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeInvokeParams = lazyCompile<NodeInvokeParams>(NodeInvokeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeInvokeResultParams = lazyCompile<NodeInvokeResultParams>(
  NodeInvokeResultParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeEventParams = lazyCompile<NodeEventParams>(NodeEventParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodeEventResult = lazyCompile<NodeEventResult>(NodeEventResultSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePresenceAlivePayload = lazyCompile<NodePresenceAlivePayload>(
  NodePresenceAlivePayloadSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePendingDrainParams = lazyCompile<NodePendingDrainParams>(
  NodePendingDrainParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateNodePendingEnqueueParams = lazyCompile<NodePendingEnqueueParams>(
  NodePendingEnqueueParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePushTestParams = lazyCompile<PushTestParams>(PushTestParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWebPushVapidPublicKeyParams = lazyCompile<WebPushVapidPublicKeyParams>(
  WebPushVapidPublicKeyParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWebPushSubscribeParams = lazyCompile<WebPushSubscribeParams>(
  WebPushSubscribeParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWebPushUnsubscribeParams = lazyCompile<WebPushUnsubscribeParams>(
  WebPushUnsubscribeParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWebPushTestParams = lazyCompile<WebPushTestParams>(WebPushTestParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSecretsResolveParams = lazyCompile<SecretsResolveParams>(
  SecretsResolveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSecretsResolveResult = lazyCompile<SecretsResolveResult>(
  SecretsResolveResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsListParams = lazyCompile<SessionsListParams>(SessionsListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCleanupParams = lazyCompile<SessionsCleanupParams>(
  SessionsCleanupParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsPreviewParams = lazyCompile<SessionsPreviewParams>(
  SessionsPreviewParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsDescribeParams = lazyCompile<SessionsDescribeParams>(
  SessionsDescribeParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsResolveParams = lazyCompile<SessionsResolveParams>(
  SessionsResolveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCreateParams = lazyCompile<SessionsCreateParams>(
  SessionsCreateParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsSendParams = lazyCompile<SessionsSendParams>(SessionsSendParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsMessagesSubscribeParams = lazyCompile<SessionsMessagesSubscribeParams>(
  SessionsMessagesSubscribeParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsMessagesUnsubscribeParams =
  lazyCompile<SessionsMessagesUnsubscribeParams>(SessionsMessagesUnsubscribeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsAbortParams =
  lazyCompile<SessionsAbortParams>(SessionsAbortParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsPatchParams =
  lazyCompile<SessionsPatchParams>(SessionsPatchParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsPluginPatchParams = lazyCompile<SessionsPluginPatchParams>(
  SessionsPluginPatchParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsResetParams =
  lazyCompile<SessionsResetParams>(SessionsResetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsDeleteParams = lazyCompile<SessionsDeleteParams>(
  SessionsDeleteParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCompactParams = lazyCompile<SessionsCompactParams>(
  SessionsCompactParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCompactionListParams = lazyCompile<SessionsCompactionListParams>(
  SessionsCompactionListParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCompactionGetParams = lazyCompile<SessionsCompactionGetParams>(
  SessionsCompactionGetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCompactionBranchParams = lazyCompile<SessionsCompactionBranchParams>(
  SessionsCompactionBranchParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsCompactionRestoreParams = lazyCompile<SessionsCompactionRestoreParams>(
  SessionsCompactionRestoreParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSessionsUsageParams =
  lazyCompile<SessionsUsageParams>(SessionsUsageParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTasksListParams = lazyCompile<TasksListParams>(TasksListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTasksGetParams = lazyCompile<TasksGetParams>(TasksGetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTasksCancelParams = lazyCompile<TasksCancelParams>(TasksCancelParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigGetParams = lazyCompile<ConfigGetParams>(ConfigGetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigSetParams = lazyCompile<ConfigSetParams>(ConfigSetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigApplyParams = lazyCompile<ConfigApplyParams>(ConfigApplyParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigPatchParams = lazyCompile<ConfigPatchParams>(ConfigPatchParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigSchemaParams = lazyCompile<ConfigSchemaParams>(ConfigSchemaParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigSchemaLookupParams = lazyCompile<ConfigSchemaLookupParams>(
  ConfigSchemaLookupParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateConfigSchemaLookupResult = lazyCompile<ConfigSchemaLookupResult>(
  ConfigSchemaLookupResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWizardStartParams = lazyCompile<WizardStartParams>(WizardStartParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWizardNextParams = lazyCompile<WizardNextParams>(WizardNextParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWizardCancelParams = lazyCompile<WizardCancelParams>(WizardCancelParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWizardStatusParams = lazyCompile<WizardStatusParams>(WizardStatusParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkModeParams = lazyCompile<TalkModeParams>(TalkModeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkEvent = lazyCompile<TalkEvent>(TalkEventSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkCatalogParams = lazyCompile<TalkCatalogParams>(TalkCatalogParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkCatalogResult = lazyCompile<TalkCatalogResult>(TalkCatalogResultSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkConfigParams = lazyCompile<TalkConfigParams>(TalkConfigParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkConfigResult = lazyCompile<TalkConfigResult>(TalkConfigResultSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkClientCreateParams = lazyCompile<TalkClientCreateParams>(
  TalkClientCreateParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkClientCreateResult = lazyCompile<TalkClientCreateResult>(
  TalkClientCreateResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkClientToolCallParams = lazyCompile<TalkClientToolCallParams>(
  TalkClientToolCallParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkClientToolCallResult = lazyCompile<TalkClientToolCallResult>(
  TalkClientToolCallResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkClientSteerParams = lazyCompile<TalkClientSteerParams>(
  TalkClientSteerParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkAgentControlResult = lazyCompile<TalkAgentControlResult>(
  TalkAgentControlResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionCreateParams = lazyCompile<TalkSessionCreateParams>(
  TalkSessionCreateParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionCreateResult = lazyCompile<TalkSessionCreateResult>(
  TalkSessionCreateResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionJoinParams = lazyCompile<TalkSessionJoinParams>(
  TalkSessionJoinParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionJoinResult = lazyCompile<TalkSessionJoinResult>(
  TalkSessionJoinResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionAppendAudioParams = lazyCompile<TalkSessionAppendAudioParams>(
  TalkSessionAppendAudioParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionTurnParams = lazyCompile<TalkSessionTurnParams>(
  TalkSessionTurnParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionCancelTurnParams = lazyCompile<TalkSessionCancelTurnParams>(
  TalkSessionCancelTurnParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionCancelOutputParams = lazyCompile<TalkSessionCancelOutputParams>(
  TalkSessionCancelOutputParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionTurnResult = lazyCompile<TalkSessionTurnResult>(
  TalkSessionTurnResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionSteerParams = lazyCompile<TalkSessionSteerParams>(
  TalkSessionSteerParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionSubmitToolResultParams =
  lazyCompile<TalkSessionSubmitToolResultParams>(TalkSessionSubmitToolResultParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionCloseParams = lazyCompile<TalkSessionCloseParams>(
  TalkSessionCloseParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSessionOkResult =
  lazyCompile<TalkSessionOkResult>(TalkSessionOkResultSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSpeakParams = lazyCompile<TalkSpeakParams>(TalkSpeakParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateTalkSpeakResult = lazyCompile<TalkSpeakResult>(TalkSpeakResultSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChannelsStatusParams = lazyCompile<ChannelsStatusParams>(
  ChannelsStatusParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChannelsStartParams =
  lazyCompile<ChannelsStartParams>(ChannelsStartParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChannelsStopParams = lazyCompile<ChannelsStopParams>(ChannelsStopParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChannelsLogoutParams = lazyCompile<ChannelsLogoutParams>(
  ChannelsLogoutParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateModelsListParams = lazyCompile<ModelsListParams>(ModelsListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsStatusParams = lazyCompile<SkillsStatusParams>(SkillsStatusParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateToolsCatalogParams = lazyCompile<ToolsCatalogParams>(ToolsCatalogParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateToolsEffectiveParams = lazyCompile<ToolsEffectiveParams>(
  ToolsEffectiveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateToolsInvokeParams = lazyCompile<ToolsInvokeParams>(ToolsInvokeParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsBinsParams = lazyCompile<SkillsBinsParams>(SkillsBinsParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsInstallParams =
  lazyCompile<SkillsInstallParams>(SkillsInstallParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsUploadBeginParams = lazyCompile<SkillsUploadBeginParams>(
  SkillsUploadBeginParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsUploadChunkParams = lazyCompile<SkillsUploadChunkParams>(
  SkillsUploadChunkParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsUploadCommitParams = lazyCompile<SkillsUploadCommitParams>(
  SkillsUploadCommitParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsUpdateParams = lazyCompile<SkillsUpdateParams>(SkillsUpdateParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsSearchParams = lazyCompile<SkillsSearchParams>(SkillsSearchParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsDetailParams = lazyCompile<SkillsDetailParams>(SkillsDetailParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsSecurityVerdictsParams = lazyCompile<SkillsSecurityVerdictsParams>(
  SkillsSecurityVerdictsParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateSkillsSkillCardParams = lazyCompile<SkillsSkillCardParams>(
  SkillsSkillCardParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronListParams = lazyCompile<CronListParams>(CronListParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronStatusParams = lazyCompile<CronStatusParams>(CronStatusParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronGetParams = lazyCompile<CronGetParams>(CronGetParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronAddParams = lazyCompile<CronAddParams>(CronAddParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronUpdateParams = lazyCompile<CronUpdateParams>(CronUpdateParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronRemoveParams = lazyCompile<CronRemoveParams>(CronRemoveParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronRunParams = lazyCompile<CronRunParams>(CronRunParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateCronRunsParams = lazyCompile<CronRunsParams>(CronRunsParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDevicePairListParams = lazyCompile<DevicePairListParams>(
  DevicePairListParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDevicePairApproveParams = lazyCompile<DevicePairApproveParams>(
  DevicePairApproveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDevicePairRejectParams = lazyCompile<DevicePairRejectParams>(
  DevicePairRejectParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDevicePairRemoveParams = lazyCompile<DevicePairRemoveParams>(
  DevicePairRemoveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDeviceTokenRotateParams = lazyCompile<DeviceTokenRotateParams>(
  DeviceTokenRotateParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateDeviceTokenRevokeParams = lazyCompile<DeviceTokenRevokeParams>(
  DeviceTokenRevokeParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalsGetParams = lazyCompile<ExecApprovalsGetParams>(
  ExecApprovalsGetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalsSetParams = lazyCompile<ExecApprovalsSetParams>(
  ExecApprovalsSetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalGetParams = lazyCompile<ExecApprovalGetParams>(
  ExecApprovalGetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalRequestParams = lazyCompile<ExecApprovalRequestParams>(
  ExecApprovalRequestParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalResolveParams = lazyCompile<ExecApprovalResolveParams>(
  ExecApprovalResolveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePluginApprovalRequestParams = lazyCompile<PluginApprovalRequestParams>(
  PluginApprovalRequestParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePluginApprovalResolveParams = lazyCompile<PluginApprovalResolveParams>(
  PluginApprovalResolveParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePluginsUiDescriptorsParams = lazyCompile<PluginsUiDescriptorsParams>(
  PluginsUiDescriptorsParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePluginsSessionActionParams = lazyCompile<PluginsSessionActionParams>(
  PluginsSessionActionParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validatePluginsSessionActionResult = lazyCompile<PluginsSessionActionResult>(
  PluginsSessionActionResultSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalsNodeGetParams = lazyCompile<ExecApprovalsNodeGetParams>(
  ExecApprovalsNodeGetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateExecApprovalsNodeSetParams = lazyCompile<ExecApprovalsNodeSetParams>(
  ExecApprovalsNodeSetParamsSchema,
);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateLogsTailParams = lazyCompile<LogsTailParams>(LogsTailParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChatHistoryParams = lazyCompile(ChatHistoryParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChatSendParams = lazyCompile(ChatSendParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChatAbortParams = lazyCompile<ChatAbortParams>(ChatAbortParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChatInjectParams = lazyCompile<ChatInjectParams>(ChatInjectParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateChatEvent = lazyCompile(ChatEventSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateUpdateStatusParams = lazyCompile<UpdateStatusParams>(UpdateStatusParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateUpdateRunParams = lazyCompile<UpdateRunParams>(UpdateRunParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
export const validateWebLoginStartParams =
  lazyCompile<WebLoginStartParams>(WebLoginStartParamsSchema);
/** Lazy TypeBox validator for the matching gateway protocol schema. */
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

/** Format TypeBox validator errors into stable, user-facing protocol messages. */
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
