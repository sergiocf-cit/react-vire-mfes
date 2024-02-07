import { useState } from "react";
import Result from "./Result"
import { importByMarket } from '../core/importbymarket';

const CarryoutForm = importByMarket('CarryoutForm');

function Search() {

  const array = ["Store 1", "Store 2", "Store 3"]
  const [showResults, setShowResults] = useState(false); // Declare a state variable...

  function searchStores(value: string) {
    if (!value) {
      setShowResults(false);
      return;
    }

    setShowResults(true);
  }

  return (
    <>
      <CarryoutForm handleSubmit={searchStores} ></CarryoutForm>
      {showResults && <Result results={array} ></Result>}
    </>
  )
}

export default Search