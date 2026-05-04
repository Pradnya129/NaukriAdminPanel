'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Card({ children, step }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#F5F7FF', padding: '20px',
    }}>
      <div style={{
        width: '100%', maxWidth: '440px',
        background: '#fff', borderRadius: '16px',
        boxShadow: '0 8px 40px rgba(60,101,245,0.10)',
        padding: '40px 40px 36px',
      }}>
        {/* Logo */}
        <div className="text-center mb-30">
          <img src="/assets/imgs/page/dashboard/logo.svg" alt="Admin Portal"
            style={{ height: '36px', marginBottom: '20px' }} />

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            {[1, 2, 3].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 700,
                  background: step >= s ? '#3C65F5' : '#E0E6F7',
                  color: step >= s ? '#fff' : '#888',
                  border: step === s ? '3px solid #93b4ff' : '3px solid transparent',
                  transition: 'all .3s',
                }}>
                  {step > s ? '✓' : s}
                </div>
                {i < 2 && (
                  <div style={{
                    width: '48px', height: '2px',
                    background: step > s ? '#3C65F5' : '#E0E6F7',
                    transition: 'all .3s',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Step labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-16px', marginBottom: '8px', padding: '0 4px' }}>
            {['Identify', 'Verify OTP', 'Success'].map((label, i) => (
              <span key={label} style={{
                fontSize: '9px', fontWeight: step === i + 1 ? 700 : 400,
                color: step === i + 1 ? '#3C65F5' : '#aaa',
                letterSpacing: '0.3px', textTransform: 'uppercase',
                width: '33%', textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right',
              }}>{label}</span>
            ))}
          </div>
        </div>

        {children}
      </div>
    </div>
  )
}

export default function LoginPage() {
  const router = useRouter()

  const [step,        setStep]        = useState(1)
  const [identifier,  setIdentifier]  = useState('')
  const [dummyOtp,    setDummyOtp]    = useState('')
  const [otp,         setOtp]         = useState(['', '', '', '', '', ''])
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState('')
  const [resendTimer, setResendTimer] = useState(30)
  const [canResend,   setCanResend]   = useState(false)

  const otpRefs = useRef([])

  useEffect(() => {
    if (step !== 2) return
    setResendTimer(30)
    setCanResend(false)
    const interval = setInterval(() => {
      setResendTimer(t => {
        if (t <= 1) { clearInterval(interval); setCanResend(true); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [step])

  const generateOtp = () => String(Math.floor(100000 + Math.random() * 900000))

  // ── STEP 1: Send OTP ──
  const handleSendOtp = (e) => {
    e.preventDefault()
    setError('')

    if (!identifier.trim()) {
      setError('Please enter your email or mobile number.')
      return
    }
    const isEmail   = identifier.includes('@')
    const isPhone   = /^\+?[0-9]{10,13}$/.test(identifier.replace(/\s/g, ''))
    if (!isEmail && !isPhone) {
      setError('Enter a valid email address or 10-digit mobile number.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      const otp6 = generateOtp()
      setDummyOtp(otp6)
      setOtp(['', '', '', '', '', ''])
      setLoading(false)
      setStep(2)

      // ── Show OTP in browser alert (dev/demo only — remove when real SMS/email API is wired) ──
      alert(`\nYour OTP for ${identifier} is:\n${otp6}\n(This alert will not appear in production.)`)

      // Auto-focus first OTP box after alert is dismissed
      setTimeout(() => otpRefs.current[0]?.focus(), 50)
    }, 1000)
  }

  // ── OTP box: typing ──
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    setError('')
    if (value && index < 5) otpRefs.current[index + 1]?.focus()
  }

  // ── OTP box: backspace ──
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  // ── OTP box: paste ──
  const handleOtpPaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    const newOtp = ['', '', '', '', '', '']
    pasted.split('').forEach((ch, i) => { if (i < 6) newOtp[i] = ch })
    setOtp(newOtp)
    otpRefs.current[Math.min(pasted.length, 5)]?.focus()
  }

  // ── STEP 2: Verify OTP ──
  const handleVerifyOtp = (e) => {
    e.preventDefault()
    setError('')
    const entered = otp.join('')
    if (entered.length < 6) {
      setError('Please enter all 6 digits.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (entered !== dummyOtp) {
        setError('Invalid OTP. Please check and try again.')
        return
      }
      setStep(3)
      setTimeout(() => router.push('/admin/dashboard'), 1800)
    }, 1000)
  }

  // ── Resend OTP ──
  const handleResend = () => {
    if (!canResend) return
    const otp6 = generateOtp()
    setDummyOtp(otp6)
    setOtp(['', '', '', '', '', ''])
    setError('')

    // Show new OTP via alert
    alert(`[DEV MODE]\n\nNew OTP for ${identifier} is:\n\n${otp6}`)

    setStep(1)
    setTimeout(() => {
      setStep(2)
      setTimeout(() => otpRefs.current[0]?.focus(), 100)
    }, 50)
  }

  // ════ STEP 1 — Enter Email / Mobile ════
  if (step === 1) {
    return (
      <Card step={1}>
        <div className="text-center mb-25">
          <h3 className="mb-5" style={{ color: '#05264E' }}>Admin Login</h3>
          <p className="font-sm color-text-paragraph-2 mb-0">
            Enter your registered email or mobile number to receive an OTP.
          </p>
        </div>

        <form onSubmit={handleSendOtp}>
          <div className="form-group mb-20">
            <label className="font-sm color-text-paragraph-2 mb-8"
              style={{ display: 'block', fontWeight: 600 }}>
              Email or Mobile Number *
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="admin@skillbridge.io  or  +91 98000 00000"
              value={identifier}
              onChange={e => { setIdentifier(e.target.value); setError('') }}
              style={{ height: '48px', fontSize: '14px' }}
              autoFocus
            />
          </div>

          {error && (
            <div style={{
              background: '#fdecea', border: '1px solid #ef9a9a',
              borderRadius: '8px', padding: '10px 14px', marginBottom: '16px',
            }}>
              <span className="font-xs" style={{ color: '#c62828', fontWeight: 600 }}>⚠ {error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-default hover-up w-100"
            style={{ height: '48px', fontSize: '15px', fontWeight: 700 }}
            disabled={loading}
          >
            {loading ? '● Sending OTP...' : 'Send OTP →'}
          </button>
        </form>

        <p className="font-xs color-text-paragraph-2 text-center mt-20 mb-0">
          🛡 Protected by 2-Factor Authentication
        </p>
      </Card>
    )
  }

  // ════ STEP 2 — Enter OTP ════
  if (step === 2) {
    return (
      <Card step={2}>
        <div className="text-center mb-25">
          <div style={{ fontSize: '38px', marginBottom: '10px' }}>📱</div>
          <h3 className="mb-5" style={{ color: '#05264E' }}>Verify OTP</h3>
          <p className="font-sm color-text-paragraph-2 mb-3">
            We sent a 6-digit code to
          </p>
          <p className="font-sm mb-0" style={{ fontWeight: 700, color: '#3C65F5' }}>
            {identifier}
          </p>
        </div>

        <form onSubmit={handleVerifyOtp}>

          {/* OTP Input Boxes */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => otpRefs.current[index] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleOtpChange(index, e.target.value)}
                onKeyDown={e => handleOtpKeyDown(index, e)}
                onPaste={index === 0 ? handleOtpPaste : undefined}
                style={{
                  width: '48px', height: '54px',
                  textAlign: 'center', fontSize: '22px', fontWeight: 700,
                  border: `2px solid ${digit ? '#3C65F5' : '#E0E6F7'}`,
                  borderRadius: '10px', outline: 'none',
                  color: '#05264E',
                  background: digit ? '#EEF3FE' : '#fff',
                  transition: 'border-color .15s, background .15s',
                }}
                onFocus={e => {
                  e.target.style.borderColor = '#3C65F5'
                  e.target.style.boxShadow = '0 0 0 3px rgba(60,101,245,0.15)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = digit ? '#3C65F5' : '#E0E6F7'
                  e.target.style.boxShadow = 'none'
                }}
              />
            ))}
          </div>

          {error && (
            <div style={{
              background: '#fdecea', border: '1px solid #ef9a9a',
              borderRadius: '8px', padding: '10px 14px', marginBottom: '16px',
            }}>
              <span className="font-xs" style={{ color: '#c62828', fontWeight: 600 }}>⚠ {error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-default hover-up w-100"
            style={{ height: '48px', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}
            disabled={loading || otp.join('').length < 6}
          >
            {loading ? 'Verifying...' : '✓ Verify & Login'}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              style={{
                background: 'none', border: 'none', padding: '0',
                fontSize: '13px', fontWeight: 600,
                color: canResend ? '#3C65F5' : '#aaa',
                cursor: canResend ? 'pointer' : 'default',
              }}
            >
              {canResend ? '↺ Resend OTP' : `Resend in ${resendTimer}s`}
            </button>
            <button
              type="button"
              onClick={() => { setStep(1); setOtp(['', '', '', '', '', '']); setError('') }}
              style={{ background: 'none', border: 'none', padding: '0', fontSize: '13px', color: '#888', cursor: 'pointer' }}
            >
              ← Change Email / Number
            </button>
          </div>

        </form>
      </Card>
    )
  }

  // ════ STEP 3 — Success ════
  if (step === 3) {
    return (
      <Card step={3}>
        <div className="text-center">
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: '#e8f5e9', border: '3px solid #a5d6a7',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '32px', margin: '0 auto 20px',
          }}>✓</div>
          <h3 className="mb-8" style={{ color: '#2e7d32' }}>Login Successful!</h3>
          <p className="font-sm color-text-paragraph-2 mb-3">Verified as</p>
          <p className="font-sm mb-20" style={{ fontWeight: 700, color: '#3C65F5' }}>{identifier}</p>
          <p className="font-sm color-text-paragraph-2 mb-20">Redirecting to dashboard...</p>

          <div style={{ height: '5px', background: '#E0E6F7', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', background: '#3C65F5', borderRadius: '3px',
              animation: 'fillBar 1.8s linear forwards',
            }} />
          </div>

          <style>{`
            @keyframes fillBar { from { width: 0% } to { width: 100% } }
          `}</style>
        </div>
      </Card>
    )
  }

  return null
}