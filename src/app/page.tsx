import { Footer } from "@/components/Footer";
import { HeaderTimerWrapper } from "@/components/HeaderTimerWrapper";
import { TariffsSection } from "@/components/tariffs";

export default function Page() {
  return (
    <main className="flex flex-col bg-[#232829] min-h-screen text-white pt-20">
      <HeaderTimerWrapper />

      <div className="w-full px-4 flex-1">
        <div className="w-full max-w-[1200px] mx-auto">
          <TariffsSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
