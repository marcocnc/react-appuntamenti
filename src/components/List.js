import React from 'react';

const List = (props) => {
    console.log(props.data);
  return (
    <ul>
        {
            props.data.map((person) => (
                <li key={person.id}>
                    <Person {...person}/>
                </li>
            ))
        }
    </ul>
  )
};

const Person = ({id, name, state, img}) =>{
    return(
        <div>
            <img src={img} alt="prs" className="person-img" />
            <div className="person-info">
                <div className="person-action">
                <h4>{name}</h4>
                <button className="btn">
                    Elimina
                </button>
                </div>
                <p>{state}</p>
            </div>
        </div>
    )
}

export default List;