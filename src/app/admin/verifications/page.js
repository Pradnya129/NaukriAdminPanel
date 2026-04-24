import Footer from '../../../components/Footer'

export const metadata = { title: 'Verification Queue - Jobbox Admin' }

export default function VerificationQueuePage() {
  return (
    <>
      {/* PAGE HEADING */}
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-5">Verification Queue</h3>
          <p className="font-sm color-text-paragraph-2">Manage and process pending identity and business verifications.</p>
        </div>
        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li><a className="icon-home" href="/dashboard">Admin</a></li>
              <li><span>Verifications</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── ROW 1: 4 STAT CARDS ── */}
      <div className="section-box mt-3">
        <div className="row">

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="card-style-1 hover-up">
              <div className="card-image">
                <img src="/assets/imgs/page/dashboard/tasks.svg" alt="jobBox" style={{height:'40px'}} />
              </div>
              <div className="card-info">
                <div className="card-title"><h3>142</h3></div>
                <p className="color-text-paragraph-2">Total Pending</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="card-style-1 hover-up">
              <div className="card-image">
                <img src="/assets/imgs/page/dashboard/doc.svg" alt="jobBox" style={{height:'40px'}} />
              </div>
              <div className="card-info">
                <div className="card-title"><h3>28</h3></div>
                <p className="color-text-paragraph-2">Employer Docs</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="card-style-1 hover-up">
              <div className="card-image">
                <img src="/assets/imgs/page/dashboard/authentication.svg" alt="jobBox" style={{height:'40px'}} />
              </div>
              <div className="card-info">
                <div className="card-title"><h3>12</h3></div>
                <p className="color-text-paragraph-2">Low Confidence</p>
              </div>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className="card-style-1 hover-up">
              <div className="card-image">
                <img src="/assets/imgs/page/dashboard/look.svg" alt="jobBox"  style={{height:'40px'}}/>
              </div>
              <div className="card-info">
                <div className="card-title"><h3>64</h3></div>
                <p className="color-text-paragraph-2">Verified Today</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MAIN TABLE PANEL ── */}
      <div className="section-box">
        <div className="panel-white">

          {/* Tabs + Filter/Sort */}
          <div className="panel-head d-flex justify-content-between" style={{ flexWrap: 'wrap', gap: '12px', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '0' }}>

            {/* Tab bar */}
            <div className="d-flex align-items-end" style={{ gap: '0', overflowX: 'auto' }}>
              {/* Active tab */}
              <div style={{
                padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
                borderBottom: '2px solid #1565c0', color: '#1565c0', fontWeight: 600, fontSize: '14px'
              }}>
                KYC (Identity)
                <span style={{
                  marginLeft: '8px', fontSize: '11px', fontWeight: 700,
                  background: '#e8f4fd', color: '#1565c0',
                  padding: '2px 8px', borderRadius: '10px'
                }}>5</span>
              </div>
              {/* Inactive tab */}
              <div style={{
                padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
                borderBottom: '2px solid transparent', color: '#888', fontWeight: 500, fontSize: '14px'
              }}>
                Employer Documents
                <span style={{
                  marginLeft: '8px', fontSize: '11px', fontWeight: 700,
                  background: '#f5f5f5', color: '#888',
                  padding: '2px 8px', borderRadius: '10px'
                }}>2</span>
              </div>
              {/* Tab with red badge */}
              <div style={{
                padding: '12px 16px', cursor: 'pointer', whiteSpace: 'nowrap',
                borderBottom: '2px solid transparent', color: '#888', fontWeight: 500, fontSize: '14px'
              }}>
                Low AI Confidence
                <span style={{
                  marginLeft: '8px', fontSize: '11px', fontWeight: 700,
                  background: '#c62828', color: '#fff',
                  padding: '2px 8px', borderRadius: '10px'
                }}>2</span>
              </div>
            </div>

            {/* Filter + Sort buttons */}
            <div className="d-flex" style={{ gap: '8px', marginLeft: 'auto', flexShrink: 0, paddingBottom: '12px' }}>
              <a className="btn btn-grey-small hover-up" href="#"
                style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 14px', fontSize: '13px' }}>
                &#9878; Filters
              </a>
              <a className="btn btn-grey-small hover-up" href="#"
                style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 14px', fontSize: '13px' }}>
                &#8645; Sort
              </a>
            </div>

          </div>

          {/* Table */}
          <div className="box-padding" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '12px 0', width: '36px' }}>
                    <input type="checkbox" style={{ cursor: 'pointer' }} />
                  </th>
                  <th >
                    User / Entity
                  </th>
                  <th >
                    Type
                  </th>
                  <th >
                    Submitted
                  </th>
                  <th >
                    Priority
                  </th>
                  <th >
                    AI Confidence
                  </th>
                  <th >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Vikram Sahay',     id: 'VER-9021', img: 'avata1', type: 'Individual',     date: '10/24/2023', time: '09:30 AM', priority: 'Urgent', confidence: 98 },
                  { name: 'Sarah Jenkins',    id: 'VER-8842', img: 'avata2', type: 'Individual',     date: '10/24/2023', time: '10:15 AM', priority: 'High',   confidence: 85 },
                  { name: 'Michael Chen',     id: 'VER-8761', img: 'avata3', type: 'International',  date: '10/24/2023', time: '11:00 AM', priority: 'Normal', confidence: 92 },
                  { name: 'Elena Rodriguez',  id: 'VER-8655', img: 'avata4', type: 'Individual',     date: '10/24/2023', time: '11:45 AM', priority: 'High',   confidence: 78 },
                  { name: 'David Smith',      id: 'VER-8540', img: 'avata5', type: 'Individual',     date: '10/24/2023', time: '12:30 PM', priority: 'Normal', confidence: 94 },
                ].map((row) => {
                  const priorityStyle = {
                    'Urgent': { color: '#c62828', bg: '#fdecea', border: '#ef9a9a' },
                    'High':   { color: '#e65100', bg: '#fff3e0', border: '#ffcc80' },
                    'Normal': { color: '#555',    bg: '#f5f5f5', border: '#ddd'    },
                  }[row.priority]

                  const confColor = row.confidence >= 90 ? '#2e7d32' : row.confidence >= 80 ? '#1565c0' : '#e65100'

                  return (
                    <tr key={row.id} className="hover-up" style={{ borderBottom: '1px solid #f5f5f5' }}>

                      {/* Checkbox */}
                      <td >
                        <input type="checkbox" style={{ cursor: 'pointer' }} />
                      </td>

                      {/* User / Entity */}
                      <td style={{ padding: '16px 8px' }} className='align-middle'>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img src={`/assets/imgs/page/dashboard/${row.img}.png`} alt={row.name}
                            style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0 }} />
                          <div>
                            <h6>{row.name}</h6>
                            <span className="font-sm color-text-paragraph-2">{row.id}</span>
                          </div>
                        </div>
                      </td>

                      {/* Type */}
                      <td style={{ padding: '16px 8px' }}>
                        <span className="font-sm color-text-paragraph-2">{row.type}</span>
                      </td>

                      {/* Submitted */}
                      <td style={{ padding: '16px 8px', whiteSpace: 'nowrap' }}>
                        <h6>{row.date}</h6>
                        <span className="font-xs color-text-paragraph-2">{row.time}</span>
                      </td>

                      {/* Priority */}
                      <td style={{ padding: '16px 8px' }}>
                        <span style={{
                          fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px',
                          color: priorityStyle.color, background: priorityStyle.bg,
                          border: `1px solid ${priorityStyle.border}`, whiteSpace: 'nowrap'
                        }}>{row.priority}</span>
                      </td>

                      {/* AI Confidence */}
                      <td style={{ padding: '16px 8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '120px' }}>
                          <div style={{ flex: 1, height: '6px', background: '#eee', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{
                              width: `${row.confidence}%`, height: '100%',
                              background: confColor, borderRadius: '3px'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: confColor, minWidth: '36px' }}>
                            {row.confidence}%
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td style={{ padding: '16px 0', textAlign: 'right' }} >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
                       
                          <a className="btn btn-default hover-up" href="/admin/verifications/preview"
                            style={{ padding: '6px 16px', fontSize: '13px', fontWeight: 600,
                              display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Review ›
                          </a>
                        </div>
                      </td>

                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex align-items-center justify-content-between" style={{ padding: '14px 20px', borderTop: '1px solid #eee', flexWrap: 'wrap', gap: '10px' }}>
            <span className="font-xs color-text-paragraph-2">Showing 1-5 of 5 entries</span>
            <div className="d-flex align-items-center" style={{ gap: '6px' }}>
              <a className="btn btn-grey-small hover-up" href="#" style={{ padding: '6px 14px', fontSize: '13px' }}>Previous</a>
              <span className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '13px', minWidth: '36px', textAlign: 'center' }}>1</span>
              <a className="btn btn-grey-small hover-up" href="#" style={{ padding: '6px 14px', fontSize: '13px' }}>Next</a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM ROW: COMPLIANCE REMINDER + WORKLOAD STATUS ── */}
      <div className="row">

        {/* Compliance Reminder */}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
          <div className="section-box">
            <div className="panel-white" style={{ background: '#f0f6ff', border: '1px solid #bdd4f5' }}>
              <div className="panel-body">
                <div className="d-flex align-items-center mb-15" style={{ gap: '10px' }}>
                  <span style={{ fontSize: '18px', color: '#1565c0' }}>&#128737;</span>
                  <h5 className="mb-0" style={{ color: '#1565c0' }}>Compliance Reminder</h5>
                </div>
                <p className="font-sm color-text-paragraph-2 mb-15" style={{ lineHeight: 1.7 }}>
                  All verification decisions are logged for audit purposes. Ensure you have
                  reviewed both the <strong>National ID</strong> and the <strong>AI Liveness Score</strong> before
                  final approval. For international users, verify against the global sanctions list.
                </p>
                <a className="font-sm color-brand-1" href="#" style={{ fontWeight: 600 }}>
                  View Compliance Guidelines
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Workload Status */}
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>&#128100;</span>
                  <h5 className="mb-0">Workload Status</h5>
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '20px',
                  background: '#e8f5e9', color: '#2e7d32', border: '1px solid #a5d6a7'
                }}>
                  &#9679; Live
                </span>
              </div>
              <div className="panel-body">
                {[
                  { admin: 'Admin: Sarah (Self)',  items: 4,  color: '#1565c0' },
                  { admin: 'Admin: James Miller',  items: 12, color: '#e65100' },
                  { admin: 'Admin: Priya Singh',   items: 8,  color: '#2e7d32' },
                ].map((w) => (
                  <div key={w.admin} className="d-flex align-items-center justify-content-between hover-up"
                    style={{ padding: '14px 0', borderBottom: '1px solid #f5f5f5' }}>
                    <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                      <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: w.color, display: 'inline-block', flexShrink: 0
                      }}></span>
                      <span className="font-sm" style={{ fontWeight: 500 }}>{w.admin}</span>
                    </div>
                    <span className="font-sm color-text-paragraph-2" style={{ fontWeight: 600 }}>
                      {w.items} items active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}