
import './index.css';
import Body from './Body';
function App() {
  return (
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
  );
}

export default App;
