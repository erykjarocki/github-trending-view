import {  RepoSetup } from '../../types/repoTypes';
import { QueryKey } from 'react-query';

export const reposKey = 'repos';

export const getReposQueryKey =
    (params: RepoSetup): QueryKey => [reposKey, params];
