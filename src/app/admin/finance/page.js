'use client';

import { useState } from "react";
import Footer from "../../../components/Footer";

export default function FinancePage() {

  const [activeTab, setActiveTab] = useState("transactions");

  // ───────── DATA ─────────
  const transactions = [
    { id: "TXN-8821", name: "TechFlow Solutions", type: "Credit Purchase", amt: "$1250.00", status: "Completed" },
    { id: "TXN-8822", name: "Sarah Jenkins", type: "Subscription", amt: "$49.00", status: "Completed" },
    { id: "TXN-8823", name: "Apex Recruitment", type: "Credit Purchase", amt: "$2500.00", status: "Pending" },
  ];

  const invoices = [
    { id: "INV-1001", client: "TechFlow", amt: "$1200", status: "Paid" },
    { id: "INV-1002", client: "Apex", amt: "$800", status: "Pending" },
  ];

  const refunds = [
    { id: "REF-201", client: "Global Talent", amt: "-$150", status: "Completed" },
  ];

  const deposits = [
    { id: "DEP-301", source: "Stripe", amt: "$5000", status: "Success" },
  ];

  return (
    <div className="page-content">

      {/* ───────── HEADER ───────── */}
  <div className="box-heading d-flex justify-content-between align-items-center flex-wrap gap-3">

  <div className="box-title">
    <h3 className="mb-5">Payments & Finance</h3>
    <p className="color-text-paragraph-2 mb-0">
      Manage platform transactions, credits, and revenue performance.
    </p>
  </div>


  <div className="d-flex align-items-center  flex-wrap gap-2">
 
 <div className="box-breadcrumb w-100">
          <div className="breadcrumbs">
            <ul>
              <li><a className="icon-home" href="/admin/dashboard">Admin</a></li>
              {/* <li><a href="/admin/finance">Candidates</a></li> */}
              <li><span>Finance</span></li>
            </ul>
          </div>
  
        </div>

  </div>
    <input
      className="form-control mt-2"
      placeholder="Search invoice #"
      style={{ height: '44px', minWidth: '250px',maxWidth:'400px' }}
    />
</div>

      {/* ───────── STATS ───────── */}
<div className="row mt-20">

  {[
    {
      title: "TOTAL REVENUE",
      value: "$148,290",
      change: "+12.4%",
      icon: "fi-rr-dollar"
    },
    {
      title: "CREDITS SOLD",
      value: "842,500",
      change: "+8.1%",
      icon: "fi-rr-credit-card"
    },
    {
      title: "REFUNDS PROCESSED",
      value: "$1,420",
      change: "-2.3%",
      icon: "fi-rr-refresh"
    },
    {
      title: "TOTAL PAYOUTS",
      value: "$42,105",
      change: "+5.4%",
      icon: "fi-rr-wallet"
    }
  ].map((item, i) => (

    <div key={i} className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-3">

      <div className="card-style-1 hover-up">

        {/* ICON */}
        <div className="" style={{
          width: '40px',
          height: '45px',
          borderRadius: '12px',
          background: '#eef2ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <i className={item.icon} style={{ fontSize: '18px', color: '#3C65F5' }}></i>
        </div>

        {/* CONTENT */}
        <div className="card-info">

          <div className="card-title">
            <h3>
              {item.value}<br></br>
              <span className={`font-sm status ${item.change.includes('-') ? 'down' : 'up'}`}>
                {item.change}
              </span>
            </h3>
          </div>

          <p className="color-text-paragraph-2" style={{ fontSize: "12px" }}>
            {item.title}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

      {/* ───────── CHART ───────── */}
      <div className="panel-white mt-10">

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-20">

          <div>
            <h5 className="mb-0">Revenue Growth Trend</h5>
            <p className="color-text-paragraph-2 mb-0">
              Daily revenue aggregated across all platforms over the last 30 days.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-light btn-sm">
              <i className="fi-rr-calendar mr-5"></i> Last 30 Days
            </button>
            <button className="btn btn-light btn-sm">
              <i className="fi-rr-download mr-5"></i> Export CSV
            </button>
          </div>

        </div>

        {/* Chart Placeholder */}
        <div style={{ height: '260px', position: 'relative', padding: '20px' }}>

  {/* GRID LINES */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "repeating-linear-gradient(to top, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 40px)"
  }} />

  {/* LINE GRAPH */}
  <div style={{
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    height: '200px',
    display: 'flex',
    alignItems: 'flex-end',
    gap: '10px'
  }}>

    {[40, 70, 55, 90, 80, 120, 100].map((val, i) => (
      <div key={i} style={{ flex: 1, position: 'relative' }}>

        {/* LINE POINT */}
        <div style={{
          width: '8px',
          height: '8px',
          background: '#3C65F5',
          borderRadius: '50%',
          position: 'absolute',
          bottom: `${val}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }} />

        {/* BAR (for visual depth) */}
        <div style={{
          width: '6px',
          height: `${val}px`,
          background: 'rgba(60,101,245,0.2)',
          borderRadius: '4px',
          margin: '0 auto'
        }} />

      </div>
    ))}

  </div>

  {/* X AXIS LABELS */}
  <div className="d-flex justify-content-between mt-10" style={{ position: 'absolute', bottom: 0, left: '20px', right: '20px' }}>
    {["1 May", "5 May", "10 May", "15 May", "20 May", "25 May", "30 May"].map((d, i) => (
      <span key={i} style={{ fontSize: '11px', color: '#6b7280' }}>{d}</span>
    ))}
  </div>

</div>

      </div>

      {/* ───────── TABS + TABLE ───────── */}
      <div className="panel-white mt-20">

        {/* Tabs */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2  pb-5" style={{ borderBottom: '1px solid #eee' }}>

          <div className="d-flex gap-2 flex-wrap" >
            {["transactions", "invoices", "refunds", "deposits"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-light'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <button className="btn btn-light btn-sm">
            <i className="fi-rr-filter mr-5"></i> Filters
          </button>

        </div>

        {/* TABLES */}

        <div className="table-responsive">

          {/* TRANSACTIONS */}
          {activeTab === "transactions" && (
            <table className="table table-hover">
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th>TXN ID</th>
                  <th>Recipient</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((row, i) => (
                  <tr key={i}>
                    <td className="font-sm color-text-paragraph-2">{row.id}</td>
                    <td className="font-sm color-text-paragraph-2">{row.name}</td>
                    <td className="font-sm color-text-paragraph-2">{row.type}</td>
                    <td className="font-sm color-text-paragraph-2">{row.amt}</td>
                    <td >
                      <span className={`badge btn-tags-sm ${row.status === 'Completed'
                        ? 'bg-success text-white'
                        : 'bg-warning text-dark'}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* INVOICES */}
          {activeTab === "invoices" && (
            <table className="table">
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th>Invoice ID</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((row, i) => (
                  <tr key={i}>
                    <td className="font-sm color-text-paragraph-2">{row.id}</td>
                    <td className="font-sm color-text-paragraph-2">{row.client}</td>
                    <td className="font-sm color-text-paragraph-2">{row.amt}</td>
                   <span className={`badge btn-tags-sm ${row.status === 'Completed'
                        ? 'bg-success text-white'
                        : 'bg-warning text-dark'}`}>
                        {row.status}
                      </span>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* REFUNDS */}
          {activeTab === "refunds" && (
            <table className="table">
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th>Refund ID</th>
                  <th>Client</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {refunds.map((row, i) => (
                  <tr key={i}>
                    <td className="font-sm color-text-paragraph-2">{row.id}</td>
                    <td className="font-sm color-text-paragraph-2">{row.client}</td>
                    <td className="font-sm color-text-paragraph-2">{row.amt}</td>
                    <span className={`badge btn-tags-sm ${row.status === 'Completed'
                        ? 'bg-success text-white'
                        : 'bg-warning text-dark'}`}>
                        {row.status}
                      </span>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* DEPOSITS */}
          {activeTab === "deposits" && (
            <table className="table">
              <thead>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th>Deposit ID</th>
                  <th>Source</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((row, i) => (
                  <tr key={i}>
                    <td className="font-sm color-text-paragraph-2" >{row.id}</td>
                    <td className="font-sm color-text-paragraph-2">{row.source}</td>
                    <td className="font-sm color-text-paragraph-2">{row.amt}</td>
<span className={`badge btn-tags-sm ${row.status === 'Completed'
                        ? 'bg-success text-white'
                        : 'bg-warning text-dark'}`}>
                        {row.status}
                      </span>                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </div>

        {/* FOOTER */}
        <div className="d-flex justify-content-between align-items-center mt-10 flex-wrap">
          <p className="mb-0">Showing 5 of 1,240 records</p>

          <div className="d-flex gap-2">
            <button className="btn btn-light btn-sm">Previous</button>
            <button className="btn btn-light btn-sm">Next</button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}