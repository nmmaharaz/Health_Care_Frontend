import { ShieldCheck, Car, Briefcase } from 'lucide-react';
import CategoryCard from './CategoryCard';
import styles from '@/css/Hero.module.css';

export default function Category() {
  const services = [
    {
      title: "Car Insurance",
      description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority",
      imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500", // Sample Image
      icon: <ShieldCheck size={40} strokeWidth={1.5} />
    },
    {
      title: "Life Insurance",
      description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=500", // Sample Image
      icon: <Car size={40} strokeWidth={1.5} />
    },
    {
      title: "Business Insurance",
      description: "There are many variations the off passages of Lorem Ipsum free thing available, but majority",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500", // Sample Image
      icon: <Briefcase size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="min-h-screen mt-220 md:mt-84 lg:mt-82 py-20 mx-7.5 rounded-[40px] bg-[#f4f6ff]">
      <div className='flex justify-center'>
        <div className={`${styles.badge}`}>
          <span className='text-2xl'>🩺</span>
          <p>Your Health Our Priority</p>
        </div>
      </div>

      <h2 className='text-center text-4xl pb-16 font-bold'>Comprehensive services for
        your health</h2>
      <div className='flex items-center justify-center p-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CategoryCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className={`${styles.subtitle} max-w-4xl mx-auto`}>
          From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage. 
        </p>
        <button className={`${styles.btn} ${styles.primary}`}>
          View All Services
        </button>
      </div>
    </div>
  );
}