'use client'

import Footer from "../../../components/Footer"
import Link from "next/link"

const recruiters = [
  {
    id: 1,
    logo: "user1.png",
    company: "TechNova Solutions",
    sector: "Information Technology",
    person: "Sarah Jenkins",
    email: "sarah@technova.io",
    plan: "Paid",
    gst: "Verified",
    status: "Active",
    registered: "2023-10-12"
  },
  {
    id: 2,
    logo: "user2.png",
    company: "GreenLeaf Organic",
    sector: "Retail & FMCG",
    person: "Marcus Vane",
    email: "marcus@greenleaf.com",
    plan: "Trial",
    gst: "Pending",
    status: "Pending",
    registered: "2024-01-05"
  },
  {
    id: 3,
    logo: "user3.png",
    company: "Stellar Logistics",
    sector: "Supply Chain",
    person: "Rajesh Kumar",
    email: "rajesh@stellar.com",
    plan: "Paid",
    gst: "Rejected",
    status: "Suspended",
    registered: "2023-08-20"
  },
  {
    id: 4,
    logo: "user4.png",
    company: "CloudBridge Systems",
    sector: "Cloud Services",
    person: "Emily Chen",
    email: "emily@cloudbridge.com",
    plan: "Paid",
    gst: "Verified",
    status: "Active",
    registered: "2023-11-28"
  },
  {
    id: 5,
    logo: "user5.png",
    company: "Astra Finance",
    sector: "Banking & Finance",
    person: "David Miller",
    email: "david@astrafin.com",
    plan: "Trial",
    gst: "Verified",
    status: "Active",
    registered: "2024-01-15"
  }
]

export default function RecruiterPage() {
  return (
    <>

      {/* Header */}
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-5">Recruiter Management</h3>
          <p className="font-sm color-text-paragraph-2">
            Manage employer accounts, verifications and subscription tiers.
          </p>
        </div>

        <div className="box-breadcrumb">
          <div className="breadcrumbs mb-15">
            <ul>
              <li>
                <a className="icon-home" href="/admin/dashboard">
                  Admin
                </a>
              </li>
              <li>
                <span>Recruiters</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

     {/* Stats */}
<div className="section-box mt-20">
  <div className="row g-3">

    {/* 1 */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <div className="panel-white ">
        <div className="box-padding d-flex align-items-center" style={{ gap: '12px' }}>

          {/* ICON */}
          <div className="card-image">
            <img src="/assets/imgs/page/dashboard/candidates.svg" alt="" style={{height:'40px'}} />
          </div>

          {/* TEXT */}
          <div>
            <p className="font-sm color-text-paragraph-2 mb-5">
              Total Employers
            </p>
            <h3 className="mb-5">1,284</h3>
            <span className="color-success font-sm">
              +12% registered accounts
            </span>
          </div>

        </div>
      </div>
    </div>

    {/* 2 */}
    <div className="col-xl-3 col-lg-6 col-md-6" >
      <div className="panel-white " style={{height:'172px'}}>
        <div className="box-padding d-flex align-items-center" style={{ gap: '12px' }}>

          <div className="card-image">
            <img src="/assets/imgs/page/dashboard/tasks.svg" alt="" style={{height:'40px'}} />
          </div>

          <div>
            <p className="font-sm color-text-paragraph-2 mb-5">
              Pending Approvals
            </p>
            <h3 className="mb-5">24</h3>
            <span className="font-sm">
              awaiting verification
            </span>
          </div>

        </div>
      </div>
    </div>

    {/* 3 */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <div className="panel-white " style={{height:'172px'}}>
        <div className="box-padding d-flex align-items-center" style={{ gap: '12px' }}>

          <div className="card-image">
            <img src="/assets/imgs/page/dashboard/authentication.svg" alt="" style={{height:'40px'}} />
          </div>

          <div>
            <p className="font-sm color-text-paragraph-2 mb-5">
              GST Verified
            </p>
            <h3 className="mb-5">92%</h3>
            <span className="font-sm">
              of total database
            </span>
          </div>

        </div>
      </div>
    </div>

    {/* 4 */}
    <div className="col-xl-3 col-lg-6 col-md-6">
      <div className="panel-white h-80">
        <div className="box-padding d-flex align-items-center" style={{ gap: '12px' }}>

          <div className="card-image">
            <img src="/assets/imgs/page/dashboard/doc.svg" alt="" style={{height:'40px'}} />
          </div>

          <div>
            <p className="font-sm color-text-paragraph-2 mb-5">
              Active Subscriptions
            </p>
            <h3 className="mb-5">842</h3>
            <span className="color-success font-sm">
              +5% paid enterprise plans
            </span>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

      {/* Search + Filters */}
      <div className="section-box">
        <div className="panel-white mb-20">
          <div className="box-padding">
            <div className="row g-3 align-items-end">

              <div className="col-xl-5 col-lg-12">
                <label className="font-sm mb-10">
                  Search
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Company, Email or GST..."
                />
              </div>

              <div className="col-xl-7 col-lg-12">
                <div className="row g-2 align-items-end">

                  {/* Plan */}
                  <div className="col-md-3 col-6">
                    <select className="form-control filter-select">
                      <option>Plan: All</option>
                      <option>Paid</option>
                      <option>Trial</option>
                    </select>
                  </div>

                  {/* GST */}
                  <div className="col-md-3 col-6">
                    <select className="form-control filter-select">
                      <option>GST: All</option>
                      <option>Verified</option>
                      <option>Pending</option>
                      <option>Rejected</option>
                    </select>
                  </div>

                  {/* Status (FIXED) */}
                  <div className="col-md-3 col-6">
                    <select className="form-control filter-select">
                      <option>Status: All</option>
                      <option>Active</option>
                      <option>Pending</option>
                      <option>Suspended</option>
                    </select>
                  </div>

                  {/* Clear */}
                  <div className="col-md-3 col-6">
                    <button className="btn btn-grey-small w-100 h-100  py-3">
                      Clear Filters
                    </button>
                  </div>

                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="section-box">
        <div className="panel-white">
          <div className="box-padding">

            <div className="table-responsive">
              <table className="table table-hover align-middle">

                <thead>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <th style={{ minWidth: "260px" }}>
                      Employer / Company
                    </th>
                    <th style={{ minWidth: "220px" }}>
                      Contact Person
                    </th>
                    <th>Plan</th>
                    <th>GST Status</th>
                    <th>Status</th>
                    <th>Registered</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {recruiters.map((r) => (
                    <tr key={r.id}>

                      {/* Company */}
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <img
                            src={`/assets/imgs/page/candidates/${r.logo}`}
                            style={{
                              width: "46px",
                              height: "46px",
                              borderRadius: "50%",
                              objectFit: "cover"
                            }}
                          />

                          <div className="ms-3">
                            <h6 className="mb-0">{r.company}</h6>
                            <span className="font-sm color-text-paragraph-2">
                              {r.sector}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td>
                        <h6 className="mb-0">{r.person}</h6>
                        <span className="font-sm color-text-paragraph-2">
                          {r.email}
                        </span>
                      </td>

                      {/* Plan */}
                      <td>
                        <span className="btn btn-tags-sm">
                          {r.plan}
                        </span>
                      </td>

                      {/* GST */}
                      <td>
                        <span className="btn btn-tags-sm">
                          {r.gst}
                        </span>
                      </td>

                      {/* Status */}
                      <td>
                        <span className="btn btn-tags-sm">
                          {r.status}
                        </span>
                      </td>

                      {/* Registered */}
                      <td style={{ minWidth: "120px" }}>{r.registered}</td>

                      {/* Actions */}
                      <td>
                        <div className="d-flex gap-2">

                          <Link
                            href={`/admin/recruiters/Edit?id=${r.id}`}
                            className="btn btn-grey-small"
                          >
                            <i className="fi-rr-edit"></i>
                          </Link>

                          <button className="btn btn-grey-small">
                            <i className="fi-rr-trash"></i>
                          </button>

                          <Link
                            href={`/admin/recruiters/details?id=${r.id}`}
                            className="btn btn-grey-small"
                          >
                            <i className="fi-rr-eye"></i>
                          </Link>

                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center mt-25 flex-wrap gap-2">
              <p className="font-sm color-text-paragraph-2 mb-0">
                Showing 5 of 1,284 employers
              </p>

              <div className="d-flex gap-2">
                <button className="action-btn">
                  Previous
                </button>

                <button className="action-btn primary-fill">
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}