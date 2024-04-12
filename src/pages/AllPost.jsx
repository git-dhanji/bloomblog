import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/configure'
import { Container, PostCard } from '../components/index'

export default function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPostCollection([]).then((posts) => {
            if (posts) setPosts(posts.document)

        })
            .catch((err) => console.log('error in allPost ::', err))
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
