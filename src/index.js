import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  var [data, setData] = useState('')
  
  useEffect(() => {
    fetch('https://HightechPoisedBlogclient.shanovrustam111.repl.co')
    .then(res => res.json())
    .then(res => setData(res.test))
  }, [])

  return (
    <div>
      {data}
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

