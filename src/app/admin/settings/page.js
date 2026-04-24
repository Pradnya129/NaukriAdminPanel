'use client'
import { useState } from 'react'
import Footer from '../../../components/Footer'

export default function SettingsPage() {

  // ── Registration & Access state ──
  const [enableRegistrations, setEnableRegistrations] = useState(true)
  const [registrationVerification, setRegistrationVerification] = useState(true)
  const [platformFee, setPlatformFee] = useState('49.99')

  // ── Credit Pack Pricing state ──
  const [packs, setPacks] = useState([
    { id: 1, name: 'Starter Pack',      credits: '100 Credits',  price: '19.99' },
    { id: 2, name: 'Professional',      credits: '500 Credits',  price: '79.99' },
    { id: 3, name: 'Enterprise',        credits: '2000 Credits', price: '249.99' },
  ])
  const [serviceTax, setServiceTax] = useState('12% Included')
  const [editingPack, setEditingPack] = useState(null) // id of pack being edited

  const addPack = () => {
    const newId = Date.now()
    setPacks(p => [...p, { id: newId, name: 'New Pack', credits: '0 Credits', price: '0.00' }])
    setEditingPack(newId)
  }
  const deletePack = (id) => setPacks(p => p.filter(pk => pk.id !== id))
  const updatePack = (id, field, val) => setPacks(p => p.map(pk => pk.id === id ? { ...pk, [field]: val } : pk))

  // ── Regional & Compliance state ──
  const [currency, setCurrency]     = useState('USD - United States Dollar ($)')
  const [language, setLanguage]     = useState('English (US)')
  const [geoFencing, setGeoFencing] = useState(true)

  // ── System Security state ──
  const [sessionTimeout, setSessionTimeout] = useState('30 Minutes')
  const [enforceMFA, setEnforceMFA]         = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  // ── Unsaved changes indicator ──
  const [unsaved, setUnsaved] = useState(true)

  // helper: mark unsaved on any change
  const changed = () => setUnsaved(true)

  // ── Toggle switch component ──
  const Toggle = ({ value, onChange }) => (
    <div
      onClick={() => { onChange(!value); changed() }}
      style={{
        width: '44px', height: '24px', borderRadius: '12px', flexShrink: 0,
        background: value ? '#3C65F5' : '#ccc',
        position: 'relative', cursor: 'pointer', transition: 'background .2s',
      }}
    >
      <div style={{
        position: 'absolute', top: '3px',
        left: value ? '22px' : '3px',
        width: '18px', height: '18px', borderRadius: '50%',
        background: '#fff', transition: 'left .2s',
        boxShadow: '0 1px 3px rgba(0,0,0,.2)',
      }} />
    </div>
  )

  const auditLog = [
    { img: 'avata2', name: 'Sarah Jenkins',    action: 'updated Enterprise Credit Pack price from $219 to $249',  time: '12 mins ago' },
    { img: 'avata3', name: 'Robert Chen',      action: 'enabled Geo-Fencing for European Union countries',         time: '4 hours ago' },
    { img: 'avata1', name: 'System Automator', action: 'auto-refreshed session timeout token for Security Group 4', time: '6 hours ago' },
    { img: 'avata4', name: 'Elena Rodriguez',  action: "disabled 'Anonymous Browsing' toggle in General Settings",  time: 'Yesterday at 4:12 PM' },
    { img: 'avata2', name: 'Sarah Jenkins',    action: 'modified tax percentage to 12% (standard)',                 time: 'Oct 24, 2023' },
    { img: 'avata5', name: 'David Miller',     action: "added 'Spanish' as a secondary supported language",          time: 'Oct 23, 2023' },
    { img: 'avata3', name: 'Robert Chen',      action: 'updated Platform Entry Fee for premium agencies',            time: 'Oct 23, 2023' },
  ]

  return (
    <>
      {/* ── PAGE HEADING ── */}
      <div className="box-heading d-flex">
        <div className="box-title mb-5">
          <h3 className="mb-5 mt-5">Platform Configuration</h3>
          <p className="font-sm color-text-paragraph-2 mb-5">
            Manage global business rules, pricing strategies, and system-wide security settings.
          </p>
        </div>
        
          <div className="box-breadcrumb">
            <div className="breadcrumbs">
              <ul>
                <li><a className="icon-home" href="/dashboard">Admin</a></li>
                <li><span>Settings</span></li>
              </ul>
            </div>
          </div>

      </div>

      {/* ── MAIN 3-COLUMN LAYOUT ── */}
      <div className="row">

        {/* ════ LEFT: Registration & Access + Credit Pack Pricing ════ */}
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12">

          {/* Registration & Access */}
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: '#EEF3FE', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                  }}>&#128100;</div>
                  <div>
                    <h5 className="mb-0">Registration &amp; Access</h5>
                    <p className="font-xs color-text-paragraph-2 mb-0">Control who can join the platform and how.</p>
                  </div>
                </div>
              </div>

              <div className="panel-body">

                {/* Enable New Registrations toggle */}
                <div className="hover-up mb-10" style={{
                  border: '1px solid #E0E6F7', borderRadius: '10px',
                  padding: '14px 16px', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                }}>
                  <div>
                    <p className="font-sm mb-3" style={{ fontWeight: 600, color: '#05264E' }}>Enable New Registrations</p>
                    <p className="font-xs color-text-paragraph-2 mb-0">Allow new candidates and employers to create accounts.</p>
                  </div>
                  <Toggle value={enableRegistrations} onChange={setEnableRegistrations} />
                </div>

                {/* Registration Verification toggle */}
                <div className="hover-up mb-20" style={{
                  border: '1px solid #E0E6F7', borderRadius: '10px',
                  padding: '14px 16px', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                }}>
                  <div>
                    <p className="font-sm mb-3" style={{ fontWeight: 600, color: '#05264E' }}>Registration Verification</p>
                    <p className="font-xs color-text-paragraph-2 mb-0">Mandate manual approval for all new employer accounts.</p>
                  </div>
                  <Toggle value={registrationVerification} onChange={setRegistrationVerification} />
                </div>

                {/* Platform Entry Fee */}
                <div className="form-group mb-5">
                  <label className="font-xs color-text-paragraph-2 mb-5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                    Platform Entry Fee
                  </label>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      position: 'absolute', left: '14px', top: '50%',
                      transform: 'translateY(-50%)', color: '#888', fontWeight: 600,
                    }}>$</span>
                    <input
                      className="form-control"
                      type="number"
                      value={platformFee}
                      onChange={e => { setPlatformFee(e.target.value); changed() }}
                      style={{ paddingLeft: '28px' }}
                    />
                  </div>
                  <p className="font-xs color-text-paragraph-2 mt-5 mb-0" style={{ fontStyle: 'italic' }}>
                    One-time registration fee for premium employers.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Credit Pack Pricing */}
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: '#FFF0EA', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                  }}>&#128181;</div>
                  <div>
                    <h5 className="mb-0">Credit Pack Pricing</h5>
                    <p className="font-xs color-text-paragraph-2 mb-0">Configure the cost of platform credits.</p>
                  </div>
                </div>
                <button
                  className="btn btn-grey-small hover-up"
                  onClick={addPack}
                  style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}
                >
                  &#8853; Add Pack
                </button>
              </div>

              <div className="panel-body">
                {packs.map((pk) => (
                  <div key={pk.id} className="hover-up" style={{
                    padding: '12px 0',
                    borderBottom: '1px solid #f5f5f5',
                    display: 'flex', alignItems: 'center', gap: '10px',
                  }}>
                    {editingPack === pk.id ? (
                      /* Edit mode */
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <input className="form-control font-sm" value={pk.name}
                          onChange={e => updatePack(pk.id, 'name', e.target.value)}
                          placeholder="Pack name" style={{ padding: '5px 10px' }} />
                        <input className="form-control font-xs" value={pk.credits}
                          onChange={e => updatePack(pk.id, 'credits', e.target.value)}
                          placeholder="e.g. 500 Credits" style={{ padding: '5px 10px' }} />
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <input className="form-control font-sm" value={pk.price}
                            onChange={e => updatePack(pk.id, 'price', e.target.value)}
                            placeholder="Price" style={{ padding: '5px 10px', flex: 1 }} />
                          <button className="btn btn-default hover-up"
                            onClick={() => setEditingPack(null)}
                            style={{ padding: '5px 12px', fontSize: '12px' }}>✓</button>
                        </div>
                      </div>
                    ) : (
                      /* View mode */
                      <>
                        <div style={{ flex: 1 }}>
                          <p className="font-sm mb-0" style={{ fontWeight: 600, color: '#05264E' }}>{pk.name}</p>
                          <span className="font-xs color-text-paragraph-2">{pk.credits}</span>
                        </div>
                        <strong style={{ color: '#3C65F5', fontSize: '14px', whiteSpace: 'nowrap' }}>${pk.price}</strong>
                        <button
                          onClick={() => setEditingPack(pk.id)} title="Edit pack"
                          style={{ background: 'none', border: 'none', color: '#b0b7c3', cursor: 'pointer', fontSize: '14px', padding: '2px 4px' }}>
                          ✎
                        </button>
                        <button
                          onClick={() => { deletePack(pk.id); changed() }} title="Delete pack"
                          style={{ background: 'none', border: 'none', color: '#e57373', cursor: 'pointer', fontSize: '14px', padding: '2px 4px' }}>
                          &#128465;
                        </button>
                      </>
                    )}
                  </div>
                ))}

                {/* Platform Service Tax */}
                <div style={{ padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="font-sm" style={{ fontWeight: 600, color: '#05264E' }}>Platform Service Tax</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input className="form-control font-sm" value={serviceTax}
                      onChange={e => { setServiceTax(e.target.value); changed() }}
                      style={{ width: '120px', padding: '4px 8px', textAlign: 'right', color: '#3C65F5', fontWeight: 600 }} />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ════ MIDDLE: Regional & Compliance + System Security ════ */}
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12">

          {/* Regional & Compliance */}
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: '#E8F5E9', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                  }}>&#127760;</div>
                  <div>
                    <h5 className="mb-0">Regional &amp; Compliance</h5>
                    <p className="font-xs color-text-paragraph-2 mb-0">Localization and market restrictions.</p>
                  </div>
                </div>
              </div>

              <div className="panel-body">

                {/* Base Currency */}
                <div className="form-group mb-20">
                  <label className="font-xs color-text-paragraph-2 mb-5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                    Base Currency
                  </label>
                  <select className="form-control select2"
                    value={currency} onChange={e => { setCurrency(e.target.value); changed() }}>
                    <option>USD - United States Dollar ($)</option>
                    <option>EUR - Euro (€)</option>
                    <option>GBP - British Pound (£)</option>
                    <option>INR - Indian Rupee (₹)</option>
                    <option>AUD - Australian Dollar (A$)</option>
                  </select>
                </div>

                {/* Default Language */}
                <div className="form-group mb-20">
                  <label className="font-xs color-text-paragraph-2 mb-5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                    Default Language
                  </label>
                  <select className="form-control select2"
                    value={language} onChange={e => { setLanguage(e.target.value); changed() }}>
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Hindi</option>
                    <option>French</option>
                    <option>Spanish</option>
                    <option>German</option>
                  </select>
                </div>

                {/* Geo-Fencing toggle */}
                <div className="hover-up" style={{
                  border: '1px solid #E0E6F7', borderRadius: '10px',
                  padding: '14px 16px', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                }}>
                  <div>
                    <p className="font-sm mb-3" style={{ fontWeight: 600, color: '#05264E' }}>Geo-Fencing</p>
                    <p className="font-xs color-text-paragraph-2 mb-0">Restrict platform access by region.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {geoFencing && (
                      <span style={{
                        fontSize: '11px', fontWeight: 700, padding: '3px 10px',
                        borderRadius: '20px', background: '#e8f4fd', color: '#1565c0',
                        border: '1px solid #90caf9',
                      }}>Active</span>
                    )}
                    <Toggle value={geoFencing} onChange={setGeoFencing} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* System Security */}
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: '#F3E5F5', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                  }}>&#128737;</div>
                  <div>
                    <h5 className="mb-0">System Security</h5>
                    <p className="font-xs color-text-paragraph-2 mb-0">Admin authentication and session rules.</p>
                  </div>
                </div>
              </div>

              <div className="panel-body">

                {/* Session Timeout */}
                <div className="form-group mb-20">
                  <label className="font-xs color-text-paragraph-2 mb-5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                    Session Timeout Value
                  </label>
                  <select className="form-control select2"
                    value={sessionTimeout} onChange={e => { setSessionTimeout(e.target.value); changed() }}>
                    <option>15 Minutes</option>
                    <option>30 Minutes</option>
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>Never</option>
                  </select>
                </div>

                {/* Enforce Admin MFA toggle */}
                <div className="hover-up mb-10" style={{
                  border: `1px solid ${enforceMFA ? '#90caf9' : '#E0E6F7'}`,
                  borderRadius: '10px', padding: '14px 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                  background: enforceMFA ? '#F0F6FF' : '#fff',
                }}>
                  <div>
                    <p className="font-sm mb-3" style={{ fontWeight: 600, color: enforceMFA ? '#1565c0' : '#05264E' }}>
                      Enforce Admin MFA
                    </p>
                    <p className="font-xs color-text-paragraph-2 mb-0">Requires 2FA for all panel access.</p>
                  </div>
                  <Toggle value={enforceMFA} onChange={setEnforceMFA} />
                </div>

                {/* Maintenance Mode toggle */}
                <div className="hover-up" style={{
                  border: `1px solid ${maintenanceMode ? '#ffcc80' : '#E0E6F7'}`,
                  borderRadius: '10px', padding: '14px 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                  background: maintenanceMode ? '#FFFDE7' : '#fff',
                }}>
                  <div>
                    <p className="font-sm mb-3" style={{ fontWeight: 600, color: '#05264E' }}>Maintenance Mode</p>
                    <p className="font-xs color-text-paragraph-2 mb-0">Redirect public users to maintenance page.</p>
                  </div>
                  <Toggle value={maintenanceMode} onChange={setMaintenanceMode} />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ════ RIGHT: Change History ════ */}
        <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
          <div className="section-box">
            <div className="panel-white">
              <div className="panel-head">
                <div className="d-flex align-items-center" style={{ gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>&#128336;</span>
                  <h5 className="mb-0">Change History</h5>
                </div>
              
              </div>

              <div className="panel-body">
                {auditLog.map((entry, i) => (
                  <div key={i} className="hover-up" style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '12px 0',
                    borderBottom: i < auditLog.length - 1 ? '1px solid #f5f5f5' : 'none',
                  }}>
                    <img src={`/assets/imgs/page/dashboard/${entry.img}.png`} alt={entry.name}
                      style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="font-xs mb-3" style={{ color: '#05264E', lineHeight: 1.5 }}>
                        <strong>{entry.name}</strong> {entry.action}
                      </p>
                      <span className="font-xs color-text-paragraph-2">
                        &#9203; {entry.time}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-15">
                  <a className="font-sm color-brand-1 hover-up" href="#"
                    style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View Full Audit Log ›
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM ACTION BAR ── */}
      <div className="section-box">
        <div className="panel-white" style={{ padding: '16px 20px' }}>
          <div className="d-flex align-items-center justify-content-between" style={{ flexWrap: 'wrap', gap: '12px' }}>

            {/* Left: validation status + last saved */}
            <div className="d-flex align-items-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <span className="font-xs" style={{ color: '#2e7d32', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ fontSize: '14px' }}>&#10003;</span> All settings validated
              </span>
              <span style={{ color: '#ddd' }}>|</span>
              <span className="font-xs color-text-paragraph-2">
                Last saved on Oct 25, 2023 &bull; 09:44 AM
              </span>
            </div>

            {/* Right: Cancel & Save buttons */}
            <div className="d-flex" style={{ gap: '10px', flexShrink: 0 }}>
              <button
                className="btn btn-secondary hover-up"
                onClick={() => setUnsaved(false)}
                style={{ padding: '10px 20px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                Cancel &amp; Reset
              </button>
              <button
                className="btn btn-primary hover-up"
                onClick={() => setUnsaved(false)}
                style={{ padding: '10px 24px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                &#128190; Save Configuration Changes
              </button>
            </div>

          </div>
        </div>
      </div>

      

      <Footer />
    </>
  )
}