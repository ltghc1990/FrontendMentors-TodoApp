import {ThemeProvider} from "./hooks/ThemeProvider"
 import {TodoProvider} from "./hooks/TodoProvider"

 import Background from "./components/Background"
 import Header from "./components/Header"
 import TodoList from "./components/TodoList"
 import FormInput from "./components/FormInput"

function App() {
  return (
    <ThemeProvider>
      <Background> 
        <Header/>
        <TodoProvider> 
          <FormInput/>
          <TodoList/>
        </TodoProvider>
      </Background>
     </ThemeProvider> 
  );
}

export default App;
