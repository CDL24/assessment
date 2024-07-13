import { Meal } from '@services/models';
import {useState, useEffect} from 'react';

export const useRecentMealData = () => {
  const [mealData, setMealData] = useState<Meal[]>([]);

  const getMealData = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast',
      );
      
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again later');
      }
      const json = await response.json();
      console.log(json);
      setMealData(json.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMealData();
  }, []);

  return {mealData};
};