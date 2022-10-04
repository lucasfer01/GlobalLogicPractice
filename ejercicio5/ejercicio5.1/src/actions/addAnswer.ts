import { ADD_ANSWER } from '../constants/action-types';

export function addAnswer(payload: any) {
    return { type: ADD_ANSWER, payload };
}