import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageTestimonials from '../components/HomepageTestimonials';

import styles from './index.module.css';

const HomepageHeader = (): JSX.Element => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to Dlvr Documentation</h1>
        <p className="hero__subtitle">Your guide to understanding and contributing to Dlvr, a SaaS roadmap product designed to improve team collaboration and project execution.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Dlvr
          </Link>
        </div>
      </div>
    </header>
  );
}

const Home = (): JSX.Element => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Dlvr is an innovative tool designed to improve team collaboration and project execution. This documentation provides a comprehensive guide for understanding and contributing to our project.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageTestimonials />
      </main>
    </Layout>
  );
}

export default Home;
