'use client'
import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import {PrimeReactProvider} from "primereact/api"


const RootLayout = ({ children }) => {
    return (
        <AntdRegistry>
        <PrimeReactProvider>
        {children}
        </PrimeReactProvider>
        </AntdRegistry>
    )
}

export default RootLayout