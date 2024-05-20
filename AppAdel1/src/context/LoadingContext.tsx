'use client'
import React, { createContext, useContext, useState, ReactNode, FC, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setGlobalLoading: Function
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const setGlobalLoading = (value: boolean) => {
    setIsLoading(value)
  }

  useEffect(() => {
    console.log('Provider')
    console.log('isLoading', isLoading)
  }, [isLoading])

  return (
    <LoadingContext.Provider value={{ isLoading, setGlobalLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
