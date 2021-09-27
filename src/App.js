import { DatePicker, Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import ToDo from './components/ToDo';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div>
      {/* <DatePicker />
       */}

  <Layout className=''>
      <Sider className='Layout'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu className='' theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item  className='' key="1" icon={<UserOutlined />}>
            My ToDO
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            done
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background content" style={{ padding: 24, minHeight: 360 }}>
            <ToDo />
          </div>
        </Content>
      </Layout>
    </Layout>,
    
   
    </div>
  )
}

export default App
