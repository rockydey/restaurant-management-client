import { Helmet } from "react-helmet-async";
import loginBg from "../../assets/login/login-hero.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import axios from "axios";
import { GrUpdate } from "react-icons/gr";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const MyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myFoods?email=${user?.email}`)
      .then((res) => setMyFoods(res.data))
      .catch((error) => console.error(error.message));
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>TasteTreat | My Foods</title>
      </Helmet>
      <div>
        <div
          style={{ backgroundImage: `url(${loginBg})` }}
          className='lg:h-[50vh] bg-cover bg-center bg-no-repeat bg-color12
        bg-blend-overlay'>
          <div className='text-center pt-44 pb-14 lg:pb-0'>
            <h1 className='text-5xl font-black'>My Added Foods</h1>
            <div className='flex gap-2 text-xl justify-center mt-5 font-semibold'>
              <p className='text-color9'>
                See all delicious food items added by you
              </p>
            </div>
          </div>
        </div>
        <div className='bg-color1 py-24 px-3 md:px-5 lg:px-0'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='lg:w-4/5 mx-auto'>
              <div className='overflow-x-auto'>
                <Table hoverable>
                  <TableHead className='bg-color7 text-color2 font-semibold text-sm'>
                    <TableHeadCell>Food Image</TableHeadCell>
                    <TableHeadCell>Food Name</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Action</TableHeadCell>
                  </TableHead>
                  <TableBody className='divide-y'>
                    {myFoods.map((myFood) => (
                      <TableRow
                        className='bg-color7 hover:bg-color7'
                        key={myFood._id}>
                        <TableCell>
                          <img
                            className='md:w-20 md:h-20'
                            src={myFood.food_image}
                            alt=''
                          />
                        </TableCell>
                        <TableCell className='text-lg whitespace-nowrap text-color2 font-medium'>
                          {myFood.food_name}
                        </TableCell>
                        <TableCell className='text-lg text-color2 font-medium'>
                          ${myFood.price}
                        </TableCell>
                        <TableCell className='text-lg text-color2 font-medium'>
                          {myFood.food_category}
                        </TableCell>
                        <TableCell>
                          <button className='flex text-xl bg-color9 text-color8 p-2 rounded-full'>
                            <GrUpdate />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoods;
