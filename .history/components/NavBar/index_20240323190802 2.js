import styles from "./NavBar.module.css";

export default function NavBar(){
    return(
        <div className={styles.navBar}>
            <a href={"/"}>Activity</a>
            <a href={"/"}>Learn More</a>
            <a href={"/"}>Quiz</a>
            <a href={"/"}>Settings</a>
            <a href={"/"}>Home</a>
        </div>
    )
}