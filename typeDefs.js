const { gql } = require("apollo-server");

const typeDefs = gql`
  type Accessory {
    id: ID!
    product: String!
    price: Float
    brandId: ID!
  }

  type Brand {
    id: ID!
    brandName: String
    accessories: [Accessory]
  }

  type Query {
    brands: [Brand]
  }
`;

module.exports = typeDefs;
