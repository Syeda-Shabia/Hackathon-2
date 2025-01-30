// import { CartProvider } from "@/context/CartContext";
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import localFont from "next/font/local";
// import '@/styles/globals.css';

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// };

// const clash = localFont({
//   src: "../fonts/ClashDisplay-Light.woff",
//   variable: "--font-clash-display",
// });

// const satoshi = localFont({
//   src: "../fonts/Satoshi-Light.woff",
//   variable: "--font-satoshi-light",
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`flex flex-col min-h-screen ${clash.variable} ${satoshi.variable} antialiased`}>
//         <CartProvider>
//           <Header />
//           {children}
//         </CartProvider>
//           <Footer />
//       </body>
//     </html>
//   );
// }
import { ClerkProvider } from '@clerk/nextjs'; // Import ClerkProvider
import { CartProvider } from "@/context/CartContext";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localFont from "next/font/local";
import '@/styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const clash = localFont({
  src: "../fonts/ClashDisplay-Light.woff",
  variable: "--font-clash-display",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Light.woff",
  variable: "--font-satoshi-light",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Wrap the entire app with ClerkProvider
    <ClerkProvider>
      <html lang="en">
        <body className={`flex flex-col min-h-screen ${clash.variable} ${satoshi.variable} antialiased`}>
          <CartProvider>
            <Header />
            <main className="flex-grow"> {/* Add flex-grow to make children expand */}
              {children}
            </main>
            <Footer />
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}