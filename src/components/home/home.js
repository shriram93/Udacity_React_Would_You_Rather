import React, { Component } from 'react'
import { connect } from 'react-redux'
import './home.scss';
import QuestionPreview from './question-preview/question-preview';
import M from 'materialize-css';

class Home extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="home">
        <div className="custom__panel">
          <div className="custom__panel__header">
            <ul className="tabs  tabs-fixed-width tab-demo z-depth-1">
              <li className="tab"><a className="active" href="#test1">Unanswered Questions</a></li>
              <li className="tab"><a href="#test2">Answered Questions</a></li>
            </ul>
          </div>
          <div className="custom__panel__container">
            <div id="test1" className="col s12">
              {this.props.unansweredQuestions.map((question) =>
                <QuestionPreview key={question.id} question={question} />
              )}
            </div>
            <div id="test2" className="col s12">
              {this.props.answeredQuestions.map((question) =>
                <QuestionPreview key={question.id} question={question} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ authedUser, users, questions }) => {
  const questionsArray = Object.keys(questions).map(i => questions[i])
  const unansweredQuestions = questionsArray
    .filter(question =>
      !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))
    .map(question => ({
      ...question,
      userName: users[question.author].name,
      userAvatarUrl: users[question.author].avatarURL
    }))
    .sort((a,b) => a.timestamp > b.timestamp ? -1 : 1)
  const answeredQuestions = questionsArray.filter(question =>
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    .map(question => ({
      ...question,
      userName: users[question.author].name,
      userAvatarUrl: users[question.author].avatarURL
    }))
    .sort((a,b) => a.timestamp > b.timestamp ? -1 : 1)
  return {
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStatetoProps)(Home)