import React, { useState, useEffect } from 'react';
import firebase from "./firebase";


function App() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("schools");

  function getSchool() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    })
  }
  useEffect(() => {
    getSchool();
  }, []);


  if (loading) {
    return <h1>Loadding...</h1>
  }

  return (
    <div className="App">
      <h1>Schools</h1>
      {
        schools.map((school) => (
          <div key={school.id}>
            <h2>{school.title}</h2>
            <p>{school.desc}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
