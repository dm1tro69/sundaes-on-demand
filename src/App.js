import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";

function App() {
  return (
    <div>
     <SummaryForm/><Options optionType={'scoops'}/>
    </div>
  );
}

export default App;
