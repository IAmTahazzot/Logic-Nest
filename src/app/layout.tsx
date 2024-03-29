import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

const DM_Sans_Font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logic Nest: SaaS Automation Platform',
  description:
    'Automate your SaaS business with our platform, created by developers for developers. (tahazzot.me/about)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={DM_Sans_Font.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
