import List from "./components/List";
import { useState } from "react";
import data from "./data/data";

function App() {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) =>{
    // const newPeople = data.filter(person => person.id !== id);
    setPeople((oldValue) => oldValue.filter((person) => person.id !==id));
  }

  const resetAll = () =>{
    setPeople(data);
  }

  const deleteAll = () =>{
   setPeople([]);
  }


  return (
    <section>
      <h2 className="text-center mb-3 title">Ecco i tuoi appuntamenti!</h2>
      <div className="container">
        <div className="people-list">
            <List data={people} deletePerson={deletePerson}/>
          </div>
      </div>
          <div className="container">
            <div className="btn-group my-5">
              <button className="btn btn-reset" onClick={resetAll}>
                Reload
              </button>

              <button className="btn btn-delete" onClick={deleteAll}>
                Delete all
              </button>
            </div>
          </div>

    </section>
  );
}

export default App;
