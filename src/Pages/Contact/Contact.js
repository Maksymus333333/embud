import React, { useState } from 'react';
import styled from 'styled-components';
import contactImg from '..//..//assets/contact.png';
import '../Contact/Contact.css';
import { FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_max123';
const TEMPLATE_ID = 'template_4z902uk';
const USER_ID = 'NSp5LSumUOF3aT0P5';

const MapContainer = styled.li`
  @media (max-width: 538px) {
    iframe {
      width: 400px;
    }
  }
  @media (max-width: 403px) {
    iframe {
      width: 290px;
    }
  }
`;

const InputBox = styled.input``;
const TextMessageBox = styled.textarea``;

function Contact() {
  const [errors, setErrors] = useState({});
  const [dataSubmittedMessage, setDataSubmittedMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const clearData = () => {
    setFormData({
      name: '',
      email: '',
      number: '',
      message: '',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidName = (name) => {
    return /^[A-Za-zА-Яа-яЁё\s-]+$/.test(name);
  };
  
  const isValidNumber = (number) => {
    if (number === undefined) {
      return false;
    }
     
    return /^[+]?\d+$/.test(number) && number.length === 10;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isValidName(formData.name)) {
      newErrors.name = 'Please enter your name';
    }

    if (!isValidNumber(formData.number)) {
      newErrors.number = 'Please enter a valid number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then(
          (result) => {
            console.log(result.text);
            setDataSubmittedMessage(true);
            setTimeout(() => {
              setDataSubmittedMessage(false);
              clearData();
            }, 5000);
          },
          (error) => {
            console.error('Error submitting the form:', error);
          }
        );
    }
  };

  return (
    <div className='contact-main-container container-fluid p-0'>
      <div className='position-relative serivesBgImg '>
        <div className='service-img-overlay d-flex justify-content-center align-items-center'>
          <h1 className='text-light text-center products-main-title'>
            Зв'яжіться з нами
          </h1>
        </div>
      </div>
      <div className='text-center mt-5'>
        <h2 className='contact-main-text'>Зв'яжіться з нами вже сьогодні!</h2>
        <p className='mt-5 px-4'>
          Готові розпочати свій наступний проєкт? Зв'яжіться з нами сьогодні! Побудуймо майбутнє разом.
        </p>
      </div>
      <div className='container mt-sm-5 px-sm-0 px-4 mt-3 d-flex justify-content-md-center'>
        <div className='row'>
          <div
            className='col-md-6 col-12'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img
              loading='lazy'
              src={contactImg}
              alt=''
              style={{ width: '100%' }}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className='col-md-6 col-12'
            autoComplete='on'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className=''>
              <label
                className='mt-2 fw-bold'
                style={{ color: errors.name ? 'red' : 'black' }}
                htmlFor='name'
              >
                Ім'я та прізвище <span style={{ color: 'red' }}>*</span>
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='text'
                value={formData.name}
                name='name'
                id='name'
                placeholder="Введіть ім'я та прізвище"
                onChange={handleChange}
                pattern="[A-Za-zА-Яа-яЁё\s-]*"
                title="Можна ввести тільки літери"
                autoComplete='name'
                required
              />
              {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
              <label className='mt-2 fw-bold' htmlFor='email'>
                Електронна пошта
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='email'
                name='email'
                id='email'
                value={formData.email}
                placeholder='Введіть свою електронну адресу'
                onChange={handleChange}
                autoComplete='email'
              />
            </div>
            <div>
              <label className='mt-2 fw-bold' htmlFor='number'>
                Номер <span style={{ color: 'red' }}>*</span>
              </label>
              <InputBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='number'
                value={formData.number}
                name='number'
                id='number'
                placeholder='Введіть свій номер телефону'
                onChange={handleChange}
                autoComplete='tel'
                required
              />
              {errors.number && <span className='error'>{errors.number}</span>}
            </div>
            <div>
              <label className=' mt-2 fw-bold' htmlFor='message'>
                Повідомлення
              </label>
              <TextMessageBox
                className='input-box w-100 mt-2 card px-3 py-2'
                type='text'
                name='message'
                id='message'
                value={formData.message}
                placeholder='Введіть своє повідомлення'
                rows='5'
                onChange={handleChange}
                autoComplete='off'
              />
            </div>
            <div className='d-flex'>
              <button
                className='btn btn-outline-primary w-50 mt-5 mx-2'
                type='submit'
              >
                Надіслати
              </button>
              <button
                className='btn btn-outline-danger w-50 mt-5 mx-2'
                type='reset'
                onClick={clearData}
              >
                Скасувати
              </button>
            </div>
            <div className='mt-4 text-success'>
              {dataSubmittedMessage && (
                <div className='alert alert-success py-1'>
                  Дані успішно надіслано! 
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className='container contact-details-box mt-5'>
        <div className='row d-flex justify-content-around align-items-center px-md-0 px-5'>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='text-center'>
              <div>
                <FaEnvelope size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Електронна пошта</p>
                <p
                  className=' mt-sm-0 mt-2 fs-6'
                  style={{ wordBreak: 'break-word' }}
                >
                  <a
                    className='contact-link'
                    href='mailto:maxik.dach212121@gmail.com'
                    title='Drop a message'
                  >
                    office@embud.com.ua
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center mt-md-0 mt-4'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <div className='text-center mx-sm-3'>
              <div>
                <FaPhoneAlt size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Зателефонуйте нам</p>
                <p
                  className=' mt-sm-0 mt-2 fs-6'
                  style={{ wordBreak: 'break-word' }}
                >
                  <a
                    className='contact-link mt-sm-0 mt-2'
                    title='Call Us'
                    href='tel:+919611782840'
                  >
                    +380 44 228 22 58
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-md-3 col-12 contact-box d-flex flex-column justify-content-center align-items-center mt-md-0 mt-4'
            data-aos='fade-up'
            data-aos-duration='1300'
          >
            <div className='text-center mx-sm-3'>
              <div>
                <FaClock size={35} className='contact-icons' />
              </div>
              <div className='mt-2'>
                <p className='fw-bold contact-title'>Години роботи</p>
                <p className='fs-6'>Понеділок-неділя</p>
                <p className='fs-6'>9:30 - 17:30</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className='row d-flex justify-content-center align-items-center'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <div className='container-fluid mt-md-5 mt-3 col-12'>
            <div className='mt-lg-0 mt-5'>
              <MapContainer style={{ listStyle: 'none' }}>
                <iframe
                  className='map-frame'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1269.5537027131622!2d30.489453130387346!3d50.4763441714715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cde029000001%3A0xa7c1f6a0ef5d9cc8!2z0JXQnNCR0KPQlA!5e0!3m2!1suk!2spl!4v1713555226658!5m2!1suk!2sp'
                  title='location'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;
