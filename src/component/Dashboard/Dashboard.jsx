import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
    const weeklyBuyingData = [
        { weekStartDate: '2023-01-02', numItems: 18 },
        { weekStartDate: '2023-01-09', numItems: 22 },
        { weekStartDate: '2023-01-16', numItems: 19 },
        { weekStartDate: '2023-01-23', numItems: 15 },
        { weekStartDate: '2023-01-30', numItems: 27 },
        { weekStartDate: '2023-02-06', numItems: 21 },
        { weekStartDate: '2023-02-13', numItems: 23 },
        { weekStartDate: '2023-02-20', numItems: 16 },
        { weekStartDate: '2023-02-27', numItems: 20 },
        { weekStartDate: '2023-03-06', numItems: 25 }
      ];
      
      
    return (
        <div className='ml-6'>
            <LineChart 
            width={500}
            height={300}
            data={weeklyBuyingData}
            >
                <Line dataKey='numItems'></Line>
                <XAxis dataKey='weekStartDate'></XAxis>
                
            </LineChart>
        </div>
    );
};

export default Dashboard;