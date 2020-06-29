import React, {useState} from 'react'

const AddSmurf = () => { 

    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        axios.post('https://reqres.in/api/users', formState)
        .then(response => {console.log(response)
            setuserState([...userState, response.data.name])})
        .catch(error => {console.log(error)})
      };
    

      const inputChange = (e) => {
        e.persist();
        validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setformState({ ...formState, [e.target.name]: value });
      };

    const [formState, setformState] = useState({
        name: "",
        age: "",
        height: "",
      });
      
    return (
        <div>
            <form onSubmit={formSubmit}>
          <label htmlFor="name">
            Name{" "}
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={inputChange}
            />
             {errorState.name.length > 0 ? (
              <p>{errorState.name} </p>
            ) : null}
          </label>
          <br></br>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={inputChange}
            />
            {errorState.password.length > 0 ? (
              <p>{errorState.password} </p>
            ) : null}
          </label>
          <br></br>
          <label htmlFor="email">
            Email address{" "}
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={inputChange}
            />
            {errorState.email.length > 0 ? <p>{errorState.email} </p> : null}
          </label>
          
         
  
          <p>
            <button type="submit">SUBMIT BUTTON</button>
          </p>
        </form>
        </div>
    )
}
