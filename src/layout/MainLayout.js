import Nav from '@common/Nav';
import Footer from "@components/Footer";
import TabNav from '@common/TabNav';


export default function MainLayout({ children }) {
  return (
    <>
      <div className='flex flex-col h-screen justify-between pb-18'>

        <TabNav />
        <main>
          <div>{children}</div>
        </main>
        <Nav />
        <Footer />


      </div>
    </>
  );
}
