import { useState } from 'react'
import Foo from './Foo'
import Bar from './Bar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Foo />
      <Bar />
    </div>
  )
}

export default App
