import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/Constants';
import { copy } from '../../assets/copy.tsx';
import { remove } from '../../assets/delete.tsx'
import axios from 'axios';

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const {data, updateReloadState} = props;
    console.log("Data in DataTable is", data);
    
    const renderTableData = () => {
        return data.map((item) => {
            return ( 
                <tr key={item._id} 
                className='border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800'>
                    <td className='px-6 py-3 break-words'>
                       <Link to={item.fullUrl} target='_blank' rel='noreferrer noopener'>
                         {item.fullUrl}
                       </Link> 
                    </td>
                    <td className='px-6 py-3'>
                       <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`} target='_blank' rel='noreferrer noopener'>
                         {item.shortUrl}
                       </Link> 
                    </td>
                    <td className='px-6 py-3'>{item.clicks}</td>
                    <td className='px-6 py-3'>
                        <div className='flex content-center'>
                            <div className='cursor-pointer px-2' onClick={() => copyToClipboard(item.shortUrl)}>
                              {copy}
                            </div>
                            <div className='cursor-pointer px-2' onClick={() => deleteUrl(item._id)}>
                                {remove}
                            </div>
                        </div>
                        
                    </td>
                </tr>
            );
        });
    };
    const copyToClipboard =async (url: string) => {
        try {
            await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
            alert (`link copied!`);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteUrl= async (id: string) => {
        const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
        console.log(response);
        updateReloadState();
    };

  return (
    <div className='container mx-auto pt-2 pb-10'>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg '>
            <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12'>FullUrl</th>
                        <th scope='col' className='px-6 py-3 w-3/12'>ShortUrl</th>
                        <th scope='col' className='px-6 py-3 '>Clicks</th>
                        <th scope='col' className='px-6 py-3 '>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default DataTable;
