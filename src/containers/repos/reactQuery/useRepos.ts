import { useQuery } from 'react-query';
import { getReposQueryKey } from './keys/reposQueryKeys';
import { Repo, RepoSetup, UseRepos } from '../types/repoTypes';
import { getRepos } from './getRepos';
import { responseStaleTime } from '../../../global/requests/constants';

const useRepos = (params: RepoSetup): UseRepos => {
  const { data } = useQuery<Repo[], Error>(getReposQueryKey(params), getRepos(params), {
    staleTime: responseStaleTime
  });

  return {
    data
  };
};

export default useRepos;
