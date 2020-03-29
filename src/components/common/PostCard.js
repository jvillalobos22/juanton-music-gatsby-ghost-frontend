import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Tags } from '@tryghost/helpers-gatsby';
import { readingTime as readingTimeHelper } from '@tryghost/helpers';
import { Heading2, Body1 } from '../Library/Typography';

const TagsContainer = styled.div`
  && {
    margin-top: -8px;
    margin-bottom: 16px;
    span {
      background-color: #fff;
      color: #222;
      padding: 5px 12px 3px;
      border-radius: 15px;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;

const PostImage = styled.div`
  margin-bottom: 28px;
`;

const PostCardLink = styled(Link)`
  margin-bottom: 36px;
`;

const PostCard = ({ post }) => {
  const url = `/blog/${post.slug}/`;
  const readingTime = readingTimeHelper(post);

  return (
    <PostCardLink to={url} className="post-card">
      <header className="post-card-header">
        {post.feature_image && (
          <PostImage
            className="post-card-image"
            style={{
              backgroundImage: `url(${post.feature_image})`
            }}
          ></PostImage>
        )}
        {post.featured && <span>Featured</span>}
        <Heading2>{post.title}</Heading2>
        {post.tags && (
          <TagsContainer>
            <Tags post={post} visibility="public" autolink={false} />
          </TagsContainer>
        )}
      </header>
      <section>
        <Body1>{post.excerpt}</Body1>
      </section>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <div className="post-card-avatar">
            {post.primary_author.profile_image ? (
              <img
                className="author-profile-image"
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
              />
            ) : (
              <img
                className="default-avatar"
                src="/images/icons/avatar.svg"
                alt={post.primary_author.name}
              />
            )}
          </div>
          <span>{post.primary_author.name}</span>
        </div>
        <div className="post-card-footer-right">
          <div>{readingTime}</div>
        </div>
      </footer>
    </PostCardLink>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    feature_image: PropTypes.string,
    featured: PropTypes.bool,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    ),
    excerpt: PropTypes.string.isRequired,
    primary_author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_image: PropTypes.string
    }).isRequired
  }).isRequired
};

export default PostCard;
