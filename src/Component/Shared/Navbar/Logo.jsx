import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
              to={"/"}
              className="flex items-center gap-1 text-2xl font-semibold text-pink-600"
              aria-label="Brand"
            >
              <img src="/logo.png" alt="" className="h-12" />
              <h1>MingleHeart</h1>
            </Link>
    );
};

export default Logo;