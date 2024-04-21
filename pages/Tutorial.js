import { useState, useEffect } from 'react';

export default function Tutorial(){

    const [pages, setPages] = useState([]);
    const [pageNow, setPageNow] = useState(0);

    const nextPage = () => {
        setPageNow(pageNow + 1);
    }
    
    useEffect(() => {
        setPages(landingPages.tutorials);
    }, []);

    return(
        <>
        <main className={`${styles.main}`}>
            <div className={styles.Landing}>
                <div className={styles.skip}>
                <button className={styles.skipButton}><Link href="/Home">Skip</Link></button>{/* will have to change the index page to tutorial */}
                </div>
                <div className={styles.heading}>
                <h1>HiveFive</h1>
                <h2>{pages[pageNow]?.title}</h2>
                </div>
                <img className={styles.leftCloud} src="/images/left_cloud.svg" alt="left cloud" width={200} height={100}/>
                <img className={styles.rightCloud} src="/images/right_cloud.svg" alt="right cloud" width={200} height={100}/>
                <div className={styles.dialouge}>
                    <p>{pages[pageNow]?.description}</p>
                </div>
                <img className={styles.happyBee} src="/images/happy_bee.svg" alt="happy bee mascot" width={250} height={200}/>
                <div>
                    <button className={styles.continueButton} onClick={nextPage}>Continue</button>
                    {/* will add next button*/}
                </div>
            </div>
        </main>
        </>
    )
}