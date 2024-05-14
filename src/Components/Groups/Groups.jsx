import React,{useState,useContext,useEffect} from 'react'
import { LoginContext } from "../../Contexts/LoginContect";
import DSHomePage from './DataScience/DSHomePage'
import GroupRules from './GroupRules'
import Qualifier from './Qualifier/Qualifier';

function Groups() {
    const { loginData, userData } = useContext(LoginContext);
    const [groupRules, setGroupRules] = useState(false);
    const [homePage,sethomePage] = useState(null);
    
    useEffect(() => {
        
        if (!userData || !loginData) {
            setGroupRules(true);
        }else{
            setGroupRules(true);
        }
    }, [userData, loginData]);
    useEffect(()=>{
        if(userData && userData.email?. includes('@ds')){
            sethomePage(<DSHomePage/>)
        }
        else if(userData && userData.email?. includes('@es')){
            sethomePage()
        }else{
            sethomePage(<Qualifier/>)
        }
    },[userData])
  return (
    <div>
        {groupRules ? <GroupRules onClose={()=> setGroupRules(false)} /> : homePage}
    </div>
  )
}

export default Groups