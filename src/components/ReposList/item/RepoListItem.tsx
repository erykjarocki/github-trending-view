import React from 'react';
import { Repo } from '../../../containers/repos/types/repoTypes';
import RepoItemHeader from './RepoItemHeader';
import StarIcon from '../../../icons/StarIcon';
import RepoItemDescription from './RepoItemDescription';

interface Props {
  repo: Repo
}

const RepoListItem: React.FC<Props> = ({ repo }) => {
  return (
    <article className="Box-row">
      <RepoItemHeader repo={repo} />
      <RepoItemDescription text={repo.description} />

      <div className="text-small text-gray-light d-flex">
        <div className="mr-2">
          <StarIcon />
          {repo.stars} stars
        </div>

        <div>
          <svg
            height="16"
            className="octicon octicon-repo-forked mr-1"
            aria-label="fork"
            viewBox="0 0 10 16"
            version="1.1"
            width="10"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
            ></path>
          </svg>
          {repo.forks} forks
        </div>
      </div>
    </article>
  );
};

export default RepoListItem;
