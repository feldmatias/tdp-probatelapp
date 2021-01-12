import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './landing/LandingPage';
import Probador from './probador/Probador';
import Catalog from './catalog/Catalog';
import Buy from './store/Buy';

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#0275d8',
  },
  headerTintColor: '#fff',
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          // options={Object.assign({}, headerOptions, { title: "Catálogo" })}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Probador"
          component={Probador}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Buy"
          component={Buy}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
