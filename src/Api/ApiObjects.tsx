export interface ITeamDetails {
    id: number,
    name: string,
    fullName: string,
    country: string,
    founded: string,
    officialPage: string,
    phone: string,
    email: string,
    address: string,
    badgeURL: string
}

export interface ITeamsList {
    data: Array<ITeamDetails>;
    pagination: {
        page: number,
        itemsPerPage: number,
        hasNextPage: boolean,
        hasPrevPage: boolean
    }
}

export interface IPlayerDetails {
    id: number,
    name: string,
    nationalities: Array<string>,
    fullName: string,
    pob: string,
    dob: string,
    height: number,
    weight: number,
    foot: string,
    photoURL: string
}

export interface IPlayersList {
    data: Array<IPlayerDetails>;
    pagination: {
        page: number,
        itemsPerPage: number,
        hasNextPage: boolean,
        hasPrevPage: boolean
    }
}

export interface IPlayerNumber {
    player_key: number,
    player_name: string,
    player_number: string,
    player_country: string,
    player_type: string,
    player_age: string,
    player_match_played: string,
    player_goals: string,
    player_yellow_cards: string,
    player_red_cards: string,
    team_name: string,
    team_key: string
}

export interface IPlayerNumberList {
    data: Array<IPlayerNumber>;
}