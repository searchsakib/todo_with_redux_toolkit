import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div className='bg-[#282C34] p-10'>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className='space-y-4'>
        <TodoCard></TodoCard>
      </div>
      {/* <div className='text-[#ffcf20] text-center text-2xl'>No Todos Here!</div> */}
    </div>
  );
};

export default TodoContainer;
