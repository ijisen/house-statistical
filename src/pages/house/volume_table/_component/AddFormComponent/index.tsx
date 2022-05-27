import React, { FC, memo, useEffect, useState } from 'react';
import { Form, Input, Modal, DatePicker, Button, Typography } from 'antd';
import moment from 'moment';

import filterMultiStringSpace from '@/utils/base/filterMultiStringSpace';
import { specialSymbolToComma } from '@/utils';

import { ITableItem } from '@/types/houseType.d';
import { EnumDictKey } from '@/types/basic.d';
import ComponentTable from '@/pages/house/volume_table/_component/ComponentTable';

import styles from './style.less';

const { Paragraph } = Typography;

interface PageInit {
  visible: boolean;
  record?: ITableItem;
  changeModalVisible: (visible: boolean) => void;
}

const buildFormData = (data: {
  date: any;
  count: string;
  area: string;
}): ITableItem[] => {
  let { date, count, area } = data;
  // { date: '2022/05/26', districtType: 1, houseType: 1, count: 452, area: 59520.41 },
  let formData: ITableItem[] = [];
  // [新房-城区， 新房-郊区， 二手-城区， 二手-郊区]
  count.split(',').map((item, index) => {
    let area_arr = area.split(',');
    console.log(area_arr);
    formData.push({
      id: `${moment().valueOf()}${index}`,
      date: moment(date).format('YYYY-MM-DD'),
      districtType: index % 2 === 0 ? 1 : 2,
      houseType: index < 2 ? 1 : 2,
      count: Number(item),
      area: Number(area_arr[index]),
    });
  });
  return formData;
};


const CreateForm: FC<PageInit> = (
  ({
     visible,
     record,
     changeModalVisible,
   }) => {
    const [formData, setFromData] = useState<{
      date: string;
      count: string;
      area: string;
    }>({
      // 日期
      date: '',
      count: '',
      area: '',
    });
    const [tableData, setTableData] = useState<ITableItem[]>([]);
    const [form] = Form.useForm();

    const handleOk = () => {
      console.log('handleOk');
      form.validateFields().then(async (data: any) => {
        console.log(data);
        const new_data = buildFormData(data);
        console.log(JSON.stringify(new_data));
        setTableData([...tableData, ...new_data]);
      }).catch((err: any) => console.log(err));
    };

    const handleCancel = () => {
      console.log('handleCancel');
      changeModalVisible(false);
    };

    /** 表格按钮点击事件*/
    const handleTableClick = (role: EnumDictKey, record: ITableItem) => {
      switch (role) {
        case EnumDictKey.DELETE:
          setTableData(tableData.filter(item => item.id !== record.id));
          console.log('EnumDictKey.DELETE');
          break;
        default:
          console.log(`undefined Role ${role}`);
      }
    };


    useEffect(() => {
    }, []);

    return (
      <Modal
        title="新增"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={styles.AddFormComponent}
        width={700}
      >
        <Form
          form={form}
          name="create_form"
          initialValues={formData}
          style={{ marginTop: 20 }}
          autoComplete="off">
          {/** 记录类型 */}
          <Form.Item label="日期"
                     name="date"
                     rules={[
                       {
                         required: true,
                         message: '请选择日期',
                       },
                     ]}>
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="套数"
            name="count"
            validateTrigger={['onBlur']}
            rules={[
              {
                required: true,
                validator: ((rule, value) => {
                  value = filterMultiStringSpace(value);
                  if(value) {
                    let data = specialSymbolToComma(value).split(',');
                    if(data && data.length === 4) {
                      form.setFieldsValue({
                        count: data.toString(),
                      });
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error('数据错误'));
                    }
                  }
                  return Promise.reject(new Error('数据错误'));
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="面积"
            name="area"
            validateTrigger={['onBlur']}
            rules={[
              {
                required: true,
                validator: ((rule, value) => {
                  value = filterMultiStringSpace(value);
                  if(value) {
                    let area = specialSymbolToComma(value).split(',');
                    if(area && area.length === 4) {
                      form.setFieldsValue({
                        area: area.toString(),
                      });
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error('面积数据错误'));
                    }
                  }
                  return Promise.reject(new Error('面积数据错误'));
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
        <div>
          <Button className="mrl" onClick={() => {
            setTableData([]);
          }}>清 除</Button>
          <Paragraph style={{display: 'inline-block'}} copyable={{
            text: JSON.stringify(tableData.map((item) => ({
              date: item.date,
              districtType: item.districtType,
              houseType: item.houseType,
              count: item.count,
              area: item.area,
            }))),
          }}>复制数据</Paragraph>
          <ComponentTable tableData={{ list: tableData }}
                          onBtnClick={handleTableClick} />
        </div>
      </Modal>
    );
  });

export default memo(CreateForm);
