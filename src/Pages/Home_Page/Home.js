import React, { useState } from 'react';
import './Home.css';
import { FaLeaf, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { RxArrowTopRight } from 'react-icons/rx';
import { HashLink as Link } from 'react-router-hash-link';
import img1 from '../../assets/serv_home.jpg';
import img2 from '../../assets/kalk.jpg';
import img3 from '../../assets/key_ph.jpg';
import jsw from '../../assets/1+1.png';
import SK from '../../assets/kovalska.png';
import ct from '../../assets/city.jpg';
import logo from '../../assets/embud_logo.png';
import TMT from '../../assets/Business.png';
import ts from '../../assets/kan.jpg';
import kw from '../../assets/kiywst.png';
import med from '../../assets/med.png';
import sg from '../../assets/sg.png';
import ak from '../../assets/ak.png';
 

const data = [
  {
    id: 1,
    title: 'Весь комплекс',
    title2: 'електромонтажних робіт',
    txt: 'Проектування ваших мрій, де уява зустрічається з архітектурою',
    img: `${img1}`,
    tt: '',
  },
  {
    id: 2,
    title: 'EMBUD',
    txt: 'Build a Better Future',
    img: `${img1}`,
    tt: 'Innovative Construction & Manufacturing',
  },
  {
    id: 3,
    title: 'Services',
    txt: 'Planning & Designing',
    img: `${img2}`,
    tt: 'Blueprinting Your Dreams , Where Imagination Meets Architecture',
  },
  {
    id: 4,
    title: 'Services',
    txt: 'Estimation and Costing',
    img: `${logo}`,
    tt: 'Building with Precision, Budget in Mind',
  },
  {
    id: 5,
    title: 'Services',
    txt: 'Turn Key Projects',
    img: `${img3}`,
    tt: ' Seamless Execution, Stress-Free Experience',
  },
];

function Home() {
  const [index] = useState(0);
  const { id, title, title2, txt } = data[index];
  return (
    <div
      className='home-head-component position-relative container-fluid px-0  my-4'
      style={{ overflow: 'hidden' }}
    >
      <div className='home-main-container '>
        <div className='img-overlay text-center'>
          <div className='text-container container' key={id}>
            <h1 className='company-home-title'>{title}</h1>
            <h1 className='company-home-title2'>{title2}</h1>
            <p className='mt-3 home-sub-text'>{txt}</p>
          </div>
          <div className='mt-4 container home-button'>
            <Link className='explore-link' to='/about' style={{
                   letterSpacing: '1px',
                borderRadius: '0px',
                 padding: '6px 12px',
                 fontsize: '4px', 
                //  marginTop: '-3px',
              }}>
              Дізнайтесь більше
            </Link>
            <Link
              className=' btn btn-outline-primary mx-1 text-light home-button'
              to='/contact'
              style={{
                   // letterSpacing: '1px',
                borderRadius: '0px',
                 padding: '6px 12px',
                //  fontsize: '4px', 
                //  marginTop: '-3px',
              }}
            >
               Зв'яжіться з нами
            </Link>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className=''>
          <h3 className='text-center main-text'>
          Будуємо ваші мрії
          </h3>
        </div>
      </div>
      <div
  className='container-fluid p-0 text-center'
  data-aos='fade-up'
  data-aos-duration='1000'
>
  <div className='row p-3 d-flex justify-content-around align-items-stretch'>
    <div className='container-box col-lg-3 col-md-5 col-12 p-5 mt-lg-0 mt-md-5 mt-1'>
      <FaLightbulb className='container-icons' />
      <h3 className='mt-3'>Інновації</h3>
      <p style={{ color: 'gray' }}>
      Поєднуючи технології та креативність, ми перевершуємо очікування клієнтів.
      Свіжі ідеї сприяють постійному вдосконаленню наших пропозицій.
      </p>
    </div>
    <div className='container-box col-lg-3 col-md-5 col-12 p-5 mt-lg-0 mt-md-5 mt-1'>
      <FaLeaf className='container-icons' />
      <h3 className='mt-3'>Сталий розвиток</h3>
      <p style={{ color: 'gray' }}>
      Наша робота ґрунтується на принципах сталого розвитку.
       Ми бачимо екологічно чисте майбутнє з відповідальним будівництвом та ефективним виробництвом.    
      </p>
    </div>
    <div className='container-box col-lg-3 col-md-5 col-12 p-5 mt-lg-0 mt-md-5 mt-1'>
      <FaTrophy className='container-icons' />
      <h3 className='mt-3'>Досконалість</h3>
      <p style={{ color: 'gray' }}>
        Якість визначає кожну нашу дію, від складних деталей до грандіозних починань. 
        Наша відданість справі вирізняє нас і гарантує успіх.

      </p>
    </div>
  </div>
</div>

      <div className='container-fluid trusted-text-container p-0'>
        <div
          className='pt-5 px-sm-0 px-3'
          data-aos='fade-up'
          data-aos-duration='1100'
        >
          <h3 className='main-text text-center'>
            Нам довіряють відомі компанії
          </h3>
          <p className='sub-text mt-5 text-center'>
            Ми пишаємося нашим прагненням надавати виняткові послуги,
            які відповідають високим стандартам лідерів галузі. 
          </p>
        </div>
        <div className='row px-0 d-flex justify-content-center align-items-center '>
        <div className=''>
  <div className='logos'>
     <div className='logos-slide'>
      <img loading='lazy' src={jsw} alt='' />
      <img loading='lazy' src={SK} alt='' />
      <img loading='lazy' src={kw} alt='' />
      <img loading='lazy' src={ts} alt='' />
      <img loading='lazy' src={med} alt=''style={{ height: '80px', width: '120px' }} />
      <img loading='lazy'   src={ct} alt='' style={{ height: '80px', width: '120px' }} />
      <img loading='lazy' src={jsw} alt='' />
      <img loading='lazy' src={TMT} alt='' style={{ height: '80px', width: '80px' }} />
      <img loading='lazy' src={SK} alt='' />
      <img loading='lazy' src={ak} alt='' style={{ height: '80px', width: '80px' }} />
      <img loading='lazy' src={kw} alt='' />
      <img loading='lazy'   src={ct} alt='' style={{ height: '80px', width: '120px' }} />
      <img loading='lazy' src={med} alt=''style={{ height: '80px', width: '120px' }} /> 
     </div>
     <div className='logos-slide'>
     <img loading='lazy' src={jsw} alt='' />
     <img loading='lazy' src={sg} alt='' style={{ height: '60px', width: '180px' }}/>
      <img loading='lazy' src={SK} alt='' />
      <img loading='lazy' src={kw} alt='' />
      <img loading='lazy' src={med} alt=''style={{ height: '80px', width: '120px' }} />
      <img loading='lazy' src={ts} alt='' />
      <img loading='lazy'   src={ct} alt='' style={{ height: '80px', width: '120px' }} />
      <img loading='lazy' src={jsw} alt='' />
      <img loading='lazy' src={SK} alt='' />
      <img loading='lazy' src={kw} alt='' />
      <img loading='lazy' src={TMT} alt='' />
      <img loading='lazy'  src={ct} alt='' style={{ height: '80px', width: '100px' }} />
    </div>
  </div>
</div>
        </div>
      </div>

      <div className='service-container conatainer-fluid postion-relative'>
        <div className='container px-md-0 px-4'>
          
          <h2 className='main-text'>Втілюємо ваші бачення в життя</h2>
          <div
            className='row d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#FAF7F0' }}
          >
            <div className='col-lg-5 col-12 p-0'>
              <img
                loading='lazy'
                className='img-fluid service-img'
                src={img1}
                alt=''
              />
            </div>
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2'
              data-aos='fade-up'
              data-aos-duration='1100'
            >
              <h3 className='service-main-text'>Планування та проектування</h3>
              <p>
              Наша компанія об’єднує функціональність та естетику, створюючи простори, які відповідають вашим прагненням.
              Наші фахівці втілюють ваше будівельне бачення в реальність, розробляючи оптимальні схеми електропроводки, 
              систем заземлення та блискавкозахисту, а також ефективні рішення для освітлення.
               Ми прагнемо забезпечити надійність та безпеку електричних систем, щоб ваші об’єкти функціонували на високому рівні.
              </p>
              <Link to='/services' className='btn btn-outline-primary'>
              Отримати більше <RxArrowTopRight />
              </Link>
            </div>
          </div>
          <div
            className='row flex-sm-row flex-row-reverse d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#F3FDE8' }}
          >
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2 order-lg-0 order-1'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h3 className='service-main-text'>Оцінка та калькуляція витрат</h3>
              <p>
              Наша система оцінки та калькуляції витрат гарантує максимальну прозорість та точність. 
              Завдяки детальній розбивці витрат та використанню передових інструментів, 
              ви зможете впевнено керувати бюджетом проекту, уникнувши неприємних несподіванок.
              </p>
              <Link to='/services' className='btn btn-outline-primary'>
              Отримати більше <RxArrowTopRight />
              </Link>
            </div>
            <div className='col-lg-5 col-12 p-0 order-lg-1 order-0'>
              <img
                loading='lazy'
                className='img-fluid service-img'
                src={img2}
                alt=''
              />
            </div>
          </div>
          <div
            className='row d-flex justify-content-center align-items-center mt-5 p-sm-5 p-0'
            style={{ backgroundColor: '#F9F5F6' }}
          >
            <div className='col-lg-5 col-12 p-0'>
              <img
                loading='lazy'
                src={img3}
                className='img-fluid service-img'
                alt=''
              />
            </div>
            <div
              className='col-lg-6 col-11 mt-md-0 mt-3 p-lg-5 py-4 px-2'
              data-aos='fade-up'
              data-aos-duration='1200'
            >
              <h3 className='service-main-text'>Проекти під ключ</h3>
              <p>
              Станьте свідком того, як проект вашої мрії реалізується без зайвих зусиль завдяки нашим рішенням "під ключ". Від концепції до реалізації, ми займаємося проектуванням,
                будівництвом та іншим, забезпечуючи бездоганний досвід та
                виняткові результати.
                
              </p>
              
              <Link to='/services' className='btn btn-outline-primary'>
              Отримати більше <RxArrowTopRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className='my-5 p-0 px-2 container'
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <ManufacturingMaterials />
      </div>
      <div
        className='my-5 p-0 px-2 container'
        data-aos='fade-up'
        data-aos-duration='1200'
      >
        <ConstructionMaterials />
      </div> */}
    </div>
  );
}

export default Home;
