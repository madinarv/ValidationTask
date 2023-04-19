import React, { useEffect, useState } from 'react';
import userList from '../../../db/db.json';
import Home from '../Home/Home';
import axios from 'axios'
import './loginPage.scss'

const loginPage = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  // V1
  // const handleSubmit = (event:any) => {

  //     event.preventDefault();

  //     var { email, pass } = document.forms[0];
  //     console.log(email);
  //     var user = userList.posts.find((user) => user.email === email.value && user.password === pass.value);
  //     if(user !== undefined){
  //         setIsSubmitted(true);
  //     }
  // }


  // V2

  useEffect(() => {
    GetUsers();
  }, []);

  const GetUsers = async () => {
    const result = await axios.get("http://localhost:3000/posts");
    console.log(result.data);
    setUsers(result.data);
  };


  const handleSubmit = (event: any) => {

    event.preventDefault();

    var { email, pass } = document.forms[0];
    console.log(email);
    var user = users.find((user) => user.email === email.value && user.password === pass.value);
    if (user !== undefined) {
      setIsSubmitted(true);
    }
  }
  return (
    <>
      {isSubmitted ? <Home /> :
        <div>
          <div><h2>Welcome, User!</h2>
            <p>Please log in</p></div>
          <form className='form-control form' onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" name='email' className="form-control" placeholder="Email.." />
            </div>
            <div className="my-3">
              <input type="password" name='pass' className="form-control" placeholder="Password.." />
            </div>
            <div className="mb-3">
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      }

    </>

  )
}

export default loginPage