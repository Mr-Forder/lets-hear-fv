 import { ApolloClient, InMemoryCache } from "@apollo/client";
 import { HttpLink } from "@apollo/client/link/http";
 import { useMemo } from "react";

function createApolloClient() {//create a new apollo client and return it
return new ApolloClient({
   link: new HttpLink({uri: "/api/graphql", credentials: "same-origin"}), 
   //link - takes graphql request and can transform it - add headers to it, then executes the http request to the graphql server (apollo server)
   //same origin credentials passes our cookies to the backend too
   cache: new InMemoryCache(),
   //cache - apollo saves the result of every query in a cache so if the request is repeated it doesnt have to do any more work
   //lets tell apollo to check cache to see if query has already been done and cached, and if so, check and update with server data if necessary
   defaultOptions: {
       watchQuery: {
           fetchPolicy: "cache-and-network"
       },
   },
});
}

//create a hook, useApollo

export function useApollo(){
    const client = useMemo(()=> createApolloClient(), [])//create apollo client, memoized
    return client//return our new client
}