import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const useOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://restaurant-management-server-nine.vercel.app/orders?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, [user]);

  return [orders, loading];
};

export default useOrders;
