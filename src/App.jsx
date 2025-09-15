import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { FilteredList } from "./components/FilteredList/FilteredList";
import cls from "./App.module.scss";

function App() {
  const [page, setPage] = useState("counter");

  return (
    <div className={cls.container}>
      <h1>DZ 5</h1>
      <div className={cls.switcher}>
        <button onClick={() => setPage("counter")}>Counter</button>
        <button onClick={() => setPage("list")}>Filtered List</button>
      </div>

      <div className={cls.block}>
        {page === "counter" ? <Counter /> : <FilteredList />}
      </div>
    </div>
  );
}

export default App;
