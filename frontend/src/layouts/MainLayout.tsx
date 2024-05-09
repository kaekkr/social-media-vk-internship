import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Social Media
          </Link>
          <div>
            <Link to="/login" className="text-white mr-4 hover:underline">
              Sign in
            </Link>
            <Link to="/register" className="text-white hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto py-8">{children}</div>
    </div>
  );
};

export default MainLayout;
