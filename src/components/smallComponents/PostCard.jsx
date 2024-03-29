/* eslint-disable react/prop-types */
// show a card like image with title 
import appwriteService from '../../appwrite/configure'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
