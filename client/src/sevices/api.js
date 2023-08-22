import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { properties } from '../properties'

// const URL = ''
// const URL = 'https://apnabank-uv68.onrender.com'

export const createAcc = async(state)=>{

        await axios.post(`${properties.URL}/bank/v1/user`, state)
        .then(response =>{
            let accountNo = response.data.data.account.accountNo
            alert(`Account has been Created with ${accountNo}`)

            // console.log(response.data.data.account.accountNo)
            return accountNo
        }).catch( err =>{
            const error = err.response?.data.message
            alert(error)
        //    return new ShowAlert(error,400)

        })
}

export const userLogin = async(user)=>{
    try{
        const userData = await axios.post(`${properties.URL}/bank/v1/user/signIn`,user);
        const datauser = userData.data
        console.log(userData);
        axios.defaults.headers.common.Authorization = `Bearer ${datauser.token}`;
        return datauser

    }catch(error){
        const err = error.response.data
        return err        
    }
    
}