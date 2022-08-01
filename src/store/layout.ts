import { defineStore } from "pinia";

interface LayoutState {
  collapse: boolean;
}

export const useLayoutStore = defineStore("layoutState", {
  state: (): LayoutState => ({
    collapse: false,
  }),

  getters: {
    getCollapse(): boolean {
      return this.collapse || false;
    },
  },

  actions: {
    setCollapse(value: boolean): void {
      this.collapse = value;
    },
  },
});
