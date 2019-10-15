import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { RootPage } from 'screens/RootPage/RootPage';
import { SecondPage } from 'screens/SecondPage/SecondPage';
import { NAVIGATION_NAMES } from 'modules/navigation/config';

const AppNavigator = createStackNavigator(
    {
        [NAVIGATION_NAMES.ROOT]: {
            screen: RootPage,
        },
        [NAVIGATION_NAMES.SECOND]: {
            screen: SecondPage,
        },
    },
    {
        initialRouteName: NAVIGATION_NAMES.ROOT,
    }
);
