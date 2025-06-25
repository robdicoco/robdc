import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import ExperienceScreen from '../screens/ExperienceScreen'
import SkillsScreen from '../screens/SkillsScreen'
import EducationScreen from '../screens/EducationScreen'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
        headerShown: false,
      }}
    >
      <Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='home'
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='skills'
        component={SkillsScreen}
        options={{
          title: 'Skills',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='star'
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='experience'
        component={ExperienceScreen}
        options={{
          title: 'Experience',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='briefcase'
              color={color}
              size={size}
            />
          )
        }}
      />

      <Screen
        name='education'
        component={EducationScreen}
        options={{
          title: 'Education',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='school'
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  )
}