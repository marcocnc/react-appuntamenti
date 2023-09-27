import List from "./components/List";
import { useState } from "react";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <List data={people} />

    </section>
  );
}

export default App;
