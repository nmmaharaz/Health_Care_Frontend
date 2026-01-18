"use client";
import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robert Smith",
    role: "Marketing Manager",
    image: "/assets/image/hero/male doctor.jpg", 
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even",
    rating: 5
  },
  {
    id: 2,
    name: "Luna Martin",
    role: "Web Developer",
    image: "/assets/image/hero/male doctor.jpg",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour, or randomised words which don't look even",
    rating: 5
  },
  {
    id: 3,
    name: "John Doe",
    role: "UI/UX Designer",
    image: "/assets/image/hero/male doctor.jpg",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some form, by injected humour.",
    rating: 5
  }
];

const Review = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-15">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#7367f0] font-semibold mb-3">
            <Quote size={18} fill="currentColor" />
            <span className="uppercase tracking-widest text-xs">Testimonial</span>
          </div>
          <h2 className="text-center text-4xl pb-2 font-bold">
            See What they are Talking <br /> About?
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1} 
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2, 
            },
          }}
          className="testimonial-swiper pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-white border border-gray-100 rounded-[30px] p-8 md:p-12 shadow-sm mt-10 ml-5 mr-5">
                {/* User Image Overlapping */}
                <div className="absolute -top-10 left-10 w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-8">
                  <h4 className="text-[#0a1d37] text-2xl font-bold">{item.name}</h4>
                  <p className="text-[#7367f0] font-medium mb-6">{item.role}</p>
                  
                  <p className="text-gray-500 leading-relaxed mb-8">
                    {item.content}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 text-[#7367f0]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Decorative Bottom Shape */}
                <div className="absolute bottom-0 right-0 w-32 h-16 bg-[#7367f0] opacity-90 rounded-tl-[100px] rounded-br-[30px] flex items-end justify-end p-4 overflow-hidden">
                   <div className="absolute -bottom-6 -right-6 w-28 h-20 bg-black/20  rounded-tl-[40px]"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #7367f0 !important;
          width: 25px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Review;