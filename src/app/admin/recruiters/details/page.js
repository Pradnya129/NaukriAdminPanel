'use client'
import Footer from '../../../../components/Footer'


export default function RecruiterDetailPage() {
    return (
        <>
            {/* PAGE HEADING */}
            <div className="box-heading mb-5">
                <div className="box-title ">
                    {/* Company name + status badges */}
                    <div className="d-flex align-items-center " style={{ flexWrap: 'wrap', gap: '10px' }}>
                        <h3 className="mb-0">Global Marine Solutions Pvt Ltd</h3>
                        <span className="btn btn-grey-small" style={{ background: '#e8f5e9', color: '#2e7d32', border: 'none', fontSize: '12px', fontWeight: 600 }}>
                            ● Active &amp; Verified
                        </span>
                    </div>
                    <div className="d-flex align-items-center mt-5" style={{ gap: '16px', flexWrap: 'wrap' }}>
                        <span className="font-xs color-text-paragraph-2">&#128196; REC-2024-9842</span>
                        <span className="font-xs color-text-paragraph-2">&#9679;</span>
                        <span className="font-xs color-text-paragraph-2">&#128336; Last edited by <strong>admin_alex</strong> 45m ago</span>
                    </div>
                </div>
                  <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li><a className="icon-home" href="/admin/dashboard">Admin</a></li>
              <li><a href="/admin/recruiters">Recruiters</a></li>
              <li><span>Alexander Wright</span></li>
            </ul>
          </div>
        </div>
            </div>

            {/* MAIN TWO-COLUMN LAYOUT */}
            <div className="row mt-5">

                {/* ── LEFT COLUMN (main content) ── */}
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 mt-5">

                    {/* ── SECTION 1: Corporate Identity ── */}
                    <div className="section-box mt-5">
                        <div className="panel-white">
                            <div className="panel-head d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                    {/* <span style={{ fontSize: '18px' }}>&#128196;</span> */}
                                    <div>
                                        <h5 className="mb-0">Corporate Identity</h5>
                                        <p className="font-xs color-text-paragraph-2 mb-0">Legal business registration and identification parameters.</p>
                                    </div>
                                </div>
                                <img src="/assets/imgs/brands/brand-1.png" alt="company"
                                    style={{ width: '56px', height: '56px', borderRadius: '8px', objectFit: 'contain', border: '1px solid #eee' }} />
                            </div>
                            <div className="box-padding">

                                {/* Legal Business Name */}
                                <div className="form-group mb-20">
                                    <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Legal Business Name *
                                    </label>
                                    <input className="form-control" type="text" defaultValue="Global Marine Solutions Pvt Ltd" />
                                </div>

                                {/* Trading Name + Industry */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                Trading Name (Brand)
                                            </label>
                                            <input className="form-control" type="text" defaultValue="GMS Shipping & Logistics" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                Industry Vertical
                                            </label>
                                            <input className="form-control" type="text" defaultValue="Maritime & Logistics" />
                                        </div>
                                    </div>
                                </div>

                                {/* Registration No + Date */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                Registration Number (CIN)
                                            </label>
                                            <input className="form-control" type="text" defaultValue="U74999MH2018PTC309412" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                Registration Date
                                            </label>
                                            <input className="form-control" type="text" defaultValue="2018-05-14" />
                                        </div>
                                    </div>
                                </div>

                                {/* PAN + GSTIN */}
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                PAN Number
                                            </label>
                                            <input className="form-control" type="password" defaultValue="XXXXXX234F" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                                GSTIN / VAT ID
                                            </label>
                                            <input className="form-control" type="password" defaultValue="XXXXXXG1234F1Z5" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 2: Operational Footprint ── */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                    <span style={{ fontSize: '18px' }}>&#128205;</span>
                                    <div>
                                        <h5 className="mb-0">Operational Footprint</h5>
                                        <p className="font-xs color-text-paragraph-2 mb-0">Global presence, physical address, and contact accessibility.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-padding">

                                {/* Full Address */}
                                <div className="form-group mb-20">
                                    <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Full Business Address (Headquarters) *
                                    </label>
                                    <textarea className="form-control" rows={3}
                                        defaultValue="Level 14, Marine Business Tower, Sector 18, Navi Mumbai, Maharashtra" />
                                </div>

                                {/* State + City + PIN */}
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>State / Province</label>
                                            <input className="form-control" type="text" defaultValue="Maharashtra" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>City</label>
                                            <input className="form-control" type="text" defaultValue="Navi Mumbai" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>ZIP / Postal Code</label>
                                            <input className="form-control" type="text" defaultValue="400705" />
                                        </div>
                                    </div>
                                </div>

                                {/* Country */}
                                <div className="form-group mb-20">
                                    <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Country</label>
                                    <input className="form-control" type="text" defaultValue="India" />
                                </div>

                                {/* Website + Email + Phone */}
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Official Website</label>
                                            <input className="form-control" type="text" defaultValue="https://www.globemarin..." />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Business Email</label>
                                            <input className="form-control" type="email" defaultValue="ops@globemarine.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="form-group mb-20">
                                            <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Business Phone</label>
                                            <input className="form-control" type="text" defaultValue="+91 22 4900 1200" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 3: Account Settings & Verification ── */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                    <span style={{ fontSize: '18px' }}>&#128737;</span>
                                    <div>
                                        <h5 className="mb-0">Account Settings &amp; Verification</h5>
                                        <p className="font-xs color-text-paragraph-2 mb-0">Manage account visibility and verification status.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-padding">

                                {/* Account Status + Tax Residency */}
                                <div className="row mb-20">
                                    <div className="col-md-6 col-sm-12">
                                        <label className="font-xs color-text-paragraph-2 mb-10" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, display: 'block' }}>Account Status</label>
                                        <select className="form-control select2">
                                            <option>Active</option>
                                            <option>Inactive</option>
                                            <option>Suspended</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <label className="font-xs color-text-paragraph-2 mb-10" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600, display: 'block' }}>Tax Residency Type</label>
                                        <div className="d-flex align-items-center" style={{ gap: '20px', paddingTop: '8px' }}>
                                            <label className="d-flex align-items-center" style={{ gap: '6px', cursor: 'pointer' }}>
                                                <input type="radio" name="taxType" defaultChecked /> <span className="font-sm">GST Registered</span>
                                            </label>
                                            <label className="d-flex align-items-center" style={{ gap: '6px', cursor: 'pointer' }}>
                                                <input type="radio" name="taxType" /> <span className="font-sm">Non-GST</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Verification Status Badges */}
                                <div className="d-flex align-items-center mb-20" style={{ flexWrap: 'wrap', gap: '10px' }}>
                                    {[
                                        { label: 'GST Verified', status: 'verified' },
                                        { label: 'PAN Verified', status: 'verified' },
                                        { label: 'POE Pending', status: 'pending' },
                                        { label: 'RPSL Expired', status: 'expired' },
                                    ].map((v) => (
                                        <span key={v.label} style={{
                                            fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '4px',
                                            background: v.status === 'verified' ? '#e8f5e9' : v.status === 'pending' ? '#fff3e0' : '#fdecea',
                                            color: v.status === 'verified' ? '#2e7d32' : v.status === 'pending' ? '#e65100' : '#c62828',
                                            border: `1px solid ${v.status === 'verified' ? '#a5d6a7' : v.status === 'pending' ? '#ffcc80' : '#ef9a9a'}`,
                                        }}>
                                            {v.status === 'verified' ? '✓' : v.status === 'pending' ? '○' : '✕'} {v.label}
                                        </span>
                                    ))}
                                    <button className="btn btn-default hover-up" style={{ marginLeft: 'auto', fontSize: '12px' }}>
                                        &#8635; Re-run AI Extraction
                                    </button>
                                </div>

                                <p className="font-xs color-text-paragraph-2">
                                    Last automated verification completed on <strong>12 Oct 2023</strong>
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 4: Compliance & Documents ── */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head">
                                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                    <span style={{ fontSize: '18px' }}>&#128196;</span>
                                    <h5 className="mb-0">Compliance &amp; Documents</h5>
                                </div>
                                <a className="btn btn-default icon-edit hover-up" href="#" style={{ fontSize: '12px' }}>+ Upload New</a>
                            </div>
                            <div className="box-padding">
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid #eee' }}>
                                            <th className="font-xs color-text-paragraph-2" style={{ padding: '8px 0', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Document Type</th>
                                            <th className="font-xs color-text-paragraph-2" style={{ padding: '8px 8px', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                                            <th className="font-xs color-text-paragraph-2" style={{ padding: '8px 8px', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Expiry</th>
                                            <th className="font-xs color-text-paragraph-2" style={{ padding: '8px 0', textAlign: 'left', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'GST Registration Certificate', issued: 'Jan 11, 2023', status: 'Verified', expiry: 'Dec 31, 2028', statusColor: '#2e7d32', statusBg: '#e8f5e9' },
                                            { name: 'Incorporation Certificate', issued: 'May 14, 2018', status: 'Verified', expiry: 'No Expiry', statusColor: '#2e7d32', statusBg: '#e8f5e9' },
                                            { name: 'POE License (Form A)', issued: 'Jun 18, 2019', status: 'Pending', expiry: 'Jun 15, 2024', statusColor: '#e65100', statusBg: '#fff3e0' },
                                            { name: 'RPSL Maritime License', issued: 'Nov 21, 2018', status: 'Expired', expiry: 'Nov 20, 2023', statusColor: '#c62828', statusBg: '#fdecea' },
                                        ].map((doc) => (
                                            <tr key={doc.name} className="hover-up" style={{ borderBottom: '1px solid #f5f5f5' }}>
                                                <td style={{ padding: '14px 0' }}>
                                                    <p className="font-sm mb-0" style={{ fontWeight: 600 }}>&#128196; {doc.name}</p>
                                                    <span className="font-xs color-text-paragraph-2">Issued: {doc.issued}</span>
                                                </td>
                                                <td style={{ padding: '14px 8px' }}>
                                                    <span style={{
                                                        fontSize: '11px', fontWeight: 600, padding: '3px 10px', borderRadius: '4px',
                                                        color: doc.statusColor, background: doc.statusBg, whiteSpace: 'nowrap'
                                                    }}>
                                                        {doc.status === 'Verified' ? '✓' : doc.status === 'Pending' ? '○' : '✕'} {doc.status}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '14px 8px' }}>
                                                    <span className="font-xs color-text-paragraph-2">{doc.expiry}</span>
                                                </td>
                                                <td style={{ padding: '14px 0' }}>
                                                    <a className="btn btn-grey-small" href="#" style={{ marginRight: '6px' }}>Review</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="mt-15">
                                    <a className="font-sm color-brand-1" href="#">Manage All 12 Documents →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── SECTION 5: Review & Audit Commitment ── */}
                    <div className="section-box">
                        <div className="panel-white">
                            <div className="panel-head" style={{ borderLeft: '3px solid #1565c0', paddingLeft: '12px' }}>
                                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                    <span style={{ fontSize: '18px' }}>&#128065;</span>
                                    <div>
                                        <h5 className="mb-0">Review &amp; Audit Commitment</h5>
                                        <p className="font-xs color-text-paragraph-2 mb-0">A mandatory audit comment is required to persist any modifications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box-padding">
                                <div className="form-group mb-15">
                                    <label className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Mandatory Change Comment *
                                    </label>
                                    <textarea className="form-control" rows={4}
                                        placeholder="Describe the reason for these edits (e.g., 'Updated address based on new utility bill', 'Fixed typo in VAT ID')..." />
                                </div>
                                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                    <span style={{ fontSize: '12px', color: '#2e7d32', fontWeight: 600 }}>&#9679; GDPR Consent: Active (v2.4)</span>
                                    <span className="font-xs color-text-paragraph-2" style={{ marginLeft: '8px' }}>Consent Timestamp: 14 Oct 2023, 11:22 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ── RIGHT COLUMN (sidebar panels) ── */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">

                    {/* Financial & Credits */}
                    <div className="section-box">
                        <div className="container">
                            <div className="panel-white">
                                <div className="panel-head">
                                    <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                        <span style={{ fontSize: '14px' }}>&#128179;</span>
                                        <h5 className="mb-0">Financial &amp; Credits</h5>
                                    </div>
                                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '4px', background: '#7c3aed', color: '#fff' }}>
                                        Premium
                                    </span>
                                </div>
                                <div className="panel-body">
                                    <div className="d-flex align-items-baseline" style={{ gap: '6px', marginBottom: '4px' }}>
                                        <h3 style={{ color: '#1565c0', margin: 0, fontSize: '32px', fontWeight: 700 }}>12,450</h3>
                                        <span className="font-xs color-text-paragraph-2" style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Credits</span>
                                    </div>
                                    {/* Usage bar */}
                                    <div className="d-flex justify-content-between mb-5">
                                        <span className="font-xs color-text-paragraph-2">Monthly Usage</span>
                                        <span className="font-xs" style={{ fontWeight: 600 }}>85%</span>
                                    </div>
                                    <div className="progress mb-20" style={{ height: '6px', borderRadius: '3px', background: '#eee' }}>
                                        <div className="progress-bar" style={{ width: '85%', background: '#1565c0', borderRadius: '3px' }}></div>
                                    </div>
                                    {/* Adjust balance */}
                                    <p className="font-xs color-text-paragraph-2 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Adjust Balance (Admin Only)
                                    </p>
                                    <div className="d-flex" style={{ gap: '8px' }}>
                                        <input className="form-control" type="number" defaultValue="12450" style={{ flex: 1 }} />
                                        <button className="btn btn-default hover-up" style={{ whiteSpace: 'nowrap' }}>Apply</button>
                                    </div>
                                    <div className="mt-15">
                                        <a className="font-sm color-brand-1" href="#">View Billing History ↗</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Network */}
                    <div className="section-box">
                        <div className="container">
                            <div className="panel-white">
                                <div className="panel-head">
                                    <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                                        <span style={{ fontSize: '14px' }}>&#128100;</span>
                                        <h5 className="mb-0">Contact Network</h5>
                                    </div>
                                    <a className="btn btn-grey-small" href="#">+</a>
                                </div>
                                <div className="panel-body">
                                    {/* Primary Contact */}
                                    <p className="font-xs color-text-paragraph-2 mb-10" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Primary Point of Contact
                                    </p>
                                    <div className="card-style-3 hover-up mb-20" style={{ border: '1px solid #eee', borderRadius: '8px', padding: '12px' }}>
                                        <div className="card-image online">
                                            <img src="/assets/imgs/page/dashboard/avata1.png" alt="contact" />
                                        </div>
                                        <div className="card-title">
                                            <h6>Michael Sterling</h6>
                                            <span className="job-position">Head of Operations</span>
                                        </div>
                                        <div style={{ marginTop: '6px' }}>
                                            <p className="font-xs color-brand-1 mb-2">m.sterling@gms.com</p>
                                            <p className="font-xs color-text-paragraph-2 mb-0">+91 98860 77777</p>
                                        </div>
                                    </div>

                                    {/* Regional Reps */}
                                    <p className="font-xs color-text-paragraph-2 mb-10" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Regional Representatives
                                    </p>
                                    {[
                                        { name: 'Sarah Jenkins', role: 'HR Compliance', img: 'avata2' },
                                        { name: 'Robert Chen', role: 'Accounts Lead', img: 'avata3' },
                                    ].map((rep) => (
                                        <div key={rep.name} className="d-flex align-items-center hover-up mb-10" style={{ justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
                                            <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                                                <img src={`/assets/imgs/page/dashboard/${rep.img}.png`} alt={rep.name}
                                                    style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0 }} />
                                                <div>
                                                    <p className="font-sm mb-0" style={{ fontWeight: 600 }}>{rep.name}</p>
                                                    <span className="font-xs color-text-paragraph-2">{rep.role}</span>
                                                </div>
                                            </div>
                                            <span className="font-xs color-text-paragraph-2">⋮</span>
                                        </div>
                                    ))}

                                    {/* Preferred Channel */}
                                    <p className="font-xs color-text-paragraph-2 mt-15 mb-5" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Preferred Contact Channel
                                    </p>
                                    <select className="form-control select2">
                                        <option>Email</option>
                                        <option>Phone</option>
                                        <option>WhatsApp</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Provenance */}
                    <div className="section-box">
                        <div className="container">
                            <div className="panel-white">
                                <div className="panel-head">
                                    <h5 className="mb-0">System Provenance</h5>
                                </div>
                                <div className="panel-body">
                                    <div className="row mb-15">
                                        <div className="col-6">
                                            <p className="font-xs color-text-paragraph-2 mb-3" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Created At</p>
                                            <p className="font-sm mb-0" style={{ fontWeight: 600 }}>May 14, 2018</p>
                                            <span className="font-xs color-text-paragraph-2">by system_core</span>
                                        </div>
                                        <div className="col-6">
                                            <p className="font-xs color-text-paragraph-2 mb-3" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Operating Hours</p>
                                            <p className="font-sm mb-0" style={{ fontWeight: 600 }}>09:00 - 18:00 IST</p>
                                        </div>
                                    </div>

                                    {/* Strategic Labels */}
                                    <p className="font-xs color-text-paragraph-2 mb-8" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Strategic Labels
                                    </p>
                                    <div className="d-flex flex-wrap mb-15" style={{ gap: '6px' }}>
                                        {['#TopTier', '#MaritimeExpert', '#HighRetention', '#GoldVerified'].map(tag => (
                                            <span key={tag} className="btn btn-tag" style={{ fontSize: '11px', padding: '3px 8px' }}>{tag}</span>
                                        ))}
                                    </div>

                                    {/* Recent History Logs */}
                                    <p className="font-xs color-text-paragraph-2 mb-8" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                                        Recent History Logs
                                    </p>
                                    {[
                                        { action: 'Verified PAN Details', by: 'Sarah L', when: '3 days ago', color: '#2e7d32' },
                                        { action: 'POE Expiry Extracted', by: 'AI Bot', when: '5 days ago', color: '#1565c0' },
                                        { action: 'Credits Adjusted (+500)', by: 'Admin Alex', when: '1 week ago', color: '#e65100' },
                                    ].map((log) => (
                                        <div key={log.action} className="mb-10" style={{ borderLeft: `3px solid ${log.color}`, paddingLeft: '10px' }}>
                                            <p className="font-sm mb-0" style={{ fontWeight: 600, color: log.color }}>{log.action}</p>
                                            <span className="font-xs color-text-paragraph-2">{log.by} · {log.when}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── STICKY FOOTER ACTION BAR ── */}
            <div className="section-box">
                <div className="panel-white" style={{ padding: '16px 20px' }}>
                    <div className="d-flex align-items-center justify-content-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                        <div className="d-flex align-items-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
                            <span className="font-xs" style={{ color: '#2e7d32', fontWeight: 600 }}>&#9679; CONSENT VALID</span>
                            <span className="font-xs color-text-paragraph-2">&#9675; 0 Prior Rejections</span>
                            <span className="font-xs color-text-paragraph-2" style={{ fontStyle: 'italic', maxWidth: '400px' }}>
                                "By saving these changes, you acknowledge that all updated information has been verified against physical or digital originals."
                            </span>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">

                            <a
                                href="/recruiters"
                                className="btn d-flex align-items-center justify-content-center"
                                style={{ height: '44px', padding: '0 18px', borderRadius: '10px' }}
                            >
                                Discard Changes
                            </a>

                            <a
                                href="#"
                                className="btn btn-primary d-flex align-items-center justify-content-center"
                                style={{ height: '44px', padding: '0 18px', borderRadius: '10px' }}
                            >
                                Save Changes
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}