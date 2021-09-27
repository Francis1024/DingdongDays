import React, { useState } from 'react'
import Block from '@/components/Block'
import { Form, Input, Button } from 'antd-mobile'
import styles from './index.module.less'
import { useHistory } from 'react-router-dom'
import { login } from './service'
import type { loginParams } from './types'

function Login() {
  const history = useHistory()
  const [btnLoading, setBtnLoading] = useState(false)

  const handleClick = () => history.push('/user/register')

  const onFinish = async (values: loginParams) => {
    try {
      setBtnLoading(true)
      const result = await login(values)
      localStorage.setItem('token', result?.data?.token)
      setBtnLoading(false)
      history.replace('/')
    } catch (error) {
      setBtnLoading(false)
    }
  }

  return (
    <Block>
      <div className={styles.title}>登录</div>
      <Form
        onFinish={onFinish}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" loading={btnLoading}>
            登录
          </Button>
        }
      >
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input autoComplete="on" clearable placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input autoComplete="on" clearable type="password" placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div className={styles.footer}>
        没有账号吗？<span onClick={handleClick}>去注册</span>
      </div>
    </Block>
  )
}

export default Login
