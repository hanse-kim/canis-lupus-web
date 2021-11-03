import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import CreateGroupForm from 'components/pages/createGroup/CreateGroupForm';

const CreateGroup = () => {
  return (
    <Layout>
      <PageWrapper>
        <CreateGroupForm />
      </PageWrapper>
    </Layout>
  );
};

export default CreateGroup;
