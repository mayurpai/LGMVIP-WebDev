import { Link } from 'react-router-dom';
import '../styles/users.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='company'>
          LetsGrowMore
        </Link>
        <nav>
          <Link to='/users'>Get Users</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
