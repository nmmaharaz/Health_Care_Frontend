// "use client"

import { IoIosPeople } from "react-icons/io";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className="text-2xl">🩺</span>
            <p>Your Health Our Priority</p>
          </div>

          <h1>
            Expert medical care <br />
            you can rely on
          </h1>

          <p className={styles.subtitle}>
            Experience healthcare you can trust. Our dedicated team provides
            compassionate, high-quality care.
          </p>

          <div className={styles.buttons}>
            <button className={`${styles.btn} ${styles.primary}`}>
              Book A Appointment
            </button>
            <button className={`${styles.btn} ${styles.outline}`}>
              About Us
            </button>
          </div>

          <div className={`${styles.rating} border-t border-gray-300 font-semibold pt-4 mt-4`}>
            <span>Google Rating</span>
            <span className={`${styles.stars} text-xl`}>★★★★★</span>
            <span>5.0 Based On 500 Reviews</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.circleBg}>
             <div className={styles.circleBg1}></div>
          </div>
         

          <Image
            width={1000}
          height={1000}
            src="/assets/image/hero/hero-img.png"
            alt="Doctor"
            className={styles.doctorImg}
          />

          <div className={`${styles.card} ${styles.doctors}`}>
            <div className={styles.avatars}>
              <div className="rounded-full border-2 flex items-center justify-center overflow-hidden w-8 h-8 border-[#e0e7ff]">
                <Image alt="/user1.jpg" width={100} height={100} className="w-full" src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"/>
              </div>
              <Image alt="/user2.jpg" width={50} height={40} src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"/>
              <Image alt="/user3.jpg" width={50} height={40} src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"/>
              <Image alt="/user4.jpg" width={50} height={40} src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"/>
            </div>
            <p>Talk to our 48+ Doctors</p>
          </div>

          <div className={`${styles.card} ${styles.clients}`}>
            <div className={styles.icon}><IoIosPeople /></div>
            <div>
              <strong>3,500+</strong>
              <span>satisfied clients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
