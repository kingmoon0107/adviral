import Header from "@/components/Header/Header";
import AdGrid from "@/components/AdGrid/AdGrid";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AdGrid />
        <CTA />
      </main>
    </>
  );
}
