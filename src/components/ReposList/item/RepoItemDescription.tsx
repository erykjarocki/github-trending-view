import React from 'react';

interface Props {
  text: string
}

const RepoItemDescription: React.FC<Props> = ({ text }) => {

  return (<p className="col-9 color-text-secondary my-1 pr-4">
    {text}
  </p>);
};

export default RepoItemDescription;