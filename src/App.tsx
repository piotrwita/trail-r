import './App.css';
import { Button } from './components/Button'
import { AppContent } from './components/AppContent';
import { Users } from './components/Users';
import { Count } from './components/Count';
import { TasksList } from './components/TasksList';
import { Counter } from './components/Counter';
import { RequestApi } from './components/ReqestApi';
import { Add } from './components/Add';
function App() {
  return (
      <>
          <Add/>
          <RequestApi/>
          <Counter/>
          <TasksList/>
          <Count/>
          <Users/>
          <AppContent/>
          <Button/>
      </>
  );
}

export default App;
