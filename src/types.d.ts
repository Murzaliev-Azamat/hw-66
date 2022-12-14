export interface Meal {
  id: string;
  timeMeal: string;
  food: string;
  calories: number;
  date: string;
}

export interface MealApi {
  id: string;
  timeMeal: string;
  food: string;
  calories: string;
  date: string;
}

export interface SendingMeal {
  timeMeal: string;
  food: string;
  calories: string;
  date: string;
}

export interface MealApiList {
  [id: string]: MealApi;
}