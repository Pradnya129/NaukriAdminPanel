'use client'
import Footer from '../../../../components/Footer'

export default function EmployerEditPage() {
    return (
        <>

            {/* ── PAGE HEADING: employer name + status + action buttons ── */}
       <div className="box-heading d-flex align-items-center justify-content-between mb-3">

  {/* LEFT */}
  <div className="box-title d-flex align-items-center" style={{ gap: '12px' }}>
    
    <div style={{
      width: '42px',
      height: '42px',
      borderRadius: '8px',
      background: '#3C65F5',
      color: '#fff',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: '14px',
    }}>
      SL
    </div>

    {/* ❌ removed mb-4 */}
    <div className='mt-1'>
      <h5 className="mb-0">Stellar Logistics Pvt. Ltd.</h5>

      <div className="d-flex align-items-center mt-1" style={{ gap: '10px' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          padding: '2px 10px',
          borderRadius: '20px',
          background: '#fff3e0',
          color: '#e65100',
        }}>
          Pending Review
        </span>

        <span className="font-xs color-text-paragraph-2">
          ID: REC-902831
        </span>
      </div>
    </div>

  </div>

{/* RIGHT */}
<div className="box-breadcrumb">
  <div className="breadcrumbs">
    <ul>
      <li><a className="icon-home" href="/admin/dashboard">Admin</a></li>
      <li><a href="/admin/recruiters">Recruiters</a></li>
      <li><span>Edit - Alexander Wright</span></li>
    </ul>
  </div>
</div>

</div>
            {/* ── MAIN LAYOUT ── */}
            <div className="row">

                {/* ════ LEFT COLUMN ════ */}
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">

                    {/* Company Information */}
                    <div className="section-box">
                        <div className="panel-white">

                            {/* ── TOP ACTION BAR (NEW) ── */}

                            <div className="panel-head d-flex justify-content-between" style={{ alignItems: 'center' }}>
                                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                    <i className="fi-rr-building font-sm color-brand-2"></i>
                                    <h6 className="mb-0">Company Information</h6>
                                </div>

                                {/* RIGHT: Actions */}
                                <div className="d-flex align-items-center flex-wrap" style={{ gap: '8px' }}>

                                    <button className="btn  btn-secondary btn-small" >
                                        Suspend
                                    </button>

                                    <button className="btn btn-danger btn-small ">
                                        Reject
                                    </button>

                                    <button className="btn btn-default btn-small mt-0">
                                        Approve
                                    </button>

                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    {[
                                        { label: 'LEGAL NAME', value: 'Stellar Logistics Private Limited' },
                                        { label: 'TRADE NAME', value: 'Stellar Express' },
                                        { label: 'GSTIN', value: '27AACS1234L1Z5' },
                                        { label: 'PAN', value: 'AACS1234L' },
                                        { label: 'BUSINESS TYPE', value: 'Logistics & Warehousing' },
                                        { label: 'STATE / JURISDICTION', value: 'Maharashtra (27)' },
                                        { label: 'EMAIL', value: 'compliance@stellarlogistics.com' },
                                        { label: 'REG. DATE', value: '12th March 2018' },
                                        { label: 'CONTACT PERSON', value: 'Rajesh Kumar (Compliance Head)' },
                                    ].map((item) => (
                                        <div key={item.label} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-20 ">
                                            <p className="font-xs color-text-paragraph-2 mb-5"
                                                style={{ textTransform: 'uppercase', letterSpacing: '0.4px', fontSize: '10px' }}>
                                                {item.label}
                                            </p>
                                            <p className="font-sm mb-0" style={{ fontWeight: 600, color: '#05264E' }}>
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Documents */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                                <div>
                                    <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                        <i className="fi-rr-document font-sm color-brand-2"></i>
                                        <h6 className="mb-0">Compliance Documents</h6>
                                    </div>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-0">
                                        5 documents uploaded for verification
                                    </p>
                                </div>
                                <a className="font-sm color-brand-2 hover-up" href="#">
                                    <i className="fi-rr-download mr-5"></i>Download All (.zip)
                                </a>
                            </div>

                            <div className="panel-body">
                                <div className="row">
                                    {[
                                        {
                                            title: 'GST Certificate', sub: 'GST Document',
                                            status: 'Verified', statusColor: '#2e7d32', statusBg: '#e8f5e9',
                                            img: '/assets/imgs/page/candidates/user1.png',
                                            expired: false, aiMatch: null, meta: null,
                                        },
                                        {
                                            title: 'PAN Card - Corporate', sub: 'PAN Document',
                                            status: 'Verified', statusColor: '#2e7d32', statusBg: '#e8f5e9',
                                            img: '/assets/imgs/page/candidates/user2.png',
                                            expired: false, aiMatch: null, meta: null,
                                        },
                                        {
                                            title: 'POE License Copy', sub: 'POE Document',
                                            status: 'Verified', statusColor: '#2e7d32', statusBg: '#e8f5e9',
                                            img: '/assets/imgs/page/candidates/user3.png',
                                            expired: false,
                                            aiMatch: { label: '98% Match', color: '#2e7d32', bg: '#e8f5e9' },
                                            meta: { licenseNo: 'POE-9928/2023', validTill: '2025-12-31' },
                                        },
                                        {
                                            title: 'RPSL Certification', sub: 'RPSL Document',
                                            status: 'Pending', statusColor: '#e65100', statusBg: '#fff3e0',
                                            img: '/assets/imgs/page/candidates/user4.png',
                                            expired: true,
                                            aiMatch: { label: '64% Match', color: '#e65100', bg: '#fff3e0' },
                                            meta: { licenseNo: 'RPSL-MUM-442', validTill: '2023-01-15' },
                                        },
                                        {
                                            title: 'Business Reg Certificate', sub: 'BR Document',
                                            status: 'Verified', statusColor: '#2e7d32', statusBg: '#e8f5e9',
                                            img: '/assets/imgs/page/candidates/user5.png',
                                            expired: false, aiMatch: null, meta: null,
                                        },
                                    ].map((doc) => (
                                        <div key={doc.title} className="col-xl-5 col-lg-5 col-md-6 col-sm-6 mb-20">
                                            <div className="card-grid-2" style={{ marginBottom: 0 }}>
                                                {/* Expired badge */}
                                                {doc.expired && (
                                                    <div style={{
                                                        position: 'absolute', top: '10px', right: '10px', zIndex: 2,
                                                        background: '#dc2626', color: '#fff',
                                                        fontSize: '10px', fontWeight: 700,
                                                        padding: '2px 8px', borderRadius: '4px',
                                                    }}>EXPIRED</div>
                                                )}
                                                {/* Thumbnail */}
                                                <div style={{ height: '165px', overflow: 'hidden', background: '#dde4f0' }}>
                                                    <img src={doc.img} alt={doc.title}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                {/* Card body */}
                                                <div className="card-block-info" style={{ padding: '12px' }}>
                                                    <div className="d-flex align-items-start justify-content-between mb-5">
                                                        <p className="font-sm mb-0" style={{ fontWeight: 600, color: '#05264E', lineHeight: 1.3 }}>
                                                            {doc.title}
                                                        </p>
                                                        <span style={{
                                                            fontSize: '10px', fontWeight: 700, padding: '2px 8px',
                                                            borderRadius: '20px', background: doc.statusBg, color: doc.statusColor,
                                                            whiteSpace: 'nowrap', marginLeft: '6px', flexShrink: 0,
                                                        }}>{doc.status}</span>
                                                    </div>
                                                    <p className="font-xs color-text-paragraph-2 mb-0">{doc.sub}</p>

                                                    {doc.aiMatch && (
                                                        <div className="d-flex align-items-center mt-10" style={{ gap: '6px' }}>
                                                            <span className="font-xs color-text-paragraph-2"
                                                                style={{ textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.4px' }}>
                                                                AI EXTRACTION
                                                            </span>
                                                            <span style={{
                                                                fontSize: '10px', fontWeight: 700, padding: '1px 7px',
                                                                borderRadius: '20px', background: doc.aiMatch.bg, color: doc.aiMatch.color,
                                                            }}>{doc.aiMatch.label}</span>
                                                        </div>
                                                    )}

                                                    {doc.meta && (
                                                        <div className="employers-info mt-10">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p className="font-xs color-text-paragraph-2 mb-0"
                                                                        style={{ fontSize: '9px', textTransform: 'uppercase' }}>License No.</p>
                                                                    <p className="font-xs mb-0" style={{ fontWeight: 600, color: '#05264E' }}>
                                                                        {doc.meta.licenseNo}
                                                                    </p>
                                                                </div>
                                                                <div className="col-6">
                                                                    <p className="font-xs color-text-paragraph-2 mb-0"
                                                                        style={{ fontSize: '9px', textTransform: 'uppercase' }}>Valid Till</p>
                                                                    <p className="font-xs mb-0" style={{ fontWeight: 600, color: '#05264E' }}>
                                                                        {doc.meta.validTill}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust & Verification Badges */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head" style={{ alignItems: 'center' }}>
                                <div>
                                    <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                        <i className="fi-rr-shield-check font-sm color-brand-2"></i>
                                        <h6 className="mb-0">Trust &amp; Verification Badges</h6>
                                    </div>
                                    <p className="font-xs color-text-paragraph-2 mt-5 mb-0">
                                        Status of verification markers visible to candidates
                                    </p>
                                </div>
                                <a className="btn btn-grey-small hover-up font-sm" href="#">Manage Badges</a>
                            </div>
                            <div className="panel-body">
                                <div className="d-flex align-items-center" style={{ gap: '8px', flexWrap: 'wrap' }}>
                                    {[
                                        { label: 'GST Verified', active: true, color: '#2e7d32', bg: '#e8f5e9', border: '#a5d6a7' },
                                        { label: 'PAN Verified', active: true, color: '#1565c0', bg: '#e3f2fd', border: '#90caf9' },
                                        { label: 'Blue-Tick Verified', active: true, color: '#1565c0', bg: '#e3f2fd', border: '#90caf9' },
                                        { label: 'POE Licensed', active: false, color: '#66789C', bg: '#F2F6FD', border: '#E0E6F7' },
                                        { label: 'RPSL Certified', active: false, color: '#66789C', bg: '#F2F6FD', border: '#E0E6F7' },
                                    ].map((badge) => (
                                        <span key={badge.label} style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                                            padding: '6px 14px', borderRadius: '20px',
                                            background: badge.bg, color: badge.color,
                                            fontSize: '12px', fontWeight: 600,
                                            border: `1px solid ${badge.border}`,
                                        }}>
                                            {badge.active && <i className="fi-rr-check" style={{ fontSize: '10px' }}></i>}
                                            {badge.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Activity & Audit Trail */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head" style={{ alignItems: 'center' }}>
                                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                    <i className="fi-rr-time-past font-sm color-brand-2"></i>
                                    <h6 className="mb-0">Activity &amp; Audit Trail</h6>
                                </div>
                            </div>
                            <div className="panel-body">
                                {[
                                    {
                                        dot: '#3C65F5', title: 'RPSL Document Uploaded',
                                        by: 'Sarah Jenkins', time: 'Today, 10:45 AM', note: null,
                                    },
                                    {
                                        dot: '#3C65F5', title: 'GST Verified Automatically',
                                        by: 'System AI', time: 'Yesterday, 04:20 PM',
                                        note: '"GSTIN check successful via government portal API."',
                                    },
                                    {
                                        dot: '#3C65F5', title: 'Badge Assigned: Blue Tick',
                                        by: 'Admin User', time: '2 days ago',
                                        note: '"Trust verification completed manually."',
                                    },
                                    {
                                        dot: '#dc2626', title: 'Account Suspended',
                                        by: 'System Security', time: 'Oct 12, 2023',
                                        note: '"Suspicious activity detected in login patterns."',
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="d-flex" style={{ gap: '14px', marginBottom: '20px' }}>
                                        <div style={{ paddingTop: '5px', flexShrink: 0 }}>
                                            <span style={{
                                                display: 'inline-block', width: '10px', height: '10px',
                                                borderRadius: '50%', background: item.dot,
                                            }}></span>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div className="d-flex align-items-center justify-content-between"
                                                style={{ flexWrap: 'wrap', gap: '4px' }}>
                                                <p className="font-sm mb-0" style={{ fontWeight: 600, color: '#05264E' }}>
                                                    {item.title}
                                                </p>
                                                <span className="font-xs color-text-paragraph-2">{item.time}</span>
                                            </div>
                                            <p className="font-xs color-text-paragraph-2 mb-5">by {item.by}</p>
                                            {item.note && (
                                                <div style={{
                                                    background: '#F8FAFF', border: '1px solid #E0E6F7',
                                                    borderRadius: '4px', padding: '8px 12px',
                                                }}>
                                                    <p className="font-xs color-text-paragraph-2 mb-0">{item.note}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                <div className="text-center mt-10">
                                    <a className="font-sm color-brand-2 hover-up" href="#">View Full Audit History</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* end left col */}

                {/* ════ RIGHT SIDEBAR ════ */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">

                    {/* Quick Insights */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <h6 className="mb-0" style={{
                                    textTransform: 'uppercase', fontSize: '11px',
                                    letterSpacing: '0.6px', color: '#66789C',
                                }}>Quick Insights</h6>
                            </div>
                            <div className="panel-body">
                                <div className="card-style-1 hover-up mb-15">
                                    <div className="card-image">
                                        <img src="/assets/imgs/page/dashboard/doc.svg" alt="jobBox" />
                                    </div>
                                    <div className="card-info">
                                        <p className="font-xs color-text-paragraph-2 mb-0"
                                            style={{ textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.5px' }}>
                                            Registered On
                                        </p>
                                        <div className="card-title mt-2"><h5 className="mb-0">Oct 2023</h5></div>
                                    </div>
                                </div>

                                <div className="card-style-1 hover-up mb-15">
                                    <div className="card-image">
                                        <img src="/assets/imgs/page/dashboard/recruiters.svg" alt="jobBox" />
                                    </div>
                                    <div className="card-info">
                                        <p className="font-xs color-text-paragraph-2 mb-0"
                                            style={{ textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.5px' }}>
                                            Total Open Jobs
                                        </p>
                                        <div className="card-title mt-2">
                                            <h5 className="mb-0">42 <span className="font-xs status up">+5 this month</span></h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-style-1 hover-up">
                                    <div className="card-image">
                                        <img src="/assets/imgs/page/dashboard/bank.svg" alt="jobBox" />
                                    </div>
                                    <div className="card-info">
                                        <p className="font-xs color-text-paragraph-2 mb-0"
                                            style={{ textTransform: 'uppercase', fontSize: '9px', letterSpacing: '0.5px' }}>
                                            Current Credits
                                        </p>
                                        <div className="card-title mt-2"><h5 className="mb-0">12,500</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Health */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <h6 className="mb-0" style={{
                                    textTransform: 'uppercase', fontSize: '11px',
                                    letterSpacing: '0.6px', color: '#66789C',
                                }}>Account Health</h6>
                            </div>
                            <div className="panel-body">
                                <div className="d-flex align-items-center justify-content-between mb-10">
                                    <span className="font-sm color-text-paragraph-2">Profile Completion</span>
                                    <strong className="font-sm color-brand-1">85%</strong>
                                </div>
                                <div className="box-progress-bar mb-10">
                                    <div className="progress">
                                        <div className="progress-bar bg-brand-2"
                                            role="progressbar"
                                            style={{ width: '85%', borderRadius: '5px', background: '#3C65F5' }}>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-xs color-text-paragraph-2 mt-10 mb-0">
                                    "RPSL documentation needs re-upload as the previous file has reached its expiry date."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Primary Contact */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <h6 className="mb-0" style={{
                                    textTransform: 'uppercase', fontSize: '11px',
                                    letterSpacing: '0.6px', color: '#66789C',
                                }}>Primary Contact</h6>
                            </div>
                            <div className="panel-body text-center">
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '50%',
                                    background: '#3C65F5', color: '#fff',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, fontSize: '18px', margin: '0 auto 10px',
                                }}>SJ</div>
                                <h6 className="mb-0">Sarah Jenkins</h6>
                                <p className="font-xs color-text-paragraph-2 mt-5 mb-20">HR Director</p>
                                <a className="btn btn-grey-big hover-up font-sm mb-10" href="#"
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                    <i className="fi-rr-envelope"></i>Message HR
                                </a>
                                <a className="font-sm color-brand-2 hover-up" href="#">View All Team Members</a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* end right sidebar */}

            </div>

            <Footer />
        </>
    )
}