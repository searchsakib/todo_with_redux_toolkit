import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div className='p-10'>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className='bg-primary-gradient w-full h-full rounded-md p-[5px]'>
        <div className='space-y-3 bg-white p-5'>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
      {/* <div className='text-[#ffcf20] text-center text-2xl'>No Todos Here!</div> */}
    </div>
  );
};

export default TodoContainer;
