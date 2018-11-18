import React from 'react';
import { connect } from 'react-redux'
import './leaderboard.scss'
import '../../common-styles.scss'
import { formatUsername } from '../../utils/helpers'

const Leaderboard = (props) => {
  return (
    <div className="leaderboard">
      {props.users.map((user, trophyPosition) => (
        <div key={trophyPosition} className="custom__panel leaderboard__panel" >
          { (trophyPosition+1) <= 3 && <div className="trophy">
            <img src={`/images/trophy-place-${(trophyPosition+1)}.svg`} alt={`trophy-place-${(trophyPosition+1)}`} />
          </div>}
          <div className="custom__panel__container question__container">
            <div className="question__container__avatar">
              <img src={`/${user.avatarURL}`} alt="user-avatar" />
            </div>
            <div className="question__container__seperator"></div>
            <div className="question__container__content score-breakup__content">
              <label className="question__container__content__heading custom-label--large">{`${formatUsername(user.name)}`}</label>
              <div className="score-breakup__content__flexbox">
                <label className="question__container__content__heading custom-label">Answered questions</label>
                <label className="question__container__content__heading custom-label">{user.answeredQuestions}</label>
              </div>
              <div className="score-breakup__content__seperator"></div>
              <div className="score-breakup__content__flexbox">
                <label className="question__container__content__heading custom-label">Created questions</label>
                <label className="question__container__content__heading custom-label">{user.createdQuestions}</label>
              </div>
            </div>
            <div className="question__container__seperator"></div>
            <div className="question__container__content">
              <div className="custom__panel score-panel">
                <div className="custom__panel__header">
                  <label className="custom__panel__header__label custom-label">Score</label>
                </div>
                <div className="custom__panel__container score-panel__container">
                  <div className="score-circle">
                    <label className="score-circle__score custom-label--medium">{user.totalScore}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >)
      )}
    </div>
  )
}

const mapStatetoProps = ({ users }) => {
  const usersArray = Object.keys(users).map(i => users[i])
  return ({
    users: usersArray.map(user => ({
      ...user,
      answeredQuestions: Object.keys(user.answers).map(i => user.answers[i]).length,
      createdQuestions: user.questions.length,
      totalScore: Object.keys(user.answers).map(i => user.answers[i]).length +
        user.questions.length
    }))
      .sort((a, b) => a.totalScore > b.totalScore ? -1 : 1)
  }
  )
}


export default connect(mapStatetoProps)(Leaderboard)   