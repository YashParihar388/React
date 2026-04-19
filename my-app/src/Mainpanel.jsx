import Userstable from './Userstable.jsx';
import Statstable from './Statstable.jsx';

function Mainpanel({activeTab}){
    return (<>

  {activeTab === 'users' && <userstable />}
  {activeTab === 'stats' && <Statstable />}
    </>)
}

export default Mainpanel;

