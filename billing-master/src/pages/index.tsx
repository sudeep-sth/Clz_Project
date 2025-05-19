"use client";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/hero/Navbar";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/shop/dashboard");
  // });
  return <div>
    <Navbar />
    <Hero />
  </div>;
};

export default Home;