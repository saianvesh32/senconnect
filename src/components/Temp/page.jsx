

import AdminUsers from '../../components/adminUsers/AdminUsers';
import { getUsers } from '../../lib/data';

const Page = async () => {
  // Fetch the users from your data source
  const dbUsers = await getUsers();

  return (
    <div>
      <AdminUsers plainUsers={dbUsers} />
    </div>
  );
};

export default Page;
