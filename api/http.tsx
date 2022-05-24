import AsyncStorage from "@react-native-async-storage/async-storage";
import { GraphQLClient } from "graphql-request";

export const graphqlRequest = async (
  queryOrMutation,
  variables = {},
  token = ""
) => {
  const endpoint = "https://api-dev.foodstyles.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return graphQLClient.request(queryOrMutation, variables);
};
