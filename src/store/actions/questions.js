import { saveAnswerQuestionApi, saveNewQuestionApi } from '../../utils/api'
import { saveAnswerUser, saveNewQuestionUser } from './users'

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const NEW_QUESTION = 'NEW_QUESTION'

export function loadQuestions(questions) {
  return {
    type: LOAD_QUESTIONS,
    questions
  }
}

function saveAnswerQuestion(userAnswer) {
  return {
    type: SAVE_ANSWER,
    ...userAnswer
  }
}

function saveNewQuestion(question) {
  return {
    type: NEW_QUESTION,
    question
  }
}

export function handleAnswerQuestion({ questionId, answerOption }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const userAnswer = {
      authedUser,
      questionId,
      answerOption
    }
    return saveAnswerQuestionApi(userAnswer)
      .then(() => {
        dispatch(saveAnswerQuestion(userAnswer), saveAnswerUser(userAnswer))
      })
  }
}

export function handleSaveNewQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const newQuestion = {
      author: authedUser,
      optionOneText,
      optionTwoText
    }
    return saveNewQuestionApi(newQuestion)
      .then((formattedQuestion) => {
        dispatch(saveNewQuestion(formattedQuestion), saveNewQuestionUser(formattedQuestion))
      })
  }
}
