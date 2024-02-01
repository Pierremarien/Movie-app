import { CardGrid } from "@/components/CardGrid/CardGrid";
import { FiltersGrid } from "@/components/FiltersGrid/FiltersGrid";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <FiltersGrid />
      <section>
      <CardGrid />
      </section>
    </div>
  );
}
