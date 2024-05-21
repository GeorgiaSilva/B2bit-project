import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Profile = () => {
  const { profile, getprofile, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile) {
      getprofile();
    }
  }, [profile, getprofile]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app'>
      <nav className=' h-[70px] bg-white fixed w-full flex justify-end items-center'>
        <button type='submit' 
        className='h-12 w-64 mr-8 bg-azul-b2bit-300 text-white rounded-md hover:bg-azul-b2bit-200 transition duration-500'
        onClick={handleLogout}
      >Logout</button>
      </nav>
      

      <div className='app flex justify-center items-center bg-profile-bg'>
        <div className='w-[356px] h-[315px] px-5 rounded-2xl bg-white flex flex-col items-center shadow-xl'>
          <div className='my-7 flex flex-col items-center' >
            <h6>Proflie picture</h6>
            <img className=' rounded-xl w-16 h-16 ' src={profile.avatar} alt="" />
          </div>
          <div className=' w-full pb-2'>
            <h4 >Your <strong>Name</strong></h4>
            <p className=' h-11 pl-4 bg-gray-100 rounded-xl content-center font-normal'>{profile.name}</p>
          </div>
          <div className=' w-full'>
            <h4 >Your <strong>Email</strong></h4>
            <p className=' h-11 pl-4 bg-gray-100 rounded-xl content-center font-normal'>{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
 
    

  );
};

export default Profile;
