import { useState } from "react";

const SplitPage = () => {
  const [users, setUsers] = useState([{ name: "John" }, { name: "Jane" }]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [split, setSplit] = useState([]);

  const calculateSplit = () => {
    const share = totalAmount / users.length;
    setSplit(users.map((user) => ({ ...user, owes: share })));
  };

  return (
    <div>
      <h1>Split Bill</h1>
      <input
        type="number"
        placeholder="Total Amount"
        onChange={(e) => setTotalAmount(Number(e.target.value))}
      />
      <button onClick={calculateSplit}>Split Bill</button>

      <div>
        {split.map((user, index) => (
          <div key={index}>
            {user.name}: ${user.owes}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitPage;
