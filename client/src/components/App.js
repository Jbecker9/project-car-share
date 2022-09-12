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


// User.makes to userbuilds (instead of all makes) so makes can rerender state from make_id in newly created build, filter user.makes
