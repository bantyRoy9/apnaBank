import axios from 'axios'

const URL = ''
// const URL = 'http://localhost:8000'

export const createAcc = async(state)=>{
        await axios.post(`${URL}/bank/v1/user`, state)
        .then(response =>{
            let accountNo = response.data.data.account.accountNo
            alert(`Account has been Created with ${accountNo}`)
            // console.log(response.data.data.account.accountNo)
            return accountNo
        }).catch( err =>{
            const error = err.response.data.message
            alert(error)
            return error;
        })
}

export const userLogin = async(user)=>{

    try{
        const userData = await axios.post(`${URL}/bank/v1/user/signIn`,user);
        const datauser = userData.data
        axios.defaults.headers.common.Authorization = `Bearer ${datauser.token}`;
        return datauser

    }catch(error){
        const err = error.response.data
        return err        
    }
    
}