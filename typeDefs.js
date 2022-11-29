const { gql } = require("apollo-server");

const typeDefs = gql`
  type MusicBrand {
    id: ID!
    brandName: String
  }

  type MusicAccessories {
    id: ID!
    product: String
    price: Float
    brandId: Int
    brands: [MusicBrand]
  }

  type Query {
    accessories: [MusicAccessories]
  }
`;

module.exports = typeDefs;
