import React, { useEffect, useMemo, useState } from 'react';
import { Game } from '../Types';
import ListView from './ListView';
import UtilityBar from './UtilityBar';
import '../styles/Main.css';

interface MainProps {
  games: Game[];
}

function flatten(gameCategories: string[][]) {
  let uniqueEntries: string[] = [];
  gameCategories.forEach(game => {
    game.forEach(category =>{
      if(uniqueEntries.indexOf(category) === -1){
        uniqueEntries.push(category)
      }
    })
  })
  return uniqueEntries;
}

function filterBySearch(data: any[], searchFilter: string) {
  return data.filter(game => game.gameName.toLowerCase().includes(searchFilter.toLowerCase()))
}

function filterByCategory(data: any[], categoryFilter: any[]) {
  return categoryFilter.length > 0 ? data.filter(game => game.categories.some((category: string) => categoryFilter.indexOf(category) >= 0)) : data
}

function Main(props: MainProps) {
  const [categoryFilter, setCategoryFilter] = useState<string[]>([])
  const [searchFilter, setSearchFilter] = useState<string>("")

  const games = useMemo(() => filterByCategory(filterBySearch(props.games, searchFilter), categoryFilter), [props.games, searchFilter, categoryFilter]);
  const allCategories = flatten(props.games.map(game => game.categories))

  return (
    <div className="Main">
      <UtilityBar setCategory={setCategoryFilter} categoryFilter={categoryFilter} setSearch={setSearchFilter} categories={allCategories}/>
      <ListView games={games}/>
    </div>
  );
}

export default Main;
