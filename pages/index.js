import styles from 'styles/Home.module.css'
import {Header} from 'components'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/images/commit-logo-white.svg' alt='Commit Logo'/>
      </div>
      <Header>Take control of your career</Header>
    </div>
  )
}
