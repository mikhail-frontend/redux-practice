import uiSlice from "./ui-slice";
import cartSlice from "./cart";

const buildExportModule = ({actions, reducer}) => ({actions, reducer});

export const ui = buildExportModule(uiSlice)
export const cart = buildExportModule(cartSlice)