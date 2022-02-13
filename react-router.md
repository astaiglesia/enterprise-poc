# React-Router
## Setup
- install package react-router-dom
- import and wrap <App /> in <BrowserRouter>

## Routes > Route
a route maps application location to specific React components
e.g. non-nested routes
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/dashboard" element={<Dashboard />} />

a <Routes /> element wraps multiple <Route /> elements and navigates the application through the different paths of those children

  import { Routes, Route } from "react-router-dom";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

## Link
Links provide the mechanism to navigate between the different routes 
<nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/settings">Settings</Link>
</nav>

- passing an object to the to prop allows you to:
- add a query string via the search property
- pass along any data via state
<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link
    to={{
      pathname: "/settings",
      search: "?sort=date",
      state: { fromHome: true },
    }}
  >
    Settings
  </Link>
</nav>

## ----------------------------- URL Parameters

## Nested Routes

## Pass props to Router Components

## ----------------------------- Programattically Navigate
### ------------ Imperative
  import { useNavigate } from 'react-router-dom

  function Register () {
  const navigate = useNavigate()

  return (
  <div>
    <h1>Register</h1>
    <Form afterSubmit={() => navigate('/dashboard')} />
  </div>
  )
  }

### Declarative
import { Navigate } from "react-router-dom";

function Register() {
  const [toDashboard, setToDashboard] = React.useState(false);

  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Register</h1>
      <Form afterSubmit={() => toDashboard(true)} />
    </div>
  );
}


## ------------------------ Query Strings

## ------------------------ 404's

## Pass Props to Link

## ------------------------ Rendering a Sidebar

## Customizing Link


## Animated Transitions

## Code Splitting

## ------------------------ Protected Routes

