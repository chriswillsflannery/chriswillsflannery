import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Archive: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChrisWF.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Archive.
        </p>

        <p>
          <a href="https://medium.com/@chriswillsflannery_54084/time-traveling-state-debugger-reactime-now-supporting-concurrent-mode-routers-and-more-56f9ca6f7601">[EXT] Nov 19 2019: Time Traveling State Debugger — Reactime — Now Supporting Concurrent Mode, Routers, and more</a>
        </p>

        <p>
          <a href="https://medium.com/itnext/sort-of-beginners-guide-to-webpack-dev-server-98f8843b1bc1">[EXT] Nov 29 2019: Sort-of-beginner&quot;s guide to webpack-dev-server</a>
        </p>

        <p>
          <a href="https://medium.com/itnext/deep-in-the-weeds-with-reactime-concurrent-react-fiberroot-and-browser-history-caching-7ce9d7300abb">[EXT] Nov 21 2019: Deep in the Weeds with Reactime, Concurrent React _fiberRoot, and Browser History Caching</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href="./">
            Home
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Archive
