
import Data from "./index-hooks";

function FetchData(){
    const {comment,id,max,handleNext,handlePrev} =  Data()
    return <div>
        <h2>comments <span>{id} </span></h2>
        <h3>{comment.name} </h3>
        <p>{comment.body} </p>
        <div>
            <button disabled={id === 1} onClick={handlePrev}>prev</button>
            <button disabled={id === max} onClick={handleNext}>next</button>
        </div>
    </div>
}

export default FetchData;