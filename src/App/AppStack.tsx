import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './Settings/SettingsScreen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});
