import React from 'react'
import './dropdownMenu.css'
import { useState, useRef, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

type DropdownButtonProps = {
  className?: string;
};

function DropdownMenu({ className: className }: DropdownButtonProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdrownRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && (!menuRef.current.contains(event.target as Node) && !dropdrownRef.current?.contains(event.target as Node))) {
        setIsMenuOpen(false);
      }
    }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
  })

  return (
    <div>
      <button ref={dropdrownRef} className={`px-3 bg-white rounded-md shadow-[rgba(0,0,15,0.5)_0px_0px_10px_5px] shadow-slate-200 ${className}`} onClick={() =>  {setIsMenuOpen(!isMenuOpen)}}>
          <Icon path={mdiMenu} size={1.7} color="black" className={`duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'} `}/>
      </button>
      { isMenuOpen &&
        <div ref={menuRef} className={`ml-1 input absolute`}>
          <button className="value">
            <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"></svg>
            Public profile
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Line"></svg>
            Account
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"></svg>
            Appearance
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="svg8"><g transform="translate(-33.022 -30.617)" id="layer1"></g></svg>
            Accessibility
          </button>
          <button className="value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none"></svg>
            Notifications
          </button>
        </div>
      }
    </div>
  )
}

export default DropdownMenu;