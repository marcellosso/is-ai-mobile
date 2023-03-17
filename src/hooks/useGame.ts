import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { updateLevelsAnswers } from '../services/level';
import { Level, LEVEL_TYPE_ENUM, PreviousAnswerLevel } from '../types/level';
import { GameScreenNavigationProp } from '../types/navigation';

const useGame = (levels: Level[], setFinishedGameModal: (_v: boolean) => void) => {
  const navigation = useNavigation<GameScreenNavigationProp>();

  const [currentScore, setCurrentScore] = useState(0);

  const [previousAnswers, setPreviousAnswers] = useState<PreviousAnswerLevel[]>([]);

  const getHighestScore = async () => {
    const highScore = (await AsyncStorage.getItem('@highestScore')) as string;

    setHighestScoreClientState(parseInt(highScore || '0', 10));
  };

  const [highestScoreClientState, setHighestScoreClientState] = useState<number>(0);

  const getRandomLevel = (prevAnswers: PreviousAnswerLevel[] = []) => {
    const possibleLevels = levels.filter(
      (level) => !prevAnswers.some((el) => el.levelId === level._id)
    );

    if (possibleLevels.length === 0) {
      return levels[Math.round(Math.random() * (levels.length - 1))];
    }

    return possibleLevels[Math.round(Math.random() * (possibleLevels.length - 1))];
  };

  const [currentLevel, setCurrentLevel] = useState<Level>({} as Level);

  useEffect(() => {
    getHighestScore();
    setCurrentLevel(getRandomLevel());
  }, [levels]);

  const handleCorrectAnswer = (localPreviousAnswers = previousAnswers) => {
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
    setCurrentLevel(getRandomLevel(localPreviousAnswers));
  };

  const handleEndGame = () => {
    if (currentScore > highestScoreClientState) updateHighScore();
    setCurrentScore(0);
    updateAnswers(previousAnswers);
    setCurrentLevel(getRandomLevel());

    navigation.navigate('Home');
  };

  const updateHighScore = async () => {
    setHighestScoreClientState(currentScore);
    await AsyncStorage.setItem('@highestScore', currentScore.toString());
  };

  const updateAnswers = (newPrevAnswers: PreviousAnswerLevel[]) => {
    setPreviousAnswers([]);
    updateLevelsAnswers(newPrevAnswers);
  };

  const handleAnswer = (choosenLevelType: LEVEL_TYPE_ENUM) => {
    const newPreviousAnswers = [...previousAnswers];

    if (choosenLevelType === currentLevel.type) {
      newPreviousAnswers.push({
        levelId: currentLevel._id as string,
        answer: currentLevel.type,
      });
      handleCorrectAnswer(newPreviousAnswers);
    } else {
      newPreviousAnswers.push({
        levelId: currentLevel._id as string,
        answer:
          currentLevel.type === LEVEL_TYPE_ENUM.HUMAN ? LEVEL_TYPE_ENUM.AI : LEVEL_TYPE_ENUM.HUMAN,
      });

      setFinishedGameModal(true);
    }

    setPreviousAnswers(newPreviousAnswers);
  };

  return {
    currentScore,
    setCurrentScore,
    currentLevel,
    previousAnswers,
    highestScoreClientState,
    handleAnswer,
    handleEndGame,
  };
};

export default useGame;
