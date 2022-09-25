import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/utils/utils.css";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Todo from "./components/pages/todo/todo";
import DynamicForm from "./components/pages/dynamic_form/dynamic_form";
import Calculator from "./components/pages/calculator/calculator";
import ContactList from "./components/pages/contactList/contactList";
import CountApp from "./components/blocks/countApp";
import FetchData from "./components/pages/fetch-data/index";
import CustomHook from "./components/pages/Custom_hook/custom_hook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/dynamic_form" element={<DynamicForm />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contactlist" element={<ContactList />} />
        <Route path="/countApp" element={<CountApp />} />
        <Route path="/fetchData" element={<FetchData />} />
        <Route path="/customhook" element={<CustomHook />} />
      </Routes>
    </Router>
  );
}

export default App;
