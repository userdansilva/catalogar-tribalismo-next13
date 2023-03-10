// import { Inter } from "next/font/google";

import { Test } from "@/components/Test";
import { DesignProvider } from "@/contexts/DesignContext";
import { getDesigns } from "@/data/getDesigns";

// const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await getDesigns();
  return res;
}

export default async function Home() {
  const designs = await getData();

  return (
    <DesignProvider designs={designs}>
      <main>
        <Test />
      </main>
    </DesignProvider>
  );
}
