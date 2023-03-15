import { StyleSheet, View } from 'react-native';

const ImageFrame = () => {
  return (
    <View style={styles.imageFrameContainer}>
      <View style={styles.imageFrameShape} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageFrameContainer: {
    height: '5%',
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
  },
});

export default ImageFrame;
