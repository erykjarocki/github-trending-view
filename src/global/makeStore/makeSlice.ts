import produce from 'immer';
import {
  ActionsGroup,
  DispatchArgumentPayload,
  MakeSliceInput,
  ReducersGroup,
  Slice, StoreReducer,
} from '../types/storeTypes';

const buildActionType = (slice: string) =>
  (action: string) => slice ? `${slice}/${action}` : action;

function makeAction<PayloadType>(type: string) {
  const actionCreator = (payload: PayloadType) => ({ type, payload });

  actionCreator.toString = () => `${type}`;
  return actionCreator;
}

function makeReducer<StateType, PayloadType>(reducers: ReducersGroup<StateType, PayloadType>):
  StoreReducer<any, any> {

  const reducer = (
    state: StateType,
    action: DispatchArgumentPayload<PayloadType>):
    StateType => {
    const caseReducer = reducers[action.type];
    if (!caseReducer) {
      return state;
    }
    return caseReducer(state, action.payload);
  };
  return produce(reducer);
}

export default function makeSlice<StateType, PayloadType>(
  { name, initialState, reducers }: MakeSliceInput<StateType, PayloadType>
):
  Slice<StateType, PayloadType> {
  const actionKeys = Object.keys(reducers);
  const createActionKey = buildActionType(name);

  const reducerMap: ReducersGroup<StateType, PayloadType> = {};
  actionKeys.forEach((action) => {
    reducerMap[createActionKey(action)] = reducers[action];
  });

  const actionMap: ActionsGroup<PayloadType> = {};
  actionKeys.forEach((action: string) => {
    actionMap[action] = makeAction(createActionKey(action));
  });

  return {
    name,
    initialState,
    actions: actionMap,
    reducer: makeReducer<StateType, PayloadType>(reducerMap),
  };
}
