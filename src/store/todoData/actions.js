import types from './types';

const getInput = (inputText) => ({
    type: types.GET_INPUT,
    payload: inputText,
});

export default getInput;