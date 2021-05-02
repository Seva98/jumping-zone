import Footer from './footer';
import Meta from './meta';
import Navbar from '../navbar/navbar';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
