// import { useAppSelector } from '@/redux/hook';
import { Progress } from '../ui/progress';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
  //! From Local State
  // const allTodo = useAppSelector((state) => state.todos.todos);

  //! From Server
  const { data: allTodo, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(allTodo);

  if (isError) {
    return <p>Oopsy Daisy</p>;
  }

  if (isLoading) {
    return <Progress className='h-3 w-60' value={33} />;
  }

  return (
    <div>
      <div className='mb-5 flex justify-between'>
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className='bg-primary-gradient w-full h-full rounded-md p-[5px]'>
        <div className='space-y-3 bg-[#181A1B] p-5'>
          {allTodo?.data?.length ? (
            allTodo?.data?.map((item) => <TodoCard key={item._id} {...item} />)
          ) : (
            <p className='text-center text-xl'>No Tasks added yet!</p>
          )}
        </div>
      </div>
      {/* <div className='text-[#ffcf20] text-center text-2xl'>No Todos Here!</div> */}
    </div>
  );
};

export default TodoContainer;
