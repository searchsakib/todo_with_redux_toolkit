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
import { useAddTodoMutation } from '@/redux/api/api';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const AddTodoModal = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  console.log(priority);

  //! For Local State
  // const dispatch = useAppDispatch();
  //! For server
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();
  console.log({ data, isLoading, isError, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, description });

    //! this was for local state id generation, we don't need this for mongodb
    // const randomString = Math.random().toString(36).substring(2);

    const taskDetails = {
      title: task,
      description,
      priority,
      isCompleted: false,
    };

    //! For Local State
    // dispatch(addTodo(taskDetails));

    //! For Server
    addTodo(taskDetails);
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
                required
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
                required
                onBlur={(e) => setDescription(e.target.value)}
                id='description'
                className='col-span-3 bg-[#181A1B] focus:outline'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Priority</Label>
              <Select required onValueChange={(e) => setPriority(e)}>
                <SelectTrigger className='bg-[#181A1B] col-span-3'>
                  <SelectValue placeholder='Priority' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='high'>High</SelectItem>
                    <SelectItem value='medium'>Medium</SelectItem>
                    <SelectItem value='low'>Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
