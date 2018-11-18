import React from 'react';
import { Link } from 'react-router-dom';
import './question-preview.scss';
import { formatUsername } from '../../../utils/helpers'

const QuestionPreview = ({ question }) => {
  return (
    < div className="custom__panel question-preview" >
      <div className="custom__panel__header question-preview__header">
        <label className="question-preview__header custom-label">{`${formatUsername(question.userName)} asks:`}</label>
      </div>
      <div className="custom__panel__container question__container">
        <div className="question__container__avatar">
          <img src={`/${question.userAvatarUrl}`} alt="user-avatar" />
        </div>
        <div className="question__container__seperator"></div>
        <div className="question__container__content">
          <label className="question__container__content__heading custom-label">Would you rather ...</label>
          <label className="custom-label--small">{`...${(question.optionOne.text + '...' + question.optionTwo.text).substring(0, 25)}...`}</label>
          <Link to={`/questions/${question.id}`} className="custom-button waves-effect waves-light btn question__container__button">View Poll</Link>
        </div>
      </div>
    </div >
  );
}

export default QuestionPreview