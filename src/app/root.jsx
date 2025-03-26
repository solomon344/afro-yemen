'use client'
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';


const RootLayout = ({ children }) => {
    return (
        <AntdRegistry>
          {children}
        </AntdRegistry>
    )
}

export default RootLayout