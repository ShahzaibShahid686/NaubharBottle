import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }) {
  return (
    <main className="{inter.className}">
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </main>
  );
}
