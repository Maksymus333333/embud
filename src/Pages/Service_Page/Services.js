import React from 'react';
import { TbBulb } from 'react-icons/tb';
import { MdTimeline } from 'react-icons/md';
import { IoIosTime } from 'react-icons/io';
import { AiOutlinePartition } from 'react-icons/ai';
import People from '../../assets/people.png';
import Estimation from '../../assets/estimation.jpg';
import Turnkey from '../../assets/turn-key.jpg';
import { FaArrowRight } from 'react-icons/fa';
import './Service.css';
// import SolidBlocks from '..//..//assets/SB.jpg';
// import PaverBlock from '..//..//assets/paver-block.jpeg';
// import KerbStone from '..//..//assets/kerb-stone.jpeg';
// import CompoundWall from '..//..//assets/pcw-new.png';

// import Cement from '../..//assets/Cement.jpg';
// import TMT from '../..//assets/steel.jpg';
// import P_Sand from '../..//assets/psand.png';
// import M_Sand from '../..//assets/m-sand.jpg';
// import Jally from '../..//assets/jally.jpg';
// import Dust from '../..//assets/dust.jpg';

// import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';

function Services() {
  return (
    <div className='service-main-box container-fluid p-0  bg-light'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light products-main-title'>Наші послуги</h1>
        </div>
      </div>
      <div className='container mt-sm-5 mt-0 '>
        <h2 className='text-center comprehensive-service-text d-lg-block d-none'>
        Наш комплексний спектр послуг
        </h2>
        {/* <div className='comprehensive-service-box d-lg-block d-none'>
          <div className='row text-center d-flex justify-content-around align-items-center'>


            <div
              className='col-md-3  col-12 py-5 mt-md-5 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h4>Планування</h4>
            </div>
            <div
              className='col-md-3  col-12 py-5 mt-md-0 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h4>Оцінка та калькуляція витрат</h4>
            </div>
            <div
              className='col-md-3  col-12 py-5 mt-md-5 mt-3  bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <h4>Проекти    під    ключ </h4>
            </div>
             </div>
             <div className='row text-center d-flex justify-content-around align-items-center '>
            <div
              className='col-md-5 col-12 py-5 mt-md-0 mt-3 bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1800'
            >
              <h4>Виробничі матеріали</h4>
            </div>
            <div
              className='col-md-5 col-12 py-5 mt-md-0 mt-3 bg-dark text-light'
              data-aos='fade-up'
              data-aos-duration='1800'
              id='planning-designing'
            >
              <h4>Будівельні матеріали</h4>
            </div>
          </div>
        </div> */}
      </div>
      <div className='bg-light p-md-5 p-2 container mt-sm-5 mt-0'>
        <div className='mt-2'>
          <div className=''>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-3'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'> Планування та проектування </h2>
                <p className=''>
                  Де бачення зустрічається з точністю. Ретельне планування, креативний
                  дизайн - від концепції до бездоганного виконання. Ваш проект, наш
                  досвід, бездоганне поєднання естетики та функціональності.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={People}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='bg-light p-md-3 p-2 mt-sm-5 mt-2'>
              <div className='row d-flex justify-content-around align-items-center'>
                <h4 className='text-center mt-3   p-sm-5  fw-bold service-main-text'>
                Підвищення рівня вашого проекту за допомогою стратегічного планування та дизайну
                </h4>
                <div
                  className='col-md-5 col-12  mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <TbBulb size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                    Концептуалізація
                    </h4>
                    <p className='text-center'>
                    Підготовка починається з розуміння суті вашого проєкту.
                     Ми співпрацюємо, щоб виявити основні цілі та додати унікальні елементи.
                    </p>
                  </div>
                </div>
                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <MdTimeline size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                    Розробка стратегії
                    </h4>
                    <p className='text-center'>
                    Ретельне планування, передбачення викликів, спрямовуючи задум до успіху.
                    </p>
                  </div>
                </div>
                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <IoIosTime size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                    Хронологія та планування
                    </h4>
                    <p className='text-center'>
                    Ми цінуємо час, створюючи точний таймінг для постійного прогресу.
                    </p>
                  </div>
                </div>

                <div
                  className='col-md-5 col-12 mt-md-5 mt-4'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div className='text-center'>
                    <AiOutlinePartition size={50} />
                  </div>
                  <div className='mt-3 '>
                    <h4 className='text-center service-main-text'>
                    Розподіл ресурсів
                    </h4>
                    <p className='text-center'>
                    Кожен елемент має значення. Ми розподіляємо ресурси розумно, оптимізуючи
                      ефективність і мінімізуючи витрати на робочу силу,
                      матеріали та технології.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='estimation-costing' className='p-5'></div>
        <div className='mt-sm-5 mt-2'>
          <div className='bg-light p-2'>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-2'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12 p-2'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'>Оцінка та калькуляція витрат</h2>
                <p className=''>
                Прозорість і точність мають першочергове значення.
                 Передові методи дають детальні оцінки та розбивку, забезпечуючи чітке фінансове розуміння.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={Estimation}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='row d-flex container-fluid justify-content-around align-items-center mt-3 '>
              <div className='col-md-6 col-12 estimation-costing-box'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Точне прогнозування
                    </div>
                    <div className='mt-2'>
                      <p>
                      Галузева інформація, передові інструменти. Наші точні прогнози вартості
                        дозволяють приймати обґрунтовані рішення та ефективно розподіляти ресурси. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box my-md-0 my-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Прозорі розбивки
                    </div>
                    <div className='mt-2'>
                      <p>
                      Детальна розбивка витрат забезпечує ясність, показуючи
                        комплексний розподіл витрат.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Планування на випадок надзвичайних ситуацій
                    </div>
                    <div className='mt-2'>
                      <p>
                      Комплексні гарантії для стійкості та захисту бюджету від несподіваних викликів.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Оптимізований розподіл ресурсів
                    </div>
                    <div className='mt-2'>
                      <p>
                      Наші експерти оптимізують ресурси, забезпечуючи якість, досконалість та бюджетну ефективність.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='turnkey-projects' className='p-5'></div>
        <div className='mt-sm-5 mt-2'>
          <div className=' bg-light p-2'>
            <div
              className='row d-flex justify-content-around align-items-center p-sm-5 p-2'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-5 col-12'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text'>Проєкти під ключ</h2>
                <p>
                Наші рішення охоплюють проєктування від початку до завершення. 
                Закупівля, будівництво та передача - ми беремо все на себе, 
                тож ви можете зосередитися на своїй основній діяльності.
                </p>
              </div>
              <div className='col-md-5 col-12'>
                <img
                  src={Turnkey}
                  loading='lazy'
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='row d-flex container-fluid justify-content-around align-items-center mt-3 '>
              <div className='col-md-6 col-12 estimation-costing-box'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Комплексне покриття
                    </div>
                    <div className='mt-2'>
                      <p>Від початку проекту до його успішного завершення.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box my-md-0 my-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Експертиза дизайну
                    </div>
                    <div className='mt-2'>
                      <p>
                      Креативні та ефективні дизайнерські рішення, адаптовані до ваших потреб.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Експертне будівництво
                    </div>
                    <div className='mt-2'>
                      <p>Ретельне виконання, щоб втілити ваше бачення в життя.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 estimation-costing-box mt-3'>
                <div
                  className='d-flex p-sm-3'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <div>
                    <FaArrowRight />
                  </div>
                  <div className='mx-3 '>
                    <div className='estimation-costing-sub-title service-main-text'>
                    Плавна передача
                    </div>
                    <div className='mt-2'>
                      <p>
                      Забезпечення плавного переходу для вашого операційного
                        успіху.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className='row manufacturing-container d-flex align-items-center p-sm-5 p-2 my-5'
              style={{ backgroundColor: 'white' }}
            >
              <div
                className='col-md-4 col-12 py-sm-0 py-5'
                data-aos='fade-up'
                data-aos-duration='1000'
              >
                <h2 className='service-main-text '>Виробничі матеріали</h2>
                <p>
                Суцільні блоки та бруківка для міцних конструкцій, бордюрний камінь
                  та збірні стіни для безпеки та естетики.
                </p>
                <Link to='/products' className='btn btn-outline-primary'>
                Читати далі
                </Link>
              </div>
              <div className='col-md-7 col-12 row d-flex manufacturing-container align-items-center'>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={SolidBlocks}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Суцільний блок</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={PaverBlock}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Бруківка</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={KerbStone}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Бордюрний камінь</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-5 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={CompoundWall}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Складна стіна</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className='row manufacturing-container d-flex align-items-center p-sm-5 p-2 '
              style={{ backgroundColor: 'white' }}
            >
              <div>
                <div
                  className='col-12 py-sm-0 py-5'
                  data-aos='fade-up'
                  data-aos-duration='1000'
                >
                  <h2 className='service-main-text'>Будівельні матеріали</h2>
                  <p>
                  Суцільні блоки та бруківка для міцних конструкцій, бордюри
                    Камені та збірні стіни для безпеки та естетики.
                  </p>
                  <Link to='/products' className='btn btn-outline-primary'>
                  Читати далі
                  </Link>
                </div>
              </div>
              <div className='col-12 row manufacturing-container  d-flex justify-content-between align-items-center mt-md-5 mt-0'>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={Cement}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Цемент</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={TMT}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>TMT</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={P_Sand}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>P Sand</h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='row d-flex manufacturing-container justify-content-between align-items-center mt-md-5 mt-3'>
                <div className='col-md-3 col-12 image-container position-relative'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={M_Sand}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>М Пісок</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      loading='lazy'
                      src={Jally}
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Джеллі.</h5>
                    </div>
                  </Link>
                </div>
                <div className='col-md-3 col-12 image-container position-relative mt-3'>
                  <Link to='/products'>
                    <img
                      className='image img-fluid'
                      src={Dust}
                      loading='lazy'
                      alt=''
                      style={{ width: '100%', height: '200px' }}
                    />
                    <div className='overlay'>
                      <h5>Пил</h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>*/}
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Services;
