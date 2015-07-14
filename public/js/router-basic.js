var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var DefaultRoute = Router.DefaultRoute;

var Nav = React.createClass({
  render: function(){
    return (
        <ul>
          <li><Link to="home">Link To Home</Link></li>
          <li><Link to="about">Link To About</Link></li>
          <li><Link to="inbox">Link To Inbox</Link></li>
        </ul>
      );
  }
});

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>About</h2>
        <Nav />
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Inbox</h2>
        <Nav />
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Home</h2>
        <Nav />
      </div>
    );
  }
});


// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="about" path="about" handler={About}/>
    <Route name="inbox" path="inbox" handler={Inbox}/>
  </Route>
);



var App = React.createClass({
  render () {
    return (
      <div>
        <h1>React Example</h1>
        <RouteHandler/>
      </div>
    )
  }
});

Router.run(routes, Router.HashLocation, function(Root){
  React.render(<Root/>, document.getElementById('example'));
});