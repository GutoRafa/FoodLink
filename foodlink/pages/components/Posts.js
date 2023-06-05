import React, { useEffect , useState } from 'react'
import { db } from '@component/firebase'
import { collection , getDocs , query , orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from './Post'

function Posts() {
    
    const postsColRef = collection(db, "posts")
    const q = query(postsColRef, orderBy("horario", "desc"))
    const [posts, loading , error] = useCollection(q)

  return (
    <div>
        {posts?.docs.map(post => (
            <Post 
            key={post.id}
            nome={post.data().nomeDisplay}
            horario={post.data().horario}
            desc={post.data().descricao}
            preco={post.data().preco}
            imgUrl={post.data().imagem}
            />
        ))}
    </div>
  )
}

export default Posts