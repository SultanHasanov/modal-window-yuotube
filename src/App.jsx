import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';

function App() {
const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Регистрация
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
          <div class="conteiner">
            <div class="form">
              <h1>Регистрация</h1>
              <form>
                <input
                  type="text"
                  required
                  placeholder="Имя"
                  id="name1"
                  class="input"
                />
                <input
                  type="text"
                  required
                  placeholder="Фамилия"
                  id="name2"
                  class="input"
                />
                <input
                  type="text"
                  required
                  placeholder="Отчество"
                  id="name3"
                  class="input"
                />
                <input
                  type="email"
                  required
                  placeholder="Емейл"
                  id="email"
                  class="input"
                />
                <input
                  type="password"
                  required
                  placeholder="Пароль"
                  id="pass1"
                  class="input"
                />
                <input
                  type="password"
                  required
                  placeholder="Подтвердите пароль"
                  id="pass2"
                  class="input"
                />
                <input
                  type="number"
                  required
                  placeholder="Номер телефона"
                  id="tel"
                  class="input"
                />
                <button id="btn">Регистрация</button>
                Нажимая "Регистрация", вы подтверждаете, что прочитали и
                согласны с нашими Условиями Пользования и Политикой
                Конфиденциальности
              </form>
            </div>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
