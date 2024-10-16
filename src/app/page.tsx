import dynamic from "next/dynamic";
const Main = dynamic(() => import("./main/page"), { ssr: false });

export default function Home() {
  return <Main />;
}
