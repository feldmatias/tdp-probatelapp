import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './landing/LandingPage';
import Probador from './probador/Probador';
import Catalog from './catalog/Catalog';
import SuccessPurchase from './store/SuccessPurchase';
import Purchase from './store/Purchase';
import Recommender from "./recommender/Recommender";
import RecommenderConfirm from "./recommender/RecommenderConfirm";

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
          name="Purchase"
          component={Purchase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessPurchase"
          component={SuccessPurchase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recommender"
          component={Recommender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecommenderConfirm"
          component={RecommenderConfirm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
