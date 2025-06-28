import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Header from "./_components/Header";
import ScriptSection from "./_components/ScriptSection";
import SevenPillarFramework from "./_components/SevenPillarFramework";
import TemplateSection from "./_components/TemplateSection";
import PricingAccess from "./_components/Pricing";
import MemberDashboard from "./_components/UserDashboardShow";
import AIScriptGenerator from "./_components/ScriptGenerator";
import AdditionalInfo from "./_components/AdditionalInfo";
import Footer from "./_components/Footer";
import LoginModal from "./_components/LoginModal";
import AIScriptSection from "./_components/AIScriptSection";

export default function Home() {
  return (
   <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 mt-[82px]">
   <p className="text-red-500 dark:text-purple-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quidem optio. Dolore debitis id inventore laboriosam magni maiores temporibus veritatis?</p>
    <Header/>

    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aspernatur aut ex voluptatibus, totam corporis molestias eaque in rem beatae praesentium, a delectus excepturi! Earum exercitationem quidem ab ex molestias.
    <ScriptSection/>
    <SevenPillarFramework/>
    <TemplateSection/>
    <PricingAccess/>
    <MemberDashboard/>
    {/* <AIScriptGenerator/> */}
    <AIScriptSection />
    <AdditionalInfo/>
    <Footer/>

    <LoginModal />
   </div>
  );
}
