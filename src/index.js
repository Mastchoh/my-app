import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style/main.css';
import logo from './img/image.png';
import logo1 from './img/logo-inner.svg'
import html1 from './img/html.png'
import css from './img/css.png'
import java from './img/java.png'
import react from './img/react.jpeg'
import ThemeToggle from './component/ThemeToggle'; // Иловаи компонент


const Header = () => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <header className='header'>
        <div className='logo'>
          <img width={200} height={55} src={logo1} alt="Логотип" />
        </div>
        <nav>
          <ul className='nav-list'>
            <li><a onClick={() => scrollToSection('home')}>Главная</a></li>
            <li><a onClick={() => scrollToSection('courses')}>Курсы</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Проекты</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Контакты</a></li>
          </ul>
        </nav>
  
        <div className='social-links'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='mailto:your-email@example.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
        <ThemeToggle/>
      </header>
    )
  }
  




const Img = (props) => {
    return (
        <img id="home" className='img' src={props.src}  />
    )
}

const Main = () => {
    return (
        <section className='section'>
            <div id="home" className='block1'>
                <p>Добро пожаловать на мой сайт! Я — преподаватель 
                    кафедры программирования, 
                    стремящийся вдохновить студентов на 
                    изучение новых технологий и языков 
                    программирования. Здесь вы найдете информацию 
                    о моих курсах, проектах и возможностях для
                    сотрудничества. Давайте создавать будущее вместе!
                </p>
            </div>
            <div className='block2'>
                <Img src={logo}  />
            </div>
        </section>
    )
}


const Imghtml1 = (props) => {
  return (
      <img className='imghtml1' src={props.src}  />
  )
}

const Block = () => {
    return (
      <div id="courses">  {/* Добавляем id courses */}
        <div className='qurs'>
          <h3>КУРСЫ</h3>
        </div>
        <div className="four-blocks">
          <div className="small-block">
            <Img src={html1} />
            <p>HTML</p>
          </div>
          <div className="small-block">
            <Img src={css} />
            <p>CSS</p>
          </div>
          <div className="small-block">
            <Img src={java} />
            <p>JavaScript</p>
          </div>
          <div className="small-block">
            <Img src={react} />
            <p>React</p>
          </div>
        </div>
      </div>
    )
  }
  
  const Projects = () => {
    return (
        <div id="projects">
        <section  id="react-info" className="react-info-section">
        <h2>Что такое React?</h2>
        <p>
          React — это библиотека для создания пользовательских интерфейсов, разработанная Facebook. Она позволяет
          разрабатывать одностраничные приложения, которые могут обновлять содержимое без перезагрузки страницы.
        </p>
        <p>
          Основные особенности React:
        </p>
        <ul>
          <li><strong>Компонентный подход:</strong> React разбивает интерфейс на независимые и переиспользуемые компоненты.</li>
          <li><strong>Virtual DOM:</strong> React использует виртуальный DOM для оптимизации обновлений интерфейса.</li>
          <li><strong>Однонаправленный поток данных:</strong> Данные передаются от родительских компонентов к дочерним.</li>
          <li><strong>Поддержка сообществом:</strong> React имеет большую и активную сообщество, предлагающее множество библиотек и инструментов.</li>
        </ul>
        <img className="react-image" src={react} alt="React logo" />
      </section>
      </div>
    )
  }

  const Contacts = () => {
    return (
      <section id="contact" className="contact-section">
        <h2>Связаться со мной</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Отправить</button>
        </form>
        <div className="contact-info">
          <h3>Контактная информация</h3>
          <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
          <p>Телефон: +1 (123) 456-7890</p>
          <p>Социальные сети: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
          </p>
        </div>
      </section>
    );
  };
  

  const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>Дар бораи мо</h3>
                    <p>Мо як дастаи мутахассисони IT ҳастем, ки кӯшиш мекунем технологияро ба ҳама дастрас кунем.</p>
                </div>
                <div className="footer-section links">
                    <h3>Пайвандҳои муфид</h3>
                    <ul>
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#courses">Курсы</a></li>
                        <li><a href="#projects">Проекты</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Иттилооти тамос</h3>
                    <p>Email: your-email@example.com</p>
                    <p>Телефон: +1 (123) 456-7890</p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Сомонаи шумо. Ҳамаи ҳуқуқҳо ҳифз шудаанд.
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Block/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

const app = ReactDOMClient.createRoot(document.getElementById('root'));
app.render(<App />)