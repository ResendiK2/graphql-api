import "reflect-metadata";

import path from 'node:path'

import { buildSchema } from "type-graphql/dist/utils";
import { ApolloServer } from "apollo-server";
import { AppointmentResolvers } from "./resolvers/appointments-resolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppointmentResolvers,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    })

    const server = new ApolloServer({ schema });

    const { url } = await server.listen();

    console.log(`🚀 Server ready at ${url}`);
}

bootstrap();