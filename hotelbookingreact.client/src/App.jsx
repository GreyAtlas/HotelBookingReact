import React, { Component, Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import HotelPage from './pages/HotelPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import './App.css'



export default function App() {
    return (
        <div>
            <BrowserRouter>
                <AppHeader />
                <Routes>
                    <Route path="/" element={<HotelPage />} />
                    <Route path="/hotels" element={<HotelPage />} />
                    <Route path="/bookings" element={<BookingPage />} />
                </Routes>
                <AppFooter />
            </BrowserRouter>
        </div>
    );
}