````


---




```jsx




// React: Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;



````

---

```jsx
// React: Create a Complex JSX Element
const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);
```

---

```jsx
// React: Add Comments in JSX
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/**/}
  </div>
);
```

---

```jsx
//   React: Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
```

---

```jsx
// change code below this line

ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

---

```jsx
//   React: Define an HTML Class in JSX
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
```

---

```jsx




//   React: Learn About Self-Closing JSX Tags(like br and hr)
const JSX = (
    <div>


```

---

```jsx




// remove comment and change code below this line
      <h2>Welcome to React!</h2>
      <br />
      <p>Be sure to close all tags!</p>
      <hr />


```

---

```jsx




// remove comment and change code above this line
    </div>
  );



```

---

```jsx




//   React: Create a Stateless Functional Component
const MyComponent = function() {


```

---

```jsx
// change code below this line
return <div>{"Every Components return somethings"}</div>;
```

---

```jsx




// change code above this line
  }



```

---

```jsx
// React: Create a React Component
```

---

```jsx




// The other way to define a React component is with the ES6 class syntax.
/*class has a constructor defined within it that calls super().
It uses super() to call the constructor of the parent class,
in this case React.Component.
The constructor is a special method used during the initialization of objects that are created with the class keyword.
It is best practice to call a component's constructor with super, and pass props to both.
This makes sure the component is initialized properly.
For now, know that it is standard for this code to be included.
Soon you will see other uses for the constructor as well as props. */

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {


```

---

```jsx
// change code below this line
return (
  <div>
    <h1>Hello React!</h1>
  </div>
);
```

---

```jsx




// change code above this line
    }
  };



```

---

```jsx
// React: Create a Component with Composition of other components
```

---

```jsx
// for eg -
/*return (
    <App>
      <Navbar />
      <Dashboard />
      <Footer />
    </App>
    )
*/

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* change code below this line */}
        <ChildComponent />

        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx
//  React: Use React to Render Nested Components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* change code below this line */}
      <TypesOfFruit />
      {/* change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx




//   React: Compose React Components

class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* change code below this line */ }
            {/*

```

---

```jsx




// nesting two components which is assumed to be in the background  */}
            <NonCitrus/>
            <Citrus/>
           { /* change code above this line */ }
        </div>
      );
    }
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          {/*

```

---

```jsx




// nesting the other react component */}
          <Fruits/>
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };



```

---

```jsx
//   React: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
        <Fruits />
        <Vegetables />
        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx
// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
```

---

```jsx
//   React: Write a React Component from Scratch
```

---

```jsx




// change code below this line
class MyComponent extends React.Component {


```

---

```jsx




// Constructor and super both passes props
    constructor(props){
      super(props);
    }

    render(){
      return(
        <h1>My First React Component!</h1>
      );
    }

  };

  ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));



```

---

```jsx




//   React: Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        {/*

```

---

```jsx




//   passing up the props called date here */}
        <p>The current date is: {props.date}</p>
        { /* change code above this line */ }
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          {/*

```

---

```jsx




// adding the props date that take return value of date() function  */}
          <CurrentDate date={Date()}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };




```

---

```jsx
// React: Pass an Array as Props
```

---

```jsx
// use Array methods such as join() can be used when accessing the property.
```

---

```jsx
// for eg
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>;

const List = (props) => {
  {
    /* change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* change code above this line */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "sleep"]} />
        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx
// React: Use Default Props
```

---

```jsx
// React assigns default props if props are undefined,
```

---

```jsx
// but if you pass null as the value for a prop, it will remain null.
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
```

---

```jsx
// change code below this line
```

---

```jsx
// Assign Default Props to ShoppingCard Component
ShoppingCart.defaultProps = {
  items: 0,
};
```

---

```jsx




// React: Override Default Props
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }

  Items.defaultProps = {
    quantity: 0
  }

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }


```

---

```jsx




// overriding the default props is same as explicitly setting up the props
      return <Items quantity={10}/>
      { /* change code above this line */ }
    }
  };





```

---

```jsx
//   React: Use PropTypes to Define the Props You Expect
/*It's considered a best practice to set propTypes when you know the type of a prop ahead of time.
You can define a propTypes property for a component in the same way you defined defaultProps. 
Doing this will check that props of a given key are present with a given type. */

import React, { PropTypes } from "react";
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};
```

---

```jsx
// change code below this line
```

---

```jsx




// here proptypes start with small P
  Items.propTypes = {


```

---

```jsx
// quantity shud be of type number
```

---

```jsx




//  here proptypes start with Capital P
    quantity: PropTypes.number.isRequired
  };


```

---

```jsx
// change code above this line

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}
```

---

```jsx
//   React: Access Props Using this.props
```

---

```jsx
// The last several challenges covered the basic ways to pass props to child components.
```

---

```jsx
//  But what if the child component that you're passing a prop to is an ES6 class component,
```

---

```jsx
//  rather than a stateless functional component?
```

---

```jsx
// The ES6 class component uses a slightly different convention to access props.
```

---

```jsx
// Anytime you refer to a class component within itself, you use the this keyword.

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
        {/* change code above this line */}
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* change code below this line */}
        <ReturnTempPassword tempPassword={"12345678"} />
        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx
//   React: Review Using Props with Stateless Functional Components

/* VERY IMPORTANT NOTE BELOW */
```

---

```jsx
// Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.
```

---

```jsx
// A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is any component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.
```

---

```jsx
// A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
```

---

```jsx
// change code below this line
const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
};

Camper.defaultProps = {
  name: "CamperBot",
};

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
```

---

```jsx
//   React: Create a Stateful Component
```

---

```jsx




// for eg : setting up the state
this.state = {


```

---

```jsx




// describe your state here
}



```

---

```jsx




// One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.


class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);


```

---

```jsx




// initialize state here
      this.state = {
        name: "Akash Shakya"
      }

    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };



```

---

```jsx
//   React: Render State in the User Interface
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <h1>{this.state.name}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}
```

---

```jsx




// React: Render State in the User Interface Another Way
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {


```

---

```jsx
// change code below this line
const name = this.state.name;
```

---

```jsx




// change code above this line
      return (
        <div>
          { /* change code below this line */ }
          <h1>{name}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };



```

---

```jsx




// React: Set State with this.setState
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {


```

---

```jsx
// change code below this line
```

---

```jsx
// Note the setState Syntax
this.setState({
  name: "React Rocks!",
});
```

---

```jsx




// change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };




```

---

```jsx




// React: Bind 'this' to a Class Method
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemCount: 0
      };


```

---

```jsx
// change code below this line
```

---

```jsx
// without this binding it will not work bcoz this keyword is of undefined.
```

---

```jsx
// so we need to bind this in the constructor so this
```

---

```jsx
// becomes bound to the class methods when the component is initialized.
this.addItem = this.addItem.bind(this);
```

---

```jsx




// change code above this line
    }
    addItem() {
      this.setState({
        itemCount: this.state.itemCount + 1
      });
    }
    render() {
      return (
        <div>
          { /* change code below this line */ }
          <button onClick={this.addItem}>Click Me</button>
          { /* change code above this line */ }
          <h1>Current Item Count: {this.state.itemCount}</h1>
        </div>
      );
    }
  };



```

---

```jsx




//  React: Use State to Toggle an Element
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };


```

---

```jsx
// change code below this line
this.toggleVisibility = this.toggleVisibility.bind(this);
```

---

```jsx




// change code above this line
    }


```

---

```jsx




// change code below this line
    toggleVisibility(){
      if(!this.state.visibility){
          this.setState({
            visibility: true
          });
      }else{
        this.setState({
          visibility: false
        });
      }
    }


```

---

```jsx




// change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };




```

---

```jsx




// React: Write a Simple Counter
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };


```

---

```jsx
// change code below this line
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
```

---

```jsx




// change code above this line
    }


```

---

```jsx




// change code below this line
    increment(){
      this.setState({


```

---

```jsx




// on right side this.state is required
        count: this.state.count + 1
      });
    }
    decrement(){
      this.setState({


```

---

```jsx




// on right side this.state is required
        count: this.state.count - 1
      });
    }
    reset(){
      this.setState({


```

---

```jsx




// on right side this.state is required
        count: 0
      });
    }



```

---

```jsx




// change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };



```

---

```jsx




// React: Create a Controlled Input
  class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };


```

---

```jsx
// change code below this line
this.handleChange = this.handleChange.bind(this);
```

---

```jsx




// change code above this line
    }


```

---

```jsx




// change code below this line
    handleChange(e){
      this.setState({
        input: e.target.value
      });
    }


```

---

```jsx




// change code above this line
    render() {
      return (
        <div>
          { /* change code below this line */}
          {/* onChange is an event that if triggered then handleChange Function will execute above */}
          <input value={this.state.input} onChange={this.handleChange}/>
          { /* change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };



```

---

```jsx
// React: Create a Controlled Form
```

---

```jsx




// Note:  You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.
  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {


```

---

```jsx
// change code below this line
event.preventDefault();
this.setState({
  submit: this.state.input,
});
```

---

```jsx




// change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            <input value={this.state.input} onChange={this.handleChange}/>
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
          <h1>{this.state.submit}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };



```

---

```jsx




// React: Pass State as Props to Child Components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
      {/*

```

---

```jsx




//  passing up the state name as props */}
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
    {/*

```

---

```jsx




// now accessing the props */}
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};




```

---

```jsx




// React: Pass a Callback as Props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* change code above this line */ }

       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );


```

---

```jsx




// }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};



```

---

```jsx
// Note:React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods:
```

---

```jsx
// React: Use the Lifecycle Method componentWillMount
```

---

```jsx




// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {


```

---

```jsx
// change code below this line
console.log("this is component will mount shhit");
```

---

```jsx




// change code above this line
  }
  render() {
    return <div />
  }
};



```

---

```jsx
// React: Use the Lifecycle Method componentDidMount
```

---

```jsx
// Note:The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
```

---

```jsx




// React: Add Event Listeners
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


```

---

```jsx




// change code below this line
  componentDidMount() {


```

---

```jsx




// use this keyword
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {


```

---

```jsx




// use this keyword
    document.removeEventListener("keydown", this.handleKeyPress);
  }


```

---

```jsx




// change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};



```

---

```jsx
// React: Manage Updates with Lifecycle Methods
```

---

```jsx
// Note:
```

---

```jsx
// Another lifecycle method is componentWillReceiveProps() which is called whenever a component is receiving new props. This method receives the new props as an argument, which is usually written as nextProps. You can use this argument and compare with this.props and perform actions before the component updates. For example, you may call setState() locally before the update is processed.
```

---

```jsx
// Note:
```

---

```jsx




// Another method is componentDidUpdate(), and is called immediately after a component re-renders. Note that rendering and mounting are considered different things in the component lifecycle. When a page first loads, all components are mounted and this is where methods like componentWillMount() and componentDidMount() are called. After this, as state changes, components re-render themselves. The next challenge covers this in more detail.

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }


```

---

```jsx




// change code below this line
  componentWillReceiveProps(nextProps) {
  console.log(this.props);
  console.log(nextProps(nextProps));
  }

  componentDidUpdate() {
    console.log('Component has updated');
  }


```

---

```jsx




// change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};




```

---

```jsx




// React: Optimize Re-Renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');


```

---

```jsx
// change code below this line
if (nextProps.value % 2 === 0) {
  return true;
}
```

---

```jsx




// change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};




```

---

```jsx




// React: Introducing Inline Styles
class Colorful extends React.Component {
  render() {
    return (


```

---

```jsx




// use camelCase only and no px in pixels
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};



```

---

```jsx
// React: Add Inline Styles in React using const
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
};
```

---

```jsx




// change code above this line
class Colorful extends React.Component {
  render() {


```

---

```jsx
// change code below this line
return <div style={styles}>Style Me!</div>;
```

---

```jsx




// change code above this line
  }
};



```

---

```jsx




// React: Use Advanced JavaScript in React Render Method
const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];

    const answer = possibleAnswers[this.state.randomIndex];

```

---

```jsx




// << change code here
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          { /* change code below this line */ }
            {answer}
          { /* change code above this line */ }
        </p>
      </div>
    );
  }
};



```

---

```jsx




// React: Render with an If/Else Condition
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {


```

---

```jsx




// change code below this line
    if(this.state.display){
      return (
            <div>
              <button onClick={this.toggleDisplay}>Toggle Display</button>
              <h1>Displayed!</h1>
            </div>
          );
    }else{
      return (
            <div>
              <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
          );
    }

  }
};



```

---

```jsx




// React: Use && for a More Concise Conditional
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {


```

---

```jsx




// change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
        {/*

```

---

```jsx




//  using && instead of if/else */}
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};



```

---

```jsx




// React: Use a Ternary Expression for Conditional Rendering
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);


```

---

```jsx
// change code below this line
this.state = {
  userAge: "",
  input: "",
};
```

---

```jsx




// change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
          {/* changes here */}
        {
         this.state.userAge && 1*this.state.userAge < 18 ? buttonThree : this.state.userAge && 1*this.state.userAge >= 18 ? buttonTwo : buttonOne
        }
      </div>
    );
  }
};




```

---

```jsx




// React: Change Inline CSS Conditionally Based on Component State
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };


```

---

```jsx
// change code below this line
const char = 15;
if (this.state.input.length > char) {
  {
    inputStyle = { border: "3px solid red" };
  }
}
```

---

```jsx




// change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};




```

---

```jsx




// React: Use Array.map() to Dynamically Render Elements
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);


```

---

```jsx
// change code below this line
this.state = {
  userInput: "",
  toDoList: [],
};
```

---

```jsx




// change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {


```

---

```jsx
// change code here
```

---

```jsx




// Note this code
    const items = this.state.toDoList.map((items) =>
      <li>{items}</li>
    );
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};




```

---

```jsx




// React: Give Sibling Elements a Unique Key Attribute
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {


```

---

```jsx




// change code here
  const renderFrameworks = frontEndFrameworks.map(
    (items) => <li key = {items.toString()}>{items}</li>
  );
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};



```

---

```jsx




// React: Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);

```

---

```jsx
// change code here
const renderOnline = usersOnline.map((user) => (
  <li key={user.username.toString()}>{user.username}</li>
));
```

---

```jsx




// change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};



```

---

```jsx
// React: Render React on the Server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}
```

---

```jsx
// change code below this line
ReactDOMServer.renderToString(<App />);
```

---

```jsx




// React: Render Conditionally from Props
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fiftyFifty } = this.props;
    return (
      <h1>
      {
        /* change code here */
          fiftyFifty ? "You win!" : "you lose!"
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1

```

---

```jsx




// change code here
    });
  }
  render() {
    let expression = Math.random() > .5;

```

---

```jsx




// change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
```
