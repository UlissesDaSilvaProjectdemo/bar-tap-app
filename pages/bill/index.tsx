import { useState } from "react";

const BillPage = () => {
  const [drink, setDrink] = useState("");
  const [price, setPrice] = useState("");
  const [drinksList, setDrinksList] = useState([]);
  
  const handleAddDrink = () => {
    setDrinksList([...drinksList, { drink, price }]);
    setDrink("");
    setPrice("");
  };

  const handleSubmitBill = () => {
    console.log(drinksList);  // Handle bill submission logic here
  };

  return (
    <div>
      <h1>Add Drinks</h1>
      <input
        type="text"
        placeholder="Drink name"
        value={drink}
        onChange={(e) => setDrink(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddDrink}>Add Drink</button>

      <div>
        {drinksList.map((item, index) => (
          <div key={index}>
            {item.drink}: ${item.price}
          </div>
        ))}
      </div>

      <button onClick={handleSubmitBill}>Submit Bill</button>
    </div>
  );
};

export default BillPage;
