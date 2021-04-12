import React from 'react';
import {
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ReposContainer from './containers/repos/ReposContainer';
import { RepoSetupProvider } from './containers/repos/store/reposSetupStore';
import './index.scss';
import { initializeQueryClient } from './global/reactQuery/initializeClient';

const queryClient = initializeQueryClient();

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RepoSetupProvider>
        <ReposContainer />
      </RepoSetupProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;