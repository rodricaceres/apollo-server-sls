const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs, resolvers } = require("./graphql/index");

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler();

module.exports = { handler };
