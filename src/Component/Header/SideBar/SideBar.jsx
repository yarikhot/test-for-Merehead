import React, { Component } from 'react';

const sideBarContent = [
  {
    title: `Пасажирам`,
    links: [
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
    ],
  },
  {
    title: `Пасажирам`,
    links: [
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
    ],
  },
  {
    title: `Пасажирам`,
    links: [
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
      { link: 'Напередодні вильоту', href: '#' },
    ],
  },
];

export default class SideBar extends Component {
  state = {
    isNavOpen: false,
    isSideBarItemOpen: null,
  };

  handleNavOpen = () => this.setState({ isNavOpen: !this.state.isNavOpen });

  handleOpenSideBarItem = ({ currentTarget: { id } }) => {
    const { isSideBarItemOpen } = this.state;
    if (isSideBarItemOpen === Number(id)) {
      this.setState({
        isSideBarItemOpen: null,
      });
    } else {
      this.setState({
        isSideBarItemOpen: Number(id),
      });
    }
  };

  render() {
    const { isSideBarItemOpen } = this.state;
    return (
      <div className="sidebar">
        {sideBarContent.map((item, index) => (
          <div key={+index} className="sidebar__item">
            <button
              className={`sidebar__btn ${isSideBarItemOpen === index ? 'sidebar__btn--active' : ''}`}
              id={index}
              onClick={this.handleOpenSideBarItem}
            >
              {item.title}
            </button>
            <div className="sidebar__group">
              {isSideBarItemOpen === index &&
                item.links.map((link, index) => (
                  <a key={+index} href={link.href} className="sidebar__link">
                    {link.link}
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
