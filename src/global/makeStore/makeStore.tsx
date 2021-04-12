import React, { Dispatch } from 'react';
import { DispatchArgumentPayload, StoreSet } from '../types/storeTypes';

export default function makeStore<StoreType, PayloadType>(
  reducer: React.Reducer<any, any>,
  initialState: StoreType): StoreSet<StoreType, PayloadType> {

  const dispatchContext = React.createContext<Dispatch<DispatchArgumentPayload<PayloadType>>>(() => undefined);
  const storeContext = React.createContext<StoreType>(null!);

  const StoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = React.useReducer(reducer, initialState);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useDispatch() {
    return React.useContext(dispatchContext);
  }

  function useStore() {
    return React.useContext(storeContext);
  }

  return [StoreProvider, useDispatch, useStore];
}
