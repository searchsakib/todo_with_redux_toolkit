import TodoContainer from '@/components/Todo/TodoContainer';
import Container from '@/components/ui/container';

const TodoPage = () => {
  return (
    <Container>
      <h2 className='text-center text-3xl pb-5'>My Todos</h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default TodoPage;
