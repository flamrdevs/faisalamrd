import { persistentMap } from "@nanostores/persistent";

type Theme = "dark" | "light";

type SettingsStoreType = {
  theme: Theme;
};

const SettingsStore = persistentMap<SettingsStoreType>("faisalamrd:settings:", {
  theme: "dark",
});

function toggleTheme() {
  SettingsStore.setKey("theme", SettingsStore.get().theme === "dark" ? "light" : "dark");
}

export type { Theme, SettingsStoreType };
export { toggleTheme };
export default SettingsStore;
