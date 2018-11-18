export const LOAD_USERS = 'LOAD_USERS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const NEW_QUESTION = 'NEW_QUESTION'

export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users
  }
}

export function saveAnswerUser(userAnswer) {
  return {
    type: SAVE_ANSWER,
    ...userAnswer
  }
}

export function saveNewQuestionUser(question) {
  return {
    type: NEW_QUESTION,
    question
  }
}