import { getInitialRepoSetup, prefetchRepos } from '../../containers/repos/reactQuery/getRepos';
import { QueryClient } from 'react-query';

export const initializeQueryClient = (): QueryClient => {
  const queryClient = new QueryClient();
  prefetchRepos(getInitialRepoSetup(),queryClient);
  return queryClient;
};