import React, { useEffect, useState } from 'react';
import './App.css';


interface Label {
  id: string;
  label: string;
}

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

const Labels: Label[] = [
  {id: 'all', label: 'All'},
  { id: 'pork', label: 'Pork' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'kids', label: 'Kids' },
  { id: 'chicken', label: 'Chicken' },
  { id: 'beef', label: 'Beef' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'breakfast', label: 'Breakfast' },
];

const meals: Meals[]=[
  {
    id: "meal1",
    title: "3 course chicken",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 9.99,
    labels: [
      "chicken",
      "breakfast"
    ],
    img: "https://source.unsplash.com/XaDsH-O2QXs",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal2",
    title: "3 course Beef",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 19.99,
    labels: [
      "beef"
    ],
    img: "https://source.unsplash.com/auIbTAcSH6E",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal3",
    title: "3 course Vegetarian",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 79.99,
    labels: [
      "vegetarian"
    ],
    img: "https://source.unsplash.com/EvoIiaIVRzU",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal4",
    title: "3 course Seafood",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 49.99,
    labels: [
      "seafood"
    ],
    img: "https://source.unsplash.com/awj7sRviVXo",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal5",
    title: "3 course Pork",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 39.99,
    labels: [
      "pork"
    ],
    img: "https://source.unsplash.com/XPvhzVIeETM",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal6",
    title: "3 course Kids",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 29.99,
    labels: [
      "kids",
      "breakfast"
    ],
    img: "https://source.unsplash.com/PLyJqEJVre0",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  },
  {
    id: "meal7",
    title: "3 course Chicken 2",
    starter: "Lorem Ipsum",
    desert: "Cake",
    price: 19.99,
    labels: [
      "chicken"
    ],
    img: "https://source.unsplash.com/N0u8bLrB_-g",
    drinks: [
      {
        id: "drink-1",
        title: "Vine",
        price: 4.99
      },
      {
        id: "drink-2",
        title: "Juice",
        price: 5.99
      },
      {
        id: "drink-3",
        title: "Beer",
        price: 6.99
      }
    ]
  }
]
function App() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>(['all']);
  const [myMeals, setMyMeals] = useState<Meals[]>();
  const [totalPrize, setTotalPrize] = useState(0);
  const [lables, setLables] = useState<Label[]>()
  const [Meals, setMeals] = useState<Meals[]>();

  useEffect(() => {
    fetch("/pills").then((data) => setLables(data as unknown as Label[]))
    fetch("/meals").then((data) => {setMeals(data as unknown as Meals[])})
  }, [])
  
  console.log(meals);

  const setPrice = (val:number) => {
    console.log(val);
    setTotalPrize(val + totalPrize)
  }

  const toggleLabel = (labelId: string) => {
    if(labelId === 'all' && !selectedLabels.includes('all')){
      const list: string[] = ['all'];
      setSelectedLabels(list);
    }
    else if(labelId !== 'all' && selectedLabels.includes('all') && !selectedLabels.includes(labelId)){
      setSelectedLabels((prevLabels) => prevLabels.filter((label) => label !== 'all').concat(labelId));
    }
    else{
    setSelectedLabels((prevLabels) =>
      prevLabels.includes(labelId)
        ? prevLabels.filter((label) => label !== labelId)
        : [...prevLabels, labelId]
    );
  }
  };

  const setTotal = () => {
    
  }

  useEffect(()=> {
    if(selectedLabels.includes('all')){
    setMyMeals(meals);
    }
  else{
    setMyMeals(meals => meals?.filter((meal) => meal.labels.some((label) => selectedLabels.includes(label))))
  }},[selectedLabels])
  
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
      <div className='main-card'>
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
        
      </div>
      <div className='select-button' onClick={() => setTotalPrize(curr + totalPrize)}>Select</div>
      </div>
    );
  };


  return (
    <div className='contain'>
    <div className='container'>
      <div className='pill-container'>
        {Labels.map((label) => (
          <div
            key={label.id}
            className={`pill ${selectedLabels.includes(label.id) ? 'selected' : ''}`}
            onClick={() => toggleLabel(label.id)}
          >
            {label.label}
          </div>
        ))}
      </div>
      <div>
          {myMeals?.map((meal) =><MealCard meal={meal} setPrize = {() => setPrice} currPrize = {totalPrize}></MealCard> )}
      </div>
    </div>
    <div className='price-container'>
      <div className="flight-booking">
        <h2 className='info-header'>Selected Meals</h2>
        <div className="info-section">
          <div>
            <p><strong>From:</strong> Banglore</p>
            <p><strong>To:</strong> Delhi(NDLS)</p>
            <p><strong>Duration: </strong>2Hr 35m</p>
          </div>
        </div>

        <div className="passenger-section">
          <h5>Booking Meal For</h5>
          <h4>J Abhiram Varma</h4>
        </div>

        <div className="price-section">
          <h3>Total Price</h3>
          <p>{totalPrize}</p>
          <button className='butn'>Order</button>
        </div>
      </div>
     

    </div>
    </div>
  );
}

export default App;
