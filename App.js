import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Routes from './src/routes/routes';
import LoadingProvider from './src/contexts/loadingContext';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <LoadingProvider>
        <Routes />
      </LoadingProvider>
    </View>
  );
}
