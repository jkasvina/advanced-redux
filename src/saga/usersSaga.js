/*
import { put, takeEvery, call } from "redux-saga/effects"; // Effects

const fetchUsersFromApi = () =>
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10");
// fetch возвращает Promise

// Worker (понятие redux-saga), на основе ф-ии генератора
function* fetchUserWorker() {
    try {
        // call возвращает данные из promise
        // fetchUsersFromApi обязана возвращать Promise
        const data = yield call(fetchUsersFromApi);
        // resolve(data.json()) - преобразование исходных данных к формату json
        const json = yield call(
            () => new Promise((resolve) => resolve(data.json()))
        );
        // console.log(json[0].id);
        yield put(setUsersCustomerAction(json));
    } catch (e) {
        console.log(e);
    }
}

// Watcher отрабатывает тогда, когда action с таким типом будет задиспатчен
// (передан диспетчеру)
// Watcher может отслеживать неограниченное кол-во actions

/!* actions в Watcher должны отличаться от тех которые в Worker иначе получится бесконечный цикл.
   То есть в интерфейсе через action мы обращаемся к саге(Watcher),
   а уже из саги(Worker) через другой action обращаемся к редьюсеру *!/
export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker);
}*/
