import { CHANGE_INPUT_STATE } from '../constants/action-types';

export function changeInputState(payload: any) {
    return { type: CHANGE_INPUT_STATE, payload };
}