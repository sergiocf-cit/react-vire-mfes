import { useState } from "react";

interface CarryoutFormProps {
  handleSubmit: (e: string) => void;
}

function CarryoutForm(props: CarryoutFormProps) {
  const [value, setValue] = useState(''); // Declare a state variable...

  function handleSubmit(e: any) {
    setValue(e.target.value)
    props.handleSubmit(e.target.value);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
       Longitude: <input value={value} type="number"
          onChange={e => handleSubmit(e) } name="longitude" />
      </label>
    </form>
    </>
  )
}

export default CarryoutForm