import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="/friends" element={<Friends></Friends>}/>
        <Route path="/friend/:friendId" element={<FriendDetail></FriendDetail>}/>
        <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
    </div>
  );
}

export default App;
