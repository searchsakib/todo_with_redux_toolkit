import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div className='bg-slate-700 h-96 space-y-4 p-10'>
      <TodoCard></TodoCard>
      <TodoCard></TodoCard>
      <TodoCard></TodoCard>
      <TodoCard></TodoCard>
      <TodoCard></TodoCard>
    </div>
  );
};

export default TodoContainer;
