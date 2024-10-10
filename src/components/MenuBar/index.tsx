import * as _ from "./style";
import Home from "@/assets/Home";
import Play from "@/assets/PlayIcon";
import Setting from "@/assets/Setting";
import { useRouter } from "next/navigation";

interface MenuBarProps {
  selectState: number;
}

const icons = [
  { icon: Home, title: "홈", location: "/" },
  {
    icon: Play,
    title: "재생",
    location: "/playlist",
  },
  {
    icon: Setting,
    title: "설정",
    location: "/setting",
  },
];

const MenuBar = ({ selectState }: MenuBarProps) => {
  const router = useRouter();

  return (
    <_.Layout>
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <_.Icon
            key={index}
            onClick={() => {
              router.push(item.location);
            }}
          >
            <IconComponent
              fill={selectState === index + 1 ? "#3DD612" : "#BCBCBC"}
            />
            <_.Title select={selectState === index + 1}>{item.title}</_.Title>
          </_.Icon>
        );
      })}
    </_.Layout>
  );
};

export default MenuBar;
