import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <UserProfile />
    </div>
  );
}

export default App
