import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="tracking-tighter leading-tight cursor-pointer">
        <span className="text-2xl font-bold">Zóna</span>
        <span className="text-sm font-extralight">by</span>
        <span className="text-2xl font-bold">Kaya_li</span>
      </h1>
    </Link>
  );
};

export default Logo;
