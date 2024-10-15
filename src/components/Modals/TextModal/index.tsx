import X from "@/assets/X";
import * as _ from "./style";

interface TextModalProps {
  onClose: () => void;
  title: string;
  description: string;
}

export default function TextModal({
  onClose,
  title,
  description,
}: TextModalProps) {
  return (
    <_.Layout>
      <_.Title>{title}</_.Title>
      <_.Desc>{description}</_.Desc>
      <_.Button onClick={onClose}>
        <X />
      </_.Button>
    </_.Layout>
  );
}
