import api from './api';
import { PreviousAnswerLevel } from '../types/level';

const LEVEL_ENDPOINT = '/info';

export const getAllLevels = async () => {
  try {
    const res = await api.get(`${LEVEL_ENDPOINT}/`);
    const levels = res.data;

    return levels;
  } catch (err) {
    console.log(err);
  }
};

export const updateLevelsAnswers = async (answers: PreviousAnswerLevel[]) => {
  try {
    await api.post(`${LEVEL_ENDPOINT}/answers/`, answers);
  } catch (err) {
    console.log(err);
  }
};
