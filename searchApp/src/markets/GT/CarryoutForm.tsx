interface CarryoutFormProps {
  handleSubmit: (e: string) => void;
}

function CarryoutForm(props: CarryoutFormProps) {

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log('You clicked submit.');

    props.handleSubmit(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>
            Longitude: <input name="longitude" />
          </label>
        </div>
        <div>
          <label>
            Latitude: <input name="latitude" />
          </label>
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  )
}

export default CarryoutForm