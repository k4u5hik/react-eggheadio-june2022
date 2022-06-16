const heading = <h1 className='site-heading'>Hello, React</h1>;

const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export { heading, element , getGreeting };