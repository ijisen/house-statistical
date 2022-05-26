import React, { FC, memo, useEffect, useState } from 'react';
import { useIntl } from 'umi';
import { Form, Input, Modal } from 'antd';


import { RuleObject, StoreValue } from 'rc-field-form/lib/interface.d';


import { ITableItem, IFormData } from '@/types/whoisIPWhiteList.d';
import { FormattedMessage, getLocale } from '@@/plugin-locale/localeExports';
import { isIPv4, isSameIPV4Segment } from '@/utils/http/IP';

import style from './style.less';
import { isLocaleEn } from '@/utils/commont_rely';

interface PageInit {
  visible: boolean;
  record?: ITableItem;
  changeModalVisible: (visible: boolean) => void;
}


const CreateForm: FC<PageInit> = (
  ({
     visible,
     record,
     changeModalVisible,
   }) => {
    const { formatMessage } = useIntl();
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFromData] = useState<IFormData>({
      startIp: '',
      endIp: '',
    });
    const [form] = Form.useForm();

    /**
     * 【起始IP】 校验
     * */
    const validatorStartIP = (rule: RuleObject, value: StoreValue) => {
      if(value) {
        // 此版本只支持IPV4
        const is_ip = isIPv4(value);
        if(is_ip) {
          return Promise.resolve();
        } else {
          return Promise.reject(new Error(formatMessage({ id: 'whois.whiteList.form.ip.err.format' })));
        }
      }
      return Promise.reject(new Error(formatMessage({ id: 'whois.whiteList.form.ip.err.empty' })));
    };

    /**
     * 【结束IP】 校验
     * */
    const validatorEndIP = (rule: RuleObject, value: StoreValue) => {
      if(value) {
        const is_ip = isIPv4(value);
        const startIp = form.getFieldValue('startIp');
        if(is_ip) {
          const { success, message } = isSameIPV4Segment(startIp, value, getLocale());
          if(!success) {
            return Promise.reject(new Error(message));
          }
          return Promise.resolve();
        } else {
          return Promise.reject(new Error(formatMessage({ id: 'whois.whiteList.form.ip.err.format' })));
        }
      }
      return Promise.reject(new Error(formatMessage({ id: 'whois.whiteList.form.ip.err.empty' })));
    };

    const handleOk = () => {
      console.log('handleOk');
      console.log(form.getFieldsValue());
      form.validateFields().then(async (data: any) => {
        console.log(data);
      }).catch((err: any) => console.log(err));
    };

    const handleCancel = () => {
      console.log('handleCancel');
      changeModalVisible(false);
    };


    useEffect(() => {
    }, []);

    return (
      <Modal
        title={<FormattedMessage id="whois.whiteList.form.title" />}
        visible={visible}
        onOk={handleOk}
        confirmLoading={submitting}
        onCancel={handleCancel}
        width={700}
      >
        <Form
          form={form}
          name="create_form"
          initialValues={formData}
          style={{ marginTop: 20 }}
          autoComplete="off">
          {/** 记录类型 */}
          <Form.Item
            label={formatMessage({ id: 'whois.whiteList.table.ip' })}
            required={true}
            style={{ marginBottom: 0 }}>
            <Form.Item
              name="startIp"
              rules={[
                {
                  required: true,
                  validator: validatorStartIP,
                },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Input disabled={submitting}
                     placeholder={formatMessage({ id: 'whois.whiteList.form.start' })} />
            </Form.Item>
            <Form.Item style={{ display: 'inline-block', width: '14px', textAlign: 'center' }}>
              <span>-</span>
            </Form.Item>
            <Form.Item
              name="endIp"
              dependencies={['startIp']}
              rules={[
                {
                  required: true,
                  validator: validatorEndIP,
                },
              ]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
              <Input disabled={submitting}
                     placeholder={formatMessage({ id: 'whois.whiteList.form.end' })} />
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <div className={style.tooltips}>
              {
                isLocaleEn() ? (
                  <>
                    <p>1、Only supports IPv4</p>
                    <p>2、The starting IP cannot be greater than the ending IP</p>
                  </>
                ) : (
                  <>
                    <p>1、只支持IPV4</p>
                    <p>2、起始IP不能大于结束IP</p>
                  </>
                )
              }
            </div>
          </Form.Item>
        </Form>
      </Modal>
    );
  });

export default memo(CreateForm);
