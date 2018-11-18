import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../../../store/actions/questions'
import './vote-question.scss'
import { formatUsername } from '../../../utils/helpers'

class VoteQuestion extends Component {

  state = {
    selectedUserOption: 'optionOne'
  }

  saveQuestionAnswer = () => {
    this.props.dispatch(handleAnswerQuestion({
      questionId: this.props.question.id,
      answerOption: this.state.selectedUserOption
    }))
  }

  render() {
    return (
      <div className="vote-question">
        <div className="custom__panel">
          <div className="custom__panel__header">
            <label className="custom__panel__header__label custom-label">{`${formatUsername(this.props.question.userName)} asks:`}</label>
          </div>
          <div className="custom__panel__container question__container">
            <div className="question__container__avatar">
              <img src={`/${this.props.question.userAvatarUrl}`} alt="user-avatar" />
            </div>
            <div className="question__container__seperator"></div>
            <div className="question__container__content">
              <label className="question__container__content__heading custom-label--large">Would you rather ...</label>
              <label className="custom-label">
                <input className="with-gap" name="answer" type="radio" value="optionOne" onChange={e => this.setState(
                  {
                    selectedUserOption: e.target.value
                  })}  checked={this.state.selectedUserOption === "optionOne"}/>
                <span>{this.props.question.optionOne.text}</span>
              </label>
              <label className="custom-label">
                <input className="with-gap" name="answer" type="radio" value="optionTwo" onChange={e => this.setState(
                  {
                    selectedUserOption: e.target.value
                  })} checked={this.state.selectedUserOption === "optionTwo"}/>
                <span>{this.props.question.optionTwo.text}</span>
              </label>
              <button onClick={this.saveQuestionAnswer} className="custom-button waves-effect waves-light btn question__container__button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(VoteQuestion)