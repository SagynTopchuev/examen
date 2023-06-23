import { Provider } from 'react-redux'
import './App.css'
import Checkout from './JS/Checkout'
import { store } from './store'
// import Checkout from './TS/Checkout';

function AppContent() {
    return <Checkout />
}
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <AppContent />
            </Provider>
        </div>
    )
}

export default App
