import react,{createContext,useContext,useState} from "react";

export const AuthData = createContext({
   
});

function AuthContext({children}){

    const [date,setDate] = useState();
    const [totalPerDay,setTotal] = useState();
    const [userData,setUserData]  = useState();
    const [selectedChallenge,setChallenge] = useState();

    return <AuthData.Provider value={ { value1:[date,setDate] , value2: [totalPerDay,setTotal] , value3:[userData,setUserData]  , value4: [selectedChallenge,setChallenge]}}>
        {children}
    </AuthData.Provider>
}

export default AuthContext ;