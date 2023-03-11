import React, {useState} from 'react'
import './style.css'

export default function Form() {
    const [email, setemail] = useState('');
    const [password, setPass] = useState('');
    const [confirmPass, setConf] = useState('');
    const [error, seterror] = useState(false);
    let bord = error===true ? 'error' : 'success';

    
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.length===0 || password.length<8 || confirmPass!==password){
            seterror(true)
            alert('Form cannot be submitted!!')
        }else{
            alert('Form submitted successfully!!')
            console.log(email, password, confirmPass)
        }
       
    }

    
    return (
        <div>
            <div className="form1">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Email:</h2>
                        <input type='email' className={bord} onChange={e=>setemail(e.target.value)} placeholder='Enter Your Mail Id'/><br/>
                        {error && email.length<=0 ? <span>Invalid Email id</span>:''}
                        
                    </div>
                    <div>
                        <h2>Password: </h2>
                        <input type='password' className={bord} onChange={e=>setPass(e.target.value)} placeholder='Enter Your Password'/><br/>
                        {error && password.length<8 ? <span>Password must be atleat 8 characters</span>:''}
                        
                    </div>
                    <div>
                        <h2>Confirm Password: </h2>
                        <input type='password' className={bord} onChange={e=>setConf(e.target.value)} placeholder='Confirm Your Password'/><br/>
                        {error && confirmPass!==password ? <span>Password does not match</span>:''}
                        
                    </div>

                    <button type='submit' className='btn'>Sign-Up</button>

                </form>
            </div>
        </div>
    )
}
