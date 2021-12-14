const { join } = require("path");
const customers = require("../customers");
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

const typeDefs = loadSchemaSync(join(__dirname, "./schemas/typedefs.gql"), {
  loaders: [new GraphQLFileLoader()]
});

const resolvers = {
  Query: {
    cloudProfile: () => {
      return customers;
    },
    customersCount: () => customers.length,
    findCustomer: (_, { id }) => {
      return customers.find((customer) => customer.clientId === id);
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
