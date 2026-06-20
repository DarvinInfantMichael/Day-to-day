import { Component } from "react";
class ClassComponent extends Component {

  render() {
    return(
        <div className="border rounded-lg shadow-md p-5 bg-white mt-3">
            <h1 className="text-xl font-bold text-blue-600">Welcome to Class Component</h1>
            <h1>value <span>100</span></h1>
        </div>
    )
  }
}
export default ClassComponent