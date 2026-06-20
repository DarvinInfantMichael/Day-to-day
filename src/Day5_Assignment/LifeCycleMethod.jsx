import { Component } from "react"

class LifeCycleMethod extends Component{

    constructor () {
        super();
        console.log("Constructor is Running Here");
    }

    componentDidMount(){
        console.log("Component did Mounting now...")
    }

    componentDidUpdate(){
        console.log("Here Component where Updated");
    }

    componentWillUnmount(){
        console.log("Here the Component is Unmounting..")
    }
    render(){
        console.log("Now its Running....");
    

  return (
    <>
    <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
        <h1 className="text-xl font-bold text-blue-600">LifeCycle Methods Here..</h1>
    </div>
    </>
  )
}
};

export default LifeCycleMethod;