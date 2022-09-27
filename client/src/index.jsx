import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App  from './App.jsx';



root.render(<App />);