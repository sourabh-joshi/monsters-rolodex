import React, { useState, useEffect } from "react";

import CardList                       from 'components/CardList/CardList';
import SearchBox                      from 'components/SearchBox/SearchBox';

import 'components/App.css';

const App = () => {
	const [monsters, setMonsters] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(setMonsters);
	}, []);

	const [searchText, setSearchText] = useState('');
	
	const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));
	return (
		<div className="App">
			<h1>Monsters Rolodex</h1>
			<SearchBox 
				placeholder = "Search Monsters"
				value       = {searchText}
				onChange    = {e => setSearchText(e.target.value)}
			/>
			<CardList monsters={filteredMonsters}/>
		</div>
	);
};

export default App;
