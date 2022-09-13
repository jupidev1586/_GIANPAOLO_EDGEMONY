import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';
import styles from './index.module.scss';

export const Catalog = () => {
  const params = useParams();
  const { categoryName } = params;

  const { data, loading, error } = useFetch(
    `${ENDPOINTS.FILTER}?c=${categoryName}`
  );

  if (loading) {
    return 'Caricamento...';
  }

  if (!data?.meals?.length) {
    return 'Not found';
  }

  return (
    <div className={ styles.Catalog }>
      <ul>
        {data.meals.map((meal) => (
          <li key={meal.idMeal}>
            <img
              className={styles.thumbnail}
              src={meal.strMealThumb}
              alt={`preview of ${meal.strCategory} category`}
            />
            <Link 
              className={styles.link}
              to={`/catalogo/${categoryName}/${meal.strMeal}`}>
              {meal.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
