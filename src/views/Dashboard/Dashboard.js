import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const Dashboard = ({history}) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo} = userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/login?redirect=dashboard')
        }
        
    })
    return (
        <div>
            <Helmet>
        <title>Dashboard Page</title>
        <meta 
        name="description"
        content="Achievers Groups Research and Traning center"
        />
      </Helmet>
           
           <h1> Dashboard panal</h1>
        </div>
    )
}

export default Dashboard









