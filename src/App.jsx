// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddUpdateCategory from './components/AddUpdateCategory';
import AddUpdateItem from './components/AddUpdateItem';
import ItemAvailability from './components/ItemAvailability';
import ApplyDiscount from './components/ApplyDiscount';
import TodaysSpecial from './components/TodaysSpecial';

import Settings from './components/Settings';

import ChangePassword from './components/ChangePassword';
import GetQRCode from './components/GetQRCode';
import CustomerFeedback from './components/CustomerFeedback';
import Logout from './components/Logout';
import EditProfile from './components/EditProfile';
import ItemDetails from './components/ItemDetails';
import ItemPricing from './components/ItemPricing';
import ItemImages from './components/ItemImages';
import ItemAdded from './components/ItemAdded';
import CustomerView from './components/CustomerView';
import DiscountForm from './components/DiscountForm';
import MenuPreview from './components/MenuPreview'
import ViewItemDetails from './components/ViewItemDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-update-category' element={<AddUpdateCategory userId="YOUR_USER_ID" />} />
        <Route path='/add-update-item' element={<AddUpdateItem />} />
        <Route path="/item-images" element={<ItemImages />} />
        <Route path="/item-added" element={<ItemAdded />} />
        <Route path='/item-availability' element={<ItemAvailability />} />
        <Route path='/apply-discount' element={<ApplyDiscount />} />
        <Route path='/todays-special' element={<TodaysSpecial />} />
        <Route path='/menu-preview' element={<MenuPreview />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/get-qr-code" element={<GetQRCode />} />
        <Route path="/customer-feedback" element={<CustomerFeedback />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/item-details" element={<ItemDetails />} />
        <Route path="/item-pricing" element={<ItemPricing />} />
        <Route path="/customer-view" element={<CustomerView />} />
        <Route path="/discount-form/:itemId" element={<DiscountForm />} />
        <Route path="/view-item-details" element={<ViewItemDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
