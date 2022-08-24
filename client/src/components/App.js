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
    return <UserFoundRoutes setUser={setUser}/>
  } else {
    return <LogIn setUser={setUser} user={user}/>
  }
}

export default App;
