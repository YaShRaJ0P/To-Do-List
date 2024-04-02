import { TaskInput } from './TaskInput';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Categories } from './Categories';
import { Navbar } from './Navbar';

export const Body = () => {
    return (
        <section className="flex flex-col items-center min-h-screen max-w-full bg-[#060822] text-white">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    {/* The main Route components with their respective components */}
                    <Route path="/" element={<TaskInput />}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                </Routes>
            </BrowserRouter>
        </section>
    )
}
