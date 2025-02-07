/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import { useState, useEffect, useRef } from 'react';

type LoginButtonProps = {
  className?: string;
}

function LoginMenu({className: className}: LoginButtonProps) {
  
  const [isLoginOpen, setIsLogin] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsLogin(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    console.log('added event listener');
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      console.log('removed event listener'); // Pendente arrumar o return
    };
  }, [setIsLogin]);



  return (
    <div>
      <button className={`absolute right-2 mt-2 mr-2 px-3 bg-white rounded-md shadow-[rgba(0,0,15,0.5)_0px_0px_10px_5px] shadow-slate-200 ${className}`} onClick={() => {setIsLogin(!isLoginOpen)}}>
        <Icon path={mdiAccount} size={1.7} color={'black'} />
      </button>
      {isLoginOpen &&
        <div className="flex fixed inset-0 items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div ref={menuRef} className="bg-white rounded-lg shadow-md p-6 w-1/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 justify-self-center">Login</h2>
            <form className="flex flex-col">
              <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
              <input type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
              <div className="grid grid-cols-4 gap-2">
                <label htmlFor="remember-me" className="col-start-1 col-end-3 text-sm text-gray-900 cursor-pointer">
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="col-start-3 col-end-5 text-sm text-blue-500 hover:underline mb-0.5 justify-self-end">Forgot password?</a>
                <p className="col-start-1 col-end-5 text-gray-900 mt-4"> Dont have an account?<a href="#" className="text-sm text-blue-500 -200 hover:underline mt-4 ml-1">Signup</a></p>
              </div>
              <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
              <span className='text-center text-xl text-black mt-2'>ou</span>
              <button type="submit" className="flex align-center justify-center text-white font-bold py-2 px-4 rounded-md outline-blue-500 mt-4 hover:bg-gray-100 hover:to-gray-800 transition ease-in-out duration-150">
                <img src='./google_logo.png' alt='google_logo' className='size-8 -ml-7'></img>
                <span className='text-gray-700 font-bold mt-1 ml-3'>Logue com google</span>
              </button>
            </form>
          </div>
        </div>
      }
    </div>
  )
}

export default LoginMenu