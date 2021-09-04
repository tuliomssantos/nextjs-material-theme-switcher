import type { AppProps } from "next/app";
import { CustomThemeProvider } from "context/theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
export default MyApp;
