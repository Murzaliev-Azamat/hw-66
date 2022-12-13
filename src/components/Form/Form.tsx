import React, {useState} from 'react';
import {Meal, SendingMeal} from "../../types";
import TimesMeal from "../../TimesMeal";

interface MealMutation {
  timeMeal: string;
  food: string;
  calories: string;
}

interface Props {
  onSubmit: (post: SendingMeal) => void;
  existingMeal?: Meal | null;
}

const Form: React.FC<Props> = ({onSubmit, existingMeal}) => {
  const initialState = existingMeal ? {...existingMeal} : {timeMeal: '', food: '', calories: '',};
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
    onSubmit(meal)
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
      <button type="submit" className="d-block btn btn-primary mt-2">Save</button>
    </form>
  );
};

export default Form;