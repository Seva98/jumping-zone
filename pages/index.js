import Head from 'next/head';
import Layout from '../components/common/layout';
import Title from '../components/common/title';

export default function Home() {
  return (
    <Layout>
      <div className="h-xs-hero-no-nav md:h-md-hero-no-nav">
        <div className="absolute left-1/2 top-1/2 grid text-center gap-y-4" style={{ transform: 'translate(-50%, -50%)' }}>
          <Title level={1} size={6} white style={{ marginBottom: '0rem' }}>
            <span class="text-2xl">SOON...</span>
          </Title>
        </div>
      </div>
    </Layout>
  );
}
