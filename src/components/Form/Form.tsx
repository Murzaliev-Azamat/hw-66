import React, {useState} from 'react';
import {Meal, SendingMeal} from "../../types";
import TimesMeal from "../../TimesMeal";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface MealMutation {
  timeMeal: string;
  food: string;
  calories: string;
  date: number | string;
}

interface Props {
  onSubmit: (post: SendingMeal) => void;
  existingMeal?: Meal | null;
  isLoading?: boolean;
}

const d = new Date();
const curr_date = d.getDate();
const curr_month = d.getMonth() + 1;
const curr_year = d.getFullYear();
const todayDate = curr_year + "-" + curr_month + "-" + curr_date;

const Form: React.FC<Props> = ({onSubmit, existingMeal,isLoading= false}) => {
  const initialState = existingMeal ? {...existingMeal, calories: existingMeal.calories.toString()} : {timeMeal: '', food: '', calories: '', date: todayDate};
  const [meal, setMeal] = useState<MealMutation>(initialState);

  const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setMeal(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      timeMeal: meal.timeMeal,
      food: meal.food,
      calories: meal.calories,
      date: meal.date.toString(),
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <select name="timeMeal" value={meal.timeMeal} onChange={onTextFieldChange}>
        <option value=''></option>
        {TimesMeal.map((meal) => (
          <option key={meal} value={meal}>{meal}</option>
        ))}
      </select>
      <input
        className="d-block mt-2"
        type="text"
        name="food"
        placeholder="Введите заголовок"
        value={meal.food}
        onChange={onTextFieldChange}
      />
      <input
        className="d-block mt-2"
        type="number"
        name="calories"
        placeholder="Введите заголовок"
        value={meal.calories}
        onChange={onTextFieldChange}
      />
      <input
        className="d-block mt-2"
        type="date"
        name="date"
        placeholder="Введите заголовок"
        value={meal.date}
        onChange={onTextFieldChange}
      />
      <button type="submit" disabled={isLoading} className="d-block btn btn-primary mt-2">
        {isLoading && <ButtonSpinner/>}
        Save
      </button>
    </form>
  );
};

export default Form;