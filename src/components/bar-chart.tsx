import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface IAnswersBarChart {
  aiPercentage: string;
  humanPercentage: string;
}

const AnswersBarChart = ({ aiPercentage, humanPercentage }: IAnswersBarChart) => {
  return (
    <View style={styles.barContainer}>
      <View style={styles.aiPercentageContainer}>{aiPercentage}</View>
      <View style={styles.humanPercentageContainer}>{humanPercentage}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {},
  aiPercentageContainer: {},
  humanPercentageContainer: {},
});

export default AnswersBarChart;
