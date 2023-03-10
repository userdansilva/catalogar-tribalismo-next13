"use client";

import { useDesign } from "@/hooks/useDesign";

export function Test() {
  const { handleChangeCategory } = useDesign();

  return (
    <div>
      this is test

      <button
        type="button"
        onClick={() => handleChangeCategory(211)}
      >
        change page
      </button>
    </div>
  );
}
