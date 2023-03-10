import { DesignContext } from "@/contexts/DesignContext";
import { useContext } from "react";

export const useDesign = () => useContext(DesignContext);
