import React from 'react';
import { Table,  Button,Row, Col, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

  state = {
    visible: false,
    confirmLoading: false,
  };

  renderEdit = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { visible, confirmLoading} = this.state;
    return(
      <div className="container-fluid no-breadcrumb page-dashboard">      
        <h3 className="article-title">{this.props.titulo}</h3>
        <Row>
          <Col offset={20} >
            <Button type="primary" shape="round" icon={<PlusOutlined/>} onClick={this.renderEdit}>Add</Button>
            <Modal
              title="Title"
              visible={visible}
              width="80%"
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              {<this.props.editComponent />}
            </Modal>
          </Col>
          <Col >
            <Table columns={this.props.columns} dataSource={data} className="ant-table-v1" /> 
          </Col>
        </Row>     
      </div>   
    )
  }
}

export default Tabela;