import { Category } from '@services/models';
import {useState, useEffect} from 'react';

export const useCategoryData = () => {
  const [categoryData, setCategoryData] = useState<Category[]>([]);

  const getCategoryData = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later');
      }
      const json = await response.json();
      console.log(json);
      setCategoryData(json.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return {categoryData};
};