import React from 'react';
import { Repo } from '../../containers/repos/types/repoTypes';
import RepoListItem from './item/RepoListItem';
import RepoListMenu from './list/RepoListMenu';
import RepoListHeader from './list/RepoListHeader';

interface Props {
  repos?: Repo[]
}

const ReposList: React.FC<Props> = ({ repos = [] }) => {

  return (
    <>
      <RepoListHeader />
      <section className="p-responsive">
        <RepoListMenu />
        {repos.map((repo) => (<RepoListItem key={repo.url} repo={repo} />))}
      </section>
    </>
  );
};

export default ReposList;
