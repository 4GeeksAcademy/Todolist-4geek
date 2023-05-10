import React from 'react';
import Navbar from './Navbar.jsx';

const Todolist = () => {
  // const [input, setInput] = useState('');
  // const [todoValues, handleAddTodo, handleDeleteTodo, setTodoValues] = useTodo([]);

  // const isRepeat = (string) => {
  //   return todoValues.some(({ value }) => value === string);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // validacion
  //   if (isRepeat(input) || !input.trim()) return setInput('');

  //   const newTodo = { key: crypto.randomUUID(), label: input, deleted: false, done: false };
  //   handleAddTodo(newTodo);
  //   setInput('');
  // };
  // Traer todos
  // useEffect(() => {
  //   fetch('http://assets.breatheco.de/apis/fake/todos/user/crgarcia')
  //     .then((res) => res.json())
  //     .then((data) => setTodoValues((state) => [...state, ...data]))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Navbar />
      <div className='mt-5'>
        <div id='container'></div>
      </div>
    </>
  );
};

export default Todolist;
