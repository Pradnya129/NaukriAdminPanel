import Header from '../../components/Header';
import DashboardMenu from '../../components/DashboardMenu';

export default function DashboardLayout({ children }) {
  return (
    <>

      <main className="main">
        <Header/>
        <DashboardMenu />

        <div className="box-content">
          {children}
        </div>
      </main>
    </>
  );
}