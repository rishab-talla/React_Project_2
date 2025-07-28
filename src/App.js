
import './index.css';
import Body from './Body';
import { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState('light');

      useEffect(() => {

    if (theme === 'light') {
      document.body.style.background = "hsl(253, 53%, 97%)";
      // document.body.style.color = "black";
    } else {
      document.body.style.background = "black";
      // document.body.style.color = "white";
    }
  }, [theme]);

  return (
    <div>
      <div className='theme-icon'
      onClick={() => {
        if(theme === 'light') setTheme('dark');
        else setTheme('light');
      }}>
        <i className={theme === 'light' ?
       "fa-solid fa-moon" : "fa-solid fa-sun themedark"}></i>
      </div>
    <div className="App">
      
      <div className="App-left">
      <div className='item create-post'>
        <p>Create and schedule content <span>quicker.</span></p> 
        <div className='image-block'>
        <img src={process.env.PUBLIC_URL + "/assets/images/illustration-create-post.webp"}/>
        </div>
      </div>
        
      <div className='item write-content'>
       <p>Write your content using AI</p>
       <div className='image-block'>
        <img src={process.env.PUBLIC_URL + '/assets/images/illustration-ai-content.webp'}/>
        </div>
      </div>
      </div>
        
      <Body />
    </div>
    </div>
  );
}

export default App;
