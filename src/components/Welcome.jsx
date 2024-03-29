import styles, { layout } from "../style";
import { semnasif1 } from "../assets";

const Welcome = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Selamat Datang di{" "}
          <br className="sm:block hidden" /> SEMNASIF 2022
        </h2>
        <p
          className={`${styles.paragraph} mt-5`}
        >
          Dengan suka hati, kami mengumumkan SEMNASIF yang 
          dikelola oleh Jurusan Informatika Universitas Pembangunan Nasional "Veteran" Yogyakarta 
          yang akan diselenggarakan di Yogyakarta, 17 Desember 2022.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={semnasif1}
          alt="semnasif"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient" />
        <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full yellow__gradient" />
      </div>
    </section>
  );
};

export default Welcome;
