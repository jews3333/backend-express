import React, { useState } from 'react';

function App() {

  const [data, setData] = useState(false);

  fetch("/data")
  .then(res => res.json())
  .then(data => setData(data), () => {
    console.log(data);
  })
  
  return (
    <div className="App">
      {data ? data.map((user) => {
        return <div key={user.id}>
          <div>{user.title}</div>
          <div>{user.description}</div>
          <div>{user.author}</div>
        </div>
      }) : null}
    </div>
  );
}

export default App;
