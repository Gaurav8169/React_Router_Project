import React, { useState } from 'react'
 import { useNavigate , Link } from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate();
  const [input , setInput] = useState({
    name:"",
    password:"",
    email:"",
    phone:""
  })

//to store value in to the localStorage 

const handleRegister = (e)=>{
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(input));
  navigate("/login");
}

  return (
   <>
   <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> Register Here First</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" onSubmit={handleRegister}>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        <div class="mt-2">
          <input  name="name" value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="text"     required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
         </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
           
        </div>
        <div class="mt-2">
          <input name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="password"    required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input name="email" value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="email"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
         </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Phone No</label>
        <div class="mt-2">
          <input name="phone" value={input.phone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} type="number"   required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
         </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
      </div>

      <p class="mt-10 text-center text-sm text-gray-500">
      You have already account?
      <Link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login here</Link>
    </p>
    </form>

  
  </div>
</div>
   </>
  )
}

export default Register
