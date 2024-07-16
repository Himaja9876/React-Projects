import { useState } from "react"
function App() {

  const [tab, setTab] = useState("HOME")
  return (
      <div>
        <div className="tabs">
          <a onClick={() => setTab("HOME")}>HOME</a>
          <a onClick={() => setTab("NEWS")}>NEWS</a>
          <a onClick={() => setTab("CONTACT")}>CONTACT</a>
          <a onClick={() => setTab("ABOUT")}>ABOUT</a>
        </div>
        <div>
          <span>
            {tab} PAGE
          </span>
        </div>
      </div>
  )
}

export default App
