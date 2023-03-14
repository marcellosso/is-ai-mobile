import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { ImageClass } from './helpers/ImagesClass';
import { getAllLevels } from './services/level';
import { Level } from './types/level';

const App = () => {
  const [levels, setLevels] = useState<Level[]>([]);

  useEffect(() => {
    const getLevels = async () => {
      const pulledLevels = (await getAllLevels()) as Level[];

      setLevels(pulledLevels);
    };

    getLevels();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is APP</Text>
      {levels?.map((level) => {
        const image = ImageClass.GetImage(level.image_name);
        return (
          <ScrollView
            key={level._id}
            style={{ backgroundColor: 'red', height: '100%', width: '100%' }}>
            <Text key={level._id}>{level.image_name}</Text>
            {/* <Image style={styles.image} source={image} /> */}
          </ScrollView>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});

export default App;
