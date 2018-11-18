import { LOAD_QUESTIONS, SAVE_ANSWER, NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_ANSWER:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answerOption]: {
            ...state[action.questionId][action.answerOption],
            votes: state[action.questionId][action.answerOption].votes.concat([action.authedUser])
          }
        }
      }
    case NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}