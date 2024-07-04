import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useAppDispatch } from '@/redux/hook';
import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, description });

    const randomString = Math.random().toString(36).substring(2);

    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
    };
    dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary-gradient hover:outline hover:outline-1'>
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] text-white bg-[#181A1B]'>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Tasks you want to finish</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='task' className='text-right'>
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id='task'
                className='col-span-3 bg-[#181A1B] focus:outline'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='description' className='text-right'>
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id='description'
                className='col-span-3 bg-[#181A1B] focus:outline'
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <DialogClose asChild>
              <Button
                className='bg-white text-black hover:bg-slate-300'
                type='submit'
              >
                Add Task
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
