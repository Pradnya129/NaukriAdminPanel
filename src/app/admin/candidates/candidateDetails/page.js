'use client'

import Footer from "../../../../components/Footer"

export default function CandidateDetailsPage() {
  return (
    <>
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-5">Candidate Profile</h3>
          <p className="font-sm color-text-paragraph-2">
            Review candidate details, documents, billing records and verification status.
          </p>
        </div>

        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li><a className="icon-home" href="/admin/dashboard">Admin</a></li>
              <li><a href="/admin/candidates">Candidates</a></li>
              <li><span>Alexander Wright</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-box mt-20">
        <div className="row">

          {/* LEFT PROFILE */}
          <div className="col-xl-4 col-lg-5">
            <div className="panel-white mb-20">
              <div className="box-padding text-center">

                <img
                  src="/assets/imgs/page/candidates/user1.png"
                  alt="candidate"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />

                <div className="mt-15">
                  <span className="btn btn-tags-sm">Pending Verification</span>
                </div>

                <p className="font-xs color-text-paragraph-2 mt-10 mb-5">
                  COMPLETENESS
                </p>

                <div className="progress mt-5" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <p className="font-xs mt-5">85%</p>

                <h4 className="mt-20 mb-10">Alexander Wright</h4>

                <p className="font-sm color-text-paragraph-2 mb-5">
                  a.wright@techflow.io
                </p>

                <p className="font-sm color-text-paragraph-2 mb-5">
                  +91 98765 43210
                </p>

                <p className="font-sm color-text-paragraph-2">
                  Registered Oct 12, 2023
                </p>

              </div>
            </div>

            {/* Quick Stats */}
            <div className="row">
              <div className="col-6">
                <div className="panel-white mb-20">
                  <div className="box-padding">
                    <p className="font-xs color-text-paragraph-2 mb-5">
                      ACCOUNT TYPE
                    </p>
                    <h6>Worker / Candidate</h6>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="panel-white mb-20">
                  <div className="box-padding">
                    <p className="font-xs color-text-paragraph-2 mb-5">
                      PAYMENT STATUS
                    </p>
                    <h6 className="color-success">Paid ₹100</h6>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="panel-white mb-20">
                  <div className="box-padding">
                    <p className="font-xs color-text-paragraph-2 mb-5">
                      CREDIT BALANCE
                    </p>
                    <h6>₹500.00</h6>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="panel-white mb-20">
                  <div className="box-padding">
                    <p className="font-xs color-text-paragraph-2 mb-10">
                      QUICK ACTIONS
                    </p>

                    <div className="d-grid gap-2">
                      <button className="btn btn-grey-small">Notify</button>
                      <button className="btn btn-grey-small">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-8 col-lg-7">

            {/* Identity Verification */}
            <div className="panel-white mb-20">
              <div className="box-padding">
                <h5 className="mb-20">Identity Verification</h5>

                <div className="row">
                  <div className="col-md-6">
                    <p className="font-sm mb-5"><strong>ID Type:</strong> Aadhaar</p>
                  </div>

                  <div className="col-md-6">
                    <p className="font-sm mb-5"><strong>ID Number:</strong> XXXX-XXXX-1120</p>
                  </div>
                </div>

                <div className="row mt-15">
                  <div className="col-md-6 mb-15">
                    <img
                      src="/assets/imgs/page/candidates/user1.png"
                      className="img-responsive"
                      style={{ borderRadius: "12px", width: "100%" }}
                    />
                  </div>

                  <div className="col-md-6 mb-15">
                    <img
                      src="/assets/imgs/page/candidates/user1.png"
                      className="img-responsive"
                      style={{ borderRadius: "12px", width: "100%" }}
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Certificate */}
            <div className="panel-white mb-20">
              <div className="box-padding">
                <h5 className="mb-20">ITI Certificate (AI Extracted)</h5>

                <div
                  className="text-center p-5 mb-20"
                  style={{
                    border: "1px dashed #d8d8d8",
                    borderRadius: "14px",
                    minHeight: "260px"
                  }}
                >
                  <p className="mt-50 color-text-paragraph-2">
                    Certificate Preview
                  </p>

                  <button className="btn btn-grey-big mt-20">
                    View Original
                  </button>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="panel-white mb-15">
                      <div className="box-padding">
                        <p className="font-xs">TRADE</p>
                        <h6>Electrician</h6>
                        <span className="btn btn-tags-sm">98% AI Confidence</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="panel-white mb-15">
                      <div className="box-padding">
                        <p className="font-xs">INSTITUTE</p>
                        <h6>Government ITI, Mumbai</h6>
                        <span className="btn btn-tags-sm">95% AI Confidence</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="panel-white mb-15">
                      <div className="box-padding">
                        <p className="font-xs">YEAR OF PASSING</p>
                        <h6>2021</h6>
                        <span className="btn btn-tags-sm">92% AI Confidence</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="panel-white mb-15">
                      <div className="box-padding">
                        <p className="font-xs">CERTIFICATE NUMBER</p>
                        <h6>CERT-88291-B</h6>
                        <span className="btn btn-tags-sm">45% Confidence</span>
                        <p className="font-xs color-danger mt-5">
                          Manual review recommended
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Billing */}
            <div className="panel-white mb-20">
              <div className="box-padding">
                <h5 className="mb-20">Billing & Payments</h5>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>#TXN-99210-AW</td>
                        <td>Oct 12, 2023</td>
                        <td>₹100.00</td>
                        <td>
                          <span className="btn btn-tags-sm">Success</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

            {/* Notes */}
            <div className="panel-white mb-20">
              <div className="box-padding">
                <h5 className="mb-15">Internal Admin Notes</h5>

                <textarea
                  rows="5"
                  className="form-control"
                  defaultValue="User requested priority verification for upcoming job fair."
                ></textarea>

                <button className="btn btn-default mt-15">
                  Save Notes
                </button>
              </div>
            </div>

            {/* Audit Log */}
            <div className="panel-white mb-20">
              <div className="box-padding">
                <h5 className="mb-20">Audit Log</h5>

                <ul className="list-unstyled">
                  <li className="mb-15">
                    <strong>KYC Documents Uploaded</strong><br />
                    <span className="font-sm color-text-paragraph-2">
                      Oct 24, 14:32 - by System
                    </span>
                  </li>

                  <li className="mb-15">
                    <strong>Credit Balance Adjusted</strong><br />
                    <span className="font-sm color-text-paragraph-2">
                      Oct 23, 11:20 - by admin_sarah
                    </span>
                  </li>

                  <li>
                    <strong>Account Registered</strong><br />
                    <span className="font-sm color-text-paragraph-2">
                      Oct 12, 09:15 - by System
                    </span>
                  </li>
                </ul>

                <a href="#" className="font-sm color-brand-1">
                  View Full History
                </a>
              </div>
            </div>

            {/* Bottom Actions */}
          {/* Bottom Actions */}
<div className="panel-white">
  <div className="box-padding">

    <div className="action-bar">

      <button className="action-btn danger-outline">
        <i className="fi-rr-trash me-2"></i>
        Delete
      </button>

      <button className="action-btn warning-outline">
        <i className="fi-rr-ban me-2"></i>
        Suspend
      </button>

      <button className="action-btn reject-outline">
        <i className="fi-rr-cross-circle me-2"></i>
        Reject
      </button>

      <button className="action-btn primary-fill">
        <i className="fi-rr-check me-2"></i>
        Approve
      </button>

    </div>

  </div>
</div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}