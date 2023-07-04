import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { MendableFloatingButton } from "@mendable/search"
import styles from './index.module.css';
import { MendableSearchBar } from '@mendable/search';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <img src="https://i.ibb.co/jR8WcJM/kk.gif "></img>
        <br></br>
        <div className={styles.buttons}>
          <h3>AI Helper</h3>
          <MendableSearchBar placeholder='intelligent support' anon_key='eb0c22fc-5f60-486c-b0d5-ca6d11c7558a' />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
