
import Menu from "./component/Menu/Menu";
import Cardlist from "./component/cardList/Cardlist";
import Category from "./component/categoryList/Category";
import Featured from "./component/featured/Featured";
import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return <div>
  <Featured/>
  <Category/>
  <div className={styles.content}>
    <Cardlist/>
   <Menu/>
  </div>
  </div>
}

