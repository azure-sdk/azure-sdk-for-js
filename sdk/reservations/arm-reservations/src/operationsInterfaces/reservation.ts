/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ReservationResponse,
  ReservationListOptionalParams,
  ReservationListRevisionsOptionalParams,
  ReservationListAllOptionalParams,
  AvailableScopeRequest,
  ReservationAvailableScopesOptionalParams,
  ReservationAvailableScopesResponse,
  SplitRequest,
  ReservationSplitOptionalParams,
  ReservationSplitResponse,
  MergeRequest,
  ReservationMergeOptionalParams,
  ReservationMergeResponse,
  ReservationGetOptionalParams,
  ReservationGetResponse,
  Patch,
  ReservationUpdateOptionalParams,
  ReservationUpdateResponse,
  ReservationArchiveOptionalParams,
  ReservationUnarchiveOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Reservation. */
export interface Reservation {
  /**
   * List `Reservation`s within a single `ReservationOrder`.
   * @param reservationOrderId Order Id of the reservation
   * @param options The options parameters.
   */
  list(
    reservationOrderId: string,
    options?: ReservationListOptionalParams
  ): PagedAsyncIterableIterator<ReservationResponse>;
  /**
   * List of all the revisions for the `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param options The options parameters.
   */
  listRevisions(
    reservationOrderId: string,
    reservationId: string,
    options?: ReservationListRevisionsOptionalParams
  ): PagedAsyncIterableIterator<ReservationResponse>;
  /**
   * List the reservations and the roll up counts of reservations group by provisioning states that the
   * user has access to in the current tenant.
   * @param options The options parameters.
   */
  listAll(
    options?: ReservationListAllOptionalParams
  ): PagedAsyncIterableIterator<ReservationResponse>;
  /**
   * Check whether the scopes from request is valid for `Reservation`.
   *
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param body Scopes to be checked for eligibility.
   * @param options The options parameters.
   */
  beginAvailableScopes(
    reservationOrderId: string,
    reservationId: string,
    body: AvailableScopeRequest,
    options?: ReservationAvailableScopesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReservationAvailableScopesResponse>,
      ReservationAvailableScopesResponse
    >
  >;
  /**
   * Check whether the scopes from request is valid for `Reservation`.
   *
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param body Scopes to be checked for eligibility.
   * @param options The options parameters.
   */
  beginAvailableScopesAndWait(
    reservationOrderId: string,
    reservationId: string,
    body: AvailableScopeRequest,
    options?: ReservationAvailableScopesOptionalParams
  ): Promise<ReservationAvailableScopesResponse>;
  /**
   * Split a `Reservation` into two `Reservation`s with specified quantity distribution.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed to Split a reservation item
   * @param options The options parameters.
   */
  beginSplit(
    reservationOrderId: string,
    body: SplitRequest,
    options?: ReservationSplitOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReservationSplitResponse>,
      ReservationSplitResponse
    >
  >;
  /**
   * Split a `Reservation` into two `Reservation`s with specified quantity distribution.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed to Split a reservation item
   * @param options The options parameters.
   */
  beginSplitAndWait(
    reservationOrderId: string,
    body: SplitRequest,
    options?: ReservationSplitOptionalParams
  ): Promise<ReservationSplitResponse>;
  /**
   * Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged
   * must have same properties.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for commercial request for a reservation
   * @param options The options parameters.
   */
  beginMerge(
    reservationOrderId: string,
    body: MergeRequest,
    options?: ReservationMergeOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReservationMergeResponse>,
      ReservationMergeResponse
    >
  >;
  /**
   * Merge the specified `Reservation`s into a new `Reservation`. The two `Reservation`s being merged
   * must have same properties.
   * @param reservationOrderId Order Id of the reservation
   * @param body Information needed for commercial request for a reservation
   * @param options The options parameters.
   */
  beginMergeAndWait(
    reservationOrderId: string,
    body: MergeRequest,
    options?: ReservationMergeOptionalParams
  ): Promise<ReservationMergeResponse>;
  /**
   * Get specific `Reservation` details.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param options The options parameters.
   */
  get(
    reservationOrderId: string,
    reservationId: string,
    options?: ReservationGetOptionalParams
  ): Promise<ReservationGetResponse>;
  /**
   * Updates the applied scopes of the `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param parameters Information needed to patch a reservation item
   * @param options The options parameters.
   */
  beginUpdate(
    reservationOrderId: string,
    reservationId: string,
    parameters: Patch,
    options?: ReservationUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ReservationUpdateResponse>,
      ReservationUpdateResponse
    >
  >;
  /**
   * Updates the applied scopes of the `Reservation`.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param parameters Information needed to patch a reservation item
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    reservationOrderId: string,
    reservationId: string,
    parameters: Patch,
    options?: ReservationUpdateOptionalParams
  ): Promise<ReservationUpdateResponse>;
  /**
   * Archiving a `Reservation` moves it to `Archived` state.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param options The options parameters.
   */
  archive(
    reservationOrderId: string,
    reservationId: string,
    options?: ReservationArchiveOptionalParams
  ): Promise<void>;
  /**
   * Restores a `Reservation` to the state it was before archiving.
   *
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation item
   * @param options The options parameters.
   */
  unarchive(
    reservationOrderId: string,
    reservationId: string,
    options?: ReservationUnarchiveOptionalParams
  ): Promise<void>;
}
