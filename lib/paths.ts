/**
 * GitHub Pages serves a project site from a sub-folder
 * (https://<user>.github.io/<repo>/), so every asset that is loaded by a
 * plain browser API (audio, blobs) has to be prefixed with the base path.
 * next/link and next/image already do this for us.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string) => {
  if (!path) return path;
  if (/^(https?:|blob:|data:)/.test(path)) return path;

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
};
