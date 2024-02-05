import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/AuthContext';
import { Navbar } from "@/components/Navbar/Navbar";
import { Roboto } from 'next/font/google'
import "../styles/globals.css";

const roboto = Roboto({
  weight: ['100', '300','400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <div className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
    </AuthProvider>
  )
}