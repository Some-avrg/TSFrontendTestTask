import React from 'react';
import './App.css';
import './Button/Button.tsx';
import './Card/Card.css';

function App() {
    return (
        <div className="App">
            <head>
                <meta charSet="UTF-8" />
            </head>

            <header className="App-header">

                <p className="name">
                    Парыгин Михаил Владимирович
                </p>
                <p>
                    Немного обо мне:<br></br>
                    Обучаюсь в университете БГТУ "Военмех" по направлению "Программная инженерия".<br></br>
                    Изучаю программирование на языках C, C++, C#, TypeScript.
                </p>

            </header>

            <body className="App-body">
                <div>
                    <p>
                        Технологии с которыми я работал:
                    </p>
                    <div className="card-container">
                        <div className="card">
                            <div className="front-content">
                                <p>Windows Forms</p>
                            </div>
                            <div className="content">
                                <p className="heading">Windows Forms</p>
                                <p>
                                    Написал игру "Судоку" в рамках изучения языка C#,
                                    в процессе освоил работу с файлами, окнами и формами
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="front-content">
                                <p>WPF</p>
                            </div>
                            <div className="content">
                                <p className="heading">WPF</p>
                                <p>
                                    Создал приложение для взаимодействия с БД и отображения данных оттуда.
                                    Познакомился с паттерном проектирования MVVM.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="front-content">
                                <p>PostgreSQL</p>
                            </div>
                            <div className="content">
                                <p className="heading">PostgreSQL</p>
                                <p>
                                    Спроектировал инфологическую и даталогическую модели БД.
                                    Создал БД в pgAdmin. Написал тестовые SQL запросы для получения информации из БД
                                    и заполнения её данными.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="front-content">
                                <p>ASP.NET Core</p>
                            </div>
                            <div className="content">
                                <p className="heading">ASP.NET Core</p>
                                <p>
                                    Написал серверное приложение, реализующее REST API для доступа к ранее созданной БД
                                    при помощи фреймворка .NET Entity Framework Core.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div className="card">
                            <div className="front-content">
                                <p>Lex/Yacc</p>
                            </div>
                            <div className="content">
                                <p className="heading">Lex/Yacc</p>
                                <p>
                                    Изучил работу генераторов лексических и синтаксических анализаторов.
                                    Написал транслятор с языка программирования ST на язык C.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p>
                        Мои соцсети:
                    </p>
                    <div className="button-container">
                        <a href="https://discordapp.com/users/_q234"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button className="Button">
                                Discord
                            </button>
                        </a>
                        <a href="https://github.com/Some-avrg"
                            target="_blank"
                            rel="noopener noreferrer">

                            <button className="Button">
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>

            </body>
            <footer>
            </footer>
        </div >
    );
}

export default App;
