 import { buildSchemaSync, Resolver, Query } from "type-graphql";
 import { ImageResolver } from "./image";
 import { LocationResolver } from "./house";
 import { authChecker } from "./auth";



 //our resolvers
 //resolvers are where you decalre queries and mutations, and handle and resolve these requests. we then add them to an array in the buildSchemaSync method below
@Resolver()
class DummyResolver {
@Query(_returns => String)
hello(){
    return "nice to meet you"
}
}


//typegraphql use decorators. they go before a function and wrap around it to add additional functionality. they begin with "@"


export const schema = buildSchemaSync({
    resolvers: [DummyResolver, ImageResolver, LocationResolver],
    emitSchemaFile: process.env.NODE_ENV === "development",//generates new file in root of project - schema.gql
    authChecker,
});


