'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({})

export const UserProvider = ({children}) => {
  const [infosChanged, setInfosChanged] = useState(false);

  return (
    <UserContext.Provider value={{ infosChanged, setInfosChanged }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('User Context Not Wrapped');
  }
  return context;
}
