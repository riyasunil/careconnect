import React from 'react'

const AuthHome = () => {
    //auth home can only be accesd bu authenticated users!!!
    const { user } = useAuth();
  return (
    <div>
        You are logged in and your email address is {user.email}
    </div>
  )
}

export default AuthHome