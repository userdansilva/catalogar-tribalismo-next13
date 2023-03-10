"use client";

import { useDesign } from "@/hooks/useDesign";

export function Test() {
  const { designs } = useDesign();

  console.log(designs);

  return (
    <div>
      this is test
    </div>
  );
}
