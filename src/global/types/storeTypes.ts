import React, { Dispatch } from 'react';

export type DispatchArgumentPayload<Type> = { type: string, payload: Type }

export type StoreSet<StoreType, PayloadType> =
  [React.FC, () => Dispatch<DispatchArgumentPayload<PayloadType>>, () => StoreType]

export type StoreReducer<StoreType, PayloadType> =
  React.Reducer<StoreType, DispatchArgumentPayload<PayloadType>>

export type ReducersGroup<StateType, PayloadType> = Record<string, React.Reducer<StateType, PayloadType>>
export type ActionsGroup<PayloadType> = Record<string, (type: PayloadType) => DispatchArgumentPayload<PayloadType>>

export interface MakeSliceInput<StateType, PayloadType> {
    name: string,
    initialState: StateType,
    reducers: ReducersGroup<StateType, PayloadType>,
}

export interface Slice<StateType, PayloadType> {
    name: string,
    initialState: StateType,
    actions: ActionsGroup<PayloadType>,
    reducer: StoreReducer<StateType, PayloadType>
}