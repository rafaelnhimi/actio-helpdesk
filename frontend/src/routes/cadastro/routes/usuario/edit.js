import React from 'react';
import {  Icon, Row, Col, Form, Input} from 'antd';
import { withRouter } from "react-router-dom";
// import api from '../../../../services/api';

const FormItem = Form.Item;

class EditForm extends React.Component {


    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.handleClick(); 
          }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="form-v1">
                <Row>
                    <Col> 
                        <FormItem>
                            {getFieldDecorator('nome', {
                            rules: [{ required: true, message: 'Por favor, insira um Nome!'}],
                            })(
                            <Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Nome" />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <FormItem>
                            {getFieldDecorator('login', {
                            rules: [{ required: true, message: 'Por favor, insira um Nome de Usuário!'}],
                            })(
                            <Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Nome de Usuário" />
                            )}
                        </FormItem>
                    </Col>    
                    <Col span={11} offset={2}>
                        <FormItem>
                            {getFieldDecorator('senha', {
                                rules: [{ required: true, message: 'Por favor, insira uma Senha!', }],
                            })(
                                <Input size="large" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Senha" />
                                )}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }

}

const WrappedEditForm = Form.create()(withRouter(EditForm));

export default WrappedEditForm;