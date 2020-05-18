import React, { useState, useCallback } from 'react';
import axios from 'axios';

const CreateListing = () => {
  const [name, setName] = useState('');
  const resetForm = () => {
    setName('');
  };
  const submitForm = useCallback(() => {
    const data = {
      name,
    };
    axios
      .post('/new-listings', data)
      .then(res => {
        console.log('Listing Created!');
        resetForm();
      })
      .catch(err => console.error(err));
  }, [name]);

  return (
    <div>
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Product Name"
        />
        <button type="submit" value={submitForm}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
