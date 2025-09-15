import { useState, useMemo, useCallback } from "react";

const initialUsers = [
  { id: 1, name: "Хюрем" },
  { id: 2, name: "Сулейман" },
  { id: 3, name: "Хатидже" },
];

export const FilteredList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState("");

  console.log("FilteredList render");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users");
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  const addUser = useCallback(() => {
    const newUser = { id: Date.now(), name: `User${users.length + 1}` };
    setUsers((prev) => [...prev, newUser]);
  }, [users.length]);

  return (
    <div>
      <h2>Users</h2>
      <input
        type="text"
        placeholder="поиск юсера "
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={addUser}>Добавить юсер</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
