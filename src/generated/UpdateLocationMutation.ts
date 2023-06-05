/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateLocationMutation
// ====================================================

export interface UpdateLocationMutation_updateLocation {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  rating: number;
  review: string;
  loops: string;
  address: string;
}

export interface UpdateLocationMutation {
  updateLocation: UpdateLocationMutation_updateLocation | null;
}

export interface UpdateLocationMutationVariables {
  id: string;
  input: LocationInput;
}
