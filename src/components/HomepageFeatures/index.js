import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
<<<<<<< HEAD
    {
        title: 'Explore your KeepKey',
        image: require('@site/static/img/hardware/wallet-horizontal-2.png').default,
        description: (
            <>
                Explore all the features of your KeepKey hardware wallet and securely manage your cryptocurrencies.
            </>
        ),
    },
    {
        title: 'Using your KeepKey with DApps',
        image: require('@site/static/img/desktop/Dapps.png').default,
        description: (
            <>
                Connect your KeepKey wallet to decentralized applications (DApps) and enjoy seamless transactions.
            </>
        ),
    },
    {
        title: 'Build with the KeepKey SDK',
        image: require('@site/static/img/developer/OpenAPI.png').default,
        description: (
            <>
                Use the KeepKey SDK to develop applications and services that interact with the KeepKey wallet.
            </>
        ),
    },
];

function Feature({ image, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureImg} src={image} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
=======
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
        KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
        KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
       KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey KeepKey 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
>>>>>>> bea3fb4e449b3ef28d31ed02f19412096fb6b6ef
}
