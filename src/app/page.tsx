import { ClientWrapper } from "@/app/components/ClientWrapper";
import { ServerComponent } from "@/app/components/ServerComponent";
import { ClientComponent } from "@/app/components/ClientComponent";

export default function Home() {

  return <div className={`flex flex-col`}>
    <ClientWrapper>
      <ServerComponent txt={`I am a server component 🚀`}/>
    </ClientWrapper>
    <ClientComponent/>
  </div>;
}
