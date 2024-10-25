// Default config object
export const CONFIG = {
  // Output directory when where all files will be saved.
  // According to this path, relative paths will be resolved.
  outputDir: "./fonts",
  // Path placed before every source of font in CSS.
  // It's also can be URL of your website.
  path: "./",
  // Template of font filename.
  template: "{_family}-{weight}-{comment}{i}.{ext}",
  // Name of CSS file. Like other files
  // will be placed relative to output directory
  cssFile: "fonts.css",
  // User-agent used at every connection. Accordingly, Google Fonts will
  // send the appropriate fonts. For example, providing a wget's
  // user-agent will end with the download of .ttf fonts.
  // Default user-agent downloads .woff2 fonts.
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
  // Save fonts inside CSS file as base64 URIs
  base64: false,
  // Force to accepts only valid SSL certificates; in some cases,
  // such proxy or self-signed certificates should be turned off
  strictSSL: true,
  // Allows overwrite existing files.
  overwriting: false,
  // Displays a lot of useful information.
  verbose: true,
  // Simulation; No file will be saved.
  simulate: false,
};
