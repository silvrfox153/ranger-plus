import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import YardageView from '@/components/YardageView';
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
        <main className="grid grid-cols-3 gap-3">
          <YardageView />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
