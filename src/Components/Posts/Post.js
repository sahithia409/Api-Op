import React, { useEffect, useState } from "react"

const Post = () => {
  const [user, setUser] = useState([])
  const id = 1

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUser(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div>
    {user.map((u)=>{
        return(
            <div key={u.id} className="row row-cols-4 row-cols-md-1 g-10 ms-auto shadow p-3 mb-1 mt-3"> <h3>{u.title}</h3>
        <p>{u.body}</p>
        </div>

        )
    })}
  </div>
}

export default Post
