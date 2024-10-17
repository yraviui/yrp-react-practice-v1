import { useEffect, useState } from 'react'

function UsePrevPage(page) {

    const [lastPage, setLastPage] = useState(page);
    useEffect(() =>{
        const handlePage = (page) => setLastPage(page - 1)
        handlePage(page)
    },[page])

  return lastPage
}

export default UsePrevPage