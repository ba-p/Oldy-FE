import { Button, Form, Input } from 'antd';
import { useSelector } from 'app/reducers/type';
import logo from 'assets/images/logo/logo_192x192_w.jpg';
import openNotificationWithIcon from 'helpers/design/notification';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import cls from './_forget.module.scss';

const InputCode: React.FC = () => {
    const [form] = Form.useForm();
    const [isSuccess, setisSuccess] = useState(false);
    // get code from code's reducer
    const state = useSelector((state) => state.code);
    const code = state.codeOTP;
    const token = state.token;
    const onFinish = (value: any) => {
        // if code correct
        if (value.code.toString() === code.toString()) {
            // add token and redirect
            window.localStorage.setItem('token', token);
            setisSuccess(true);
        } else {
            // notification
            openNotificationWithIcon(
                'warning',
                'Mã xác nhận không chính xác',
                'Nhập mã thất bại'
            );
        }
    };
    return (
        <div className={cls.main}>
            <img alt="logo" className={cls.img_logo} src={logo} />
            <h4 className={cls.trouble}>Nhập mã bảo mật</h4>
            <p>
                Hãy nhập mã bảo mật
                <br />
                mà chúng tôi đã gửi vào email của bạn
            </p>
            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item name="code">
                    <Input placeholder="Nhập mã" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Xác nhận
                    </Button>
                </Form.Item>
            </Form>
            {isSuccess && (
                <Redirect
                    to={{
                        pathname: '/change-password',
                    }}
                />
            )}
        </div>
    );
};

export default InputCode;
