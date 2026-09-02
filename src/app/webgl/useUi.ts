"use client";

import { useSyncExternalStore } from "react";
import { getServerUiState, getUiState, subscribeUi } from "./store";

/** React-visible slice of stage state (focused product, quality tier). */
export function useUi() {
  return useSyncExternalStore(subscribeUi, getUiState, getServerUiState);
}
