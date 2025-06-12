import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBook, FaDollarSign, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });
  //console.log(stats)
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orderStats");
      return res.data;
    },
  });

  console.log(chartData)

  return (
    <div className=' w-full md:w-[870px] mx-auto px-4'>
      <h2 className='text-2x1 font-semibold my-4'>Hi,{user.displayName}</h2>
      {/*stats div*/}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">

        <div className="stat bg-emerald-200">
          <div className="stat-figure text-secondary ">
            ₹{/* <FaDollarSign/> */}
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - april 1st</div>
        </div>

        <div className="stat bg-orange-200">
          <div className="stat-figure text-secondary text-4x1">
            <FaUsers />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-indigo-400">
          <div className="stat-figure text-secondary text-4x1">
            <FaBook />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat bg-purple-300">
          <div className="stat-figure text-secondary text-4x1">
            <FaShoppingCart />
          </div>
          <div className="stat-title">All Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

      </div>
      {/* create a charts and graphs*/}
      <div>
        {/*bar chart*/}
        {/* <div className='mt-16'>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Dashboard