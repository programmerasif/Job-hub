import React, { PureComponent } from 'react';
    import {
      ResponsiveContainer,
      ComposedChart,
      Line,
      Area,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
    } from 'recharts';

const Statistics = () => {

    
    
    const data = [
      {
        name: 'Assignment-1',
        Full_marks: 6,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-2',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-3',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-4',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-5',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-6',
        Full_marks: 60,
        Datication: 100,
        marks: 57,
      },
      {
        name: 'Assignment-7',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
      {
        name: 'Assignment-8',
        Full_marks: 60,
        Datication: 100,
        marks: 60,
      },
    ];
    

    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="Datication" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Full_marks" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        </div>
      );
};

export default Statistics;