'use client'
import React from 'react'
import { Post } from '@/payload-types'

interface PostHeroProps {
  post: Post
}

export const PostHero: React.FC<PostHeroProps> = ({ post }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-[48rem] mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.meta?.description && (
          <p className="text-lg text-gray-600 mb-6">{post.meta.description}</p>
        )}
        {post.populatedAuthors?.[0] && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>By {post.populatedAuthors[0].name}</span>
            {post.publishedAt && (
              <>
                <span>•</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
