import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {Meal, SendingMeal} from "../../types";
import Spinner from "../../components/Spinner/Spinner";
import Form from "../../components/Form/Form";

const Edit = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOneMeal = useCallback(async () => {
    try {
      setLoading(true);
      const mealResponse = await axiosApi.get<Meal>('/meals/' + id + '.json');
      setMeal(mealResponse.data);
    } finally {
      setLoading(false);
    }
  },[id])

  useEffect(() => {
    fetchOneMeal().catch(console.error);
  },[fetchOneMeal]);

  const updateMeal = async (meal: SendingMeal) => {
    setLoading(true);

    try {
      setLoading(true);
      await axiosApi.put("/meals/" + id + '.json', meal);
      const mealResponse = await axiosApi.get<Meal>('/meals/' + id + '.json');
      setMeal(mealResponse.data);
    } finally {
      setLoading(false);
    }
  };

  let info = (
    <div>
      {meal && (
        <>
        <h4 className="mt-2 mb-2">Edit meal</h4>
        <Form existingMeal={meal} onSubmit={updateMeal}/>
        </>)}
    </div>
  );

  if (loading) {
    info = <Spinner/>
  }

  return (
    <>
      {info}
    </>
  );
};

export default Edit;