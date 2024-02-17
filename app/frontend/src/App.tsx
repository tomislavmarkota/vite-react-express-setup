import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>test</h1>
    </>
  );
}

export default App;
