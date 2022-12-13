export interface Meal {
  id: string;
  timeMeal: string;
  food: string;
  calories: string;
}

export interface SendingMeal {
  timeMeal: string;
  food: string;
  calories: string;
}

export interface MealList {
  [id: string]: Meal;
}