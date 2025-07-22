import { redirect } from "next/navigation";
import { getServerPackages, getUserProfile } from "../api/api";

export default async function ProfilePage() {
  const packages = await getServerPackages()

  console.log(packages, "packages")
 return (
   <div>
     <h1>Profile</h1>
   </div>
 );
}