import cssStyle from './SharedHeader.module.css';
import styles from "../modules/home/Hero.module.css";
import { SharedHeaderProps } from '@/types/shared.interface';

const DashboardHeader = ({ title, subtitle }: SharedHeaderProps) => {
  return (
    <section className={`${cssStyle.circle} relative mt-3 py-4 md:py-12 bg-[#f4f6ff] overflow-hidden rounded-2xl`}>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7367f0] opacity-5 rounded-tr-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7367f0] opacity-10 rounded-tl-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-[#0b0f2f] font-bold mb-4 md:mb-4">
          <p className='text-2xl md:text-4xl'>{title}</p>
        </h1>

        <div className="flex justify-center">
          <button className={`${styles.btn} ${styles.primary} text-sm`}>
            <p>{subtitle}</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;