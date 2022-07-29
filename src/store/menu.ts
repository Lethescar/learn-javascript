import { defineStore } from "pinia";

declare type Nullable<T> = T | null;
interface MenuInfo {
  openKey?: string[];
  selectKey?: string[];
}

interface MenuState {
  menuInfo: Nullable<MenuInfo>;
}

export const useMenuStore = defineStore("menuState", {
  state: (): MenuState => ({
    menuInfo: null,
  }),

  getters: {
    getMenuInfo(): MenuInfo {
      return this.menuInfo || {};
    },
  },

  actions: {
    setMenuInfo(info: MenuInfo | null) {
      if (this.menuInfo) {
        this.menuInfo.openKey = info?.openKey;
        this.menuInfo.selectKey = info?.selectKey;
      }
    },
  },
});
