import { createContext, ReactNode, useContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeCtx() {
  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error(`no ctx 🚨`);

  return ctx;
}
