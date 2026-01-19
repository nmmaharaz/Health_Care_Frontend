import styles from "@/components/modules/home/Hero.module.css";


const SharedHeader = ({title, subtitle}:{
    title: string;
    subtitle?: string;
}) => {
  return (
    <section className="relative mt-3 mx-7.5 py-14 md:py-22 bg-[#f4f6ff] overflow-hidden rounded-[40px]">
      {/* Background Decorative Shapes */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7367f0] opacity-5 rounded-tr-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7367f0] opacity-10 rounded-tl-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-[#0b0f2f] text-5xl font-bold mb-8">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex justify-center">
           <button className={`${styles.btn} ${styles.primary}`}>
              {subtitle}
            </button>
        </div>
      </div>
    </section>
  );
};

export default SharedHeader;