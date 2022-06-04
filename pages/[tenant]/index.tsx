import { Banner } from '../../components/Banner';
import { SearchInput } from '../../components/SearchInput';
import styles from '../../styles/Home.module.css';

const Home = () => {

  const handleSearch = (searchValue: string) => {
      console.log(`você pesquisou por: ${searchValue}`);
  }
  return (
    <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem vindo (a) 👋</div>
              <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
            </div>
            <div className={styles.headerTopRight}>
                  <div className={styles.menuBotton}>
                    <div className={styles.menuBottonLine}></div>
                    <div className={styles.menuBottonLine}></div>
                    <div className={styles.menuBottonLine}></div>
                  </div>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <SearchInput 
                mainColor="#FB9400"
                onSearch={handleSearch}
            />
          </div>
        </header>
        <Banner />
    </div>
  );
}

export default Home;