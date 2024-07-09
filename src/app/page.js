import { DownloadApp } from "@/components/DownloadApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Order } from "@/components/Order";
import { Product } from "@/components/Product";

export default function Home() {
  return (
    <div className="m-0 p-0 box-border">
      <>
        <Header />
        <Order />
        <DownloadApp />
        <Product />
        <Footer />
      </>
    </div>
  );
}
