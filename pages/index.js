import styles from 'styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/images/commit-logo-white.svg' alt='commit-logo'/>
      </div>
      Hello World!
    </div>
  )
}
