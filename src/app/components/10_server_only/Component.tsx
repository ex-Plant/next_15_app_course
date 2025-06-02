"use client";
import { doSomethingOnTheServer } from "@/app/lib/server_utils/serverUtils";

const ServerOnly = () => {
  // this will throw an error
  // await doSomethingOnTheServer();
  return <>ServerOnly</>;
};

export default ServerOnly;
