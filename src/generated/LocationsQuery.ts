/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BoundsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: LocationsQuery
// ====================================================

export interface LocationsQuery_locations {
  __typename: "Location";
  id: string;
  latitude: number;
  longitude: number;
  address: string;
  rating: number;
  review: string;
  loops: string;
}

export interface LocationsQuery {
  locations: LocationsQuery_locations[];
}

export interface LocationsQueryVariables {
  bounds: BoundsInput;
}
