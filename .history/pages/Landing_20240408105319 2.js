import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div className={styles.Landing}>
            <Images className={styles.beehiveImg} src={"/images/beehive2.svg"} width={320} height={200}/>
            <Images src={"/images/left_cloud.svg"} width={200} height={100}/>
            <Images src={"/images/right_cloud.svg"} width={200} height={100}/>
            <Images src={"/images/happy_bee.svg"} width={200} height={200}/>
            <h1>HiveFive</h1>
            <h3>Help save the bees.</h3>
            <Images src={"/images/grass_bottom.svg"} width={430} height={300}/>
            <button className={styles.startButton}>Start Buzzin'</button>
        </div>
    )
}