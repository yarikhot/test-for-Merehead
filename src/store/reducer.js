import * as actions from './aciton';

export default function reducer(state, action) {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        arrival: action.arrival.filter(item =>
          action.search.length > 0
            ? item.codeShareData[0].codeShare.toLowerCase().includes(action.search.toLowerCase()) ||
              item[`airportFromID.city`].toLowerCase().includes(action.search.toLowerCase())
            : item
        ),
        departure: action.departure.filter(item =>
          action.search.length > 0
            ? item.codeShareData[0].codeShare.toLowerCase().includes(action.search.toLowerCase()) ||
              item[`airportToID.city`].toLowerCase().includes(action.search.toLowerCase())
            : item
        ),
      };
    default:
      return state;
  }
}
