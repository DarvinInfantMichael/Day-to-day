
function ArrayMethods ()  {
    const fruits =[
        "Apple",
        "Mango",
        "Orange",
        "Banana",
        "Berry"

    ];

    const Vegetable=[
        "Potato",
        "Tomatoo",
    ]
  return (
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">This is the ArrayMethods Are Passed Here..</h1>
        <li>Here is the Fruits List and Vegetable:</li>
        <ul>
            {fruits.map((f,i)=>(
                <li key={i}>{f}</li>
            ))}
        </ul>
        <ul>
            {Vegetable.map((v,i)=>(
                <li key={i}>{v}</li>
            ))}
        </ul>

    


    </div>
  )
}

export default ArrayMethods