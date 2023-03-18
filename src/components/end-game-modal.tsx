import Fontisto from '@expo/vector-icons/Fontisto';
import * as Clipboard from 'expo-clipboard';
import { FC, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Toast, { BaseToast } from 'react-native-toast-message';

import AnswersBarChart from './bar-chart';
import { getLevelAnswerPercentage } from '../helpers/Game';
import { ImageClass } from '../helpers/ImagesClass';
import { Level, PreviousAnswerLevel } from '../types/level';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: '#FFD369',
        borderLeftWidth: 0,
        width: '55%',
      }}
      text1Style={{
        fontSize: RFPercentage(2),
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: '800',
        color: '#393E46',
      }}
    />
  ),
};

interface IEndGameModal {
  currentScore: number;
  levels: Level[];
  previousAnswers: PreviousAnswerLevel[];
  openFinishGameModal: boolean;
  endGameTrigger: () => void;
  setOpenFinishGameModal: (_v: boolean) => void;
}

const EndGameModal: FC<IEndGameModal> = ({
  currentScore,
  levels,
  previousAnswers,
  openFinishGameModal,
  endGameTrigger,
  setOpenFinishGameModal,
}) => {
  const closeModal = () => {
    setOpenFinishGameModal(false);
    endGameTrigger();
  };

  const emojiGetter = () => {
    if (currentScore >= 20) return '😮';
    if (currentScore >= 10) return '😎';
    if (currentScore > 1) return '🔥';
    if (currentScore === 1) return '🫠';

    return '🥺';
  };

  const showShareToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Copied to clipboard!',
    });
  };

  const clipboardText = useMemo(
    () =>
      `Just played the AI or Human APP!\n\nScored: ${currentScore} ${
        currentScore === 1 ? 'point' : 'points'
      } ${emojiGetter()}.`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentScore]
  );

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(clipboardText);
    showShareToast();
  };

  return (
    <Modal
      isVisible={openFinishGameModal}
      backdropColor="rgb(34,40,49)"
      backdropOpacity={0.9}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}>
      <View style={styles.container}>
        <Text style={styles.headerText}>You score: {currentScore}</Text>
        <Text style={[styles.headerText, { fontSize: RFPercentage(3) }]}>Global Answers</Text>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#FFD369' }}>AI</Text>
            <View style={{ width: 10, height: 10, backgroundColor: '#FFD369', marginLeft: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
            <Text style={{ color: 'rgb(226 232 240)' }}>HUMAN</Text>
            <View
              style={{ width: 10, height: 10, backgroundColor: 'rgb(226 232 240)', marginLeft: 5 }}
            />
          </View>
        </View>
        <View style={styles.answersContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {previousAnswers.map((item, idx) => {
              const levelId = item.levelId;
              const level = levels.find((level) => level._id === levelId) as Level;
              const { percentageAnsweredAi, percentageAnsweredHuman } =
                getLevelAnswerPercentage(level);
              return (
                <View key={item.levelId + idx} style={styles.barLevelContainer}>
                  <Image
                    style={styles.levelImage}
                    source={ImageClass.GetImage(level?.image_name)}
                  />
                  <AnswersBarChart
                    aiPercentage={percentageAnsweredAi}
                    humanPercentage={percentageAnsweredHuman}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonShare]} onPress={copyToClipboard}>
            <View style={styles.buttonTextContainer}>
              <Fontisto name="share" size={RFPercentage(2)} color="#393E46" />
              <Text style={[styles.buttonText, styles.buttonTextShare]}>SHARE</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonEnd]} onPress={closeModal}>
            <View style={styles.buttonTextContainer}>
              <Text style={[styles.buttonText, styles.buttonTextEnd]}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Toast config={toastConfig} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '85%',
    borderRadius: 10,
    height: '65%',
    alignSelf: 'center',
    display: 'flex',
    backgroundColor: '#222831',
    alignItems: 'center',
    shadowColor: '#393E46',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
    padding: RFPercentage(2),
  },
  barLevelContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '3%',
  },
  answersContainer: {
    flex: 1,
    width: '100%',
    overflow: 'scroll',
  },
  levelImage: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: '#FFD369',
    fontWeight: '900',
    fontSize: RFPercentage(5),
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    borderWidth: 4,
    borderRadius: 5,
    width: '100%',
    paddingVertical: '3%',
    paddingHorizontal: '15%',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 2,
    marginTop: 0,
  },
  buttonShare: {
    backgroundColor: '#FFD369',
    borderColor: '#222831',
  },
  buttonEnd: {
    backgroundColor: 'transparent',
    borderColor: '#FFD369',
  },
  buttonTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: '900',
    fontSize: RFPercentage(2),
    marginLeft: 5,
  },
  buttonTextShare: {
    color: '#393E46',
  },
  buttonTextEnd: {
    color: '#FFD369',
  },
});

export default EndGameModal;
