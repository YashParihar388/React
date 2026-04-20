import UsersTable from './UserTable.jsx';
import StatsTable from './StatsTable.jsx';

function Mainpanel({activeTab}){
    return (<>

  {activeTab === 'users' && <UsersTable />}
  {activeTab === 'stats' && <StatsTable />}
    </>)
}

export default Mainpanel;

