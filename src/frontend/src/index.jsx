import { notemain_backend } from "../../declarations/notemain_backend";
//import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
