import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Yo!!!!</h1>
      <Button variant='ghost'>Submit</Button>
      <UserButton/>
    </div>
  );
}
