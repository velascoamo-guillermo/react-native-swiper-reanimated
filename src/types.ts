import { ReactNode } from "react";

export interface SwiperProps {
  children: ReactNode;
  onIndexChange?: (index: number) => void;
  initialIndex?: number;
  springConfig?: {
    damping: number;
    stiffness: number;
  };
  threshold?: number;
}
