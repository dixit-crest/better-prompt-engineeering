import { useState } from 'react';

export function useSectionVisibility() {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return {
    isFocused,
    isHovered,
    isVisible: isFocused || isHovered,
    bindCard: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
    bindField: {
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
    }
  };
}
