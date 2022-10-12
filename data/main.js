import { useState } from "react";
import styles from "../styles/Home.module.css";
import HomeRegister from "../components/home/home-register";
import HomeDivein from "../components/home/home-divein";

export default function Main() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEntered = () => {
    setHasEntered(true);
  };

  return (
    <div className={styles.container}>
      {!hasEntered ? (
        <HomeRegister onEntered={handleEntered} />
      ) : (
        <HomeDivein />
      )}
    </div>
  );
}
