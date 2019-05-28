import { makeExecutableSchema } from "graphql-tools";

const users: any[] = [
  {
    id: 1,
    name: "Rafael",
    email: "teste@rafael.com"
  },
  {
    id: 2,
    name: "Rodrigo",
    email: "teste@rafael.com"
  }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (_parent, args) => {
      const newUser = Object.assign({ id: users.length + 1 }, args);
      users.push(newUser);
      return newUser;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });
