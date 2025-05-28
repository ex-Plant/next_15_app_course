import { ClientWrapper } from "@/app/components/1_client_server/ClientWrapper";
import { ServerComponent } from "@/app/components/1_client_server/ServerComponent";
import { ClientComponent } from "@/app/components/1_client_server/ClientComponent";

export default function Home() {
  return (
    <div className={`flex flex-col`}>
      <ClientWrapper>
        <ServerComponent txt={`I am a server component 🚀`} />
      </ClientWrapper>
      <ClientComponent />
    </div>
  );
}
