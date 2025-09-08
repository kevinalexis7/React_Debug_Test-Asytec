import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import UserList from './components/UserList'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'
import useTheme from './hooks/useTheme'

function App() {
  const [oldTab, setOldTab] = useLocalStorage("tab", 'counter')
  const [activeTab, setActiveTab] = useState(oldTab)
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    document.title = `React Debug Test - ${activeTab}`
    setOldTab(activeTab)
  })

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <header>
        <h1>React Debug Test</h1>
        <div>
          <button 
            className="button" 
            onClick={toggleTheme}
          >
            Toggle Theme ({theme})
          </button>
        </div>
        
        <nav style={{ margin: '20px 0' }}>
          <button 
            className={`button ${activeTab === 'counter' ? 'active' : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            Counter
          </button>
          <button 
            className={`button ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button 
            className={`button ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'users' && <UserList />}
        {activeTab === 'todos' && <TodoList />}
      </main>
    </div>
  )
}

export default App
