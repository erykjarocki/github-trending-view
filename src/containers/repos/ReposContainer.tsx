import React from 'react';
import ReposList from '../../components/ReposList/ReposList';
import useRepos from './reactQuery/useRepos';
import { useRepoSetupStore } from './store/reposSetupStore';

const ReposContainer: React.FC = () => {
  const setup = useRepoSetupStore();
  const { data } = useRepos(setup);

  return (
    <ReposList repos={data} />
  );
};

export default ReposContainer;