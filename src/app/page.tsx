import Header from "@/components/Header";
import ContentSection from "@/components/ContenSection";
import WorksSection from "@/components/WorkSection";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <ContentSection />
      <WorksSection />
      <ServiceSection />
      <div className="flex flex-col">
        <main className="flex-grow">
          <Footer />
        </main>
      </div>
    </div>
  );
}
