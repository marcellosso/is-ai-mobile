import Fontisto from '@expo/vector-icons/Fontisto';
import * as Clipboard from 'expo-clipboard';
import { FC, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Toast, { BaseToast } from 'react-native-toast-message';

import { Level } from '../types/level';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: '#FFD369',
        borderLeftWidth: 0,
        width: '50%',
      }}
      contentContainerStyle={{
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: '20%',
      }}
      text1Style={{
        fontSize: RFPercentage(2.5),
        fontWeight: '500',
        color: '#393E46',
      }}
    />
  ),
};

interface IEndGameModal {
  currentScore: number;
  levels: Level[];
  openFinishGameModal: boolean;
  endGameTrigger: () => void;
  setOpenFinishGameModal: (_v: boolean) => void;
}

const EndGameModal: FC<IEndGameModal> = ({
  currentScore,
  levels,
  openFinishGameModal,
  endGameTrigger,
  setOpenFinishGameModal,
}) => {
  const closeModal = () => {
    endGameTrigger();
    setOpenFinishGameModal(false);
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
      text1: 'Copied to clipboard',
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
      onBackdropPress={closeModal}
      swipeDirection={['down', 'left', 'right', 'up']}
      onSwipeComplete={closeModal}>
      <View style={styles.container}>
        <Text style={styles.headerText}>You score: {currentScore}</Text>
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
    width: '80%',
    borderRadius: 10,
    height: '30%',
    alignSelf: 'center',
    display: 'flex',
    backgroundColor: '#222831',
    alignItems: 'center',
    shadowColor: '#393E46',
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
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
    marginTop: '20%',
  },
  button: {
    borderWidth: 4,
    borderRadius: 5,
    width: '70%',
    paddingVertical: '3%',
    paddingHorizontal: '15%',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 0,
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
