import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/common/layout';
import Title from '../components/common/title';
import Button from '../components/common/button';

export default function Home() {
  return (
    <Layout>
      <div className="h-xs-hero-no-nav md:h-md-hero-no-nav">
        <div className="absolute left-1/2 top-1/2 grid text-center gap-y-4" style={{ transform: 'translate(-50%, -50%)' }}>
          <Link href="https://zona-kaya-li.reenio.cz">
            <Button text="Rezervační systém" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
