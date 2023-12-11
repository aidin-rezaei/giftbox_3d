import Header from "./components/Header";
import Nav from "./components/Nav";
import Second from "./components/Second";
import Third from "./components/Third";
import WebgiViewer from "./components/WebgiViewer";

function App() {

  return (
    <div className="App gap-10">
      <Nav/>
      <Header/>
      <Second/>
      <Third/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
