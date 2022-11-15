const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const { musicAccessories, musicBrands } = require("./musicData");

const resolvers = {
  Query: {
    brands: () => musicBrands,
  },
  Brand: {
    accessories: (accessory) =>
      musicAccessories.filter((brand) => accessory.id === brand.brandId),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen(4000).then(({ url }) => {
  console.log(`The server has starter on ${url}`);
});
