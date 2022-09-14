import React from 'react';
import { ENDPOINTS } from '../../utils/api/endpoints.js';
import { useFetch } from '../../utils/api/use-fetch.js';
import { CategoryList } from '../../components/CategoryList/index.js';

export const Home = () => {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default Home;
