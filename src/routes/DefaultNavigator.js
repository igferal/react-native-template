import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

import SplashScreen from 'react-native-splash-screen';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
