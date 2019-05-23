import React from 'react';
import moment from 'moment/moment';

class TicketsTableItem extends React.Component {
  state = {
    status: '',
  };

  componentDidMount = () => {
    this.handleGetStatus();
  };

  handleGetStatus = () => {
    const { item } = this.props;
    switch (item.status) {
      case 'LN':
        this.setState({
          status: `Приземлився о ${moment(item.timeLandFact).format('hh:mm')}`,
        });
        break;
      case 'ON':
        this.setState({
          status: 'Вчасно',
        });
        break;
      case 'DP':
        this.setState({
          status: `Вилетів о ${moment(item.timeTakeofFact).format('hh:mm')}`,
        });
        break;
      case 'CX':
        this.setState({
          status: 'Завершино',
        });
        break;
      case 'DL':
        this.setState({
          status: 'Затримується',
        });
        break;
      case 'FR':
        this.setState({
          status: 'В польоті',
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { item, prefix } = this.props;
    const { status } = this.state;
    return (
      <tr className="table__row">
        <td className="table__center">
          <span className={`table__term ${item.term === 'D' ? 'table__term-d' : ''}`}>{item.term}</span>
        </td>
        <td className="table__center">
          <span className="table__s">{moment(item.timeBoard).format('hh:mm')}</span>
        </td>
        <td className="table__center">
          <span className="table__s">{item[`airport${prefix}ID.city`]}</span>
        </td>
        <td className="table__center">
          <span className="table__s">{status}</span>
        </td>
        <td className="table__center">
          <div className="table__container">
            {/* <img className="table__img" src={item.airline.ua.logoName} alt="" /> */}
            <span className="table__name  table__s">{item.airline && item.airline.ua.name}</span>
          </div>
        </td>
        <td className="table__center">
          <span className="table__s table__code">{item.codeShareData[0].codeShare}</span>
        </td>
        <td className="table__center">
          <a className="table__s table__visible text" href="#">
            Деталі рейсу
          </a>
          <a className="table__s table__visible arrow" href="#">
            <i className="fas fa-chevron-right" />
          </a>
        </td>
      </tr>
    );
  }
}

export default TicketsTableItem;
