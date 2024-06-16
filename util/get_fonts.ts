import appConfig from "../app.config";

export function getFonts() {
  let fonts: { families: { [key: string]: boolean } } = { families: {} };
  fonts.families[appConfig.ui.displayFont] = true;
  fonts.families[appConfig.ui.bodyFont] = true;
  return fonts;
}

export function getFontsForTailwind() {
  let fonts: { [key: string]: string[] } = {};
  fonts["display"] = [appConfig.ui.displayFont, "ui-serif", "Georgia", "serif"];
  fonts["body"] = [appConfig.ui.bodyFont, "ui-sans-serif", "system-ui"];
  return fonts;
}
