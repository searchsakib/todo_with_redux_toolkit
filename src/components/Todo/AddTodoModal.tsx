import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddTodoModal = () => {
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
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='task' className='text-right'>
              Task
            </Label>
            <Input
              id='task'
              className='col-span-3 bg-[#181A1B] focus:outline'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Description
            </Label>
            <Input
              id='description'
              className='col-span-3 bg-[#181A1B] focus:outline'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className='bg-white text-black hover:bg-slate-300'
            type='submit'
          >
            Add Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
