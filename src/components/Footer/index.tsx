import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'BlitzScaling技术部出品',
  });

  return (
    <DefaultFooter
      copyright={`2020 ${defaultMessage}`}
      links={[
        {
          key: 'About Us',
          title: 'About Us',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Contact',
          title: 'Contact',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
