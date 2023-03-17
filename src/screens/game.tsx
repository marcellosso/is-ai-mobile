import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import EndGameModal from '../components/end-game-modal';
import ImageFrame from '../components/image-frame';
import Layout from '../components/layout';
import { ImageClass } from '../helpers/ImagesClass';
import useGame from '../hooks/useGame';
import { getAllLevels } from '../services/level';
import { Level, LEVEL_TYPE_ENUM } from '../types/level';

const GameScreen = () => {
  const [levels, setLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState(false);
  const [openFinishGameModal, setOpenFinishGameModal] = useState(false);

  useEffect(() => {
    const pullLevels = async () => {
      setLoading(true);
      const resLevels = await getAllLevels();
      setLevels(resLevels);
      setLoading(false);
    };
    pullLevels();
  }, []);

  const { currentScore, currentLevel, handleAnswer, handleEndGame } = useGame(
    levels,
    setOpenFinishGameModal
  );

  if (loading) {
    return (
      <Layout>
        <View style={styles.loadingContainer}>
          <Image style={styles.logo} source={require('../../assets/ai-or-human.png')} />
          <ActivityIndicator size="large" color="#FFD369" />
        </View>
      </Layout>
    );
  }

  return (
    <Layout>
      <View style={styles.container}>
        <EndGameModal
          currentScore={currentScore}
          levels={levels}
          openFinishGameModal={openFinishGameModal}
          setOpenFinishGameModal={setOpenFinishGameModal}
          endGameTrigger={handleEndGame}
        />
        <Image style={styles.logo} source={require('../../assets/ai-or-human.png')} />
        <View style={styles.imageContainer}>
          <ImageFrame currentScore={currentScore} />

          <Image style={styles.image} source={ImageClass.GetImage(currentLevel?.image_name)} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleAnswer(LEVEL_TYPE_ENUM.AI)}>
            <View style={styles.buttonTextContainer}>
              <FontAwesome5 name="robot" size={RFPercentage(2)} color="#393E46" />
              <Text style={styles.buttonText}>AI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAnswer(LEVEL_TYPE_ENUM.HUMAN)}>
            <View style={styles.buttonTextContainer}>
              <Fontisto name="person" size={RFPercentage(2)} color="#393E46" />
              <Text style={styles.buttonText}>HUMAN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: '15%',
    marginBottom: '3%',
  },
  imageContainer: {
    width: '95%',
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: '#FFD369',
    borderRadius: 10,

    resizeMode: 'cover',

    shadowColor: '#eee',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20%',
  },
  button: {
    borderWidth: 4,
    borderRadius: 5,
    width: '60%',
    backgroundColor: '#FFD369',
    borderColor: '#222831',
    paddingVertical: '3%',
    paddingHorizontal: '15%',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 0,
    marginTop: 0,
  },
  buttonTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#393E46',
    fontWeight: '900',
    fontSize: RFPercentage(2),
    marginLeft: 5,
  },
});

export default GameScreen;
