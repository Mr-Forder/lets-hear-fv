/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowLocationQuery
// ====================================================

export interface ShowLocationQuery_location_nearby {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
}

export interface ShowLocationQuery_location {
  __typename: "Location";
  id: string;
  userId: string;
  address: string;
  rating: number;
  review: string;
  loops: string;
  latitude: number;
  longitude: number;
  nearby: ShowLocationQuery_location_nearby[];
}

export interface ShowLocationQuery {
  location: ShowLocationQuery_location | null;
}

export interface ShowLocationQueryVariables {
  id: string;
}
