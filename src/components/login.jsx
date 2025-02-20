import React, {useState}from 'react'
import TextField from './Textfield'
import Button from './Button'
import Typography from './Typography'

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    
    
    const handleUser = () => {
        setLoading(true);
        console.log(username, password);
        
        setTimeout(() => {
            setLoading(false);
            if(username === "gowtham@steinnlabs.com" && password === "12345678"){
                alert("Login Success");
            }
            else{
                alert("Please enter valid data");
            }
        },2000);

    }

  return (
    <div className='flex bg-gray-800 justify-center items-center h-full '>
    <div className=' w-90 rounded-lg drop-shadow-lg px-8 py-6 bg-gray-700 '>
        <Typography variant="h2" className="text-center">
            Login
        </Typography>
        <TextField type="email" label="Email" placeholder="Enter your Email id" onChange={(e) => setUsername(e.target.value)}/>
        <TextField type="password" label="Password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        <Button text="Login" onClick={handleUser} loading={loading}/>
    </div>
    </div>
  )
}

export default login