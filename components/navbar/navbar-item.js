import Link from 'next/link';

const NavbarItem = ({ href, link, title, onClick }) => {
  return (
    <li className="nav-item hover:bg-gray-800">
      {link ? (
        <Link href={href}>
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 text-white">
            <span>{title}</span>
          </a>
        </Link>
      ) : (
        <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 text-white" href={href}>
          <span>{title}</span>
        </a>
      )}
    </li>
  );
};

export default NavbarItem;
