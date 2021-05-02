// import { useSession, signIn, signOut } from 'next-auth/client';
import { useState } from 'react';
import Logo from '../logo';
import Burger from './burger';
import Cross from './cross';
import NavbarItem from './navbar-item';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [session, loading] = useSession();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-white bg-opacity-5">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <Logo />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Cross /> : <Burger />}
            </button>
          </div>
          <div className={'md:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')} id="example-navbar-danger">
            <ul className="flex flex-col gap-x-1 md:flex-row list-none md:ml-auto">
              <NavbarItem href="/" title="Zóna" link />
              <NavbarItem href="https://jumping.kayali.cz" title="Jumping" link />
              <NavbarItem href="https://www.mbkl.cz" title="Eshop" />
              <NavbarItem href="https://www.jumpingsport.cz/zbozi/jumpingsport-trampolina-made-by-kaya_li/" title="Trampolíny" />
              <NavbarItem href="https://www.instagram.com/madebykaya__li/" title="Instagram" />
              {/* {session ? (
                <>
                  <NavbarItem href="/account" title="Můj Profil" />
                  <NavbarItem href="/api/auth/signout" onClick={() => signOut()} title="Odhlásit se" />
                </>
              ) : (
                <>
                  <NavbarItem href="/api/auth/signin" onClick={() => signIn()} title="Přihlásit se" />
                  <NavbarItem href="/account/register" title="Registrovat se" />
                </>
              )} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
