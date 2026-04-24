import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
    

        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <span className="font-xs color-text-paragraph">
                Copyright &copy; 2026. JobBox all right reserved
              </span>
            </div>
            <div className="col-md-6 text-md-end text-start">
              <div className="footer-social">
                <a className="font-xs color-text-paragraph" href="#">Privacy Policy</a>
                <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">Terms &amp; Conditions</a>
                <a className="font-xs color-text-paragraph" href="#">Security</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}