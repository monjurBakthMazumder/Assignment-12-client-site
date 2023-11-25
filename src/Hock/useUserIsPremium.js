import { useState } from 'react';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserIsPremium = () => {
    const [isUserPremium, setIsUserPremium] = useState(false)
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    axiosSecure.get(`/users/premium/${user?.email}`)
    .then(res=> {
        setIsUserPremium(res.data)
        console.log(res.data,'hock')
    })
    return isUserPremium
};

export default useUserIsPremium;