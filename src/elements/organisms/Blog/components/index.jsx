import React from 'react'

import { About, Content, Hero } from '../../molecules'
import Images from '../../../containers/Images'
import './blog.css'

const Blog = () => (
  <div id="BLOG" className="blog">
    <div className="blog__about">
      <About
        subtitle="Great apps and webs for all!"
        text="At Elements we believe that everybody should have access to an easy and correct experience with their device. We specialize on mobile, but we try to deliver a product for every platform, so everybody is happy! "
      />
    </div>
    <Hero
      overlay
      title="Lorem Ipsum Dolor Sit Amet"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <Content />
    <Images />
  </div>
)

export default Blog
