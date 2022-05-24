import { gql } from "graphql-request";

export const cardsQuery = gql`
  query {
    cards {
      id
      name
    }
  }
`;

export const signUpWithEmailMutation = gql`
  mutation SignUpWithEmail(
    $email: EmailAddress!
    $password: Password!
    $name: NonEmptyString!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const logInWithEmailMutation = gql`
  mutation LoginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

export const createCardMutation = gql`
  mutation CreateCard($name: NonEmptyString!) {
    createCard(
      data: {
        name: $name
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

export const shareCardMutation = gql`
  mutation ShareCardMutation($id: ID!) {
    shareCard(id: $id)
  }
`;

export const duplicateCardMutation = gql`
  mutation DuplicateCard($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;

export const deleteCardMutation = gql`
  mutation DeleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;
