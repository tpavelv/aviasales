import Header from '../Header'
import Filter from '../Filter/Filter'
import ButtonMore from '../Button-More'
import Tabs from '../Tabs'
import Tickets from '../Tickets'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <Filter />
        <div className={styles.content}>
          <Tabs />
          <Tickets />
          <ButtonMore />
        </div>
      </main>
    </div>
  )
}

export default App
