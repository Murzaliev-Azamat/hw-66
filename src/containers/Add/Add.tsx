import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import {SendingMeal} from "../../types";
import Form from "../../components/Form/Form";

const Add = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const addMeal = async (meal: SendingMeal) => {
    try {
      setLoading(true);
      await axiosApi.post<SendingMeal>("/meals.json", meal);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  let info = (
    <div>
      <h4 className="mt-2 mb-2">Add new meal</h4>
      <Form onSubmit={addMeal}/>
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

export default Add;