import { Input } from './components/Input';
import { List } from './components/List';

import './App.css';

function App() {
  return (
    <div className='grid h-screen content-center'>
      <div className='grid justify-center'>
        <Input />
        <List />
      </div>
    </div>
  );
}

export default App;
