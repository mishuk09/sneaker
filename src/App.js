import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import SignIn from './components/Auth/SignIn';
import New from './components/Items/New';
import Shoes from './components/Items/Shoes';
import Cloth from './components/Items/Cloth';
import Gloves from './components/Items/Gloves';
import Kitchen from './components/Items/Kitchen';
import Dashboard from './components/Auth/Dashboard';
import PostList from './components/Post/PostList';
import AddPost from './components/Post/AddPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<New />}></Route>
        <Route path='/shoes' element={<Shoes />}></Route>
        <Route path='/cloth' element={<Cloth />}></Route>
        <Route path='/glovs' element={<Gloves />}></Route>
        <Route path='/kitchen' element={<Kitchen />}></Route>
        <Route path='/auth' element={<SignIn />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/postlist' element={<PostList />}></Route>
        <Route path='/addpost' element={<AddPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
