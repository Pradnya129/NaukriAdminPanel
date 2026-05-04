import Header from '../../components/Header';
import DashboardMenu from '../../components/DashboardMenu';

export default function DashboardLayout({ children }) {
  return (
    <>

        <Header/>
      <main className="main">
        <DashboardMenu />

        <div className="box-content">
          {children}
        </div>
      </main>
    </>
  );
}