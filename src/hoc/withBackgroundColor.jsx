
const withBackgroundColor = (WrappedComponent) =>(props)=> {
    const{ color,...rest}=props

  return (

    <WrappedComponent
    {...rest}
    style={{

        backgroundColor:color,
        padding: "20px",
        borderRadius: "10px",
        color: "white",
        width: "250px",
        textAlign: "center",

    }}/>
    
  )
}

export default withBackgroundColor