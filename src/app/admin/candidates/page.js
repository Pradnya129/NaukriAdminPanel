'use client'

import Footer from "../../../components/Footer"
import Link from "next/link";
const candidates = [
  {
    id: 1,
    img: "user1.png",
    name: "Alexander Wright",
    email: "a.wright@techflow.io",
    nationalId: "9823-1120-X",
    accountType: "Candidate",
    status: "Active",
    company: "TechFlow Solutions",
    joined: "Oct 12, 2023"
  },
  {
    id: 2,
    img: "user2.png",
    name: "Sarah Jenkins",
    email: "sarah.j@gmail.com",
    nationalId: "1244-9981-A",
    accountType: "Candidate",
    status: "Pending",
    company: "N/A",
    joined: "Oct 15, 2023"
  },
  {
    id: 3,
    img: "user3.png",
    name: "Marcus Thorne",
    email: "m.thorne@buildit.com",
    nationalId: "5562-0012-Q",
    accountType: "Candidate",
    status: "Active",
    company: "BuildIt Construction",
    joined: "Sep 28, 2023"
  },
  {
    id: 4,
    img: "user4.png",
    name: "Elena Rodriguez",
    email: "elena.rod@outlook.com",
    nationalId: "2231-5540-L",
    accountType: "Candidate",
    status: "Suspended",
    company: "N/A",
    joined: "Nov 02, 2023"
  },
  {
    id: 5,
    img: "user5.png",
    name: "Jameson Lee",
    email: "j.lee@healthnexus.org",
    nationalId: "7781-3321-K",
    accountType: "Candidate",
    status: "Active",
    company: "HealthNexus",
    joined: "Oct 05, 2023"
  },
  {
    id: 6,
    img: "user6.png",
    name: "Olivia Carter",
    email: "olivia.carter@mail.com",
    nationalId: "6634-9920-M",
    accountType: "Candidate",
    status: "Pending",
    company: "FutureCore",
    joined: "Nov 10, 2023"
  }
];

const stats = [
  { title: "Total Candidates", value: "3,248", growth: "+5.2%", icon: "fi-rr-users" },
  { title: "Active Candidates", value: "2,105", growth: "+8%", icon: "fi-rr-check-circle" },
  { title: "Placed", value: "842", growth: "+32", icon: "fi-rr-briefcase" },
  { title: "Pending Reviews", value: "184", growth: "+18", icon: "fi-rr-clock" },
]

export default function CandidatesPage() {
  return (
    <>
      {/* Header */}
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-5">Candidates</h3>
          <p className="font-sm color-text-paragraph-2 mb-3">
            Browse candidates, filter by skill or location, and manage profiles.
          </p>
        </div>

        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li><a className="icon-home" href="/admin/dashboard">Admin</a></li>
              <li><span>Candidates</span></li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Stats */}
      <div className="section-box">
  <div className="row">

    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="card-style-1 hover-up">
        <div className="card-image">
          <img src="/assets/imgs/page/dashboard/candidates.svg" alt="candidates" />
        </div>
        <div className="card-info">
          <div className="card-title">
            <h3>
              3,248 <br></br>
              <span className="font-sm status up">5.2%</span>
            </h3>
          </div>
          <p className="color-text-paragraph-2">Total Candidates</p>
        </div>
      </div>
    </div>

    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="card-style-1 hover-up">
        <div className="card-image">
          <img src="/assets/imgs/page/dashboard/look.svg" alt="active" />
        </div>
        <div className="card-info">
          <div className="card-title">
            <h3>
              2,105<br></br>
              <span className="font-sm status up">8%</span>
            </h3>
          </div>
          <p className="color-text-paragraph-2">Active Candidates</p>
        </div>
      </div>
    </div>

    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="card-style-1 hover-up">
        <div className="card-image">
          <img src="/assets/imgs/page/dashboard/recruiters.svg" alt="placed" />
        </div>
        <div className="card-info">
          <div className="card-title">
            <h3>
              842<br></br>
              <span className="font-sm status up">32</span>
            </h3>
          </div>
          <p className="color-text-paragraph-2">Placed</p>
        </div>
      </div>
    </div>

    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
      <div className="card-style-1 hover-up">
        <div className="card-image">
          <img src="/assets/imgs/page/dashboard/doc.svg" alt="review" />
        </div>
        <div className="card-info">
          <div className="card-title">
            <h3>
              184<br></br>
              <span className="font-sm status down">18</span>
            </h3>
          </div>
          <p className="color-text-paragraph-2">Pending Reviews</p>
        </div>
      </div>
    </div>

  </div>
</div>

    


<div className="section-box mt-20">
  <div className="panel-white">
    <div className="box-padding">

      {/* Filters */}
      <div className="row g-3 align-items-end mb-25">

        <div className="col-xl-4 col-lg-12">
          <div className="form-group mb-0">
            <i className="fi-rr-search"></i>
            <input
              type="text"
              className="form-control form-icons"
              placeholder="Search candidates..."
            />
          </div>
        </div>

        <div className="col-xl-8 col-lg-12">
          <div className="row g-2">

            <div className="col-md-3 col-6">
              <select className="form-control">
               <option>All Roles</option>
                    <option>Developer</option>
                    <option>Designer</option>
              </select>
            </div>

            <div className="col-md-3 col-6">
              <select className="form-control">
                <option>Status</option>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Offline</option>
              </select>
            </div>

            <div className="col-md-3 col-6">
              <select className="form-control">
 <option>Location</option>
                    <option>US</option>
                    <option>UK</option>
                    <option>India</option>              </select>
            </div>

            <div className="col-md-3 col-6">
              <a href="#" className="btn btn-grey-small w-100 py-2">
               <h6>Reset</h6> 
              </a>
            </div>

          </div>
        </div>
      </div>

     {/* Desktop Table */}
<div className="table-responsive d-none d-lg-block">
  <table className="table table-hover align-middle">

    <thead>
      <tr>
        <th style={{minWidth:'280px'}}>Candidate</th>
        <th style={{minWidth:'160px'}}>National ID</th>
        <th style={{minWidth:'140px'}}>Status</th>
        <th style={{minWidth:'220px'}}>Company</th>
        <th style={{minWidth:'160px'}}>Joined Date</th>
        <th style={{minWidth:'140px'}}>Actions</th>
      </tr>
    </thead>

    <tbody>
      {candidates.map((c) => (
        <tr key={c.id}>

          {/* Candidate */}
          <td className="align-middle">
            <div className="d-flex align-items-center">
              <img
                src={`/assets/imgs/page/candidates/${c.img}`}
                style={{
                  width:'48px',
                  height:'48px',
                  borderRadius:'50%',
                  objectFit:'cover'
                }}
              />

              <div className="ms-3">
                <h6 className="mb-0">{c.name}</h6>
                <span className="font-sm color-text-paragraph-2">
                  {c.email}
                </span>
              </div>
            </div>
          </td>

          {/* National ID */}
          <td className="align-middle">
            <span className="btn btn-tags-sm">{c.nationalId}</span>
          </td>

    

          {/* Status */}
          <td className="align-middle">
            <span className="btn-paragraph-2">{c.status}</span>
          </td>

          {/* Company */}
          <td className="align-middle">
            {c.company}
          </td>

          {/* Joined */}
          <td className="align-middle">
            {c.joined}
          </td>

          {/* Actions */}
          <td className="align-middle">
            <div className="d-flex gap-2">
           <Link
  href={`/admin/candidates/candidateEdit?id=${c.id}`}
  className="btn btn-grey-small"
>
  <i className="fi-rr-edit"></i>
</Link>
              <a className="btn btn-grey-small"><i className="fi-rr-trash"></i></a>
            <Link
  href={`/admin/candidates/candidateDetails?id=${c.id}`}
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

     {/* Mobile / Tablet Cards */}
<div className="d-block d-lg-none">
  <div className="row">
    {candidates.map((c) => (
      <div className="col-md-6 mb-15" key={c.id}>
        <div className="panel-white h-100">
          <div className="box-padding">

            <div className="d-flex align-items-center mb-15">
              <img
                src={`/assets/imgs/page/candidates/${c.img}`}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />

              <div className="ms-3">
                <h6 className="mb-0">{c.name}</h6>
                <span className="font-sm color-text-paragraph-2">
                  {c.email}
                </span>
              </div>
            </div>

            <div className="mb-10">
              <p className="font-sm mb-5">
                <strong>ID:</strong> {c.nationalId}
              </p>

              <p className="font-sm mb-5">
                <strong>Type:</strong> {c.accountType}
              </p>

              <p className="font-sm mb-5">
                <strong>Company:</strong> {c.company}
              </p>

              <p className="font-sm mb-5">
                <strong>Joined:</strong> {c.joined}
              </p>

              <p className="font-sm mb-0">
                <strong>Status:</strong>{" "}
                <span className="btn-paragraph-2">{c.status}</span>
              </p>
            </div>

            <div className="d-flex gap-2 mt-15">
              <a className="btn btn-grey-small w-100">View</a>
              <a className="btn btn-default w-100">Edit</a>
            </div>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Pagination */}
      <div className="paginations mt-25">
        <div className="row align-items-center g-2">
          <div className="col-lg-6">
            <p className="font-sm color-text-paragraph-2 mb-0">
              Showing 1–6 of <strong>3,248</strong> candidates
            </p>
          </div>

          <div className="col-lg-6 text-lg-end">
            <ul className="pager justify-content-lg-end">
              <li><a className="pager-prev"></a></li>
              <li><a className="pager-number active">1</a></li>
              <li><a className="pager-number">2</a></li>
              <li><a className="pager-number">3</a></li>
              <li><a className="pager-next"></a></li>
            </ul>
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