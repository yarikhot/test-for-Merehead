import React, { Component, Fragment } from 'react';
import TicketsTableItem from './TicketsTableItem';
import NoDataRow from '../../NoDataRow/NoDataRow';

export default class TicketsTable extends Component {
  render() {
    const { data, prefix } = this.props;
    return (
      <Fragment>
        <table className="table">
          <thead className="table__head">
            <tr>
              <td className="table__center">
                <span className="table__title">Термінал</span>
              </td>
              <td className="table__center">
                <span className="table__title">Розклад</span>
              </td>
              <td className="table__center">
                <span className="table__title">Призначення</span>
              </td>
              <td className="table__center">
                <span className="table__title">Статус</span>
              </td>
              <td className="table__center">
                <span className="table__title">Авіакомпанія</span>
              </td>
              <td className="table__center">
                <span className="table__title">Рейс</span>
              </td>
              <td className="table__center">
                <span className="table__title" />
              </td>
            </tr>
          </thead>
          <tbody className="table__body">
            {data.length > 0 &&
              data.map((item, index) => <TicketsTableItem item={item} key={+index} prefix={prefix} />)}
          </tbody>
        </table>
        {data.length === 0 && <NoDataRow />}
      </Fragment>
    );
  }
}
