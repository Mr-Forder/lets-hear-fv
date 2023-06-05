/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EditLocationQuery
// ====================================================

export interface EditLocationQuery_location {
  __typename: "Location";
  id: string;
  userId: string;
  address: string;
  rating: number;
  review: string;
  loops: string;
  latitude: number;
  longitude: number;
}

export interface EditLocationQuery {
  location: EditLocationQuery_location | null;
}

export interface EditLocationQueryVariables {
  id: string;
}
