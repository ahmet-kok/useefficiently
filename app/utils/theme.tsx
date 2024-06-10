/* export const applySystemTheme = (): void => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
      const applyTheme = (theme: string) => {
        if (theme === "dark") {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      };
  
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        applyTheme(prefersDarkScheme.matches ? "dark" : "light");
        prefersDarkScheme.addEventListener("change", (e) => {
          const newTheme = e.matches ? "dark" : "light";
          applyTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        });
      }
    }
  };
  
  export const toggleTheme = (): void => {
    if (typeof document !== "undefined") {
      const isDark = document.body.classList.contains("dark");
      if (isDark) {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }; */

  
  export const applySystemTheme = (): void => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
      const applyTheme = (theme: string) => {
        if (theme === "dark") {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      };
  
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        applyTheme(prefersDarkScheme.matches ? "dark" : "light");
        prefersDarkScheme.addEventListener("change", (e) => {
          const newTheme = e.matches ? "dark" : "light";
          applyTheme(newTheme);
          localStorage.setItem("theme", newTheme);
        });
      }
    }
  };
  
  export const toggleTheme = (): void => {
    if (typeof document !== "undefined") {
      const isDark = document.body.classList.contains("dark");
      if (isDark) {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  };