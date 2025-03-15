import { useState } from "react";

const DrinkList = ({ drinks, setDrinks }) => {
  const [drink, setDrink] = useState("");
  const [price, setPrice] = useState("");

  const addDrink = () => {
    setDrinks([...drinks, { drink, price }]);
    setDrink("");
    setPrice("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Drink Name"
        value={drink}
        onChange={(e) => setDrink(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addDrink}>Add Drink</button>
    </div>
  );
};

export default DrinkList;
