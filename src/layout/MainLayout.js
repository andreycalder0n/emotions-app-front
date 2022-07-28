// import Header from '@components/Header';
import Nav from '@common/Nav';
import Footer from "@components/Footer";
import TabNav from '@common/TabNav';

export default function MainLayout({ children }) {
  return (
    <>
      <div className='flex flex-col h-screen'>

        <Nav />

        <main>
          <div>{children}</div>
        </main>

        <Footer />

        <TabNav />
      </div>
    </>
  );
}
