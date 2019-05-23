import React, { Component } from 'react';

const footerContent = [
  {
    title: 'Пасажирам',
    links: [
      {
        name: 'Розклад рейсів',
        href: '#',
      },
      {
        name: 'Замовлення послуг',
        href: '#',
      },
      {
        name: 'Контактна інформація',
        href: '#',
      },
      {
        name: 'Політика конфіденційності',
        href: '#',
      },
      {
        name: 'Мапа сайту',
        href: '#',
      },
    ],
  },
  {
    title: 'Партнерам',
    links: [
      {
        name: 'Головна',
        href: '#',
      },
      {
        name: 'Наземне обслуговування',
        href: '#',
      },
      {
        name: 'Характеристики аеродрому',
        href: '#',
      },
      {
        name: 'Учбовий центр',
        href: '#',
      },
      {
        name: 'Ваканciї',
        href: '#',
      },
    ],
  },
  {
    title: 'Прес-центр',
    links: [
      {
        name: 'Головна прес-центру',
        href: '#',
      },
      {
        name: 'Останні новини',
        href: '#',
      },
      {
        name: 'Соціальні та арт проекти',
        href: '#',
      },
      {
        name: 'Фінансова звітність',
        href: '#',
      },
      {
        name: 'Статистика пасажиропотоку',
        href: '#',
      },
    ],
  },
];

class Footer extends Component {
  state = {
    isFooterItemOpen: null,
  };

  handleOpenFooterItem = ({ currentTarget: { id } }) => {
    const { isFooterItemOpen } = this.state;
    if (isFooterItemOpen === Number(id)) {
      this.setState({
        isFooterItemOpen: null,
      });
    } else {
      this.setState({
        isFooterItemOpen: Number(id),
      });
    }
  };

  render() {
    const { isFooterItemOpen } = this.state;
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {footerContent.map((item, index) => (
              <ul key={+index} className="footer__column">
                <li
                  className="footer__item footer__title"
                  style={{ cursor: 'pointer' }}
                  id={index}
                  onClick={this.handleOpenFooterItem}
                >
                  <h2>{item.title}</h2>
                </li>
                {window.screen.width <= 730 &&
                  isFooterItemOpen === index &&
                  item.links.map((link, index) => (
                    <li key={+index} className="footer__item">
                      <a href={link.href} className="footer__link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                {window.screen.width > 730 &&
                  item.links.map((link, index) => (
                    <li key={+index} className="footer__item">
                      <a href={link.href} className="footer__link">
                        {link.name}
                      </a>
                    </li>
                  ))}
              </ul>
            ))}
            <div className="footer__column">
              <div className="footer__group">
                <h2 className="footer__title border-none">Call information</h2>
                <a href="tel:+38 (044) 364-45-14" className="footer__phone">
                  +38 (044) 364-45-14
                </a>
              </div>
              <div className="footer__group">
                <h2 className="footer__title border-none">Follow us:</h2>
                <div className="footer__icons">
                  <a href="" className="footer__icon">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="" className="footer__icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="" className="footer__icon">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="" className="footer__icon">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__line" />
          <div className="footer__bottom" />
        </div>
      </footer>
    );
  }
}

export default Footer;
