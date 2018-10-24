import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";


function getParams(location) {

  const searchParams = new URLSearchParams(location.search);


  return {
    query: searchParams.get("client_id") || ""
  };
}



const MainPage = props => {
  const { query, history } = props;
  return (
    <div style={{ background: 'black', color: 'white' }}>

      <h2>{`My query: ${query}`}</h2>
      <ResultsPage query={query} />


    </div>
  );
};


class ResultsPage extends React.Component {

  components = {
    abc: ABC,
    xyz: XYZ,
    default: Defult,
  };

  constructor(props) {
    super(props)


  }


  componentDidMount() {

    console.log(this.props.query);
  }


  render() {
    const TagName = this.components[this.props.query || 'default'];

    return <TagName />


  }
}

class XYZ extends React.Component {

  render() {
    return (
      <div style={{ background: 'red', color: 'white' }}>
        <center>
          <h1> welocme to xyz page</h1>

        </center>
      </div>
    )


  }
}



class ABC extends React.Component {


  render() {

    return (

      <div style={{ background: 'green', color: 'white' }}>
        <h1>welcome to  abc page   </h1>
      </div>
    );
  }
}

class Defult extends React.Component {

  render() {

    return (

      <div style={{ background: 'pink', color: 'white' }}>
        <h1>welcome to  default  page   </h1>
      </div>
    );
  }
}





const App = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <Route
          path="/"
          render={({ location, history }) => {
            const { query } = getParams(location);
            return <MainPage query={query} history={history} />;
          }}
        />
      </React.Fragment>
    </Router>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));

export default App;
