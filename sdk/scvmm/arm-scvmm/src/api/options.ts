// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";
import {
  StopVirtualMachineOptions,
  ForceDelete,
  DeleteFromHost,
} from "../models/models.js";

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VmmServersGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VmmServersCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VmmServersUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VmmServersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VmmServersListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VmmServersListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CloudsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CloudsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface CloudsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CloudsListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualNetworksGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VirtualNetworksCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualNetworksUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualNetworksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VirtualNetworksListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualNetworksListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineTemplatesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineTemplatesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface VirtualMachineTemplatesListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineTemplatesListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AvailabilitySetsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AvailabilitySetsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvailabilitySetsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AvailabilitySetsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
}

/** Optional parameters. */
export interface AvailabilitySetsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AvailabilitySetsListBySubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface InventoryItemsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InventoryItemsCreateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InventoryItemsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface InventoryItemsListByVmmServerOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineInstancesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineInstancesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Forces the resource to be deleted. */
  force?: ForceDelete;
  /** Whether to disable the VM from azure and also delete it from Vmm. */
  deleteFromHost?: DeleteFromHost;
}

/** Optional parameters. */
export interface VirtualMachineInstancesListOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachineInstancesStopOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** The content of the action request */
  body?: StopVirtualMachineOptions;
}

/** Optional parameters. */
export interface VirtualMachineInstancesStartOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesRestartOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesCreateCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesDeleteCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachineInstancesRestoreCheckpointOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VmInstanceHybridIdentityMetadatasGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GuestAgentsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GuestAgentsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GuestAgentsDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface GuestAgentsListByVirtualMachineInstanceOptionalParams
  extends OperationOptions {}
