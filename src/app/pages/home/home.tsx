import styles from './home.module.css';

import IntroductionSection from './introduction-section/introduction-section'

const Home = ()=> {

    return(
        <div className={styles['instagram-gradient']}>
            <IntroductionSection />
        </div>
    )
}

export default Home
