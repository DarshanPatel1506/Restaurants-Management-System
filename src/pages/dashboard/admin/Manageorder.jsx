import React from 'react'
import useAuth  from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import Swal from 'sweetalert2'
import axios from "axios";
const Manageorder = () => {
    const {user,loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: orders = [] } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
        const res = await axiosSecure.get("/Payments/all");
        return res.data;
      },
    });
    //console.log(orders);
    const handleCofirm = async (item) =>{
      console.log(item)
      await axiosSecure.patch(`/payments/${item._id}`)
      .then(res =>{
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment confirmed! ",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      })
    }
   // delete 


  return (
    <div>
    <div className="flex items-center justify-between m-4">
      <h5>All Orders</h5>
      <h5>Total Orders: {orders.length}</h5>
    </div>

    {/* table */}
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          {/* head */}
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>TransitionId</th>
              <th>Price</th>
              <th>Status</th>
              <th>Confirm Order</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.email}</td>
                <td>{item.transitionId}</td>
                <td>₹{item.price}</td>
                <td>
                 {item.status}
                </td>
                <td className='text-center'>{item.status === "confirmed" ? ("done" ):(<button onClick={()=>handleCofirm(item)} className="btn btn-xs bg-green text-white">
                <GiConfirmed />
                  </button>)}</td>
                {/* <td>
                  <button onClick={() => handleDelete(orders)}
                   className="btn btn-xs bg-orange-500 text-white">
                    <FaTrashAlt />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Manageorder