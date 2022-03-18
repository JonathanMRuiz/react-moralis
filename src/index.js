import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoralisProvider } from 'react-moralis';
import App from './App';
import Dashboard from './components/Dashboard';

const appId = "hun9NgodxSKa7nV4bmbSyNU6DiktG4RD9xlZAQPg";
const serverUrl = "https://yaofjkh8a8y2.usemoralis.com:2053/server";

ReactDOM.render(
  <Router>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </MoralisProvider>
  </Router>,
  document.getElementById('root')
);
