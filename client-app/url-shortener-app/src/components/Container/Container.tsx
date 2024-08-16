import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';
import { UrlData } from '../../interface/UrlData';

type IContainerProps = object

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log("The response from server is : ", response);
    setData(response.data);
  };

  React.useEffect(() => {
    fetchTableData();
  }, []);
  return (
    <>
    <FormContainer/>
    <DataTable data={data} />
    </>
  );
};

export default Container;
