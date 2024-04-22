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
        <div className="flex justify-center text-center">{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
