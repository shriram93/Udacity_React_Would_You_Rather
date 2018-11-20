import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAuthedUser } from '../../store/actions/authedUser'
import './navbar.scss'
import { formatUsername } from '../../utils/helpers'

const Navbar = (props) => {
	return (
		<div className="navbar">
			<nav>
				<div className="nav-wrapper">
					<div className="container">
						<ul id="nav-mobile" className="left">
							<li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
							<li><NavLink to='/add' activeClassName="active">New Question</NavLink></li>
							<li><NavLink to='/leaderboard' activeClassName="active">Leader Board</NavLink></li>
						</ul>
						{props.currentUser && <ul id="nav-mobile" className="right">
							<li className="user-info">
								<p className="user-info__name">{`Hello, ${formatUsername(props.currentUser.name)}`}</p>
								<img className="user-info__avatar" src={`/${props.currentUser.avatarURL}`} alt="user-avatar" />
								</li>
							<li onClick={() => props.dispatch(setAuthedUser(''))}><p className="logout">Logout</p></li>
						</ul>}
					</div>
				</div>
			</nav>
		</div>
	);
}

const mapStatetoProps = ({ authedUser, users }) => {
	const currentUser = users[authedUser]
	return {
		currentUser
	}
}

export default withRouter(connect(mapStatetoProps)(Navbar))