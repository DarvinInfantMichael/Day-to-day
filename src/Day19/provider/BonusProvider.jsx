import BonusContext from "../context/BonusContext"

const BonusProvider = ({children}) => {

    const data=[{
  totalStudents: 250,
  totalCourses: 15,
  totalPlacements: 120
}]

  return (
    <>
    <div>
        <BonusContext.Provider value={{data}}>
            {children}
        </BonusContext.Provider>
    </div>
    </>
  )
}

export default BonusProvider