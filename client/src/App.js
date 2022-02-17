import { Input } from './components/Input';
import { List } from './components/List';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <div className='bg-[url("./images/blob-background.svg")] bg-cover grid h-screen content-center'>
      <div className='grid justify-center'>
        <GlobalProvider>
          <Input />
          <List />
          <p>test</p>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
