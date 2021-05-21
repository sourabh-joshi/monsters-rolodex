import React from 'react';

import Card  from 'components/Card/Card';

import 'components/CardList/CardList.css'

const renderList = (monsters) => {
	return monsters.map(monster => 
		<Card key={monster.id} monster={monster} />
	);
}


const CardList = ({ monsters }) => {
	return	<div className="card-list">{ renderList(monsters) }</div>;
}

export default CardList;
