import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../Pages/LoginSignup/Login'
import { TopTabnavigation } from './TabNavigation'
import { SearchImagescreen } from '../Pages/SearchImageList/SearchImagescreen'
import { AboutScreen } from '../Pages/AppServices/AboutScreen'
import { HistoryScreen } from '../Pages/AppServices/HistoryScreen'
import { PrivecyPolicy } from '../Pages/AppServices/PrivecyPolicy'

const Stack = createNativeStackNavigator()
export const HomeNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="TopTabnavigation" component={TopTabnavigation} />
            <Stack.Screen options={{ headerShown: false }} name="SearchImagescreen" component={SearchImagescreen} />
            <Stack.Screen options={{ headerShown: false }} name="AboutScreen" component={AboutScreen} />
            <Stack.Screen options={{ headerShown: false }} name="HistoryScreen" component={HistoryScreen} />
            <Stack.Screen options={{ headerShown: false }} name="PrivecyPolicy" component={PrivecyPolicy} />
        </Stack.Navigator>
    );
};
