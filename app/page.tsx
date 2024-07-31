import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/heros";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard />
    </div>
  );
}
