import Features from "@/components/modules/home/Features";
import Hero from "@/components/modules/home/Hero";
import HowWeWork from "@/components/modules/home/HowWork";
import Services from "@/components/modules/home/Services";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <Services />
      <WhyChooseUs></WhyChooseUs>
      {/* <HowWeWork></HowWeWork> */}
    </div>  
  );
}
