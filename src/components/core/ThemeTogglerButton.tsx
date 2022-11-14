/** @jsxImportSource solid-js */

import { createEffect, createSignal } from "solid-js";
import type { Component, JSX } from "solid-js";

const MoonIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path
        fill-rule="evenodd"
        d="M11.59 1.617a.75.75 0 01-.047.836 7.843 7.843 0 00-1.585 4.75c0 4.294 3.388 7.74 7.527 7.74 1.141 0 2.221-.26 3.19-.726a.75.75 0 011.027.94c-1.45 3.847-5.1 6.593-9.39 6.593-5.575 0-10.062-4.63-10.062-10.301 0-5.16 3.713-9.456 8.583-10.19a.75.75 0 01.756.358zm-2.237 1.57C6.091 4.423 3.75 7.647 3.75 11.45c0 4.879 3.851 8.801 8.562 8.801 3.015 0 5.676-1.604 7.203-4.04a8.856 8.856 0 01-2.03.234c-5.003 0-9.027-4.155-9.027-9.24 0-1.438.321-2.801.895-4.017z"
      />
    </svg>
  );
};

const SunIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path
        fill-rule="evenodd"
        d="M12 1.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zm0 18a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm0-11.5a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5zM6.25 12a5.75 5.75 0 1111.5 0 5.75 5.75 0 01-11.5 0zM2 11.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5H2zm18 0a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2zM3.97 3.97a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm13.5 13.5a.75.75 0 011.06 0l1.5 1.5a.75.75 0 11-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm-13.5 1.5a.75.75 0 101.06 1.06l1.5-1.5a.75.75 0 10-1.06-1.06l-1.5 1.5zm13.5-13.5a.75.75 0 001.06 1.06l1.5-1.5a.75.75 0 00-1.06-1.06l-1.5 1.5z"
      />
    </svg>
  );
};

const ThemeTogglerButton: Component = () => {
  function initialDark() {
    if (typeof window !== "undefined") {
      return window.getStorageDarkTheme(window.getInitialDarkTheme());
    } else {
      return false;
    }
  }

  const [dark, setDark] = createSignal<boolean>(initialDark());

  function toggleDark() {
    setDark((state) => !state);
  }

  createEffect(() => {
    if (typeof window !== "undefined") {
      window.setDocumentDarkTheme(window.setStorageDarkTheme(dark()));
    }
  });

  return (
    <button
      type="button"
      aria-label="Toggle dark theme"
      class="inline-flex items-center self-center justify-center md:h-12 h-10 gap-2 md:px-6 px-5 text-sm font-medium tracking-wide text-neutral-700 dark:text-neutral-200 rounded-full focus-visible:outline-none whitespace-nowrap transition-colors"
      onClick={toggleDark}
    >
      <span class="relative only:-mx-6">
        <span class="sr-only">Toggle dark theme</span>
        {dark ? <SunIcon class="w-6 h-6 md:w-7 md:h-7" /> : <MoonIcon class="w-6 h-6 md:w-7 md:h-7" />}
      </span>
    </button>
  );
};

export default ThemeTogglerButton;
