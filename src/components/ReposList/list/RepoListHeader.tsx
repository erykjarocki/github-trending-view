import React from 'react';

const RepoListHeader: React.FC = () => {
  
  return (
    <div className="container-lg p-responsive text-center py-6 blankslate-clean-background">
      <h1 className="h0-mktg">Trending</h1>

      <p className="f4 color-text-secondary col-md-6 mx-auto">
        See what the GitHub community is most excited about this month.
      </p>
    </div>
  );
};

export default RepoListHeader;