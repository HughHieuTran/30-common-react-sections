import React from 'react';

const List = ({people}) => {

  return (
    <>
      {people.map(element => {
        return <div key={element.id} className="person">
          <img src={element.image} alt={element.id}/>
          <div>
            <h4>{element.name}</h4>
            <p>{element.age}</p>
          </div>
        </div>
      })}
    </>
  );
};

export default List;
