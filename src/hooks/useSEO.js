import { useEffect } from "preact/hooks";

export function useSEO({ title, description }) {
  useEffect(() => {
    // 1. Update the document title
    document.title = title;

    // 2. Update or create the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [title, description]); // Re-run if title or description changes
}
