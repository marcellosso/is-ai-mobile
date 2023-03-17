import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/wallpaper2.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contentContainer}>
          {children}
          <StatusBar style="light" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(34,40,49,0.95)',
    paddingVertical: '12%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Layout;
