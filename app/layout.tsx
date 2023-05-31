import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import '@/components/Layout/Layout.css';
import Sidebar from '@/components/Layout/Sidebar';
import Menubar from '@/components/Layout/Menubar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="layout-wrapper">
            <div className="layout-container">
              <aside className="child">
                <Sidebar />
              </aside>
              <main className="child">
                <Menubar />
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
