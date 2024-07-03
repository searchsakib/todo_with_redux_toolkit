const TodoCard = () => {
  return (
    <div className='flex items-center justify-evenly bg-teal-700 p-3 text-[#ECF0F1] font-medium'>
      <input type='checkbox' name='checkbox' id='checkbox' />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className='flex gap-5'>
        <p>delete</p>
        <p>edit</p>
      </div>
    </div>
  );
};

export default TodoCard;
