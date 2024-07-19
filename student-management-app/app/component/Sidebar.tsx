import React, { useState } from 'react'

const Sidebar = () => {
 const [active, setActive] = useState('')
  return (
    <div>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

export default Sidebar