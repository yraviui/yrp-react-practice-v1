import { useEffect, useState } from 'react'

function UseNextPage(page) {

    const [lastPage, setLastPage] = useState(page);
    useEffect(() =>{
        const handlePage = (page) => setLastPage(page + 1 )
        handlePage(page)
    },[page])

  return lastPage
}

export default UseNextPage
