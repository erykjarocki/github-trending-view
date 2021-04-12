import makeSlice from '../../../global/makeStore/makeSlice';
import { RepoSetup, RepoSetupPayload } from '../types/repoTypes';

const defaultReposSetup = {
  language: 'Typescript',
  since: 'weekly'
};

const availableLanguagesSetup: string[] = ['HTML', 'Java', 'JavaScript', 'Typescript'];
const availableSinceSetup: string[] = ['daily', 'weekly', 'monthly'];

const reposSetupSlice = makeSlice<RepoSetup, RepoSetupPayload>({
  name: 'reposSetup',
  initialState: defaultReposSetup,
  reducers: { 
    setLanguage: (state: RepoSetup, payload: RepoSetupPayload) => {
      state.language = payload;
      return state;
    },
    setSince: (state: RepoSetup, payload: RepoSetupPayload) => {
      state.since = payload;
      return state;
    }
  }
});

const { reducer, actions, name, initialState } = reposSetupSlice;
export const { setLanguage, setSince } = actions;
export { name, initialState, availableSinceSetup, availableLanguagesSetup };
export default reducer;