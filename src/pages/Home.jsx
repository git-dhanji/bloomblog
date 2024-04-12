import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configure'
import { Container, PostCard } from '../components/index'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPostCollection([]).then((posts) => {
            if (posts) setPosts(posts.documents)

        })
            .catch((err) => console.log('error in allPost Home::', err))
    }, [])

    if (posts.length <= 0) {
        return (
            <Container>
                <div className='flex flex-wrap w-full h-screen items-center justify-center bg-slate-500'>
                    <div className="p-2 w-full text-center ">
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            <div className="p-2 w-1/4" key={post.$id}>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
