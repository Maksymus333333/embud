import React from 'react';

import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
}
 from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../../assets/logotest.jpg';
import '../Footer/Footer.css';

function Footer() {
  const location = useLocation();
  return (
    <div className='footer-main-container container-fluid p-sm-5 p-4'>
      <footer className=''>
        <div className='row d-flex justify-content-around '>
          <div className='col-lg-2 col-12'>
            <div className='d-flex  flex-column '>
              <div className=''>
                <img
                  src={Logo}
                  alt='img'
                  width={100}
                  height={100}
                  loading='lazy'
                />
                <h5 className='mt-3 footer-title fw-bold'>
                Будуємо краще майбутнє
                </h5>
                <p>
                  
                </p>
              </div>
            </div>
            <h5 className='fw-bold footer-title'>Приєднуйтесь до нас</h5>
            <div className='d-flex justify-content-start align-items-center mt-3'>
              <div className=''>
                <Link
                  to='https://www.facebook.com/'
                  title='Facebook'
                  target='_blank'
                >
                  <FaFacebook className='reach-us-icons social-media-icons' />
                </Link>
              </div>

              <div className='mx-2'>
                <Link
                  to='https://www.instagram.com/'
                  target='_blank'
                  title='Instagram'
                >
                  <FaInstagram className='reach-us-icons social-media-icons' />
                </Link>
              </div>
              <div className=''>
                <Link
                  to='https://www.linkedin.com/'
                  title='LinkedIn'
                  target='_blank'
                >
                  <FaLinkedin className='reach-us-icons social-media-icons' />
                </Link>
              </div>
              <div className='mx-2'>
                <Link
                  to='https://www.youtube.com/'
                  title='YouTube'
                  target='_blank'
                >
                  <FaYoutube className='reach-us-icons social-media-icons' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title '>Швидкі посилання</h5>
            <hr></hr>
            <div className='footer-border-left-links'>
              <div>
                <Link
                  className={
                    location.pathname === '/' ? 'active' : 'footer-link'
                  }
                  to='/'
                >
                  Головна
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/about' ? 'active ' : 'footer-link'
                  }
                  to='/about'
                >
                 Про компанію
                </Link>
              </div>
              <div>
                {/* <Link
                  className={
                    location.pathname === '/products' ? 'active' : 'footer-link'
                  }
                  to='/products'
                >
                  Продукти
                </Link> */}
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/projects' ? 'active' : 'footer-link'
                  }
                  to='/projects'
                >
                  Проєкти
                </Link>
              </div>
              <div>
                <Link
                  className={
                    location.pathname === '/services' ? 'active' : 'footer-link'
                  }
                  to='/services'
                >
                  Послуги
                </Link>
              </div>
              {/* 
              <div>
                <Link
                  className={
                    location.pathname === '/team' ? 'active' : 'footer-link'
                  }
                  to='/team'
                >
                  Team
                </Link>
              </div>
              */}
              <div className=''>
                <Link
                  className={
                    location.pathname === '/contact' ? 'active' : 'footer-link'
                  }
                  to='/contact'
                >
                  Зв'язатися з нами
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title'>
              <Link to='/services' className='footer-main-link'>
              Послуги
              </Link>
            </h5>
            <hr></hr>
            <div className='footer-border-left-links'>
              <div>Планування</div>
              <div>Проектування</div>
              <div>Оцінка та калькуляція витрат</div>
              <div>Проекти під ключ</div>
            </div>
          </div>

          {/* <div className='col-lg-2 col-12 mt-5'>
            <h5 className='footer-title'>
              <Link to='/products' className='footer-main-link'>
              Виробничі матеріали
              </Link>
            </h5>
            <hr></hr>
            <div className='footer-border-left-links'>
              <div>Суцільні блоки</div>
              <div>Бруківка</div>
              <div>Kerb Stones</div>
              <div>Precast Compound Walls</div>
            </div>
            <h5 className='footer-title mt-4'>
              <Link to='/products' className='footer-main-link'>
                Construction Materials
              </Link>
            </h5>
            <hr></hr>
            <div className='footer-border-left-links'>
              <div>Cement</div>
              <div>TMT Steel</div>
              <div>M Sand</div>
              <div>Jally</div>
              <div>Dust</div>
              <div>P Sand</div>
            </div>
          </div> */}
          <div className='col-lg-2 col-12 mt-5 '>
            <h5 className='footer-title'>
              <Link to='/contact' className='footer-main-link'>
              Зв'яжіться з нами за адресою
              </Link>
            </h5>
            <hr></hr>
            <div className='d-sm-flex flex-column justify-content-center mt-sm-0 mt-4 footer-border-left-links'>
              <div className='mt-2'>
                <FaMapMarkerAlt className='reach-us-icons' />
                <p className='mx-sm-0 fs-6  mt-3 ' style={{ opacity: '1' }}>
                Опис, де знаходиться фірма ....
                </p>
              </div>
              <div className=' d-sm-flex flex-row justify-content-left mt-2'>
                <div className='mx-sm-2'>
                  <FaEnvelope className='reach-us-icons' />
                  <p className=' mt-sm-0 mt-2' style={{ opacity: '1' }}>
                    <Link
                      className='footer-link'
                      to='mailto:EMBUD@gmail.com'
                      title='Drop an Email'
                      style={{ fontSize: '10px' }}
                    >
                      EMBUD@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className='d-sm-flex flex-row justify-content-left mt-3'>
                <div className='mx-sm-2'>
                  <FaPhoneAlt className='reach-us-icons' />
                  <p style={{ opacity: '1' }}>
                    <Link
                      to='tel:+************'
                      className='footer-link mt-2'
                      title='Call Us'
                      style={{ fontSize: '13px' }}
                    >
                      +************
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center d-sm-flex justify-content-center align-items-center  d-none'>
          <Link
            className='Footer-ScrollToTop'
            onClick={() => window.scrollTo(0, 0)}
            title='Scroll to top'
            style={{ cursor: 'pointer' }}
          >
            <AiOutlineArrowUp size={20} />
          </Link>
        </div>
      </footer> 
      <hr></hr>
      <div>
        <div className=''>
          <p className='footer-text m-0'>
            &copy; EMBUD 2017 - 2024, всі права захищені.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;