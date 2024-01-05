import React, { useState } from 'react';
import './MealCard.css'; // Import your CSS file for styling

interface Drinks {
  id: string;
  title: string;
  price: number;
}

interface Meals {
  id: string;
  title: string;
  starter: string;
  desert: string;
  price: number;
  img: string;
  labels: string[];
  drinks: Drinks[]; 

}

interface Meal {
  meal: Meals;
  currPrize: number;
  setPrize: (val:number) => void
}

const MealCard: React.FC<Meal> = ({meal, setPrize, currPrize}) => {
  const [selectedDrinks, setSelectedDrinks] = useState<string>();
  const [curr, setCurrPrize] = useState(meal.price);

  const toggleLabel = (labelId: string) => {
    if(selectedDrinks === labelId){
      setSelectedDrinks('')
    }
    else{setSelectedDrinks(labelId)}
  };

  const setPrice = (drinksSelected: string | undefined) => {
    if(drinksSelected === selectedDrinks){
      setCurrPrize(meal.price);
    }
    else{
    let price = 0;
    price = meal.drinks.find((drink) => drink.title === drinksSelected)?.price || 0;
    setCurrPrize(price + meal.price)
  }
  }
  return (
    <div className="meal-card">
      <img src={meal.img} alt={meal.id} className="meal-image" />

      <div className="meal-content">
        <span className="meal-tag">{meal.labels}</span>
        <h3 className="meal-header">{meal.title}</h3>
        <p className="meal-subheader">Starter: {meal.starter}</p>
        <p className="meal-subheader">Dessert: {meal.desert}</p>
        <p className='meal-subheader'>Drinks: {selectedDrinks}</p>

        <div className="meal-pills">
          <strong>Drinks:</strong>
          <div className='pill-container'>
        {meal.drinks.map((label) => (
          <div
            key={label.id}
            className={`pill ${selectedDrinks ===label.title ? 'selected' : ''}`}
            onClick={() => {
              toggleLabel(label.title);
              setPrice(label.title)
            }}
          >
            {label.title}
          </div>
        ))}
      </div>
      <div className='meal-subheader'>Price: {curr}</div>
        </div>
      </div>
      <button onClick={() => setPrize(curr)}>Select</button>
    </div>
  );
};

export default MealCard;
