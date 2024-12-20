import { Box, Container, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AccessMySuperPage, CommonHero } from '../components/components';
import Banner2 from '../public/CommonHero/blog-3-0.jpg';
import Banner4 from '../public/CommonHero/blog-index-2.jpg';
import Banner1 from '../public/CommonHero/single-blog-1.jpg';

const BlogSidebar = dynamic(() => import('../components/BlogSidebar/BlogSidebar'), { ssr: false });

const SingleBlog = ({ data, category, blogs }) => {
  const [filteredCat, setFilteredCat] = useState();
  const [show, setShow] = useState(false);
  const [randomBanner, setRandomBanner] = useState(1);
  const [blog] = data;
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (blog) {
      setFilteredCat(category.filter((entry) => entry.id === blog.categories[0]));
    }
  }, [blog, category]);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    setRandomBanner(random);
  }, [blog, slug]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const breadcrumb = [
    { id: "single_blog_breadcrumb_1", link: "/blog/", title: "Blog" },
    {
      id: "single_blog_breadcrumb_2",
      // link: `/category/${filteredCat?.[0]?.slug || ''}/`,
      link: filteredCat?.[0]?.slug ? `/category/${filteredCat[0].slug}/` : '/category/',
      title: `${filteredCat?.[0]?.name || ''}`,
    },
    { id: "single_blog_breadcrumb_3", link: null, title: blog?.title?.rendered || '' },
  ];

  const Banner = [Banner1, Banner2, Banner4];

  // Check if slug is 'access-my-super'
  const isAccessMySuper = slug === 'access-my-super';

  return (
    <>
      {blog && (
        <Head>
          <title>{blog.yoast_head_json?.title || 'Default Title'}</title>
          <meta
            name="description"
            content={blog.yoast_head_json?.description || 'Default description'}
          />
          {isAccessMySuper && (
            <meta name="robots" content="index,follow" />
          )}
          {!isAccessMySuper && (
            <meta name="robots" content="index, follow" />
          )}
        </Head>
      )}
      {blog && (
        <>
          <CommonHero
            breadcrumb={breadcrumb}
            bg={Banner[randomBanner]}
            title={blog?.title?.rendered || ''}
            color="#fff"
          />
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    {isAccessMySuper ? (
                      <>
                        <AccessMySuperPage />
                      </>
                    ) : (
                      <Grid container spacing={5}>
                        <Grid item xs={12} lg={8}>
                          <Box>
                            <img
                              src={blog?._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''}
                              alt={blog?._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''}
                              className="img-fluid"
                            />
                          </Box>
                          <Box mt={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered || '' }} />
                        </Grid>
                        {/* Render sidebar for all slugs except 'access-my-super' */}
                        <Grid item xs={12} lg={4}>
                          <BlogSidebar blogs={blogs.slice(0, 5)} cat={category} />
                        </Grid>
                      </Grid>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </>
      )
      }
    </>
  );
};

export default SingleBlog;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(`https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&slug=${slug}`);
  const data = await res.json();

  if (!data.length) {
    return {
      notFound: true,
    };
  }

  const catRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99');
  const category = await catRes.json();

  const blogRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true');
  const blogs = await blogRes.json();

  return {
    props: {
      data,
      category,
      blogs,
    },
  };
}
