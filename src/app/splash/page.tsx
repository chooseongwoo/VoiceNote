"use client";
import Logo from "@/assets/Logo";
import * as _ from "./style";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <_.Layout>
      <Logo width="130" height="130" />
      <_.Title>Voice Note</_.Title>
    </_.Layout>
  );
}
