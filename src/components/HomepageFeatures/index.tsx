import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';


type FeatureItem = {
  title: string;
  SvgLight: React.ComponentType<React.ComponentProps<'svg'>>;
  SvgDark: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Collaborative Platform',
    SvgLight: require('@site/static/img/team-collaboration.svg').default,
    SvgDark: require('@site/static/img/team-collaboration-dark.svg').default,
    description: (
      <>
        Dlvr provides a central platform where teams can share milestones, plan their projects, and monitor their progress in real-time.
      </>
    ),
  },
  {
    title: 'Real-time Updates',
    SvgLight: require('@site/static/img/automatic-update.svg').default,
    SvgDark: require('@site/static/img/automatic-update-dark.svg').default,
    description: (
      <>
        With Dlvr, you can share real-time automatic updates on the upcoming delivery with any stakeholders.
      </>
    ),
  },
  {
    title: 'User-friendly Interface',
    SvgLight: require('@site/static/img/enhance-userXP.svg').default,
    SvgDark: require('@site/static/img/enhance-userXP-dark.svg').default,
    description: (
      <>
        Coupled with Firebase and Angular Material, Dlvr offers a seamless, user-friendly interface.
      </>
    ),
  },
];

const Feature = ({title, SvgLight, SvgDark, description}: FeatureItem): JSX.Element => {
  const { colorMode } = useColorMode();
  const Svg = colorMode === 'dark' ? SvgDark : SvgLight;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const HomepageFeatures = (): JSX.Element => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
