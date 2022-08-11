import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../ui-library';
import { selectPosts } from '../../store/selectors';
import { Post } from '../../store/types';
import icon from '../../img/icon';
import { sagaActions } from '../../store/saga/saga';
import { postAction } from '../../store/reducer';

export const PostsMaterial: React.FC = () => {
    const dispatch = useDispatch();
    const posts: Post[] = useSelector(selectPosts);
    const iconBacket = icon.backetIcoun();

    const deletePost = (id: number) => {
        dispatch(postAction.deletePost(id));
        dispatch(sagaActions.deletePost());
    }

    const openPost = (id: number) => {
        dispatch(postAction.openPostId(id));
        dispatch(sagaActions.getPostById());
    }
    
    return (
        <div className='post_wrapper'>
            {
                posts.map((post) => (
                    <div 
                        key={post.id}
                        className='post__item' 
                        onClick={() => openPost(post.id)}>
                            <div className="title__blick">
                                <div className='title_post'>{ post.title }</div>
                                <Button mode={'button-link'} 
                                    children={iconBacket} 
                                    onClick={() => deletePost(post.id)}/>
                            </div>
                            <div className='title_description'>{ post.description }</div>
                    </div>
                ))
            }
        </div>
    ) 
};