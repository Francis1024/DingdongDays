import React, { useState, useRef } from 'react'
import Block from '@/components/Block'
import { Form, Input, Button, Toast } from 'antd-mobile'
import styles from './index.module.less'
import { useHistory } from 'react-router-dom'
import type { registerParams } from './types'
import { register } from './service'
import type { FormInstance } from 'rc-field-form'

function Login() {
  let history = useHistory()
  const [btnLoading, setBtnLoading] = useState(false)
  const [form] = Form.useForm<FormInstance<any>>()

  function handleClick() {
    history.push('/user/login')
  }

  const onFinish = async (values: registerParams) => {
    try {
      setBtnLoading(true)
      await register(values)
      Toast.show({
        icon: 'success',
        content: '注册成功，请登录！～'
      })
      history.push('/user/login')
    } finally {
      setBtnLoading(false)
    }
  }

  return (
    <Block>
      <div className={styles.title}>注册</div>
      <Form
        layout="horizontal"
        onFinish={onFinish}
        form={form}
        footer={
          <Button block type="submit" color="primary" loading={btnLoading}>
            提交
          </Button>
        }
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input clearable onChange={console.log} placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="newpassword"
          label="密码"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input clearable type="password" onChange={console.log} placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          name="password"
          label="确认密码"
          rules={[
            { required: true, message: '密码不能为空' },
            () => ({
              validator(_, value) {
                if (!value || form?.getFieldValue('newpassword') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次输入密码不一致'))
              }
            })
          ]}
        >
          <Input clearable type="password" onChange={console.log} placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div className={styles.footer}>
        已有账号吗？<span onClick={handleClick}>去登录</span>
      </div>
    </Block>
  )
}

export default Login
