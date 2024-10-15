"use client";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "../styles/globals.css";
import { useEffect } from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    if (!localStorage.getItem("speed")) {
      localStorage.setItem("speed", "1.0");
    }
    if (!localStorage.getItem("pitch")) {
      localStorage.setItem("pitch", "0.0");
    }
    if (!localStorage.getItem("gender")) {
      localStorage.setItem("gender", "MALE");
    }
  }, []);
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
