import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  timeMeal: string;
  food: string;
  calories: string;
  id: string;
  onDelete: (id: string) => void;
}

const Post: React.FC<Props> = ({timeMeal,food, calories,id, onDelete}) => {
  return (
    <div className="d-flex justify-content-between align-items-center border border-1 border-secondary p-3 mt-2">
      <div>
        <p className="text-secondary">{timeMeal}</p>
        <p>{food}</p>
      </div>
      <div>
        <p>{calories} kcal</p>
        <Link to={"/edit-meal/" + id} className="btn btn-primary me-2">Edit</Link>
        <button onClick={() => onDelete(id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default Post;