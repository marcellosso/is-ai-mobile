import api from './api';
import { Level, PreviousAnswerLevel } from '../types/level';

const LEVEL_ENDPOINT = '/info';

export const getAllLevels = async (): Promise<Level[]> => {
  try {
    const res = await api.get(`${LEVEL_ENDPOINT}/`);
    const levels = res.data as Level[];

    return levels;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateLevelsAnswers = async (answers: PreviousAnswerLevel[]) => {
  try {
    await api.post(`${LEVEL_ENDPOINT}/answers/`, answers);
  } catch (err) {
    console.log(err);
  }
};
