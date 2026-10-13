import {useState } from 'react'
import './App.css'

export default function App() {
  const [form, setForm] = useState({
    name : "" ,
    email : "" ,
    course : "Btech" ,
    terms : false
  })

  const [error, setError] = useState("")



function handleChange(e) {
  const {name, value, type, checked} = e.target
  setForm( {...form, [name] : type === "checkbox" ? checked : value })

}



function handleSubmit(e) {
  e.preventDefault();
  if(!form.name.trim()||!form.email.trim()||!form.terms){ 
    setError("Please fill in all fields !!!")  
return ;
}

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
  setError ("Please enter a valid email address !!!")
return ;
}
console.log(form)


setForm({
  name : "" ,
  email : "" ,
  course : "Btech" ,
  terms : false
})

setError("")
}



  return (
    <main className="container">

      <form onSubmit={handleSubmit} noValidate>

      <h2> Student Registration Form</h2>
      



        <input type="text" name="name" 
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange} />





      <input type="email" name="email" 
      placeholder="Enter your email"
      value={form.email}
      onChange={handleChange} />




      <select name="course" 
       value={form.course}
       onChange={handleChange}>
        <option value="Btech">Btech</option>
        <option value="Mtech">Mtech</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>





      <label>
        <input type="checkbox" name="terms"
        checked={form.terms}
        onChange={handleChange} />
        I accept the terms and conditions
        
      </label>

      <button type="submit">Register</button>
      </form>

      {error && <p className="error">{error}</p>}


    </main>
  )
}
