import './App.css';
import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-[#F6F5F2] font-rubik h-screen text-zinc-900 w-full min-w-full'>
      <div className='flex justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
