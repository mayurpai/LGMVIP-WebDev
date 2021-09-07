import { useState, useEffect } from 'react';
import Card from './Card';
import Header from './Header';

function Users() {
  const [users, setUsers] = useState({
    data: [],
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const users = await response.json();
      setUsers({ data: users.data });
    };
    getUser();
  }, []);
  return (
    <>
      <Header />
      {users.data.length && (
        <section className='users'>
          <div className='container'>
            <div className='row'>
              {users.data.map((user) => (
                <Card user={user} key={user.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Users;
