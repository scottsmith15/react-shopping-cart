import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    const { onIncrement, onDelete, counter } = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses(counter)}>
          {this.formatValue(counter)}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
