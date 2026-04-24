'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/admin/dashboard', icon: '/assets/imgs/page/dashboard/dashboard.svg', name: 'Dashboard' },
  { href: '/admin/candidates', icon: '/assets/imgs/page/dashboard/candidates.svg', name: 'Candidates' },
  { href: '/admin/recruiters', icon: '/assets/imgs/page/dashboard/recruiters.svg', name: 'Recruiters' },
  { href: '/admin/verifications', icon: '/assets/imgs/page/dashboard/jobs.svg', name: 'Verifications' },
  { href: '/admin/finance', icon: '/assets/imgs/page/dashboard/tasks.svg', name: 'Finance' },
  { href: '/admin/subadmin', icon: '/assets/imgs/page/dashboard/cv-manage.svg', name: 'Sub-Admin' },
  { href: '/admin/helpAndsupport', icon: '/assets/imgs/page/dashboard/cv-manage.svg', name: 'Help & Support' },
  { href: '/admin/settings', icon: '/assets/imgs/page/dashboard/settings.svg', name: 'Settings' },
  { href: '/admin/audit', icon: '/assets/imgs/page/dashboard/cv-manage.svg', name: 'Audit Logs' },
  { href: '/admin/login', icon: '/assets/imgs/page/dashboard/logout.svg', name: 'Logout' },
];

export default function DashboardMenu() {
  const pathname = usePathname();

  const isActive = (href) => {
    // exact match
    if (pathname === href) return true;

    // sub routes match (IMPORTANT)
    if (pathname.startsWith(href + '/')) return true;

    return false;
  };

  return (
    <div className="nav">
      <a className="btn btn-expanded"></a>

      <nav className="nav-main-menu">
        <ul className="main-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`dashboard2 ${isActive(item.href) ? 'active' : ''}`}
              >
                <img src={item.icon} alt={item.name} />
                <span className="name">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}