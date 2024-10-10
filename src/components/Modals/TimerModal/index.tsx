import React from "react";
import * as _ from "./style";

interface TimerModalProps {
  value: number;
  onClose: () => void;
  onValueChange: (value: number) => void;
}

export default function TimerModal({
  value,
  onClose,
  onValueChange,
}: TimerModalProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value));
  };

  return (
    <_.Layout onClick={onClose}>
      <_.Content onClick={(e) => e.stopPropagation()}>
        <_.Title>타이머 설정</_.Title>
        <_.Minute>
          <_.NumberInput type="number" value={value} onChange={handleChange} />
          분
        </_.Minute>
      </_.Content>
    </_.Layout>
  );
}
