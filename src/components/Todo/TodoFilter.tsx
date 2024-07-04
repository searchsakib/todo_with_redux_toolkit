import { useState } from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const TodoFilter = () => {
  const [position, setPosition] = useState('bottom');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-secondary-gradient hover:outline hover:outline-1'>
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 bg-[#181A1B] text-white'>
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value='high'>High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='medium'>Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='low'>Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
