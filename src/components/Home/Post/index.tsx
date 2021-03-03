import { ReactComponent as Comment } from 'assets/images/home/comment.svg';
import { ReactComponent as Heart } from 'assets/images/home/heart.svg';
import { ReactComponent as HeartRed } from 'assets/images/home/heart_red.svg';
import { ReactComponent as Share } from 'assets/images/home/share.svg';
import React, { useState } from 'react';
import cls from './_userPost.module.scss';
import PropTypes from 'prop-types';

type Props = {
    postImage?: string;
    avtHeader: string;
    userName: string;
    likeCount: number;
    commentCount: number;
    shareCount: number;
};

const Post: React.FC<Props> = (props) => {
    const postImage = props.postImage;
    const avtHeader = props.avtHeader;

    const userName = props.userName;

    const likeCount = props.likeCount;
    const likeStyle = likeCount / 10;
    const commentCount = props.commentCount;
    const commentStyle = commentCount / 10;
    const shareCount = props.shareCount;
    const shareStyle = shareCount / 10;

    const [like, setLike] = useState(false);

    const onClickLike = () => {
        setLike(!like);
    };
    return (
        <div className={cls.home_post}>
            <header className={cls.home_post_header}>
                <div
                    className={cls.header_avt}
                    style={{ backgroundImage: `url(${avtHeader})` }}
                />
                <div className={cls.header_username}>{userName}</div>
            </header>
            <div
                className={cls.home_post_image}
                style={{ backgroundImage: `url(${postImage})` }}
            />
            <div className={cls.home_post_comment}>
                <div className={cls.home_post_comment_react}>
                    {!like && (
                        <Heart
                            className={cls.home_post_comment_icon}
                            height={25}
                            width={25}
                            onClick={onClickLike}
                            style={{ marginRight: 15 + likeStyle }}
                        />
                    )}
                    {like && (
                        <HeartRed
                            className={cls.home_post_comment_icon}
                            height={25}
                            width={25}
                            onClick={onClickLike}
                            style={{ marginRight: 15 + likeStyle }}
                        />
                    )}
                    <Comment
                        className={cls.home_post_comment_icon}
                        height={25}
                        width={25}
                        style={{ marginRight: 15 + commentStyle }}
                    />
                    <Share
                        className={cls.home_post_comment_icon}
                        height={25}
                        width={25}
                        style={{ marginRight: shareStyle + 15 }}
                    />
                </div>
                <div>
                    <span
                        className={cls.home_post_react}
                        style={{ marginRight: 23 }}
                    >
                        {likeCount}
                    </span>
                    <span
                        className={cls.home_post_react}
                        style={{ marginRight: 23 }}
                    >
                        {commentCount}
                    </span>
                    <span
                        className={cls.home_post_react}
                        style={{ marginRight: 23 }}
                    >
                        {shareCount}
                    </span>
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    postImage: PropTypes.string,
    avtHeader: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    shareCount: PropTypes.number.isRequired,
};

export default Post;
