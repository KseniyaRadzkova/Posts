import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
          ...post, id: Date.now()
        } 
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.currentTarget.value })}
                type="text"
                placeholder="название поста">
            </MyInput>
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.currentTarget.value })}
                type="text"
                placeholder="описание поста">
            </MyInput>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;