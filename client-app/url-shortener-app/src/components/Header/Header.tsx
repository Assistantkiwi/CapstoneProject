import * as React from 'react';
import { Link } from 'react-router-dom';

type IHeaderProps = object

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-slate-900 flex'>
        <div className='container p-2 mx-auto'>
            <nav className='py-5'>
                <div className='text-xl text-white'>SCISSORS</div>
            </nav>
        </div>
        <div className='container p-2 mx-auto flex text-sm text-white'>
        <nav className='p-5'>
            <Link to="/signup" className='hover:text-blue-800' >Sign Up</Link>
            </nav>
          <nav className='p-5'>
            <Link to="/login" className='hover:text-blue-800' >Log In</Link>
          </nav>
          <nav className='p-5'>
            <Link to="/" className='hover:text-blue-800'>Log Out</Link>
          </nav>
        </div>
    </div>
  ) ;
};

export default Header;
