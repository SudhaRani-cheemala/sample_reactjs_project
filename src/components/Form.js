// import React, {useEffect, useState} from 'react';
// import { useForm } from "react-hook-form";
// import { saveuser  } from './Services/userservice';
// import './style.css'
// const RegistrationForm =()=> {
     
//     // const[data,setData]=useState({firstname:" ",lastname:" ",email:" ",password:" ",confirmpassword:" "});
//     // const handleChange=(e)=>{
//     //     const {name,value}=e.target;
//     //     setData({...data,[name]:value})
//     // }

//     const{
//         register,
//         handleSubmit,
//         formState,
//         reset,
//     } = useForm({mode:"all"});

//     // const handleSubmit  = () => {
//     //     console.log(firstName,lastName,email,password,confirmPassword);
//     // }

//     //onsubmit
//     const onsubmit = (data) => {
//         saveuser(data);
//         console.log(data);
//         alert("hi sudha");
//     }

//     useEffect(()=>{
//    if(formState.isSubmittedSuccessful)
//             {
//                 reset();
//             }
//     },[formState,reset])

//     return(
//         <div className="reg">
//             <form onSubmit={handleSubmit(onsubmit)}>
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" >First Name </label>
//                     <input className="form__input" type="text" name="firstname"   id="firstName" placeholder="First Name" {...register("firstname")}/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text"  id="lastName"  className="form__input" name="lastname"  placeholder="LastName" {...register("lastname")} />
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input"name="email"    placeholder="Email" {...register("email")} />
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" name="password"   placeholder="Password" {...register("password")} />
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" name="confirmpassword" id="confirmPassword"   placeholder="Confirm Password" {...register("confirmpassword")}/>
//                 </div>

//             </div>
//             <div class="footer">
//                 <button type="submit" class="btn">Register</button>
//             </div>
//             </form>
//         </div>
       
//     )       
// }

// export default RegistrationForm
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {useForm} from "react-hook-form";
import { saveForm ,getForm} from './Services/userservice';
function Form(){
const {
 handleSubmit,
 formState, 
 register, 
 reset,
 setValue
} = useForm({ mode: "all" });
const onSubmit = (data) => {saveForm(data);
 alert('Candidate Details Submitted Successfully');
      console.log(data); }; 
React.useEffect(() => {
if (formState.isSubmitSuccessful) {
console.log(formState.isSubmitSuccessful);
    reset(); }
 }, [formState, reset]);

 const [data,setData]=useState({ });

 const getData= async()=>{
const res = await axios.get("http://localhost:5000/login");
setData(res)
// setValue("email",res.data[1].email)
// setValue("name",res.data[1].name)
return res;
 }
return (
<div style={{'marginTop':'30px'}}>
<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder='username'   {...register("name")} />
<input type="text" placeholder='email'  {...register("email")}/>
<button >login</button>
<button style={{position:"relative",left:"50px"}} onClick={getData}>GET USERS</button>
<span>{data.name}</span>
</form>


</div> 


);
};

export default Form;