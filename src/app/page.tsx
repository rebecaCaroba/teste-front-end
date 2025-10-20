import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { Categories } from "@/components/Categories";
import { ProductsSection } from "@/components/ProductsSection";
import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <PartnersCarousel />
      <ProductsSection />
      <Brands />
      <Footer />
    </div>
  );
}
