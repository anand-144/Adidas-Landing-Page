import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import './Nav.css'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt='logo' width={100}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden cursor-pointer'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} 
                className='font-gothic font-bold leading-normal text-lg text-slate-gray hover:underline-with-gap'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;
