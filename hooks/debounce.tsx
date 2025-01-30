"use client";
import { useEffect, useState } from "react";

const Debouce = (value: string | null, delay: number) => {
  const [deboucedValue, setDeboudsedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeboudsedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return deboucedValue;
};

export default Debouce;
