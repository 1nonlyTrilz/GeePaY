import React from 'react';
import user1 from './MainImages/user1.png';
import user2 from './MainImages/user2.png';
import user3 from './MainImages/user3.png';
import user4 from './MainImages/user4.png';
import user5 from './MainImages/user5.png';
import documentLogo from './MainImages/document.png'
const tableData = [
  {
    name: 'Marcus Bergson',
    date: 'Nov 15, 2023',
    amount: '$80,000',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user1,
  },
  {
    name: 'Jaydon Vaccaro',
    date: 'Nov 15, 2023',
    amount: '$150,000',
    status: 'Refund',
    invoice: { buttonText: 'View' },
    image: user2,
  },
  {
    name: 'Corey Schleifer',
    date: 'Nov 14, 2023',
    amount: '$87,000',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user3,
  },
  {
    name: 'Cooper Press',
    date: 'Nov 14, 2023',
    amount: '$100,000',
    status: 'Refund',
    invoice: { buttonText: 'View' },
    image: user4,
  },
  {
    name: 'Phillip Lubin',
    date: 'Nov 13, 2023',
    amount: '$78,000',
    status: 'Paid',
    invoice: { buttonText: 'View' },
    image: user5,
  },
];

const TableRow = ({ rowData }) => (
  <tr className='hover:bg-neutral-100 duration-75 ease-in-out '>
    <td className='flex  border-t border-[#EDF2F6] py-[16px] items-center gap-[10px] tablename px-[16px] min-w-max max-sm:text-sm'>
      <img src={rowData.image} alt='' />
      {rowData.name}
    </td>
    <td className='tabledate  border-t border-[#EDF2F6] py-[16px] min-w-max max-sm:text-sm '>{rowData.date}</td>
    <td className='tableamount border-t border-[#EDF2F6] py-[16px]  min-w-max max-sm:text-sm'>{rowData.amount}</td>
    <td className={`tablestatus border-t border-[#EDF2F6] py-[16px] min-w-max max-sm:text-sm  ${rowData.status === 'Refund'?'text-[#ED544E]': rowData.status === "Paid"?'text-[#34CAA5]':''}`}>{rowData.status}</td>
    <td className='tableinvoice border-t border-[#EDF2F6] py-[16px]  min-w-max max-sm:text-sm'>
      <button className='flex items-center gap-[4px]'><img src={documentLogo} alt="" />{rowData.invoice.buttonText}</button>
    </td>
  </tr>
);

const AnalyticsTable = () => {
  return (
    <div className='analyticstable h-fit flex gap-[4px] flex-col overflow-x-hidden'>
      <div className='flex items-center justify-between gap-[4px] tabletitle'>
        <h3>Last Orders</h3>
        <button>See All</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-max w-full text-left '>
          <thead>
            <tr className='tablehead '>
              <th className='py-[20px] max-sm:text-sm px-[16px]'>Name</th>
              <th className='py-[20px] max-sm:text-sm'>Date</th>
              <th className='py-[20px] max-sm:text-sm'>Amount</th>
              <th className='py-[20px] max-sm:text-sm'>Status</th>
              <th className='py-[20px] max-sm:text-sm'>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <TableRow key={index} rowData={rowData} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsTable;
