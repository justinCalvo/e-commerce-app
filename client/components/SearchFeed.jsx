import React from 'react';
import PropTypes from 'prop-types';

const SearchFeed = ({ result }) => {
  const placeholderImage =
    'https://www.webfx.com/blog/images/cdn.designinstruct.com/files/582-how-to-image-placeholders/generic-image-placeholder.png';

  return (
    <div>
      <div>{result.title}</div>
      <div>Sold by: {result.seller.username}</div>
      <div>${result.price.value}</div>
      {result.image ? (
        <img src={result.image.imageUrl} alt="" />
      ) : (
        <img src={placeholderImage} alt="" />
      )}
    </div>
  );
};

SearchFeed.propTypes = {
  result: PropTypes.object,
};

export default SearchFeed;
