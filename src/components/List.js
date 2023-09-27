import React from 'react';

const List = (props) => {
    if(props.data.length === 0){
        return (
          <div>
            <h1 className="text-white text-center py-2"> Non ci sono appuntamenti!</h1>
          </div>
        )
     }
    console.log(props.data);
  return (
    <ul>
        {
            props.data.map((person) => (
                <li key={person.id}>
                    <Person {...person} deletePerson={props.deletePerson}/>
                </li>
            ))
        }
    </ul>
  )
};

const Person = ({id, name, state, img, deletePerson}) =>{
    return(
        <div className="person-card py-5 mx-3">
            <img src={img} alt="prs" className="person-img" />
            <div className="person-info">
                <div className="person-action">
                <h4>{name}</h4>
                <button className="btn btn-danger" onClick={()=> deletePerson(id)}>
                    Elimina
                </button>
                </div>
                <p>{state}</p>
            </div>
        </div>
    )
}

export default List;