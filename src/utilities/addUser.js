import axios from "axios";

const addNewUser = (user) => {
  const userInfo = {
    user_name: user.displayName,
    user_email: user.email,
    user_image: user.photoURL,
  };

  axios
    .post("https://restaurant-management-server-nine.vercel.app/user", userInfo)
    .then((res) => console.log("From addUser", res.data))
    .catch((error) => console.error("From addUser", error.message));
};

export default addNewUser;
