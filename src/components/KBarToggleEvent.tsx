import { isKBarOpen } from "../stores/kbarStore.ts";
import { useEffect } from "react";

export default function KBarToggleEvent() {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if ((event.metaKey || event.ctrlKey) && event.code === "KeyK") {
        // Write status to the imported Astro nanostore using `.set()`
        if (isKBarOpen.get() === true) {
          isKBarOpen.set(false);
        } else {
          isKBarOpen.set(true);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isKBarOpen]);
}
