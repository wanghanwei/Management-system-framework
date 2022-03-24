import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Card, Alert, Typography, Space, Button, Row, Col} from 'antd';
import {useIntl, FormattedMessage} from 'umi';
import styles from './Welcome.less';
import {useModel} from "@@/plugin-model/useModel";

const CodePreview: React.FC = ({children}) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  const intl = useIntl();
  const {counter, increment, decrement} = useModel('counter')
  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form"/>{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome"/>
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout"/>{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome"/>
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
      <Row>
        <Col span={4} offset={10}>
          <h2 style={{textAlign: 'center'}}>{counter}</h2>
          <Space>
            <Button onClick={decrement}>-</Button>
            <Button onClick={increment}>+</Button>
          </Space>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Welcome;
