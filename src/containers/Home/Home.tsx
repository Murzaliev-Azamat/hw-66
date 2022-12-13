import React, {useCallback, useEffect, useState} from 'react';
import Post from "../../components/Post/Post";
import {Link} from "react-router-dom";
import {Meal, MealList} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [meals, setMeals] = useState<Meal[] | null>([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const mealsResponse = await axiosApi.get<MealList | null>('/meals.json');
      const meals = mealsResponse.data;
      if (!meals) {
        return setMeals([]);
      }
      const newMeals = Object.keys(meals).map(key => {
        const meal = meals[key];
        meal.id = key;
        return meal;
      });
      setMeals(newMeals);
    } finally {
      setLoading(false);
    }
  },[])

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const remove = async (id: string) => {
    try {
      setLoading(true);
      await axiosApi.delete('/meals/' + id + '.json');
      await fetchMeals();
    } finally {
      setLoading(false);
    }
  }

  let list = meals && (
    <div>
      <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
        <h4 className="m-0">Total calories: 900</h4>
        <Link to={"/add-meal"}>Add new meal</Link>
      </div>
      {meals.map((meal) => (
        <Post onDelete={remove} key={meal.id} timeMeal={meal.timeMeal} food={meal.food} calories={meal.calories} id={meal.id}/>
      ))}
    </div>
  );

  if (loading) {
    list = <Spinner/>
  }

  return (
    <>
      {list}
    </>
  );
};

export default Home;