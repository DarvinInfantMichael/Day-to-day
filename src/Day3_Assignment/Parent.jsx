import Child from "../Day3_Assignment/Child"
const Parent = ({name,course}) => {
  return (
    <div>Parent
        <Child name={name} course={course}/>
    </div>

  )
}

export default Parent