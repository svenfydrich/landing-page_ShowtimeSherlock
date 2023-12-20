import './App.css';
import chatbotImage from './assets/chatbot.png';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <div class='navbarwrapper'>
        <h1 class='logo'>ShowtimeSherlock</h1>
          <ul class='navbarlist'>
            <li id='about'>
              <a href="#aboutus" class="aboutus">Über uns</a>
            </li>
            <li id='history'>
              <a href='#history' class="history">Geschichte</a>
            </li>
            <li id='test'><button id='testbutton'><a href="url" class="test">TESTEN</a></button></li>
          </ul>
        </div>
        
        <div class='textbox'>
          <h1 class='headline'>Der schnellste Eventvermittler.</h1>
          <h2 class="subtitle">Finde in Echtzeit aktuelle Veranstaltungen, von Konzerten bis zu Kunstausstellungen.</h2>
          <button id="testnow"><a href="url" class="testnow">Jetzt testen</a> </button>
          <img src={chatbotImage} alt="Hier ist der Chatbot zu erkennen." id="chatbotimg"/>
        </div>
      </header>
    </div>
  );
}

export default App;
