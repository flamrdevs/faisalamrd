import { useStore } from "@nanostores/solid";

import SettingsStore from "~/stores/settings";

function useSettingsStore() {
  return useStore(SettingsStore);
}

export default useSettingsStore;
