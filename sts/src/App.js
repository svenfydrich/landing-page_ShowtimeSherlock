import './App.css';
import chatbotImage from './assets/chatbot.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbarwrapper">
          <h1 className="logo">ShowtimeSherlock</h1>
          <ul className="navbarlist">
            <li id="about">
              <a href="#aboutus" className="aboutus">
                Über uns
              </a>
            </li>
            <li id="history">
              <a href="#history" className="history">
                Geschichte
              </a>
            </li>
            <li id="test">
              <button id="testbutton">
                <a href="url" className="test">
                  TESTEN
                </a>
              </button>
            </li>
          </ul>
        </div>

        <div className="textbox">
          <div className="text-content">
            <h1 className="headline">Der schnellste Eventvermittler.</h1>
            <h2 className="subtitle">
              Finde in Echtzeit aktuelle Veranstaltungen, von Konzerten bis zu
              Kunstausstellungen.
            </h2>
            <button id="testnow">
              <a href="url" className="testnow">
                Jetzt testen
              </a>{' '}
            </button>
          </div>
          <div className="image-container">
            <img src={chatbotImage} alt="Hier ist der Chatbot zu erkennen." id="chatbotimg" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
