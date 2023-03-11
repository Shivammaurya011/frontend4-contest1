import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';

function App() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cpassword, setcPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  const handleEmail=(e)=>{
    setEmail(e.target.value)
    if(email.includes("@") && email.includes(".") && email.indexOf("@") > 0 && !email.startsWith(" ") && email.lastIndexOf(".") < email.length - 2){
      document.getElementById('iemail').style.display='none'
    }
    else{
      document.getElementById('iemail').style.display='block'
    }
  }

  const handlePass=(e)=>{
    setPassword(e.target.value)
    
  }

  const handleCpass=(e)=>{
    setcPassword(e.target.value)
    
  }
  
  
  const handleForm=()=>{
    console.log(email);
    console.log(password);
    console.log(cpassword);
  }

  

  return (
    <div className="App container">
      <form className='container m-5 p-5'>
        <div className="mb-3">
          <label for="userEmail" className="form-label">Email:</label>
          <input type="email"  className="form-control" id="userEmail" value={email} onChange={handleEmail}/>
          <div id="iemail" className="form-text .text-danger">Invalid email format</div>
        </div>
        <div className="mb-3">
          <label for="userPass" className="form-label">Password</label>
          <input type="password" className="form-control" id="userPass" value={password} onChange={handlePass}/>
          <div id="ipass" className="form-text">Password must be 8 Characters</div>
        </div>
        <div className="mb-3">
          <label for="cUserPass" className="form-label">Confirm Password</label>
          <input type="password" className="form-control " id="cUserPass" value={cpassword} onChange={handleCpass}/>
          <div id="icpass" className="form-text">Password do not Match</div>
        </div>
        <div className='text-center'>
          <button type="button" onClick={handleForm} className="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default App;
