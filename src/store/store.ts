import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
// дали имя редьюсеру, импортировав его так

// const sagaMiddleware = createSagaMiddleware();
// const meddilwares = [];
//
// meddilwares.push(sagaMiddleware);

// в Redux чтобы объединить reducers всегда используется combineReducers()
// в redux toolkit это не обязательно, в качестве rootReducer
// можно использовать просто объект
const rootReducer = combineReducers({
    userReducer
})

// внутри setupStore конфигурируем redux хранилище
// без использования toolkit пишут createStore
export const setupStore = () => {
    // когда истользуем toolkit нет нужды подключать
    // инструменты разработчика redux
    // И не нужно подключать thunk middleware
    // всё это идёт из коробки
  return configureStore({
      reducer: rootReducer
  })
}

// Ролик по типизации?????
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
// определив тип диспатча, мы сможем не диспатчить те экшены, которые не определили
export type AppDispatch = AppStore['dispatch']