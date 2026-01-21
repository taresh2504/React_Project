import React from 'react'
import ElectricBorder from '../Component/ElectricBorder'
import '../Tailwind.css'

const Signup = () => {
  return (
    <>
      {/* // CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN */}
<div className="w-full max-w-md mx-auto flex justify-center align-middle mt-40">
<ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
  className="w-full h-80" 
>
  <div>
    <p style={{ margin: '6px 0 0', opacity: 0.8 }}>
      <h1>Sign up</h1>
    </p>
  </div>
</ElectricBorder>
</div>
    </>
  )
}

export default Signup
