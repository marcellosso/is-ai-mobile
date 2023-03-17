import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const ImageFrame = ({ currentScore }: { currentScore: number }) => {
  return (
    <View style={styles.imageFrameContainer}>
      <View style={styles.imageFrameShape}>
        <Text style={styles.scoreText}>{currentScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageFrameContainer: {
    height: '12%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',

    shadowColor: '#eee',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  imageFrameShape: {
    backgroundColor: '#FFD369',
    width: '30%',
    height: '100%',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  scoreText: {
    color: '#393E46',
    fontWeight: '900',
    fontSize: RFPercentage(4),
    textAlign: 'center',
  },
});

export default ImageFrame;
