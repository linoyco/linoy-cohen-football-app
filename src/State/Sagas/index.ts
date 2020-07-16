import { all } from 'redux-saga/effects';

import { watchFetchTeamsList, watchFetchPlayersList, watchPlayersNumber } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchTeamsList(),
		watchFetchPlayersList(),
		watchPlayersNumber()
	]);
}