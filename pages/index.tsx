import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em construção
        </h1>

        <p className={styles.description}>
          No momento, apenas servindo como host de imagens
        </p>
      </main>

      <footer className={styles.footer}>
          <p>            
            <span className={styles.logo}>
              <Image src="/assets/logos/discord-icon.svg" alt="Discord logo" width={20} height={20} />
            </span>
            Hanake#7356
            <a href="https://github.com/Hanake0">
              <span className={styles.logo}>
                <Image src="/assets/logos/github-120px-dark.png" alt="GitHub logo" width={19} height={19} />
              </span>
              Hanake0
            </a>
          </p>
      </footer>
    </div>
  )
}
