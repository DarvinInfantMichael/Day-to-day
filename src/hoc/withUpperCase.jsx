

const withUpperCase = (WrappedComponent) => (props)=>{
    const{message,...rest}=props
  return (
    <WrappedComponent
    {...rest}
    message={message.toUpperCase()}
    />
  )
}

export default withUpperCase