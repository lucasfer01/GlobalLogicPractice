import { DELETE_QUESTION } from '../constants/action-types';

export function deleteQuestion(payload: any) {
    return { type: DELETE_QUESTION, payload };
}