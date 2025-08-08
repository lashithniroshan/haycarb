import { useEffect, useState } from "react";

export function useAnimatedNumberText(value: string | number, duration = 2000) {
  const [animatedValue, setAnimatedValue] = useState<string>(value.toString());

  useEffect(() => {
    const strValue = value.toString();

    // Match the first number with optional commas and decimal point
    const numberMatch = strValue.match(/[\d,]+(\.\d+)?/);

    if (!numberMatch) {
      setAnimatedValue(strValue);
      return;
    }

    const originalNumberStr = numberMatch[0];

    // Parse number ignoring commas
    const originalNumber = parseFloat(originalNumberStr.replace(/,/g, ""));
    if (isNaN(originalNumber)) {
      setAnimatedValue(strValue);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentNumber = originalNumber * progress;

      // Determine decimal places from original number string
      const decimalPlaces = (originalNumberStr.split(".")[1] || "").length;

      // Format the current number with same decimals (no extra decimals added)
      const formattedNumber =
        decimalPlaces > 0
          ? currentNumber.toFixed(decimalPlaces)
          : Math.floor(currentNumber).toString();

      // Now, add back commas if original had them
      const parts = formattedNumber.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      const finalNumberStr = parts.join(".");

      // Replace only the first occurrence of original number string with animated number string
      const updatedStr = strValue.replace(originalNumberStr, finalNumberStr);

      setAnimatedValue(updatedStr);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return animatedValue;
}
