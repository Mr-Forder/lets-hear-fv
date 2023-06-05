 import "reflect-metadata";
 import { NextApiRequest } from "next";
 import { ApolloServer } from "apollo-server-micro";
 import { schema } from "src/schema";
 import { Context } from "src/schema/context";
 import { prisma } from "src/prisma";
 import { loadIdToken } from "src/auth/firebaseAdmin";


 //this is where we create our backend server
const server = new ApolloServer({
    schema,
    context: async ({req}: {req: NextApiRequest}): Promise<Context> => {
        const uid = await loadIdToken(req);

        return { 
            uid,
            prisma,
        };
    },
    tracing: process.env.NODE_ENV === "development" //turn query tracing on if in dev environment
})
//basically tells the server to listen for requests to a certain endpoint - this will receive incoming requests and process them
const handler = server.createHandler({path: "/api/graphql"})

export const config = {
    api: { 
        bodyParser: false//by default next wants to parse the body of an incoming request - this messes with our own server. this tells next to leave it alone.
    }
}

export default handler;