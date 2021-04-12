import React from 'react';
import Dropdown from '../../Dropdown/Dropdown';
import { useRepoSetupDispatch, useRepoSetupStore } from '../../../containers/repos/store/reposSetupStore';
import {
  availableLanguagesSetup,
  availableSinceSetup,
  setSince,
  setLanguage
} from '../../../containers/repos/store/reposSetupSlice';

const RepoListMenu: React.FC = () => {
  const { language, since } = useRepoSetupStore();
  const dispatch = useRepoSetupDispatch();
  
  return (
    <div className="Box-header flex-justify-between">
      <div className="d-flex col-4 col-md-6 col-sm-12">
        <Dropdown
          title="Language"
          items={availableLanguagesSetup}
          selected={language}
          onClick={(item) => dispatch(setLanguage(item))}
        />
        <Dropdown
          title="Date period"
          items={availableSinceSetup}
          selected={since}
          onClick={(item) => dispatch(setSince(item))}
        />
      </div>
      <div className="col-8 col-md-6 col-sm-12">

      </div>
    </div>);
};

export default RepoListMenu;