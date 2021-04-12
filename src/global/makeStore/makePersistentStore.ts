import makeStore from './makeStore';
import { DispatchArgumentPayload, StoreReducer, StoreSet } from '../types/storeTypes';

export default function makePersistentStore<StoreType, PayloadType>(
  userReducer: StoreReducer<StoreType, PayloadType>,
  initialState: StoreType,
  key: string): StoreSet<StoreType, PayloadType> {
  
  try {
    const storageItem = localStorage.getItem(key);
    initialState = JSON.parse(storageItem!) || initialState;
  } catch (e) {
    console.error('error when reading from store', e);
  }

  const reducer = (state: StoreType, action: DispatchArgumentPayload<PayloadType>) => {
    const newState = userReducer(state, action);
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  return makeStore(reducer, initialState);
}
