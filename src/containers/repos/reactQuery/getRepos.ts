import client from '../../../global/requests/client';
import { composeUrl } from '../../../global/requests/composeUrl';
import { Repo, RepoSetup } from '../types/repoTypes';
import { getReposQueryKey, reposKey } from './keys/reposQueryKeys';
import { QueryClient } from 'react-query';
import { getLocalStorage } from '../../../global/localStorage/getLocalStorage';
import { initialState } from '../store/reposSetupSlice';
import { responseStaleTime } from '../../../global/requests/constants';

export const reposEndpoint = 'repositories';

export const getRepos = (params: RepoSetup): () => Promise<Repo[]> => {
  return async () => await client(composeUrl(process.env.API_URL!, reposEndpoint, params));
};

export const prefetchRepos = async (params: RepoSetup, queryClient: QueryClient) => {
  await queryClient.prefetchQuery(getReposQueryKey(params), getRepos(params), {
    staleTime: responseStaleTime
  });
};

export const getInitialRepoSetup = (): RepoSetup => {
  return JSON.parse(getLocalStorage(reposKey)!) || initialState;
};