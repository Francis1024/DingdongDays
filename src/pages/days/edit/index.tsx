import React, { useState } from 'react'
import Block from '@/components/Block'
import styles from './index.module.less'
import { Form, Input, Button, Toast, DatePicker, Selector } from 'antd-mobile'
import dayjs from 'dayjs'
import { createDay } from './service'
import { useHistory } from 'react-router-dom'

const Edit = () => {
  let history = useHistory()

  const onFinish = async (values: any) => {
    try {
      setIsLoading(true)
      const params = {
        ...values,
        status: values.status[0] ?? 1,
        time: dayjs(values.time).valueOf()
      }
      await createDay(params)
      Toast.show({
        icon: 'success',
        content: '创建日子成功！'
      })
      setIsLoading(false)
      history.push('/')
    } catch (error) {
      setIsLoading(false)
    }
  }
  const [pickerVisible, setPickerVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Block>
      <div className={styles.title}>新建日子</div>
      <Form
        onFinish={onFinish}
        footer={
          <Button loading={isLoading} block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <Form.Item name="title" label="名称" rules={[{ required: true, message: '名称不能为空' }]}>
          <Input placeholder="请输入名称" />
        </Form.Item>
        <Form.Item
          name="status"
          label="类型"
          initialValue={[1]}
          rules={[{ required: true, message: '请选择类型' }]}
        >
          <Selector
            columns={3}
            options={[
              { label: '倒数日', value: 1 },
              { label: '累计日', value: 2 }
            ]}
          />
        </Form.Item>
        <Form.Item
          name="time"
          label="日期"
          rules={[{ required: true, message: '请选择日期' }]}
          trigger="onConfirm"
          onClick={() => {
            setPickerVisible(true)
          }}
        >
          <DatePicker
            visible={pickerVisible}
            onClose={() => {
              setPickerVisible(false)
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {(value) => (value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期')}
          </DatePicker>
        </Form.Item>
      </Form>
    </Block>
  )
}

export default Edit
