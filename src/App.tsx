import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [url, setUrl] = useState('');
  const getNewImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then((result) => {
        console.log(result.message.toString())
        return setUrl(result.message.toString())
      })
  }

  useEffect(() => {
    return getNewImg()
  }, []);

  return (
    <div className="App">
      <img src={url} alt='Yes, a dog it is' className='image' />
      <br/>
      <input
        type='button'
        onClick={getNewImg}
        value='Get new dog now !'
        className='button'
      />
    </div>
  );
}

export default App;
