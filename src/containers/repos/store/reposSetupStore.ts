import repoSetupSlice, { initialState } from './reposSetupSlice';
import { RepoSetup, RepoSetupPayload } from '../types/repoTypes';
import makePersistentStore from '../../../global/makeStore/makePersistentStore';
import { reposKey } from '../reactQuery/keys/reposQueryKeys';

const [
  RepoSetupProvider,
  useRepoSetupDispatch,
  useRepoSetupStore
] = makePersistentStore<RepoSetup, RepoSetupPayload>(repoSetupSlice, initialState, reposKey);

export {
  RepoSetupProvider,
  useRepoSetupDispatch,
  useRepoSetupStore,
};
