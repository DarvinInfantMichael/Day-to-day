
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './Day19/provider/DataProvider.jsx'
import ThemeProvider from './Day19/provider/ThemeProvider.jsx'
import StudentProvider from './Day19/provider/StudentProvider.jsx'
import CartProvider from './Day19/provider/CartProvider'
import BonusProvider from './Day19/provider/BonusProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <DataProvider>
        <ThemeProvider>
            <StudentProvider>
                 <CartProvider>
                    <BonusProvider>
                        <App/>
                    </BonusProvider>
                    
                 </CartProvider>
            </StudentProvider>
            
        </ThemeProvider>
        
    </DataProvider>   
    </BrowserRouter>
  
)
