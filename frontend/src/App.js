import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Tabs, Input, Table, Form, Button, Modal, Select } from 'antd'
const { Option } = Select
const { TabPane } = Tabs
const { Item } = Form

export default () => {
  const [visible, setVisible] = useState(false)
  const [novaUnidade, setNovaUnidade] = useState({})
  const [unidades, setUnidades] = useState([])

  async function loadData() {
    await axios.get('http://localhost:3333/unidade').then(({ data = [] }) => setUnidades(data))
  }

  useEffect(() => {
    loadData()
  }, [])

  const colunas = [
    { title: 'CNPJ', dataIndex: 'CNPJ' },
    { title: 'Endereço', dataIndex: 'endereco' },
    { title: 'Telefone', dataIndex: 'telefone' },
    { title: 'E-mail', dataIndex: 'email' }
  ]

  const toggleVisible = () => setVisible(!visible)

  function Footer() {
    return (
      <Row justify='end'>
        <Button children='Adicionar Unidade' onClick={toggleVisible} />
      </Row>
    )
  }

  function handleChange(event = {}) {
    const { name, value } = event.target || {}
    setNovaUnidade({ ...novaUnidade, [name]: value })
  }

  async function handleSubmit() {
    await axios.post('http://localhost:3333/unidade', novaUnidade)
      .then(({ data }) => !!data && loadData())
      .catch(err => console.log(err))
    setNovaUnidade({})
    toggleVisible()
  }

  return (
    <Row justify='center' gutter={16} style={{ margin: 20 }}>
      <Col>
        <Table 
          footer={Footer}
          dataSource={unidades} 
          columns={colunas} 
          rowKey={(_, i) => i} 
          pagination={false} 
        />
        <Modal visible={visible} title='Nova Unidade' footer={false} onCancel={toggleVisible}>
          <Form onSubmitCapture={handleSubmit}>
            <Item label='CNPJ'>
              <Input 
                placeholder='Preencha o CNPJ' 
                value={novaUnidade.CNPJ} 
                name='CNPJ' 
                onChange={handleChange}
              />
            </Item>
            <Item label='Endereço'>
              <Input 
                placeholder='Preencha o Endereço' 
                value={novaUnidade.endereco} 
                name='endereco' 
                onChange={handleChange}
              />
            </Item>
            <Item label='E-mail'>
              <Input  
                placeholder='Preencha o E-mail' 
                value={novaUnidade.email} 
                name='email' 
                onChange={handleChange}
              />
            </Item>
            <Item label='Telefone'>
              <Input 
                placeholder='Preencha o Telefone' 
                value={novaUnidade.telefone} 
                name='telefone' 
                onChange={handleChange} 
              />
            </Item>
            <Row justify='end'>
              <Button htmlType='submit' type='primary' children='Adicionar' />
            </Row>
          </Form>
        </Modal>
      </Col>
    </Row>
  )
}