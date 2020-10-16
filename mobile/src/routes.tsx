import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphanageMap from './pages/OrphanageMap';

const {Navigator, Screen} = createStackNavigator();

export default function routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="OrphanagesMap" component={OrphanageMap}></Screen>
            </Navigator>
        </NavigationContainer>
    )
}
