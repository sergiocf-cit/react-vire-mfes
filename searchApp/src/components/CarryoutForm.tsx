import { useState } from "react";

interface CarryoutFormProps {
  handleSubmit: (e: string) => void;
}

function CarryoutForm(props: CarryoutFormProps) {

  const [value, setValue] = useState(''); // Declare a state variable...


  function handleSubmit(e: any) {
    // Prevent the browser from reloading the page
    setValue(e.target.value)
    props.handleSubmit(e.target.value);

    console.log(e.target.value);
  }

  return (
    <>
      <label>
       Zipcode: <input value={value}
          onChange={e => handleSubmit(e) } name="zipcode" />
      </label>
    </>
  )
}

export default CarryoutForm