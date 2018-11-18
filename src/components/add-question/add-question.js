import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveNewQuestion } from '../../store/actions/questions';
import './add-question.scss'


class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  addQuestion() {
    this.props.dispatch(handleSaveNewQuestion({
      optionOneText: this.state.optionOneText,
      optionTwoText: this.state.optionTwoText
    })).then( () => this.props.history.push(`/`))
  }
  render() {
    return (
      <div className="add-question">
        <div className="custom__panel">
          <div className="custom__panel__header">
            <label className="custom__panel__header__label custom-label">Create New Question</label>
          </div>
          <div className="custom__panel__container add-question__container">
            <label className="add-question__container__label custom-label">Complete the question:</label>
            <div className="add-question__container__content">
              <label className="add-question__container__content__heading custom-label--medium">Would you rather ...</label>
              <input onKeyUp={e => this.setState(
                {
                  optionOneText: e.target.value
                }
              )} className="add-question__container__content__input" placeholder="Enter Option One Text Here" type="text"></input>
              <p className="add-question__container__content__or">OR</p>
              <input onKeyUp={e => this.setState({
                optionTwoText: e.target.value
              })} className="add-question__container__content__input" placeholder="Enter Option Two Text Here" type="text"></input>
            </div>
            <button onClick={this.addQuestion.bind(this)} className={`custom-button waves-effect waves-light btn add-question__container__button 
                        ${this.state.optionOneText.length > 0 && this.state.optionTwoText.length > 0 ? '' : 'disabled'}`}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddQuestion)