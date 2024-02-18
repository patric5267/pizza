import React, { useEffect, useState } from 'react'

const Load = () => {
    const [data, setData] = useState([])
    const [info, setInfo] = useState({
        limit: 10, skip: 0
    })
    const [isbtn, setIsbtn] = useState(true)
    const getdata = async () => {
        try {
            if (info.skip !== 0) {
                setIsbtn(false)
            }
            const data = await fetch(`https://dummyjson.com/products?limit=${info.limit}&skip=${info.skip}`)
            const res = await data.json()
            if (res) {
                setIsbtn(true)
                const p = res.products
                setData((data) => [...data, ...p])
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    }, [info])
    return (
        <div className=' flex flex-col '>
            <h1 className=' text-center py-4 font-semibold text-2xl '>Load more functionality</h1>
            <div className="items px-2 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-4">
                {
                    data.map((item) => <div key={item.id} className=' text-center border-2 border-black border-solid py-2 px-2'>
                        <img src={item.thumbnail} alt="" className=' max-h-52 w-full' />
                        <h2 className=' text-xl mt-2 '>Title : i phone 9</h2>
                    </div>)
                }


            </div>
            <div className=' flex justify-center'>
            {isbtn ? <button className='w-52 bg-black text-white px-5 py-2 my-2' onClick={info.limit < 100 ? () => setInfo({ ...info, skip: info.skip + 10 }) : null}>Load More</button> : <p>loading...</p>}
            </div>
            
        </div>
    )
}

export default Load
