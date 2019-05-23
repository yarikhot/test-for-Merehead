import React, { Component, Fragment } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import logo from '../../img/logo.png';
import DropDown from './DropDown/DropDown';
import SideBar from './SideBar/SideBar';

class Header extends Component {
  state = {
    activeBtn: '',
    isSideBarOpen: false,
  };

  handleClickBtn = ({ target: { name } }) => {
    const { activeBtn } = this.state;
    if (name !== activeBtn) {
      this.setState({
        activeBtn: name,
      });
    } else {
      this.setState({
        activeBtn: '',
      });
    }
  };

  handleOpenSideBar = () => {
    this.setState({
      isSideBarOpen: !this.state.isSideBarOpen,
    });
  };

  render() {
    const { activeBtn, isSideBarOpen } = this.state;
    return (
      <Fragment>
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="Logo" className="header__img" />
          </div>
          <div className="header__menu">
            <button onClick={this.handleOpenSideBar} className={isSideBarOpen ? 'header__burger on' : 'header__burger'}>
              <span />
            </button>
          </div>
          <nav className="header__nav">
            <button
              name="0"
              className={`header__btn ${activeBtn === '0' ? 'header__btn--active' : ''}`}
              onClick={this.handleClickBtn}
            >
              Пасажирам
            </button>
            <button
              name="1"
              className={`header__btn ${activeBtn === '1' ? 'header__btn--active' : ''}`}
              onClick={this.handleClickBtn}
            >
              Послуги IEV
            </button>
            <button
              name="2"
              className={`header__btn ${activeBtn === '2' ? 'header__btn--active' : ''}`}
              onClick={this.handleClickBtn}
            >
              VIP
            </button>
            <button
              name="3"
              className={`header__btn ${activeBtn === '3' ? 'header__btn--active' : ''}`}
              onClick={this.handleClickBtn}
            >
              Партнерам
            </button>
            <button className="header__btn" onClick={this.handleClickBtn}>
              UA
            </button>
          </nav>
        </header>
        <CSSTransitionGroup transitionName="dropdown" transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
          {activeBtn && <DropDown />}
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="sidebar" transitionEnterTimeout={1000} transitionLeaveTimeout={500}>
          {isSideBarOpen && <SideBar />}
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
export default Header;
