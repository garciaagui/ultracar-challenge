import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Page Not Found! </h1>
      <Link to="/">Home page</Link>
    </div>
  );
}

export default NotFound;
