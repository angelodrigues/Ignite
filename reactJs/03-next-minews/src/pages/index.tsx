import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | mi.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <span>all</span> <br />
            the <span>World</span>.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for R$9,99 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src='../../images/avatar.svg' alt="girlStuding" />
      </main>
    </>
  )
}
