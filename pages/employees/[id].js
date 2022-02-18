import Page from '../../components/Layout/Page';
import { useRouter } from 'next/router'

const UsersEdit = () => {
    const router = useRouter()
    console.log(router.query.id);

    return <Page title='Edit'>Edit Page  </Page>;
};

export default UsersEdit;



