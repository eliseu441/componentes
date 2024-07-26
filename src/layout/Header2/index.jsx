import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import DropDown from './DropDown';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  //criar logo na pasta public/images


  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="container mt-0">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium" >

                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li>
                      <NavLink
                        to="/"
                        onClick={() => setMobileToggle(false)}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink to="/teste" onClick={() => setMobileToggle(false)}>
                        Componentes
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link to="/" onClick={() => setMobileToggle(false)}>
                              carousel
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="tables"
                              onClick={() => setMobileToggle(false)}
                            >
                              DataTables
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Book
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Dropzone
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Timeline
                            </Link>

                            <Link
                              to="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Graphics
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>

                    <li className="menu-item-has-children">
                      <NavLink
                        to="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Layout
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/backgrounds"
                              onClick={() => setMobileToggle(false)}
                            >
                              Backgrounds
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/backgrounds"
                              onClick={() => setMobileToggle(false)}
                            >
                              Cards
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Sidebar2
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portifolio
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>

                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs-main_header_right">
                <div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div className="cs-side_header_in">
          <div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Template sidebar com header <br /> copia não comedia.
            </h2>
          </div>
          <div className="cs-side_header_box">
            <ContactInfoWidget title="Contato:" withIcon />
          </div>
          <div className="cs-side_header_box">
          </div>
          <div className="cs-side_header_box">
            <SocialWidget />
          </div>
        </div>
      </div>
    </>
  );
}
