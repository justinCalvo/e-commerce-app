import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import config from '../../config.js';
import ParseResults from './ParseResults.jsx';
// import SortByPrice from './SortByPrice.jsx';

const RetrieveSearch = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('car');
  const [headerSwitch, setHeaderSwitch] = useState(false);
  const [results, setResults] = useState([]);

  const updateQueryForSearch = useCallback(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${config.Authorization}`,
      },
    };
    axios
      .get(
        `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${query}&limit=20`,
        options
      )
      .then(items => {
        setResults(items.data.itemSummaries);
      })
      .catch(err => console.error(err));
    setHeaderSwitch(true);
  }, [query]);

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    updateQueryForSearch();
  }, [updateQueryForSearch, query]);

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search for anything"
      />
      <button type="submit" onClick={getSearch}>
        Search
      </button>
      {headerSwitch ? <h3>Searching for: {query}</h3> : null}
      <div>
        <ParseResults results={results} />
      </div>
    </div>
  );
};

export default RetrieveSearch;
