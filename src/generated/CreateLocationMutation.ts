/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocationInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateLocationMutation
// ====================================================

export interface CreateLocationMutation_createLocation {
  __typename: "Location";
  id: string;
}

export interface CreateLocationMutation {
  createLocation: CreateLocationMutation_createLocation | null;
}

export interface CreateLocationMutationVariables {
  input: LocationInput;
}
