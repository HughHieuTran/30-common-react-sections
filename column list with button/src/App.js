import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data)


  return <main>
    <div className='container'>
      <h3>Clear a List of {people.length} people</h3>
      <List people={people} />
      <button className='button' onClick={() => setPeople([])}>Clear</button>
    </div>
  </main>

}

export default App;
