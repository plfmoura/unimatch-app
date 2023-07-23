import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Routes from './src/routes/routes';
import LoadingProvider from './src/contexts/LoadingContext';
import { Provider } from 'react-redux';
import { store } from "./src/store";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar style="light" />
        <LoadingProvider>
          <Routes />
        </LoadingProvider>
      </Provider>
    </View>
  );
}
