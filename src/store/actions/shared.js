import { getInitialData } from '../../utils/api'
import { loadUsers } from '../actions/users'
import { loadQuestions } from '../actions/questions'

export function handeInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(loadUsers(users))
        dispatch(loadQuestions(questions))
      })
  }
}