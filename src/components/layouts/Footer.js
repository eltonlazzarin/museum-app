import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none">
                    Our Leadership
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    History
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    Alliances
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Why Visit Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-decoration-none">
                    What to Expect
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    Our Attractions
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none">
                    Next Events
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Connect</h4>
              <ul className="list-unstyled text-decoration-none">
                <li>
                  <i className="fab fa-linkedin" />
                  &nbsp;&nbsp;
                  <a href="/" class="text-decoration-none">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <i className="fab fa-facebook" />
                  &nbsp;&nbsp;
                  <a href="/" class="text-decoration-none">
                    Facebook
                  </a>
                </li>
                <li>
                  <i className="fab fa-twitter" />
                  &nbsp;&nbsp;
                  <a href="/" class="text-decoration-none">
                    Twitter
                  </a>
                </li>
                <li>
                  <i className="fab fa-youtube" />
                  &nbsp;&nbsp;
                  <a href="/" class="text-decoration-none">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
