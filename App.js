import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DefaultNavigator from './src/routes/DefaultNavigator';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <DefaultNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
