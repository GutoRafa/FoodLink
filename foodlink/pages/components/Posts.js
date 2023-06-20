import React from 'react'
import { db } from '@component/firebase'
import { collection , where , query , orderBy } from 'firebase/firestore'
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
            fotoPerfil={post.data().fotoPerfil}
            />
        ))}
    </div>
  )
}

export default Posts