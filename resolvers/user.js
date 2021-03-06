import UserService from '../services/user'

export const userResolvers = {
  Query: {},
  Mutation: {
    register: async (_, { registerInput }) =>
      UserService.register(registerInput),
    login: async (_, { email, password }) => UserService.login(email, password),
  },
}
