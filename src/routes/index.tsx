import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

// context
import { BottomTabsRoutes } from './bottom-tsb.routes'

// box of contexts
export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabsRoutes />
    </NavigationContainer >
  )
}