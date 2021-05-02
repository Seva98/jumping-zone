import Container from './container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-white bg-opacity-5">
      <Container className="text-center text-xs">
        <div>© {new Date().getFullYear()} Karolína Liberdová. All Rights Reserved.</div>
        <div>
          <span>Made by </span>
          <a href="https://sevcik.dev" className="w-min hover:text-gray-500" style={{ margin: '0 auto' }}>
            sevcik.dev
          </a>
        </div>
      </Container>
    </footer>
  );
}
