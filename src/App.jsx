import React, { useState } from 'react';
import useFilteredData from './components/use-filter';
import './App.css'

const App = () => {
  const [keyword, setKeyword] = useState('');
  const actionMovies = [
    "Die Hard (1988)",
    "Mad Max: Fury Road (2015)",
    "The Dark Knight (2008)",
    "Gladiator (2000)",
    "John Wick (2014)",
    "The Matrix (1999)",
    "Terminator 2: Judgment Day (1991)",
    "Inception (2010)",
    "Lethal Weapon (1987)",
    "The Bourne Identity (2002)",
    "Speed (1994)",
    "Casino Royale (2006)",
    "Black Panther (2018)",
    "Avengers: Endgame (2019)",
    "Mission: Impossible – Fallout (2018)",
    "RoboCop (1987)",
    "Predator (1987)",
    "Raiders of the Lost Ark (1981)",
    "The Expendables (2010)",
    "Skyfall (2012)"
];


  const filteredData = useFilteredData(actionMovies, keyword);

  return (
    <div className='container'>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword to filter"
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
