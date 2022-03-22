import React, { useEffect } from 'react'
// import * as  ContainerStyles from './styles/wrap-page.module.css';

const WrapPage: React.FC = ({ children }) => {
  useEffect(() => {
    return () => {
      console.log(`unmounted`)
    }
  }, []);

  return (
    <>
      <div>
        <h1>Wrap Page Element {new Date().getTime()}</h1>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default WrapPage;