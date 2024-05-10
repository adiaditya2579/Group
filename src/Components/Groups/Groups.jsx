import React,{useState,useContext,useEffect} from 'react'
import { LoginContext } from "../../Contexts/LoginContect";
import DSHomePage from './DataScience/DSHomePage'
import ESHomePage from './Electronics/ESHomePage'
import GroupRules from './GroupRules'

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
        }else{
            sethomePage(<ESHomePage/>)
        }
    },[userData])
  return (
    <div>
        {groupRules ? <GroupRules onClose={()=> setGroupRules(false)} /> : homePage}
    </div>
  )
}

export default Groups