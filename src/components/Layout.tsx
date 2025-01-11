import Header from './Header';
import Footer from './Footer';
import localFont from "next/font/local";

const clash = localFont({
  src: "../fonts/ClashDisplay-Light.woff",
  variable: "--font-clash-display",
});
const satoshi = localFont({
  src: "../fonts/Satoshi-Light.woff",
  variable: "--font-satoshi-light",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col min-h-screen ${clash.variable} ${satoshi.variable} antialiased`}>

     <Header />
      {children}
     <Footer />
    </div>
  );
};

export default Layout;