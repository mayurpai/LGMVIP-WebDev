function Card({ user }) {
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <div className='cardImg'>
            <img src={user?.avatar} />
          </div>
          <div className='cardBody'>
            <h3>
              {user?.first_name} {user?.last_name}
            </h3>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
