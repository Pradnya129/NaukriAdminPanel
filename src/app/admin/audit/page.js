'use client'
import { useState } from 'react'
import Footer from '../../../components/Footer'

const logsData = [
  { ts: '2023-11-24\n14:22:01', actor: 'sarah.admin@skillbridge.io',  action: 'USER_SUSPENDED',     actionColor: '#c62828', actionBg: '#fdecea', entity: 'John Doe (ID: 1293)',      ip: '192.168.1.45'  },
  { ts: '2023-11-24\n13:05:12', actor: 'system.automator',            action: 'BATCH_PAYMENT_INIT', actionColor: '#05264E', actionBg: '#f0f0f0', entity: 'Payroll #402',             ip: '10.0.0.8'      },
  { ts: '2023-11-24\n11:45:55', actor: 'mike.finance@skillbridge.io', action: 'DATA_EXPORT_DPDP',   actionColor: '#1565c0', actionBg: '#e8f4fd', entity: 'Q3 Revenue Report',        ip: '172.16.254.1'  },
  { ts: '2023-11-24\n09:12:30', actor: 'admin.super',                 action: 'CONFIG_CHANGE',      actionColor: '#2e7d32', actionBg: '#e8f5e9', entity: 'Global Registration Fee',  ip: '192.168.5.112' },
  { ts: '2023-11-24\n08:30:00', actor: 'sarah.admin@skillbridge.io',  action: 'LOGIN_SUCCESS',      actionColor: '#555',    actionBg: '#f5f5f5', entity: 'Admin Session',            ip: '192.168.1.45'  },
]

const inspections = [
  {
    id: 'LOG-8291-A', title: 'User Suspension Investigation',
    level: 'Critical', actor: 'sarah.admin@skillbridge.io',
    levelColor: '#c62828', levelBg: '#fdecea',
    detail: 'Admin sarah.admin@skillbridge.io suspended user John Doe (ID: 1293) citing repeated policy violations. Suspension logged at 14:22:01. IP: 192.168.1.45. No prior warnings issued. Action flagged for compliance review.',
  },
  {
    id: 'LOG-8294-D', title: 'System Configuration Update',
    level: 'Info', actor: 'admin.super',
    levelColor: '#1565c0', levelBg: '#e8f4fd',
    detail: 'admin.super modified the Global Registration Fee configuration. Change recorded at 09:12:30. All changes are immutable and hashed. IP: 192.168.5.112.',
  },
]

const dpdpRules = [
  { rule: 'Notice of Purpose',  status: 'Compliant',       statusColor: '#2e7d32', statusBg: '#e8f5e9', desc: 'Admin must state why data is accessed.' },
  { rule: 'Data Minimization',  status: 'Compliant',       statusColor: '#2e7d32', statusBg: '#e8f5e9', desc: 'Only required fields were exported in the last 24h.' },
  { rule: 'Right to Erasure',   status: 'Action Required', statusColor: '#e65100', statusBg: '#fff3e0', desc: 'Pending user deletion requests are processed.' },
  { rule: 'Auditability',       status: 'Compliant',       statusColor: '#2e7d32', statusBg: '#e8f5e9', desc: 'System logs are hashed and non-repudiable.' },
]

export default function AuditLogsPage() {
  const [actorFilter,     setActorFilter]     = useState('')
  const [actionFilter,    setActionFilter]    = useState('')
  const [dateFilter,      setDateFilter]      = useState('')
  const [openInspection,  setOpenInspection]  = useState(null)
  const [page,            setPage]            = useState(1)

  const filtered = logsData.filter(l =>
    l.actor.toLowerCase().includes(actorFilter.toLowerCase()) &&
    l.action.toLowerCase().includes(actionFilter.toLowerCase())
  )

  return (
    <>
      {/* ── PAGE HEADING ── */}
      <div className="box-heading mb-5">
        <div className="box-title">
          <div className="d-flex align-items-center" style={{ gap: '12px' }}>
            <div>
              <h3 className="mb-5">Audit &amp; Compliance</h3>
              <p className="font-sm color-text-paragraph-2 mb-0">
                Monitor immutable action logs and ensure DPDP regulatory compliance.
              </p>
            </div>
          </div>
        </div>

          <div className="box-breadcrumb">
            <div className="breadcrumbs">
              <ul>
                <li><a className="icon-home" href="/dashboard">Admin</a></li>
                <li><span>Audit Logs</span></li>
              </ul>
            </div>
          </div>
        
      </div>
<div className="d-flex align-items-center mb-5 justify-content-end" style={{ gap: '10px', flexShrink: 0, flexWrap: 'wrap' }}>
          <a className="btn btn-secondary hover-up" href="#"
            style={{ padding: '9px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            &#8675; Export CSV
          </a>
          <a className="btn btn-primary hover-up" href="#"
            style={{ padding: '9px 16px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            &#128196; Export for DPDP
          </a>
        
        </div>
      {/* ── MAIN TWO-COLUMN LAYOUT ── */}
      <div className="row">

        {/* ════ LEFT COLUMN — stat cards + table + inspections ════ */}
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">

          {/* ── 4 STAT CARDS — inside left col only ── */}
          <div className="section-box">
            <div className="row">

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-3">
                <div className="card-style-1 hover-up" style={{ borderLeft: '3px solid #3C65F5' }}>
                  <div className="card-image">
                    <img src="/assets/imgs/page/dashboard/computer.svg" alt="jobBox" />
                  </div>
                  <div className="card-info">
                    <div className="card-title"><h3>14,202</h3></div>
                    <p className="color-text-paragraph-2 mb-5">Total Logs (24h)</p>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#2e7d32' }}>
                      &#8679; +12% from yesterday
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="card-style-1 hover-up" style={{ borderLeft: '3px solid #e65100' }}>
                  <div className="card-image">
                    <img src="/assets/imgs/page/dashboard/authentication.svg" alt="jobBox" />
                  </div>
                  <div className="card-info">
                    <div className="card-title"><h3>24</h3></div>
                    <p className="color-text-paragraph-2 mb-5">Critical Actions</p>
                    <span style={{ fontSize: '11px', color: '#888' }}>Requires review</span>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="card-style-1 hover-up" style={{ borderLeft: '3px solid #2e7d32' }}>
                  <div className="card-image">
                    <img src="/assets/imgs/page/dashboard/look.svg" alt="jobBox" />
                  </div>
                  <div className="card-info">
                    <div className="card-title"><h3>98.2%</h3></div>
                    <p className="color-text-paragraph-2 mb-5">DPDP Status</p>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#2e7d32' }}>
                      &#9679; Highly Compliant
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="card-style-1 hover-up" style={{ borderLeft: '3px solid #7c3aed' }}>
                  <div className="card-image">
                    <img src="/assets/imgs/page/dashboard/doc.svg" alt="jobBox" />
                  </div>
                  <div className="card-info">
                    <div className="card-title"><h3>2h ago</h3></div>
                    <p className="color-text-paragraph-2 mb-5">Last Export</p>
                    <span style={{ fontSize: '11px', color: '#888' }}>Scheduled Backup</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── AUDIT LOG TABLE ── */}
          <div className="section-box">
            <div className="panel-white">

              {/* Filter bar */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', flex: '1 1 150px', minWidth: '130px' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '13px' }}>
                    &#128100;
                  </span>
                  <input className="form-control font-xs" placeholder="Filter by Actor"
                    value={actorFilter} onChange={e => setActorFilter(e.target.value)}
                    style={{ paddingLeft: '30px' }} />
                </div>
                <div style={{ position: 'relative', flex: '1 1 150px', minWidth: '130px' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '13px' }}>
                    &#9874;
                  </span>
                  <input className="form-control font-xs" placeholder="Action Type"
                    value={actionFilter} onChange={e => setActionFilter(e.target.value)}
                    style={{ paddingLeft: '30px' }} />
                </div>
                <div style={{ position: 'relative', flex: '1 1 140px', minWidth: '120px' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#aaa', fontSize: '13px' }}>
                    &#128197;
                  </span>
                  <input className="form-control font-xs" type="date"
                    value={dateFilter} onChange={e => setDateFilter(e.target.value)}
                    style={{ paddingLeft: '30px' }} />
                </div>
                <button
                  className="btn btn-default hover-up"
                  onClick={() => { setActorFilter(''); setActionFilter(''); setDateFilter('') }}
                  style={{ padding: '8px 18px', fontSize: '13px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  &#9878; Apply
                </button>
              </div>

              {/* Table */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '580px' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #eee' }}>
                      {[
                        { label: 'Timestamp',      align: 'left'  },
                        { label: 'Actor (Admin)',   align: 'left'  },
                        { label: 'Action',         align: 'left'  },
                        { label: 'Target Entity',  align: 'left'  },
                        { label: 'IP Address',     align: 'left'  },
                        { label: 'Actions',        align: 'right' },
                      ].map(h => (
                        <th key={h.label} className="font-xs color-text-paragraph-2"
                          style={{
                            padding: '12px 10px', textAlign: h.align,
                            fontWeight: 600, textTransform: 'uppercase',
                            letterSpacing: '0.4px', fontSize: '10px', whiteSpace: 'nowrap',
                          }}>{h.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row, i) => (
                      <tr key={i} className="hover-up" style={{ borderBottom: '1px solid #f5f5f5' }}>
                        <td style={{ padding: '14px 10px', verticalAlign: 'top', whiteSpace: 'pre', lineHeight: 1.6 }}>
                          <span className="font-xs" style={{ color: '#05264E', fontWeight: 500 }}>{row.ts}</span>
                        </td>
                        <td style={{ padding: '14px 10px', verticalAlign: 'top' }}>
                          <span className="font-xs" style={{ fontWeight: 600, color: '#05264E', wordBreak: 'break-all' }}>{row.actor}</span>
                        </td>
                        <td style={{ padding: '14px 10px', verticalAlign: 'top' }}>
                          <span style={{
                            fontSize: '10px', fontWeight: 700, padding: '4px 10px',
                            borderRadius: '4px', whiteSpace: 'nowrap', letterSpacing: '0.3px',
                            color: row.actionColor, background: row.actionBg,
                          }}>{row.action}</span>
                        </td>
                        <td style={{ padding: '14px 10px', verticalAlign: 'top' }}>
                          <span className="font-xs" style={{ color: '#05264E', fontWeight: 500 }}>{row.entity}</span>
                        </td>
                        <td style={{ padding: '14px 10px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                          <span className="font-xs color-text-paragraph-2">{row.ip}</span>
                        </td>
                        <td style={{ padding: '14px 10px', textAlign: 'right', verticalAlign: 'top' }}>
                          <a className="font-sm color-brand-1 hover-up" href="#"
                            style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            &#128065; View
                          </a>
                        </td>
                      </tr>
                    ))}

                    {filtered.length === 0 && (
                      <tr>
                        <td colSpan={6} style={{ padding: '30px', textAlign: 'center' }}>
                          <span className="font-sm color-text-paragraph-2">No logs match your filters.</span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="d-flex align-items-center justify-content-between"
                style={{ padding: '14px 20px', borderTop: '1px solid #eee', flexWrap: 'wrap', gap: '10px' }}>
                <span className="font-xs color-text-paragraph-2">
                  Showing {filtered.length} of 14,202 entries
                </span>
                <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                  <button className="btn btn-grey-small hover-up"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    style={{ padding: '6px 16px', fontSize: '13px' }}>
                    Previous
                  </button>
                  <span className="btn btn-default"
                    style={{ padding: '6px 12px', fontSize: '13px', minWidth: '36px', textAlign: 'center', pointerEvents: 'none' }}>
                    {page}
                  </span>
                  <button className="btn btn-grey-small hover-up"
                    onClick={() => setPage(p => p + 1)}
                    style={{ padding: '6px 16px', fontSize: '13px' }}>
                    Next
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ── RECENT DETAIL INSPECTIONS ── */}
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                  <span style={{ fontSize: '16px', color: '#3C65F5' }}>&#9658;</span>
                  <h5 className="mb-0">Recent Detail Inspections</h5>
                </div>
              </div>
              <div className="panel-body" style={{ padding: '0' }}>
                {inspections.map((item, i) => (
                  <div key={item.id}>
                    <div
                      className="hover-up"
                      onClick={() => setOpenInspection(openInspection === i ? null : i)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '16px 20px',
                        borderBottom: openInspection === i ? 'none' : (i < inspections.length - 1 ? '1px solid #f5f5f5' : 'none'),
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{
                        fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px',
                        whiteSpace: 'nowrap', flexShrink: 0,
                        color: item.levelColor, background: item.levelBg,
                        border: `1px solid ${item.levelColor}40`,
                      }}>{item.level}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span className="font-sm" style={{ fontWeight: 600, color: '#05264E' }}>
                          {item.title}: {item.id}
                        </span>
                        <span className="font-xs color-text-paragraph-2" style={{ marginLeft: '8px' }}>
                          Actor: {item.actor}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '16px', color: '#888', flexShrink: 0,
                        display: 'inline-block',
                        transform: openInspection === i ? 'rotate(180deg)' : 'none',
                        transition: 'transform .2s',
                      }}>&#8964;</span>
                    </div>
                    {openInspection === i && (
                      <div style={{
                        padding: '16px 20px 20px',
                        background: '#F8FAFF',
                        borderLeft: `3px solid ${item.levelColor}`,
                        borderBottom: i < inspections.length - 1 ? '1px solid #f5f5f5' : 'none',
                      }}>
                        <p className="font-sm color-text-paragraph-2 mb-10" style={{ lineHeight: 1.7 }}>
                          {item.detail}
                        </p>
                        <div className="d-flex" style={{ gap: '8px' }}>
                          <a className="btn btn-grey-small hover-up font-xs" href="#">&#128065; Full Log</a>
                          <a className="btn btn-default hover-up font-xs" href="#">&#128196; Export Entry</a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        {/* end left column */}

        {/* ════ RIGHT SIDEBAR ════ */}
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">

          {/* DPDP Guidelines */}
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>&#128196;</span>
                    <h5 className="mb-0">DPDP Guidelines</h5>
                  </div>
                </div>
                <div className="panel-body">
                  <p className="font-xs color-text-paragraph-2 mb-15">Regulatory adherence summary</p>
                  {dpdpRules.map((item) => (
                    <div key={item.rule} className="hover-up mb-15"
                      style={{ paddingBottom: '15px', borderBottom: '1px solid #f5f5f5' }}>
                      <div className="d-flex align-items-center justify-content-between mb-5">
                        <span className="font-sm" style={{ fontWeight: 600, color: '#05264E' }}>{item.rule}</span>
                        <span style={{
                          fontSize: '10px', fontWeight: 700, padding: '2px 8px',
                          borderRadius: '20px', whiteSpace: 'nowrap',
                          color: item.statusColor, background: item.statusBg,
                        }}>{item.status}</span>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-0">{item.desc}</p>
                    </div>
                  ))}
                  <div className="mt-10">
                    <a className="btn btn-grey-small hover-up" href="#"
                      style={{ width: '100%', textAlign: 'center', display: 'block', padding: '10px', fontSize: '13px' }}>
                      View Compliance Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="section-box">
            <div className="container">
              <div className="panel-white" style={{ background: '#F0F6FF', border: '1px solid #bdd4f5' }}>
                <div className="panel-head" style={{ borderBottom: '1px solid #bdd4f5' }}>
                  <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>&#9432;</span>
                    <h5 className="mb-0" style={{ color: '#1565c0' }}>Privacy Note</h5>
                  </div>
                </div>
                <div className="panel-body">
                  <p className="font-xs mb-15" style={{ lineHeight: 1.7, color: '#444' }}>
                    Under the DPDP Act 2023, every data access must have a legitimate purpose.{' '}
                    <strong style={{ color: '#1565c0' }}>Unauthorized data exports are monitored</strong>{' '}
                    and flagged to the Data Protection Officer (DPO) immediately.
                  </p>
                  <blockquote style={{
                    borderLeft: '3px solid #3C65F5', paddingLeft: '12px',
                    margin: '0 0 15px', fontSize: '12px', color: '#555',
                    fontStyle: 'italic', lineHeight: 1.6,
                  }}>
                    "SkillBridge ensures end-to-end auditability of personal data processing as per Digital India regulations."
                  </blockquote>
                  <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                    <span style={{ fontSize: '22px' }}>&#128737;</span>
                    <div>
                      <p className="font-xs mb-0" style={{ fontWeight: 600, color: '#05264E' }}>Certification Status</p>
                      <span className="font-xs" style={{ color: '#2e7d32', fontWeight: 700, letterSpacing: '0.5px' }}>
                        ISO/IEC 27001 COMPLIANT
                      </span>
                    </div>
                  </div>
                </div>
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