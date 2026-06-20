import GrandChild from "../Day3_Assignment/GrandChild"
const Child = ({name,course}) => {
  return (
    <div>Child
        <GrandChild name={name} course={course}/>
    </div>
  )
}

export default Child