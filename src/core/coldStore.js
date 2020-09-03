const Store = window.require("electron-store");
const ColdStorage = new Store();

export const getStorage = (type) => ColdStorage.get(type);
export const setStorage = (type, value) => ColdStorage.set(type, value);
