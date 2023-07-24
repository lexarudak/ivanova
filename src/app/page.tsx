import { MainInfo } from './components/MainInfo/MainInfo'
import { Nav } from './components/Nav/Nav'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainInfo />
      <Nav />
    </main>
  )
}
