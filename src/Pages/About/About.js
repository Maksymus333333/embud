import React from 'react';
import company1 from '..//..//assets/nophoto.jpg';
import company2 from '..//..//assets/nophoto.jpg';
import abp from '..//..//assets/nophoto.jpg';

import '../About/About.css';
import { FaHandsHelping } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';

function About() {
  return (
    <div
      className='about-main-container p-0 container-fluid position-relative'
      style={{ overflow: 'hidden' }}
    >
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
          Про компанію
          </h1>
        </div>
      </div>
      <div className='position-relative container mt-5'>
        <div className='our-story-container'>
          <div>
            <h3 className='about-main-text'>Профіль компанії</h3>
          </div>


          <div style={{ 
      marginTop: '40px', 
      backgroundColor: '#f8f9fa', 
      padding: '20px', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' 
    }}>        
      



      <p style={{ 
        textAlign: 'justify', 
        fontSize: '16px', 
        lineHeight: '1.6', 
        margin: '0 30px' 
      }}>
        <strong>ЕМБУД</strong> - це досвідчена та професійна компанія, яка спеціалізується на повному комплексі електромонтажних робіт.
        Ми забезпечуємо високоякісне виконання робіт з електрики для різних типів будівель та споруд,
        включаючи житлові, комерційні та промислові об'єкти.
      </p>
      <p style={{ 
        textAlign: 'justify', 
        fontSize: '16px', 
        lineHeight: '1.6', 
        margin: '20px 30px' 
      }}>
        Наші фахівці мають багаторічний досвід у сфері електромонтажу і володіють необхідними знаннями
        та навичками для вирішення навіть найскладніших завдань.
        Ми прагнемо до найвищих стандартів якості та безпеки, гарантуючи надійність та ефективність усіх наших робіт.
      </p>
      <p style={{ 
        textAlign: 'justify', 
        fontSize: '16px', 
        lineHeight: '1.6', 
        margin: '0 30px' 
      }}>
        Звертаючись до нас, клієнти отримують професійний підхід, індивідуальний підхід до кожного проекту
        та виконання робіт у відповідності з усіма вимогами та стандартами безпеки.
        Ми гордимося своєю репутацією надійного партнера і завжди готові задовольнити потреби наших клієнтів
        у сфері електромонтажних послуг.
      </p>
    </div>


          
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-lg-4 col-11'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={company1}
              alt='company-img'
            />
          </div>
          <div className='col-lg-4 col-11 mt-lg-0 mt-4'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={company2}
              alt='company-img'
            />
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-lg-4 col-11'>
            <img
              loading='lazy'
              className='img-fluid company-img-box'
              src={abp}
              alt='company-img'
            />
          </div>
        </div>
      </div>

      <div className='position-relative our-values-container container p-0 text-center'>
        <h3 className='about-main-text text-center px-1'>Формуємо наші цінності</h3>
        <div className='row p-3 d-md-flex flex-md-row flex-row-reverse justify-content-around align-items-center mt-5'>
          <div
            className='col-lg-5 col-md-12 col-11 p-4 mt-md-0 mt-3  about-shadow'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <AiOutlineEye size={50} />
            <h2 className='content-sub-text fs-3 fw-bold mt-1'>Бачення</h2>
            <p>
            Перетворюючи ідеї на реальність, ми відображаємо нашу прихильність через
              у кожній структурі, яку ми створюємо. Якість, інновації та сталий розвиток
              Ми перевершуємо очікування клієнтів.
            </p>
          </div>
          <div
            className='col-lg-5 col-md-12 col-11 mt-lg-0 mt-5 p-4 about-shadow'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <TbTargetArrow size={50} />
            <h2 className='content-sub-text fs-3 fw-bold mt-1'>Місія</h2>
            <p className=''>
            Підвищення досконалості через надихаючі простори, довговічні
              творінь, що базуються на технологіях та непохитній відданості
              у будівництві та виробництві.
            </p>
          </div>
          <div
            className='col-lg-5 col-md-12 col-11 mt-5  p-4 about-shadow'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <FaHandsHelping size={50} />
            <h2 className='content-sub-text fs-5 fw-bold mt-1'>
            Підхід, заснований на співпраці
            </h2>
            <p>
            Завдяки співпраці ми тісно співпрацюємо з клієнтами, щоб
              реалізовувати їх бачення. Спільні цілі та відданість справі визначають кожен
              крок до досконалості.
            </p>
          </div>
        </div>
      </div>
      <div className='container position-relative my-5'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div
            className='col-lg-5 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='about-main-text'>Хто ми</h3>
            <p className='mt-5 px-sm-0 px-3 paragraphs'>
            За межами компанії - пристрасть, бачення, зобов'язання. Маючи понад 2 роки досвіду
              років досвіду, ми перетворили наше ремесло на мистецтво. Наша
              кваліфікована команда перетворює ваші концепції на довговічну реальність завдяки
              творчої співпраці.
            </p>
          </div>
          <div
            className='col-lg-5 col-12 mt-lg-0 mt-5'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='about-main-text'>Що нас відрізняє</h3>
            <p className='mt-5 px-sm-0 px-3  paragraphs'>
            Унікальність рухає нами. Якість і щастя клієнта - це наші
              Довіртеся нашим обіцянкам щодо виняткових результатів та
              екологічно чисте майбутнє.
            </p>
          </div>
        </div>
      </div>
      <div className='position-relative container my-5'>
        <div className='row col-12 d-flex justify-content-center align-items-center'>
          <div
            className='col-lg-9 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <h3 className='text-center about-main-text'>Що ми робимо</h3>
            <p className='mt-5 px-sm-0 px-3  paragraphs'>
            Наші послуги охоплюють будівництво та виробництво, виконані точністю, винахідливістю та досконалістю.
            </p>
          </div>
        </div>
        <div
          className='position-relative container mt-5'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='position-relative row d-flex justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Планування</h5>
                  Ми закладаємо фундамент успіху завдяки ретельному плануванню,
                  гарантуючи, що кожен проект структурований для досягнення оптимальних
                  результатів.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Проектування</h5>
                  Наші творчі уми поєднують артистизм і функціональність, щоб створювати
                  дизайни, які є одночасно візіонерськими та практичними, відображаючи ваші
                  унікальні прагнення.
                </li>
              </ul>
            </div>
          </div>
          <div className='position-relative row justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Оцінка та калькуляція витрат</h5>
                  Ми надаємо точні оцінки та аналіз витрат, допомагаючи вам
                  приймати обґрунтовані рішення та ефективно управляти бюджетом проекту
                  ефективно.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Проекти під ключ</h5>
                  З нашими рішеннями "під ключ" ви отримаєте безперебійний будівельний процес
                  де ми опрацьовуємо кожну деталь від концепції до
                  завершення.
                </li>
              </ul>
            </div>
          </div>
          <div className='position-relative row justify-content-center align-items-center'>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Будівельні матеріали</h5>
                  Ми пропонуємо широкий асортимент будівельних матеріалів,
                  включаючи цемент, сталь ТМТ, пісок М, джелі, пил та пісок Р,
                  кожен з яких відповідає найвищим стандартам якості та надійності.
                </li>
              </ul>
            </div>
            <div className='col-lg-5 col-12'>
              <ul>
                <li>
                  <h5 className='content-sub-text'>Виробничі матеріали</h5>
                  Підвищуйте рівень своїх проектів за допомогою наших прецизійних
                  будівельних матеріалів, включаючи повнотілі блоки, бруківку,
                  бордюрний камінь та збірні стіни.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container choose-us-main-container position-relative my-5'>
        <div className='p-3'>
          <div className=''>
            <h3 className='text-center about-main-text'>Чому обирають нас</h3>
          </div>
          <div className='row row-data d-flex justify-content-around align-items-center'>
            <div
              className='col-md-3 col-12 choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>01</div>
                <div>Інноваційні рішення</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12 choose-us-box my-md-0 my-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>02</div>
                <div>Експертиза поза межами можливого</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12 choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>03</div>
                <div>Безкомпромісна якість</div>
              </div>
            </div>
          </div>
          <div className='row row-data d-flex justify-content-around align-items-center my-md-5 mt-4'>
            <div
              className='col-md-3 col-12  choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>04</div>
                <div>Комплексні послуги</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12  choose-us-box my-md-0 my-4'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>05</div>
                <div>Клієнтоорієнтований підхід</div>
              </div>
            </div>
            <div
              className='col-md-3 col-12  choose-us-box'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='px-2 py-3'>
                <div className='number'>06</div>
                <div>Різноманітні матеріали</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
