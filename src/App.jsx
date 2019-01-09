import React, { Component } from 'react';
import * as actions from './store/aciton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './scss/index.scss';

class App extends Component {

	componentDidMount() {
		this.props.actions.getUsers();
	}

	constructor(props) {
		super(props);

		this.state = {
			currentPage: 1,
			todosPerPage: 5
		};

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}


	render() {
		const { users } = this.props;

		const {currentPage, todosPerPage } = this.state;


        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = users.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderItems = currentTodos.map((item, index) => {
			return (
				<div className="users__item" key={index}>
					<span className="users__name">{item.name}</span>
					<span className="users__text">{item.id}</span>
					<span className="users__text">{item.surname}</span>
					<span className="users__text">{item.desc}</span>
				</div>
			);
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li
              key={number}
              id={number}
			  onClick={this.handleClick}
			  className="users__link"
            >
              {number}
            </li>
          );
        });

		return (
			<div className="users">
				{renderItems}
				<ul className="users__list">
					{renderPageNumbers}
				</ul>
			</div>
		);
	}
}

export default connect(
	state => ({
		users: state.users
	}),

	dispatch => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(App);
