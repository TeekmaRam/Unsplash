import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { HomeNav } from './Src/Navigation/HomeNav'
import DrawerNavigator from './Src/Navigation/DrawerNavigation'
import { store } from './Src/Services/Redux/Store'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
      {/* <HomeNav /> */}
      <DrawerNavigator />
    </Provider>

  );
};
export default App;