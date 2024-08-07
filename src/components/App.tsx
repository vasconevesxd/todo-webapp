import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TodoList from "./TodoList";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'buy groceries',
      isCompleted: false
    },
    {
      id: 2,
      text: 'do laundry',
      isCompleted: true
    },
    {
      id: 3,
      text: 'finish project',
      isCompleted: false
    },
    {
      id: 4,
      text: 'call mom',
      isCompleted: true
    },
    {
      id: 5,
      text: 'workout',
      isCompleted: false
    }
  ]);

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">

      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />

        <TodoList todos={todos} setTodos={setTodos} />

        <SideBar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
