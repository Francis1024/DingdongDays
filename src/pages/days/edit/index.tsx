import React, { useState, useEffect } from 'react'
import Block from '@/components/Block'
import styles from './index.module.less'
import { Form, Input, Button, Toast, DatePicker, Selector } from 'antd-mobile'
import dayjs from 'dayjs'
import { createDay, editDay, getDayDetails } from './service'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'
import type { FormInstance } from 'rc-field-form'
import type { DayParams } from './types'

const Edit = () => {
  let history = useHistory()
  const location = useLocation() // 获取 locaton 实例，我们可以通过打印查看内部都有些什么内容。
  const { id } = qs.parse(location.search)
  const title = id ? '编辑日子' : '新建日子'
  const [form] = Form.useForm<FormInstance<any>>()

  const onFinish = async (values: any) => {
    try {
      setIsLoading(true)
      const toastText = id ? '编辑日子成功！' : '创建日子成功！'
      if (id) {
        const params = {
          ...values,
          status: values.status[0] ?? 1,
          time: dayjs(values.time).valueOf(),
          _id: id
        }
        await editDay(params)
      } else {
        const params = {
          ...values,
          status: values.status[0] ?? 1,
          time: dayjs(values.time).valueOf()
        }
        await createDay(params)
      }

      Toast.show({
        icon: 'success',
        content: toastText
      })
      setIsLoading(false)
      history.push('/')
    } catch (error) {
      setIsLoading(false)
    }
  }
  const [pickerVisible, setPickerVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const init = async () => {
    try {
      const result = await getDayDetails({ id })
      form?.setFieldsValue({
        ...result?.data,
        time: new Date(result?.data?.time),
        status: [result?.data?.status]
      })
    } catch (error) {}
  }

  useEffect(() => {
    if (id) {
      init()
    }
  }, [])

  return (
    <Block>
      <div className={styles.title}>{title}</div>
      <Form
        onFinish={onFinish}
        form={form}
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
