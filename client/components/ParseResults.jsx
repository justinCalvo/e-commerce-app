import React from 'react';
import PropTypes from 'prop-types';
import SearchFeed from './SearchFeed.jsx';

const ParseResults = ({ results }) => (
  <div className="listings-container">
    <div className="sidebar">
      <h1>hello</h1>
    </div>
    {results.map(result => (
      <SearchFeed result={result} />
    ))}
  </div>
);

ParseResults.propTypes = {
  results: PropTypes.array,
};

export default ParseResults;
