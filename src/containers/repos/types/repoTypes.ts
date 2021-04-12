import { DispatchArgumentPayload } from '../../../global/types/storeTypes';

export interface RepoSetup {
    [id: string]: string
    language: string
    since: string
}

export type RepoSetupPayload = string

export interface Repo {
    name: string
    author: string
    url: string,
    stars: number
    forks: number,
    description: string,
}

export interface UseRepos {
    data?: Repo[],
}

export type RepoSetupDispatchArgument = DispatchArgumentPayload<string>
