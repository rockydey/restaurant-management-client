import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <p className='flex justify-center h-[50vh] pt-52'>
          <HashLoader size={50} color='#F9B17A' />
        </p>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to='/login' replace={true} state={location.pathname}></Navigate>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
