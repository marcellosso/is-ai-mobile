import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <ImageBackground source={require('../assets/wallpaper2.jpg')} style={styles.image}>
        {children}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(34,40,49,0.95)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
