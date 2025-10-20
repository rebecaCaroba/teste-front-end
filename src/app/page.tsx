import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
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
      <Partners />
      <ProductsSection />
      <Brands />
      <Footer />
    </div>
  );
}
