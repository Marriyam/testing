import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AddMember from './AddMember';
import './App.css';
import Login from './Login';
import MemberList from './MemberList';
import Register from './Register';
import UpdateMember from './UpdateMember';
import Protected from './protected';

function App() {
  return (
    <div className="App">
      <Router>  
      <Routes>
      <Route exact path="/Login" element={<Login />} />  
      <Route exact path="/register" element={<Register />} />  
      <Route exact path="/addMember" element={<Protected Cmp={AddMember} />} />
      <Route exact path="/update/:id" element={<Protected Cmp={UpdateMember} />} />
      <Route exact path="/" element={<Protected Cmp={MemberList} />} />
      </Routes>
      </Router> 
      {/* <form /> */}
    </div>
  );
}

export default App;
