import {
  cardsQuery,
  createCardMutation,
  deleteCardMutation,
  duplicateCardMutation,
  logInWithEmailMutation,
  shareCardMutation,
  signUpWithEmailMutation,
} from "./graphql";
import { graphqlRequest } from "./http";

export const signUpWithEmail = ({ name, email, password }) =>
  graphqlRequest(signUpWithEmailMutation, { name, email, password });

export const logInWithEmail = ({ email, password }) =>
  graphqlRequest(logInWithEmailMutation, { email, password });

export const getCards = ({ token }) => graphqlRequest(cardsQuery, {}, token);

export const createCard = ({ token, name }) =>
  graphqlRequest(
    createCardMutation,
    {
      name,
    },
    token
  );

export const shareCard = ({ id, token }) =>
  graphqlRequest(shareCardMutation, { id }, token);

export const duplicateCard = ({ id, token }) =>
  graphqlRequest(duplicateCardMutation, { id }, token);

export const deleteCard = ({ id, token }) =>
  graphqlRequest(deleteCardMutation, { id }, token);
