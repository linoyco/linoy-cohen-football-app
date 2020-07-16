import axios from 'axios';

const Axios = axios.create();

const BASE_URL = 'https://elenasport-io1.p.rapidapi.com/v2/seasons/3';
const API_KEY = 'a33b96587bmsh894383a0a6111b1p1ba58ejsn32236735484f';
const GET_TEAMS_URL = '/teams';
const GET_PLAYERS_URL = '/players';
const GET_ONE_PLAYER_URL = 'https://apiv2.apifootball.com/';

export const getTeamsRequest = () => {
    const url = `${BASE_URL}${GET_TEAMS_URL}`;
    return Axios.get(url, {
        headers: {
            'x-rapidapi-key': 'a33b96587bmsh894383a0a6111b1p1ba58ejsn32236735484f',
            'Content-Type': 'application/json'
        }
    }
    );
}

export const getPlayersRequest = (teamID: number) => {
    const url = `${BASE_URL}${GET_PLAYERS_URL}`;
    return Axios.get(url, {
        headers: {
            'x-rapidapi-key': 'a33b96587bmsh894383a0a6111b1p1ba58ejsn32236735484f',
            'Content-Type': 'application/json'
        },
        params: {
            'idTeam': teamID
        }
    });
}

export const getOnePlayerRequest = (playerName: string) => {
    const url = `${GET_ONE_PLAYER_URL}`;
    return Axios.get(url, {
        params: {
            'action': 'get_players',
            'player_name': playerName,
            'APIkey': '7ee04ff8724924388242d90eb70deb42d4b1a7e846336b489a58781063f095fb'
        }
    });
}