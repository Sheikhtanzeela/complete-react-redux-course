import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: "",
    };
  }

  handleChange(event) {
    this.setState({ keywords: event.target.value });
    this.props.newsSearch(event.target.value);
  }

  render() {
    return (
      <header>
        <div
          className="logo"
          onClick={() => {
            alert("click");
          }}
        >
          Logo
        </div>
        <input onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}

export default Header;
