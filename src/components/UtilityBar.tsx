import React, { Dispatch, SetStateAction, useState } from 'react';
import '../styles/UtilityBar.css';
import { Game } from '../Types';

interface UtilityBarProps {
  setCategory: Dispatch<SetStateAction<string[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
  categoryFilter: string[];
  categories: any;
}

function UtilityBar(props: UtilityBarProps) {
  const { setCategory, categoryFilter, setSearch, categories} = props;
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const categoryChange = (event: any) => {
    let category = event.target.value;
    if (event.target.checked){
      setCategory([...categoryFilter, category])
    }else{
      setCategory(categoryFilter.filter(item => item !== category))
    }
  }

  return (
    <div className="utility-bar">
      <div className="filter" onClick={e => setFilterOpen(!filterOpen)}>Filter</div>
      {filterOpen &&
        <span className="filter-dropdown">
          <ul className="category-list">
            <li className="category-list-item category-list-title">Categories:</li>
            {categories.map((category: any) =>
              <li className="category-list-item" key={category}>
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  value={category}
                  onChange={event => categoryChange(event)}
                  checked={categoryFilter.indexOf(category) > -1}
                />
                {category}
              </li>
            )}
            <li className="category-list-item" key="clear"><button onClick={() => setCategory([])}>Clear Filters</button> </li>
          </ul>
        </span>
      }
      <input type="text" placeholder="Search.." onChange={(event) => setSearch(event.currentTarget.value)}/>
    </div>
  );
}

export default UtilityBar;
