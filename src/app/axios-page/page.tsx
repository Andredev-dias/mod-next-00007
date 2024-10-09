"use client"
import { useEffect, useState, Suspense } from "react"
import { api } from "@/constants/api"

interface IData {
    name: string;
    status: string;
}

const AxiosPage = () => {
const [data, setData] = useState<IData[]>([])

useEffect(() => {
    api.get(`/character/?page=1`).then((res) => {
        setData(res.data.results)
    }).catch((err) => {
        console.log(err)
    })
}, [])


    return(
        <div>
            <h1>Axios com useEffect no client side</h1>
            <Suspense fallback={<div>Loading...</div>}>

            {data.map((item, index) => {
                return(
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.status}</p>
                        <br />
                    </div>
                    
                )
            })}
            </Suspense>
        </div>
    )
}

export default AxiosPage