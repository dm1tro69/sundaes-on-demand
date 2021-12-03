import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";
import {Container} from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import {OrderDetailsProvider} from "./context/OrderDetails";

function App() {
  return (
    <Container>
        <OrderDetailsProvider>
            <SummaryForm/><Options optionType={'scoops'}/>
            <SummaryForm/><Options optionType={'toppings'}/>
            <OrderEntry/>
        </OrderDetailsProvider>


    </Container>
  );
}

export default App;
