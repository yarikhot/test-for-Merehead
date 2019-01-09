import Axios from "axios";

export const GET_USERS = 'GET_USERS';

export function getUsers() {

    // Axios.defaults.headers.common = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     'Access-Control-Allow-Credentials': 'true'
    // };

    return Axios.get('https://cors-anywhere.herokuapp.com/http://dev.frevend.com/json/users.json')
        .then(response => response.data)
        .then(data => ({
            type: GET_USERS,
            users: data.users
        }))
        .catch(err => {

        });

}
