import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <ImageBackground style={styles.bg_image} source={{ uri: 'https://wildmex.com/wp-content/uploads/2022/01/1.png' }}>
      <StatusBar style="light" />
      <Routes />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff'
  },
  bg_image: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
