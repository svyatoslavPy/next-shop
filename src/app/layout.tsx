import { Footer } from '@/shared/ui/footer';
import { Header } from '@/shared/ui/header';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.scss';

const font = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Магазин - Главная',
  description: `На главной странице вас ждет слайдер с лучшими предложениями и новинками. 
  Ниже – раздел "Последние поступления", где представлены свежие товары, только что поступившие в продажу. 
  Откройте для себя наши актуальные товары уже сегодня!`,
  keywords: [
    'Ювелирный магазин',
    'Купить украшение',
    'Брендовые украшения',
    'Купить золото/серебро онлайн',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <div className='container page'>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
