
function ArrayofObj () {

    const students=[
        {
            id:1,
            name:"Darvin",
            age:21,
            city:"Chennai"
        },{
            id:2,
            name:"Godson",
            age:21,
            city:"Tenkasi"
        },{
            id:3,
            name:"Joel",
            age:21,
            city:"Karaikudi"
        },{
            id:4,
            name:"Nellam",
            age:22,
            city:"Kaniyakumari"
        }
    ]
  return (
    <>
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">Students List</h1>

        {students.map((s)=>(
            <div key={s.id}>
                <h3>Name:{s.name}</h3>
                <h3>Age:{s.age}</h3>
                <h3>City:{s.city}</h3>
                <hr></hr>
            </div>
        ))}

    </div>
    </>
  )
}

export default ArrayofObj