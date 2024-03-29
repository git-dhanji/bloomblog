import { useEffect,useState } from "react";
import {Container,Postform} from '../components/index';
import appwriteService from '../appwrite/configure';
import { useNavigate, useParams } from "react-router-dom";



export default function EditPost() {
    const [posts,setPosts] = useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
                else navigate('/')
            })
        }
    },[slug,navigate,])
  return posts ? (
    <div className="py-8">
        <Container>
            <Postform post = {posts}/>
        </Container>
    </div>
  ) : null;
}
