interface Props {
  results: string[];
}

function CarryoutForm(props: Props) {
  return (
    <>
      <h6>Results</h6>
      <div>
        <ul>
          {props.results.map((item) => (
            <li style={{textAlign: "left"}} key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CarryoutForm