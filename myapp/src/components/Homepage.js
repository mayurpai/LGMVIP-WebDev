import Header from './Header';
import '../styles/style.css';

function Homepage() {
  return (
    <>
      <Header />
      <section className='mainContainer'>
        <div className='container'>
          <h3>Welcome To</h3>
          <h1>LetsGrowMore</h1>
        </div>
      </section>
    </>
  );
}
export default Homepage;
