import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'RangerPlus | Find Your Distance',
  description: 'Your trusted golf caddie',
  keywords: 'golf, gps',
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex justify-center text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
