import React from 'react';
import List from '../../../../components/List';
import DEMO from 'constants/demoData';

const columns = [{
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome'
  }, {
    title: 'Login',
    dataIndex: 'login',
    key: 'login',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href={DEMO.link}>Action 一 {record.name}</a>
        <span className="ant-divider" />
        <a href={DEMO.link}>Delete</a>
        <span className="ant-divider" />
        <a href={DEMO.link} className="ant-dropdown-link">
          More actions 
        </a>
      </span>
    ),
  }];

const Page = () => {
    return(
        //
        <div> 
            <List 
                titulo="Usuários"
                columns={columns}/>
        </div>       
    );
  }
  
  export default Page;
  