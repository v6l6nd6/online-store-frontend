'use client'

import { useQuery } from '@tanstack/react-query'

import Heading from '@/ui/Heading'

import { convertPrice } from '@/utils/convertPrice'

import { OrderService } from '@/services/order.service'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'
import { UserService } from '@/services/user.service'


interface IMyOrders {}

export default function Profile() {

    // const { getProfile } = useActions()
    // const { user } = useAuth()

    const { data, isFetching } = useQuery(
		['profile'],
		() => UserService.getProfile(),
		{
			select: ({ data }:any) => data
            
		}
	)
    useEffect(()=>{

    },[])

	return (
        <>
        {data && 
         (
            <>
         <div>
         <div className='flex flex-col'>
           
            <div><img src={`http://localhost:4200/auth/${data.avatarPath}`} alt="avatar" /></div>
            <div className='flex'>
                <div>name</div>
            <div>{data.name}</div>
            </div>
            <div className='flex'>
                <div>email</div>
                <div>{data.email}</div>
                </div>
            <div></div>
           </div>
         </div>
       </>
         )
         }
        </>
    )
		
       
}
