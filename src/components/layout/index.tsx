import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    paddingVertical: '12%',
  },
});

export default Layout;
