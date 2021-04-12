import React from 'react';

interface Props {
  items: string[]
  onClick: (el: string) => void
  selected: string,
  title: string
}

const Dropdown: React.FC<Props> =
  ({ items, onClick, selected, title }) => {
  
    return (
      <>
        <legend>{`${title} :`}</legend>
        <details className="dropdown details-reset details-overlay mx-2">
          <summary className="btn-link select-menu-button" aria-haspopup="true">
            {selected}
            <div className="dropdown-caret" />
          </summary>
          <ul className="dropdown-menu dropdown-menu-se">
            {items.map((item, index) => (
              <li key={`${index}-${item}`}>
                <div
                  className="dropdown-item"
                  onClick={() => onClick(item)}
                >
                  {item}
                </div>
              </li>))}
          </ul>
        </details>
      </>
    );
  };

export default Dropdown;