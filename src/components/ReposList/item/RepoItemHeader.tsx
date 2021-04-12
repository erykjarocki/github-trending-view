import React from 'react';
import RepoIcon from '../../../icons/RepoIcon';
import { Repo } from '../../../containers/repos/types/repoTypes';

interface Props {
  repo: Repo
}

const RepoItemHeader: React.FC<Props> = ({ repo }: Props) => {
  
  return (
    <>
      <RepoIcon />
      <a href={repo.url}>
        <strong>
          {repo.author} / {repo.name}
        </strong>
      </a>
    </>);
};

export default RepoItemHeader;