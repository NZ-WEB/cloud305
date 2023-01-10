import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      Not Found
      <Link to={'/'}>To The Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
