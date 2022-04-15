import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import NavBar from '../NavBar/NavBar';

import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <NavBar></NavBar>
            <DashBoard></DashBoard>
        </div>
    );
};

export default App;
