"use client";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "../styles/globals.css";
import { useEffect } from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    localStorage.setItem("speed", "1.0");
    localStorage.setItem("pitch", "0.0");
    localStorage.setItem("gender", "MALE");
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
