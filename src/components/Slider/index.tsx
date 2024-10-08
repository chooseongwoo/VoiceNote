import * as _ from "./style";
import { useState, useEffect, useRef } from "react";

interface OwnProps {
  label: string;
  min: string;
  max: string;
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Slider({
  label,
  min,
  max,
  value,
  handleChange,
}: OwnProps) {
  const [thumbPosition, setThumbPosition] = useState(0);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const percentage =
        ((value - Number(min)) / (Number(max) - Number(min))) * 100;
      setThumbPosition(percentage);
    }
  }, [value, min, max]);

  return (
    <_.SliderContainer>
      <_.Label>{label}</_.Label>
      <_.SliderWrapper>
        <_.Slider
          ref={sliderRef}
          type="range"
          min={min}
          max={max}
          step="0.01"
          value={value}
          onChange={handleChange}
        />
        <_.ThumbValue style={{ left: `calc(${thumbPosition}%)` }}>
          {value}
        </_.ThumbValue>
      </_.SliderWrapper>
      <_.ValueContainer>
        <span>{min}</span>
        <span>{max}</span>
      </_.ValueContainer>
    </_.SliderContainer>
  );
}
