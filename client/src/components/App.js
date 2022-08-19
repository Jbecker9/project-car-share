import { useEffect, useState } from 'react';
import '../styles/App.css';
import NoUser from './NoUser';
import UserFound from './UserFound';

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
    return <UserFound setUser={setUser}/>
  } else {
    return <NoUser setUser={setUser} />
  }
}

export default App;
