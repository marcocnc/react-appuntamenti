import List from "./components/List";
import { useState } from "react";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data);

  



  return (
    <section>
      <div className="container">
        <div className="people-list">
            <List data={people} />
          </div>
          <div className="btn-group">
            <button className="btn btn-reset">
              Reload
            </button>

            <button className="btn btn-delete">
              Delete all
            </button>
          </div>
      </div>

    </section>
  );
}

export default App;
