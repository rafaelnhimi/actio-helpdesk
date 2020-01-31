import React from 'react';
import { Table, Icon } from 'antd';


const data = [{
  key: '1',
  nome: 'Rafael Nhimi',
  login: 'rafael.nhimi',
}, {
  key: '2',
  nome: 'Natalia Dias',
  age: 'natalia.dias',
}];

class Tabela extends React.Component {
  static defaultProps = {
    titulo : "Lista",
    columns : []
  };

  render() {
    return(
      <div className="container-fluid no-breadcrumb page-dashboard">      
        <h3 className="article-title">{this.props.titulo}</h3>
        <Table columns={this.props.columns} dataSource={data} className="ant-table-v1" />      
      </div>   
    )
  }
}

export default Tabela;