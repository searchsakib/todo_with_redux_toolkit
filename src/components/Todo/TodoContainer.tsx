import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const allTodo = useAppSelector((state) => state.todos.todos);

  return (
    <div>
      <div className='mb-5 flex justify-between'>
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className='bg-primary-gradient w-full h-full rounded-md p-[5px]'>
        <div className='space-y-3 bg-[#181A1B] p-5'>
          {allTodo.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      {/* <div className='text-[#ffcf20] text-center text-2xl'>No Todos Here!</div> */}
    </div>
  );
};

export default TodoContainer;
