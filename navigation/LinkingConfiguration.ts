/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      "unauthorised-nav": {
        screens: {
          landing: {
            screens: {
              LandingScreen: 'landing',
            },
          },
          login: {
            screens: {
              LoginScreen: 'login',
            },
          },
          register: {
            screens: {
              RegisterScreen: 'register',
            },
          },
        },
      },
      "authorised-nav": {
        screens: {
          home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
