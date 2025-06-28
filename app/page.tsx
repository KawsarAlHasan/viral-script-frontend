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
   <div className="min-h-screen bg-[#ffffff] dark:bg-[#0a0a0a] text-[#171717] dark:text-[#ededed] transition-colors duration-300 mt-[82px]">
 
    <Header/>

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
