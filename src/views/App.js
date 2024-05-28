import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import logo from './logo.svg';
import ListTodo from './Todos/ListTodo';

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with React.js 
        </p>

        {/* <MyComponent /> */}
        <ListTodo />

      </header>
       <div className='color'></div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
