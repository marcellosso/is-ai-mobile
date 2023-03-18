import { StyleSheet, Text, View } from 'react-native';

interface IAnswersBarChart {
  aiPercentage: string;
  humanPercentage: string;
}

const AnswersBarChart = ({ aiPercentage, humanPercentage }: IAnswersBarChart) => {
  return (
    <View style={styles.barContainer}>
      <View style={[styles.aiPercentageContainer, { width: aiPercentage }]}>
        <Text style={styles.percentageText}>{aiPercentage}</Text>
      </View>
      <View style={[styles.humanPercentageContainer, { width: humanPercentage }]}>
        <Text style={styles.percentageText}>{humanPercentage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    display: 'flex',
    flex: 1,
    marginLeft: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    height: 50,
  },
  aiPercentageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD369',
  },
  humanPercentageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'rgb(226 232 240)',
  },
  percentageText: {
    color: 'rgb(57 62 70)',
    fontWeight: '800',
  },
});

export default AnswersBarChart;
