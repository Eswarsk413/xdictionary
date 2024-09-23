import React, { useState } from 'react';

const XDictionary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState('');
    
    const dictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ];

    const handleSearch = () => {
        const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
        setResult(foundWord ? foundWord.meaning : "Word not found in the dictionary.");
    };

    return (
        <div>
            <h1>XDictionary</h1>
            <input
                type="text"
                placeholder="Enter a word"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                <h2>Definition:</h2>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default XDictionary;
