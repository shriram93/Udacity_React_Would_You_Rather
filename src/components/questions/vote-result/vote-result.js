import React from 'react'
import '../../../common-styles.scss'
import './vote-result.scss'
import { formatUsername } from '../../../utils/helpers'

const VoteResult = (props) => {
  const getOptionOnePercentage = () => `${
    ((props.question.optionOne.votes.length / (props.question.optionOne.votes.length + props.question.optionTwo.votes.length))* 100).toFixed(1) 
    }%`
  const getOptionTwoPercentage = () => `${
    ((props.question.optionTwo.votes.length / (props.question.optionOne.votes.length + props.question.optionTwo.votes.length))* 100).toFixed(1)
    }%`
  return (
    <div className="vote-result">
      <div className="custom__panel">
        <div className="custom__panel__header">
          <label className="custom__panel__header__label custom-label">{`Asked by ${formatUsername(props.question.userName)}`}</label>
        </div>
        <div className="custom__panel__container question__container">
          <div className="question__container__avatar">
            <img src={`/${props.question.userAvatarUrl}`} alt="user-avatar" />
          </div>
          <div className="question__container__seperator"></div>
          <div className="question__container__content">
            <label className="question__container__content__heading custom-label--large">Results:</label>
            <div className={`votes-contianer
              ${props.question.optionOne.votes.includes(props.authedUser) > 0 ? 'selected' : ''}`}>
              <label className="custom-label votes-contianer__heading">{`Would you rather ${props.question.optionOne.text}?`}</label>
              <div className="progress votes-contianer__progressbar">
                <div className="determinate" style={{ width: getOptionOnePercentage() }}><span>{getOptionOnePercentage()}</span></div>
              </div>
              <label className="votes-contianer__votes custom-label">
                {`${props.question.optionOne.votes.length} out of ${props.question.optionOne.votes.length + props.question.optionTwo.votes.length} votes`}
              </label>
              <div className="votes-contianer__badge">
                <span>Your vote</span>
              </div>
            </div>
            <div className={`votes-contianer
              ${props.question.optionTwo.votes.includes(props.authedUser) > 0 ? 'selected' : ''}`}>
              <label className="custom-label votes-contianer__heading">{`Would you rather ${props.question.optionTwo.text}?`}</label>
              <div className="progress votes-contianer__progressbar">
                <div className="determinate" style={{ width: getOptionTwoPercentage() }}><span>{getOptionTwoPercentage()}</span></div>
              </div>
              <label className="votes-contianer__votes custom-label">
                {`${props.question.optionTwo.votes.length} out of ${props.question.optionOne.votes.length + props.question.optionTwo.votes.length} votes`}
              </label>
              <div className="votes-contianer__badge">
                <span>Your vote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteResult