const TodoCard = () => {
  return (
    <div className='flex items-center justify-evenly border border-slate-400 p-3 font-medium rounded-lg'>
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
