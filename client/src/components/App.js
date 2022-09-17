import { useEffect, useState } from 'react';
import '../styles/App.css';
// import LogInSignUpPage from './LogInSignUpPage';
import LogIn from './LogIn';
import UserFoundRoutes from './UserFoundRoutes';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((user) => setUser(user))
        }
      })
  }, [])

  if (user) {
    return <UserFoundRoutes user={user} setUser={setUser}/>
  } else {
    return <LogIn setUser={setUser} user={user}/>
  }
}

export default App;

// TO DO:
//  - Build POST request is succesful and the new build rerenders on the front-end
//  - Make POST request is succesful and does not create build object with null values
//  - Change "All Builds" Nav name to something that is more on-par with nav pages functionality
//  - Change "Create" Nav to a different functionality
//    - Ideas:
//      - Most Horsepower
//      - Most Budget
//      - Popular/Featured Makes
