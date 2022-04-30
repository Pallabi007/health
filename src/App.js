import React from 'react';

import ListMedicine from './Medicines/list-medicine/ListMedicine';
import MedicineForm from './Medicines/medicine-form/MedicineForm';
import { Route, Routes } from 'react-router-dom';

import Registration from './Admin/login/Registration';
import Useredit from './Medicines/list-medicine/Useredit'
import Search from './Medicines/list-medicine/Search';
import LoginNew from './Admin/login/LoginNew';
import ViewAllMedicine from './User/list-medicine/ViewAllMedicine';
import ViewAllUser from './User/list-medicine/ViewAllUser';
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import HomeScreen from "./screens/HomeScreen";


import { Navbar } from 'reactstrap';
//import { Home } from '@material-ui/icons';


function App() {
  return (
    <div>
      
      <Routes>
      
       
        <Route path="/Useredit/:id" element={<Useredit />}>
        </Route>
        <Route path="/Medicine" element={<ListMedicine />}>
        </Route>
        <Route path="/Medicine/:id" element={<MedicineForm />}>
        </Route>
        <Route path="/Search" element={<Search />}>
        </Route>
        <Route path="/Registration" element={<Registration />}>
        </Route>
        <Route path="/" element={<LoginNew />}>
        </Route>
        <Route path="/LoginNew" element={<LoginNew />}>
        </Route>
        <Route path="/ViewAllUser" element={<ViewAllUser />}>
        </Route>
        <Route path="/ViewAllMedicine" element={<ViewAllMedicine />}>
        </Route>
       
       
        
      </Routes>
    </div>
  );
}

export default App;