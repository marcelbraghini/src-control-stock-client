import type { Route } from "./+types/home";
import { config } from "../../config.js";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Products } from "~/components/products/products";

export function meta({}: Route.MetaArgs) {
  return [
    { title: config.pageTitle },
    { name: "description", content: config.pageDescription },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}
