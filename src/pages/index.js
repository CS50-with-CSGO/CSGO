import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>원격 수업(MOOC)</>,
    imageUrl: "img/undraw_online_connection_6778.svg",
    description: (
      <>전국 각지의 참가자들이 모여, 각자의 편한 시간대에 공부하는 원격 수업.</>
    ),
  },
  {
    title: <>7주 동안의 집중 학습</>,
    imageUrl: "img/undraw_growth_curve_8mqx.svg",
    description: (
      <>
        7주 동안 함께 강의를 듣고 퀴즈와 미션을 클리어해나가는 집중 학습. <br />
        동기 부여 및 라이브 리뷰 강의는 덤.
      </>
    ),
  },
  {
    title: <>팀으로 이루어진 학습 환경</>,
    imageUrl: "img/undraw_online_collaboration_7pfp.svg",
    description: (
      <>
        팀 리더와 팀원으로 구성되어 서로를 도우며, 토론하는 건전하고 자유로운
        협동 분위기 조성.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="CS50 학습 정리를 위한 CSGO"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
          <p className={clsx("hero__subtitle", styles.heroTitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Boost
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
