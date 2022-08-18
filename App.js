import './App.css';
import react, {useState} from 'react';
 


function App() {

const [name,setName] = useState('');
const [message,setMessage] = useState('')

const handleChange = (e)=>{
  setName(e.target.value);
};

const handleSubmit = (e)=>{
e.preventDefault();
alert(`Ein Name wurde abgeschikt: ${name}`);
}
const textHandleChange = (e)=>{
  setMessage(e.target.value);
  alert(`Ein Message wurde abgeschikt: ${message}`);
};
  return (
    <form onSubmit={handleSubmit}>
      <lable>
        Name : 
        <input type ="text" name ="name" value= {name} onChange={handleChange}/>
      </lable>
      <label>
        Nachricht : 
        <textarea value={message} onChange={textHandleChange}></textarea>
      </label>
      <input type= "submit" value="Absenden"/>
    </form>
  );
}

export default App;
