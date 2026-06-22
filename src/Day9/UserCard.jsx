
const UserCard = ({name,role,style}) => {


  return (
    
    <div style={style}>
        <h1>{name}</h1>
        <h3>{role}</h3>
    </div>
    
  )
}

export default UserCard