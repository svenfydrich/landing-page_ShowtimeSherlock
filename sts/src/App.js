import './App.css';
import chatbotImage from './assets/chatbot.png';
import logo from './assets/logo.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbarwrapper">
          <h1 className="logo">ShowtimeSherlock</h1>
          <img src={logo} alt='Logo' id='minilogo'></img>
            <ul className="navbarlist">
              <li id="about">
                <a href="https://github.com/ID-Start-Winter23/ShowtimeSherlock/wiki/Ideation-und-Sprint-1" className="aboutus">
                  History
                </a>
              </li>
              <li id="github">
                <a href="https://github.com/ID-Start-Winter23/ShowtimeSherlock" className="github">
                  GitHub
                </a>
              </li>
              <li id="test">
                <button id="testbutton">
                  <a href='https://huggingface.co/spaces/leahaller/ShowtimeSherlock' className="test">
                    TESTEN
                  </a>
                </button>
              </li>
            </ul>
        </div>
      </header>
      <body>
        <div className="textbox">
          <div className="text-content">
            <h1 className="headline">Der schnellste Eventvermittler.</h1>
            <h2 className="subtitle">
              Finde in Echtzeit aktuelle Veranstaltungen, von Konzerten bis zu
              Kunstausstellungen.
            </h2>
            <button id="testnow">
              <a href='https://huggingface.co/spaces/leahaller/ShowtimeSherlock' className="testnow">
                Jetzt testen
              </a>{' '}
            </button>
          </div>
          <div className="image-container">
            <img src={chatbotImage} alt="Hier ist der Chatbot zu erkennen." id="chatbotimg" />
          </div>
            <button id="tablettest">
                <a href='https://huggingface.co/spaces/leahaller/ShowtimeSherlock' className="tablettest">
                  Jetzt testen
                </a>{' '}
              </button>
        </div>
      </body>
      <footer>
          &copy; 2024 ShowtimeSherlock. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

export default App;
