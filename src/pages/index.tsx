import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";


export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
         <Button className="">
          Button Design
         </Button>
    </>
  );
}
