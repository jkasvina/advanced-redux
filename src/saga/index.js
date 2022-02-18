import { all } from "redux-saga/effects";
// npm i redux-saga

// all - глобальный watcher, который следит за всеми watcher-ами
export function* rootWatcher() {
    yield all([usersWhatcher()]);
}