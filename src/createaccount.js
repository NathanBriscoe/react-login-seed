import React from "react";

class CreateAccount extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
// ToDo: will need to add validations
  render() {
    return (
      <form>
        <input placeholder="username" type="name" />
        <input placeholder="password" type="password" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default CreateAccount;