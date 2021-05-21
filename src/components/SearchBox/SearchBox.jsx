import React from 'react';

import 'components/SearchBox/SearchBox.css';

const SearchBox = ({ placeholder, value, onChange }) => (
	<input 
		className   = "search"
		type        = "search"
		placeholder = {placeholder}
		value       = {value}
		onChange    = {onChange}
	/>
);

export default SearchBox;
