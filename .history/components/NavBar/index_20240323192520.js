import styles from "./NavBar.module.css";
import Images from "next/Images";

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <a href={"/"}>Quiz</a> {/* will change to icon*/}
            <div className={styles.navMenu}>{/* will add icons with the anchors */}
            <ul className={styles.navList}>
                <li className={styles.activity}>
                    <a>
                        <span>

                        </span>
                    </a>
                </li>
                <li className={styles.learnMore}>
                    <a>
                        <span>
                            
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>
                            
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>
                            
                        </span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>
                            
                        </span>
                    </a>
                </li>
            </ul>
            </div>
        </nav>
    )
}