import React from 'react'

const profileLayout = ({children}) => {
  return (
    <div>
        <h1>This is Profile header</h1>
        {children}
         <h1>This is Profile Footer</h1>
    </div>
  )
}

export default profileLayout