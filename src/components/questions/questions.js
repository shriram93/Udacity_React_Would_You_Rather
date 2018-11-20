import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import VoteResult from './vote-result/vote-result'
import VoteQuestion from './vote-question/vote-question'

class Questions extends Component {
  render() {
    return (
      <div className="questions">
        {this.props.question &&
          <Fragment>
            <p>{this.props.authedUser.authedUser}</p>
            {this.props.question.optionOne.votes.includes(this.props.authedUser) || this.props.question.optionTwo.votes.includes(this.props.authedUser)
              ? <VoteResult question={this.props.question} authedUser={this.props.authedUser} />
              : <VoteQuestion question={this.props.question} />}
          </Fragment>}
        }
      </div>
    );
  }
}

const mapStatetoProps = ({ authedUser, users, questions }, props) => {
  const question = questions[props.match.params.questionid]
  if (!question) {
    props.history.push(`/404`);
    return {}
  }
  question.userName = users[question.author].name
  question.userAvatarUrl = users[question.author].avatarURL
  return {
    question,
    authedUser
  }
}

export default connect(mapStatetoProps)(Questions)