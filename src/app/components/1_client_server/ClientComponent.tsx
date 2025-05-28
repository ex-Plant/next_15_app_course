"use client";

import { ServerComponent } from "@/app/components/1_client_server/ServerComponent";

export const ClientComponent = () => {
  return (
    <>
      <ServerComponent
        txt={`I am a server component imported by Client Component - I turn into client component and i run on the client`}
      />
    </>
  );
};
