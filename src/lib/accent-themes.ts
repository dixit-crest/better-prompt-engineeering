export type AccentColor =
  | 'neutral'
  | 'slate'
  | 'zinc'
  | 'stone'
  | 'gray'
  | 'red'
  | 'rose'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink';

export type AccentCssVars = Record<string, string>;

export type AccentThemeDefinition = {
  id: AccentColor;
  label: string;
  preview: string;
  vars: { light: AccentCssVars; dark: AccentCssVars };
};

const toLabel = (id: string) => id.charAt(0).toUpperCase() + id.slice(1);

const ACCENT_THEME_DATA: Record<AccentColor, { light: AccentCssVars; dark: AccentCssVars }> = 
{
  "neutral": {
    "light": {
      "primary": "oklch(0.205 0 0)",
      "primary-foreground": "oklch(0.985 0 0)",
      "ring": "oklch(0.708 0 0)",
      "chart-1": "oklch(0.87 0 0)",
      "chart-2": "oklch(0.556 0 0)",
      "chart-3": "oklch(0.439 0 0)",
      "chart-4": "oklch(0.371 0 0)",
      "chart-5": "oklch(0.269 0 0)",
      "sidebar-primary": "oklch(0.205 0 0)",
      "sidebar-primary-foreground": "oklch(0.985 0 0)",
      "sidebar-ring": "oklch(0.708 0 0)"
    },
    "dark": {
      "primary": "oklch(0.922 0 0)",
      "primary-foreground": "oklch(0.205 0 0)",
      "ring": "oklch(0.556 0 0)",
      "chart-1": "oklch(0.87 0 0)",
      "chart-2": "oklch(0.556 0 0)",
      "chart-3": "oklch(0.439 0 0)",
      "chart-4": "oklch(0.371 0 0)",
      "chart-5": "oklch(0.269 0 0)",
      "sidebar-primary": "oklch(0.488 0.243 264.376)",
      "sidebar-primary-foreground": "oklch(0.985 0 0)",
      "sidebar-ring": "oklch(0.556 0 0)"
    }
  },
  "slate": {
    "light": {
      "primary": "oklch(0.208 0.042 265.755)",
      "primary-foreground": "oklch(0.984 0.003 247.858)",
      "ring": "oklch(0.704 0.04 256.788)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.208 0.042 265.755)",
      "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)",
      "sidebar-ring": "oklch(0.704 0.04 256.788)"
    },
    "dark": {
      "primary": "oklch(0.929 0.013 255.508)",
      "primary-foreground": "oklch(0.208 0.042 265.755)",
      "ring": "oklch(0.551 0.027 264.364)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.488 0.243 264.376)",
      "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)",
      "sidebar-ring": "oklch(0.551 0.027 264.364)"
    }
  },
  "zinc": {
    "light": {
      "primary": "oklch(0.21 0.006 285.885)",
      "primary-foreground": "oklch(0.985 0 0)",
      "ring": "oklch(0.705 0.015 286.067)",
      "chart-1": "oklch(0.871 0.006 286.286)",
      "chart-2": "oklch(0.552 0.016 285.938)",
      "chart-3": "oklch(0.442 0.017 285.786)",
      "chart-4": "oklch(0.37 0.013 285.805)",
      "chart-5": "oklch(0.274 0.006 286.033)",
      "sidebar-primary": "oklch(0.21 0.006 285.885)",
      "sidebar-primary-foreground": "oklch(0.985 0 0)",
      "sidebar-ring": "oklch(0.705 0.015 286.067)"
    },
    "dark": {
      "primary": "oklch(0.92 0.004 286.32)",
      "primary-foreground": "oklch(0.21 0.006 285.885)",
      "ring": "oklch(0.552 0.016 285.938)",
      "chart-1": "oklch(0.871 0.006 286.286)",
      "chart-2": "oklch(0.552 0.016 285.938)",
      "chart-3": "oklch(0.442 0.017 285.786)",
      "chart-4": "oklch(0.37 0.013 285.805)",
      "chart-5": "oklch(0.274 0.006 286.033)",
      "sidebar-primary": "oklch(0.488 0.243 264.376)",
      "sidebar-primary-foreground": "oklch(0.985 0 0)",
      "sidebar-ring": "oklch(0.552 0.016 285.938)"
    }
  },
  "stone": {
    "light": {
      "primary": "oklch(0.216 0.006 56.043)",
      "primary-foreground": "oklch(0.985 0.001 106.423)",
      "ring": "oklch(0.709 0.01 56.259)",
      "chart-1": "oklch(0.869 0.005 56.366)",
      "chart-2": "oklch(0.553 0.013 58.071)",
      "chart-3": "oklch(0.444 0.011 73.639)",
      "chart-4": "oklch(0.374 0.01 67.558)",
      "chart-5": "oklch(0.268 0.007 34.298)",
      "sidebar-primary": "oklch(0.216 0.006 56.043)",
      "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)",
      "sidebar-ring": "oklch(0.709 0.01 56.259)"
    },
    "dark": {
      "primary": "oklch(0.923 0.003 48.717)",
      "primary-foreground": "oklch(0.216 0.006 56.043)",
      "ring": "oklch(0.553 0.013 58.071)",
      "chart-1": "oklch(0.869 0.005 56.366)",
      "chart-2": "oklch(0.553 0.013 58.071)",
      "chart-3": "oklch(0.444 0.011 73.639)",
      "chart-4": "oklch(0.374 0.01 67.558)",
      "chart-5": "oklch(0.268 0.007 34.298)",
      "sidebar-primary": "oklch(0.488 0.243 264.376)",
      "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)",
      "sidebar-ring": "oklch(0.553 0.013 58.071)"
    }
  },
  "gray": {
    "light": {
      "primary": "oklch(0.21 0.034 264.665)",
      "primary-foreground": "oklch(0.985 0.002 247.839)",
      "ring": "oklch(0.712 0.014 264.665)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.21 0.034 264.665)",
      "sidebar-primary-foreground": "oklch(0.985 0.002 247.839)",
      "sidebar-ring": "oklch(0.712 0.014 264.665)"
    },
    "dark": {
      "primary": "oklch(0.928 0.006 264.531)",
      "primary-foreground": "oklch(0.21 0.034 264.665)",
      "ring": "oklch(0.556 0.016 264.531)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.488 0.243 264.376)",
      "sidebar-primary-foreground": "oklch(0.985 0.002 247.839)",
      "sidebar-ring": "oklch(0.556 0.016 264.531)"
    }
  },
  "red": {
    "light": {
      "primary": "oklch(0.505 0.213 27.518)",
      "primary-foreground": "oklch(0.971 0.013 17.38)",
      "chart-1": "oklch(0.808 0.114 19.571)",
      "chart-2": "oklch(0.637 0.237 25.331)",
      "chart-3": "oklch(0.577 0.245 27.325)",
      "chart-4": "oklch(0.505 0.213 27.518)",
      "chart-5": "oklch(0.444 0.177 26.899)",
      "sidebar-primary": "oklch(0.577 0.245 27.325)",
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
      "ring": "oklch(0.505 0.213 27.518)",
      "sidebar-ring": "oklch(0.505 0.213 27.518)"
    },
    "dark": {
      "primary": "oklch(0.444 0.177 26.899)",
      "primary-foreground": "oklch(0.971 0.013 17.38)",
      "chart-1": "oklch(0.808 0.114 19.571)",
      "chart-2": "oklch(0.637 0.237 25.331)",
      "chart-3": "oklch(0.577 0.245 27.325)",
      "chart-4": "oklch(0.505 0.213 27.518)",
      "chart-5": "oklch(0.444 0.177 26.899)",
      "sidebar-primary": "oklch(0.637 0.237 25.331)",
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)",
      "ring": "oklch(0.444 0.177 26.899)",
      "sidebar-ring": "oklch(0.444 0.177 26.899)"
    }
  },
  "rose": {
    "light": {
      "primary": "oklch(0.514 0.222 16.935)",
      "primary-foreground": "oklch(0.969 0.015 12.422)",
      "chart-1": "oklch(0.81 0.117 11.638)",
      "chart-2": "oklch(0.645 0.246 16.439)",
      "chart-3": "oklch(0.586 0.253 17.585)",
      "chart-4": "oklch(0.514 0.222 16.935)",
      "chart-5": "oklch(0.455 0.188 13.697)",
      "sidebar-primary": "oklch(0.586 0.253 17.585)",
      "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)",
      "ring": "oklch(0.514 0.222 16.935)",
      "sidebar-ring": "oklch(0.514 0.222 16.935)"
    },
    "dark": {
      "primary": "oklch(0.455 0.188 13.697)",
      "primary-foreground": "oklch(0.969 0.015 12.422)",
      "chart-1": "oklch(0.81 0.117 11.638)",
      "chart-2": "oklch(0.645 0.246 16.439)",
      "chart-3": "oklch(0.586 0.253 17.585)",
      "chart-4": "oklch(0.514 0.222 16.935)",
      "chart-5": "oklch(0.455 0.188 13.697)",
      "sidebar-primary": "oklch(0.645 0.246 16.439)",
      "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)",
      "ring": "oklch(0.455 0.188 13.697)",
      "sidebar-ring": "oklch(0.455 0.188 13.697)"
    }
  },
  "orange": {
    "light": {
      "primary": "oklch(0.553 0.195 38.402)",
      "primary-foreground": "oklch(0.98 0.016 73.684)",
      "chart-1": "oklch(0.837 0.128 66.29)",
      "chart-2": "oklch(0.705 0.213 47.604)",
      "chart-3": "oklch(0.646 0.222 41.116)",
      "chart-4": "oklch(0.553 0.195 38.402)",
      "chart-5": "oklch(0.47 0.157 37.304)",
      "sidebar-primary": "oklch(0.646 0.222 41.116)",
      "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)",
      "ring": "oklch(0.553 0.195 38.402)",
      "sidebar-ring": "oklch(0.553 0.195 38.402)"
    },
    "dark": {
      "primary": "oklch(0.47 0.157 37.304)",
      "primary-foreground": "oklch(0.98 0.016 73.684)",
      "chart-1": "oklch(0.837 0.128 66.29)",
      "chart-2": "oklch(0.705 0.213 47.604)",
      "chart-3": "oklch(0.646 0.222 41.116)",
      "chart-4": "oklch(0.553 0.195 38.402)",
      "chart-5": "oklch(0.47 0.157 37.304)",
      "sidebar-primary": "oklch(0.705 0.213 47.604)",
      "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)",
      "ring": "oklch(0.47 0.157 37.304)",
      "sidebar-ring": "oklch(0.47 0.157 37.304)"
    }
  },
  "amber": {
    "light": {
      "primary": "oklch(0.555 0.163 48.998)",
      "primary-foreground": "oklch(0.987 0.022 95.277)",
      "chart-1": "oklch(0.879 0.169 91.605)",
      "chart-2": "oklch(0.769 0.188 70.08)",
      "chart-3": "oklch(0.666 0.179 58.318)",
      "chart-4": "oklch(0.555 0.163 48.998)",
      "chart-5": "oklch(0.473 0.137 46.201)",
      "sidebar-primary": "oklch(0.666 0.179 58.318)",
      "sidebar-primary-foreground": "oklch(0.987 0.022 95.277)",
      "ring": "oklch(0.555 0.163 48.998)",
      "sidebar-ring": "oklch(0.555 0.163 48.998)"
    },
    "dark": {
      "primary": "oklch(0.473 0.137 46.201)",
      "primary-foreground": "oklch(0.987 0.022 95.277)",
      "chart-1": "oklch(0.879 0.169 91.605)",
      "chart-2": "oklch(0.769 0.188 70.08)",
      "chart-3": "oklch(0.666 0.179 58.318)",
      "chart-4": "oklch(0.555 0.163 48.998)",
      "chart-5": "oklch(0.473 0.137 46.201)",
      "sidebar-primary": "oklch(0.769 0.188 70.08)",
      "sidebar-primary-foreground": "oklch(0.279 0.077 45.635)",
      "ring": "oklch(0.473 0.137 46.201)",
      "sidebar-ring": "oklch(0.473 0.137 46.201)"
    }
  },
  "yellow": {
    "light": {
      "primary": "oklch(0.852 0.199 91.936)",
      "primary-foreground": "oklch(0.421 0.095 57.708)",
      "chart-1": "oklch(0.905 0.182 98.111)",
      "chart-2": "oklch(0.795 0.184 86.047)",
      "chart-3": "oklch(0.681 0.162 75.834)",
      "chart-4": "oklch(0.554 0.135 66.442)",
      "chart-5": "oklch(0.476 0.114 61.907)",
      "sidebar-primary": "oklch(0.681 0.162 75.834)",
      "sidebar-primary-foreground": "oklch(0.987 0.026 102.212)",
      "ring": "oklch(0.852 0.199 91.936)",
      "sidebar-ring": "oklch(0.852 0.199 91.936)"
    },
    "dark": {
      "primary": "oklch(0.795 0.184 86.047)",
      "primary-foreground": "oklch(0.421 0.095 57.708)",
      "chart-1": "oklch(0.905 0.182 98.111)",
      "chart-2": "oklch(0.795 0.184 86.047)",
      "chart-3": "oklch(0.681 0.162 75.834)",
      "chart-4": "oklch(0.554 0.135 66.442)",
      "chart-5": "oklch(0.476 0.114 61.907)",
      "sidebar-primary": "oklch(0.795 0.184 86.047)",
      "sidebar-primary-foreground": "oklch(0.987 0.026 102.212)",
      "ring": "oklch(0.795 0.184 86.047)",
      "sidebar-ring": "oklch(0.795 0.184 86.047)"
    }
  },
  "lime": {
    "light": {
      "primary": "oklch(0.841 0.238 128.85)",
      "primary-foreground": "oklch(0.405 0.101 131.063)",
      "chart-1": "oklch(0.897 0.196 126.665)",
      "chart-2": "oklch(0.768 0.233 130.85)",
      "chart-3": "oklch(0.648 0.2 131.684)",
      "chart-4": "oklch(0.532 0.157 131.589)",
      "chart-5": "oklch(0.453 0.124 130.933)",
      "sidebar-primary": "oklch(0.648 0.2 131.684)",
      "sidebar-primary-foreground": "oklch(0.986 0.031 120.757)",
      "ring": "oklch(0.841 0.238 128.85)",
      "sidebar-ring": "oklch(0.841 0.238 128.85)"
    },
    "dark": {
      "primary": "oklch(0.768 0.233 130.85)",
      "primary-foreground": "oklch(0.405 0.101 131.063)",
      "chart-1": "oklch(0.897 0.196 126.665)",
      "chart-2": "oklch(0.768 0.233 130.85)",
      "chart-3": "oklch(0.648 0.2 131.684)",
      "chart-4": "oklch(0.532 0.157 131.589)",
      "chart-5": "oklch(0.453 0.124 130.933)",
      "sidebar-primary": "oklch(0.768 0.233 130.85)",
      "sidebar-primary-foreground": "oklch(0.274 0.072 132.109)",
      "ring": "oklch(0.768 0.233 130.85)",
      "sidebar-ring": "oklch(0.768 0.233 130.85)"
    }
  },
  "green": {
    "light": {
      "primary": "oklch(0.527 0.154 150.069)",
      "primary-foreground": "oklch(0.982 0.018 155.826)",
      "chart-1": "oklch(0.871 0.15 154.449)",
      "chart-2": "oklch(0.723 0.219 149.579)",
      "chart-3": "oklch(0.627 0.194 149.214)",
      "chart-4": "oklch(0.527 0.154 150.069)",
      "chart-5": "oklch(0.448 0.119 151.328)",
      "sidebar-primary": "oklch(0.627 0.194 149.214)",
      "sidebar-primary-foreground": "oklch(0.982 0.018 155.826)",
      "ring": "oklch(0.527 0.154 150.069)",
      "sidebar-ring": "oklch(0.527 0.154 150.069)"
    },
    "dark": {
      "primary": "oklch(0.448 0.119 151.328)",
      "primary-foreground": "oklch(0.982 0.018 155.826)",
      "chart-1": "oklch(0.871 0.15 154.449)",
      "chart-2": "oklch(0.723 0.219 149.579)",
      "chart-3": "oklch(0.627 0.194 149.214)",
      "chart-4": "oklch(0.527 0.154 150.069)",
      "chart-5": "oklch(0.448 0.119 151.328)",
      "sidebar-primary": "oklch(0.723 0.219 149.579)",
      "sidebar-primary-foreground": "oklch(0.982 0.018 155.826)",
      "ring": "oklch(0.448 0.119 151.328)",
      "sidebar-ring": "oklch(0.448 0.119 151.328)"
    }
  },
  "emerald": {
    "light": {
      "primary": "oklch(0.508 0.118 165.612)",
      "primary-foreground": "oklch(0.979 0.021 166.113)",
      "chart-1": "oklch(0.845 0.143 164.978)",
      "chart-2": "oklch(0.696 0.17 162.48)",
      "chart-3": "oklch(0.596 0.145 163.225)",
      "chart-4": "oklch(0.508 0.118 165.612)",
      "chart-5": "oklch(0.432 0.095 166.913)",
      "sidebar-primary": "oklch(0.596 0.145 163.225)",
      "sidebar-primary-foreground": "oklch(0.979 0.021 166.113)",
      "ring": "oklch(0.508 0.118 165.612)",
      "sidebar-ring": "oklch(0.508 0.118 165.612)"
    },
    "dark": {
      "primary": "oklch(0.432 0.095 166.913)",
      "primary-foreground": "oklch(0.979 0.021 166.113)",
      "chart-1": "oklch(0.845 0.143 164.978)",
      "chart-2": "oklch(0.696 0.17 162.48)",
      "chart-3": "oklch(0.596 0.145 163.225)",
      "chart-4": "oklch(0.508 0.118 165.612)",
      "chart-5": "oklch(0.432 0.095 166.913)",
      "sidebar-primary": "oklch(0.696 0.17 162.48)",
      "sidebar-primary-foreground": "oklch(0.262 0.051 172.552)",
      "ring": "oklch(0.432 0.095 166.913)",
      "sidebar-ring": "oklch(0.432 0.095 166.913)"
    }
  },
  "teal": {
    "light": {
      "primary": "oklch(0.511 0.096 186.391)",
      "primary-foreground": "oklch(0.984 0.014 180.72)",
      "chart-1": "oklch(0.855 0.138 181.071)",
      "chart-2": "oklch(0.704 0.14 182.503)",
      "chart-3": "oklch(0.6 0.118 184.704)",
      "chart-4": "oklch(0.511 0.096 186.391)",
      "chart-5": "oklch(0.437 0.078 188.216)",
      "sidebar-primary": "oklch(0.6 0.118 184.704)",
      "sidebar-primary-foreground": "oklch(0.984 0.014 180.72)",
      "ring": "oklch(0.511 0.096 186.391)",
      "sidebar-ring": "oklch(0.511 0.096 186.391)"
    },
    "dark": {
      "primary": "oklch(0.437 0.078 188.216)",
      "primary-foreground": "oklch(0.984 0.014 180.72)",
      "chart-1": "oklch(0.855 0.138 181.071)",
      "chart-2": "oklch(0.704 0.14 182.503)",
      "chart-3": "oklch(0.6 0.118 184.704)",
      "chart-4": "oklch(0.511 0.096 186.391)",
      "chart-5": "oklch(0.437 0.078 188.216)",
      "sidebar-primary": "oklch(0.704 0.14 182.503)",
      "sidebar-primary-foreground": "oklch(0.277 0.046 192.524)",
      "ring": "oklch(0.437 0.078 188.216)",
      "sidebar-ring": "oklch(0.437 0.078 188.216)"
    }
  },
  "cyan": {
    "light": {
      "primary": "oklch(0.52 0.105 223.128)",
      "primary-foreground": "oklch(0.984 0.019 200.873)",
      "chart-1": "oklch(0.865 0.127 207.078)",
      "chart-2": "oklch(0.715 0.143 215.221)",
      "chart-3": "oklch(0.609 0.126 221.723)",
      "chart-4": "oklch(0.52 0.105 223.128)",
      "chart-5": "oklch(0.45 0.085 224.283)",
      "sidebar-primary": "oklch(0.609 0.126 221.723)",
      "sidebar-primary-foreground": "oklch(0.984 0.019 200.873)",
      "ring": "oklch(0.52 0.105 223.128)",
      "sidebar-ring": "oklch(0.52 0.105 223.128)"
    },
    "dark": {
      "primary": "oklch(0.45 0.085 224.283)",
      "primary-foreground": "oklch(0.984 0.019 200.873)",
      "chart-1": "oklch(0.865 0.127 207.078)",
      "chart-2": "oklch(0.715 0.143 215.221)",
      "chart-3": "oklch(0.609 0.126 221.723)",
      "chart-4": "oklch(0.52 0.105 223.128)",
      "chart-5": "oklch(0.45 0.085 224.283)",
      "sidebar-primary": "oklch(0.715 0.143 215.221)",
      "sidebar-primary-foreground": "oklch(0.302 0.056 229.695)",
      "ring": "oklch(0.45 0.085 224.283)",
      "sidebar-ring": "oklch(0.45 0.085 224.283)"
    }
  },
  "sky": {
    "light": {
      "primary": "oklch(0.5 0.134 242.749)",
      "primary-foreground": "oklch(0.977 0.013 236.62)",
      "chart-1": "oklch(0.828 0.111 230.318)",
      "chart-2": "oklch(0.685 0.169 237.323)",
      "chart-3": "oklch(0.588 0.158 241.966)",
      "chart-4": "oklch(0.5 0.134 242.749)",
      "chart-5": "oklch(0.443 0.11 240.79)",
      "sidebar-primary": "oklch(0.588 0.158 241.966)",
      "sidebar-primary-foreground": "oklch(0.977 0.013 236.62)",
      "ring": "oklch(0.5 0.134 242.749)",
      "sidebar-ring": "oklch(0.5 0.134 242.749)"
    },
    "dark": {
      "primary": "oklch(0.443 0.11 240.79)",
      "primary-foreground": "oklch(0.977 0.013 236.62)",
      "chart-1": "oklch(0.828 0.111 230.318)",
      "chart-2": "oklch(0.685 0.169 237.323)",
      "chart-3": "oklch(0.588 0.158 241.966)",
      "chart-4": "oklch(0.5 0.134 242.749)",
      "chart-5": "oklch(0.443 0.11 240.79)",
      "sidebar-primary": "oklch(0.685 0.169 237.323)",
      "sidebar-primary-foreground": "oklch(0.293 0.066 243.157)",
      "ring": "oklch(0.443 0.11 240.79)",
      "sidebar-ring": "oklch(0.443 0.11 240.79)"
    }
  },
  "blue": {
    "light": {
      "primary": "oklch(0.488 0.243 264.376)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.488 0.243 264.376)",
      "sidebar-ring": "oklch(0.488 0.243 264.376)"
    },
    "dark": {
      "primary": "oklch(0.424 0.199 265.638)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "chart-1": "oklch(0.809 0.105 251.813)",
      "chart-2": "oklch(0.623 0.214 259.815)",
      "chart-3": "oklch(0.546 0.245 262.881)",
      "chart-4": "oklch(0.488 0.243 264.376)",
      "chart-5": "oklch(0.424 0.199 265.638)",
      "sidebar-primary": "oklch(0.623 0.214 259.815)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.424 0.199 265.638)",
      "sidebar-ring": "oklch(0.424 0.199 265.638)"
    }
  },
  "indigo": {
    "light": {
      "primary": "oklch(0.457 0.24 277.023)",
      "primary-foreground": "oklch(0.962 0.018 272.314)",
      "chart-1": "oklch(0.785 0.115 274.713)",
      "chart-2": "oklch(0.585 0.233 277.117)",
      "chart-3": "oklch(0.511 0.262 276.966)",
      "chart-4": "oklch(0.457 0.24 277.023)",
      "chart-5": "oklch(0.398 0.195 277.366)",
      "sidebar-primary": "oklch(0.511 0.262 276.966)",
      "sidebar-primary-foreground": "oklch(0.962 0.018 272.314)",
      "ring": "oklch(0.457 0.24 277.023)",
      "sidebar-ring": "oklch(0.457 0.24 277.023)"
    },
    "dark": {
      "primary": "oklch(0.398 0.195 277.366)",
      "primary-foreground": "oklch(0.962 0.018 272.314)",
      "chart-1": "oklch(0.785 0.115 274.713)",
      "chart-2": "oklch(0.585 0.233 277.117)",
      "chart-3": "oklch(0.511 0.262 276.966)",
      "chart-4": "oklch(0.457 0.24 277.023)",
      "chart-5": "oklch(0.398 0.195 277.366)",
      "sidebar-primary": "oklch(0.585 0.233 277.117)",
      "sidebar-primary-foreground": "oklch(0.962 0.018 272.314)",
      "ring": "oklch(0.398 0.195 277.366)",
      "sidebar-ring": "oklch(0.398 0.195 277.366)"
    }
  },
  "violet": {
    "light": {
      "primary": "oklch(0.491 0.27 292.581)",
      "primary-foreground": "oklch(0.969 0.016 293.756)",
      "chart-1": "oklch(0.811 0.111 293.571)",
      "chart-2": "oklch(0.606 0.25 292.717)",
      "chart-3": "oklch(0.541 0.281 293.009)",
      "chart-4": "oklch(0.491 0.27 292.581)",
      "chart-5": "oklch(0.432 0.232 292.759)",
      "sidebar-primary": "oklch(0.541 0.281 293.009)",
      "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)",
      "ring": "oklch(0.491 0.27 292.581)",
      "sidebar-ring": "oklch(0.491 0.27 292.581)"
    },
    "dark": {
      "primary": "oklch(0.432 0.232 292.759)",
      "primary-foreground": "oklch(0.969 0.016 293.756)",
      "chart-1": "oklch(0.811 0.111 293.571)",
      "chart-2": "oklch(0.606 0.25 292.717)",
      "chart-3": "oklch(0.541 0.281 293.009)",
      "chart-4": "oklch(0.491 0.27 292.581)",
      "chart-5": "oklch(0.432 0.232 292.759)",
      "sidebar-primary": "oklch(0.606 0.25 292.717)",
      "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)",
      "ring": "oklch(0.432 0.232 292.759)",
      "sidebar-ring": "oklch(0.432 0.232 292.759)"
    }
  },
  "purple": {
    "light": {
      "primary": "oklch(0.496 0.265 301.924)",
      "primary-foreground": "oklch(0.977 0.014 308.299)",
      "chart-1": "oklch(0.827 0.119 306.383)",
      "chart-2": "oklch(0.627 0.265 303.9)",
      "chart-3": "oklch(0.558 0.288 302.321)",
      "chart-4": "oklch(0.496 0.265 301.924)",
      "chart-5": "oklch(0.438 0.218 303.724)",
      "sidebar-primary": "oklch(0.558 0.288 302.321)",
      "sidebar-primary-foreground": "oklch(0.977 0.014 308.299)",
      "ring": "oklch(0.496 0.265 301.924)",
      "sidebar-ring": "oklch(0.496 0.265 301.924)"
    },
    "dark": {
      "primary": "oklch(0.438 0.218 303.724)",
      "primary-foreground": "oklch(0.977 0.014 308.299)",
      "chart-1": "oklch(0.827 0.119 306.383)",
      "chart-2": "oklch(0.627 0.265 303.9)",
      "chart-3": "oklch(0.558 0.288 302.321)",
      "chart-4": "oklch(0.496 0.265 301.924)",
      "chart-5": "oklch(0.438 0.218 303.724)",
      "sidebar-primary": "oklch(0.627 0.265 303.9)",
      "sidebar-primary-foreground": "oklch(0.977 0.014 308.299)",
      "ring": "oklch(0.438 0.218 303.724)",
      "sidebar-ring": "oklch(0.438 0.218 303.724)"
    }
  },
  "fuchsia": {
    "light": {
      "primary": "oklch(0.518 0.253 323.949)",
      "primary-foreground": "oklch(0.977 0.017 320.058)",
      "chart-1": "oklch(0.833 0.145 321.434)",
      "chart-2": "oklch(0.667 0.295 322.15)",
      "chart-3": "oklch(0.591 0.293 322.896)",
      "chart-4": "oklch(0.518 0.253 323.949)",
      "chart-5": "oklch(0.452 0.211 324.591)",
      "sidebar-primary": "oklch(0.591 0.293 322.896)",
      "sidebar-primary-foreground": "oklch(0.977 0.017 320.058)",
      "ring": "oklch(0.518 0.253 323.949)",
      "sidebar-ring": "oklch(0.518 0.253 323.949)"
    },
    "dark": {
      "primary": "oklch(0.452 0.211 324.591)",
      "primary-foreground": "oklch(0.977 0.017 320.058)",
      "chart-1": "oklch(0.833 0.145 321.434)",
      "chart-2": "oklch(0.667 0.295 322.15)",
      "chart-3": "oklch(0.591 0.293 322.896)",
      "chart-4": "oklch(0.518 0.253 323.949)",
      "chart-5": "oklch(0.452 0.211 324.591)",
      "sidebar-primary": "oklch(0.667 0.295 322.15)",
      "sidebar-primary-foreground": "oklch(0.977 0.017 320.058)",
      "ring": "oklch(0.452 0.211 324.591)",
      "sidebar-ring": "oklch(0.452 0.211 324.591)"
    }
  },
  "pink": {
    "light": {
      "primary": "oklch(0.525 0.223 3.958)",
      "primary-foreground": "oklch(0.971 0.014 343.198)",
      "chart-1": "oklch(0.823 0.12 346.018)",
      "chart-2": "oklch(0.656 0.241 354.308)",
      "chart-3": "oklch(0.592 0.249 0.584)",
      "chart-4": "oklch(0.525 0.223 3.958)",
      "chart-5": "oklch(0.459 0.187 3.815)",
      "sidebar-primary": "oklch(0.592 0.249 0.584)",
      "sidebar-primary-foreground": "oklch(0.971 0.014 343.198)",
      "ring": "oklch(0.525 0.223 3.958)",
      "sidebar-ring": "oklch(0.525 0.223 3.958)"
    },
    "dark": {
      "primary": "oklch(0.459 0.187 3.815)",
      "primary-foreground": "oklch(0.971 0.014 343.198)",
      "chart-1": "oklch(0.823 0.12 346.018)",
      "chart-2": "oklch(0.656 0.241 354.308)",
      "chart-3": "oklch(0.592 0.249 0.584)",
      "chart-4": "oklch(0.525 0.223 3.958)",
      "chart-5": "oklch(0.459 0.187 3.815)",
      "sidebar-primary": "oklch(0.656 0.241 354.308)",
      "sidebar-primary-foreground": "oklch(0.971 0.014 343.198)",
      "ring": "oklch(0.459 0.187 3.815)",
      "sidebar-ring": "oklch(0.459 0.187 3.815)"
    }
  }
};

export const ACCENT_THEMES: AccentThemeDefinition[] = (Object.keys(ACCENT_THEME_DATA) as AccentColor[]).map((id) => ({
  id,
  label: toLabel(id),
  preview: ACCENT_THEME_DATA[id].light.primary,
  vars: ACCENT_THEME_DATA[id],
}));

export const DEFAULT_ACCENT_COLOR: AccentColor = 'blue';

export const ACCENT_STORAGE_KEY = "prompt-engineer-accent-color";

export function isAccentColor(value: string | null | undefined): value is AccentColor {
  return !!value && (Object.keys(ACCENT_THEME_DATA) as AccentColor[]).includes(value as AccentColor);
}

export function getAccentTheme(id: AccentColor): AccentThemeDefinition {
  return ACCENT_THEMES.find((theme) => theme.id === id) ?? ACCENT_THEMES[0];
}