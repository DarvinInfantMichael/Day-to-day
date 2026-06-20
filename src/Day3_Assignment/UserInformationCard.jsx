
const UserInformationCard = ({user}) => {

    const{name,email,phone,city} = user;
  return (
    <div>
        <h2>UserInformationCard</h2>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
        <p>City:{city}</p>

    </div>
  )
}

export default UserInformationCard