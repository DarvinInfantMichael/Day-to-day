import { useRef } from "react";

const InputText = () => {

    const inputRef = useRef();

    const textRef=useRef();

    const HandleChange=()=>{
        textRef.current.textContent=inputRef.current.value;    }

  return (
    <div className="bg-amber-200 flex justify-center items-center flex-col mt-4 p-6 rounded-2xl w-150">

        <h1 className="text-2xl font-bold text-blue-800">Input Text Showing Task Use Ref</h1>

        <input type="text"
        ref={inputRef}
        onInput={HandleChange}
        placeholder="Enter Something..."
        className="mt-4 p-4 border-2 rounded-2xl"/>

        <button onClick={HandleChange}
        className="text-xl font-bold text-red-600 mt-4">Live Process</button>

        <h3 ref={textRef}
        className="text-xl font-bold text-green-700 mt-4"></h3>


    </div>
  )
}

export default InputText