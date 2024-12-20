import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { XBlock, XMasonry } from 'react-xmasonry';
import WPAPI from 'wpapi';
import { BlogSidebar, CommonHero, CustomCard } from '../../components/components';
import Banner4 from '../../public/CommonHero/blog-3-0.jpg';
import Banner3 from '../../public/CommonHero/blog-index-1.jpg';
import Banner1 from '../../public/CommonHero/single-blog-1.jpg';

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  let response = await fetch(`https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?slug=${slug}`);
  let category = await response.json();

  let allBlogsRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&per_page=5&page=1');
  let allBlogs = await allBlogsRes.json();

  let categoriesRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99');
  let categories = await categoriesRes.json();

  return {
    props: {
      category,
      allBlogs,
      categories,
    },
  };
};

const BlogsPerCategory = ({ category, allBlogs, categories }) => {
  const [blogsPerCat, setBlogsPerCat] = useState([]);
  const [show, setShow] = useState(false);
  const [randomBanner, setRandomBanner] = useState(0);

  const wp = new WPAPI({
    endpoint: 'https://apicarrumdownsdental.myconcept.website/wp-json/',
  });

  const fetchBlog = async () => {
    if (category.length > 0) {
      const posts = await wp.posts().embed().param({ categories: [category[0].id] }).perPage(99).page(1).get();
      setBlogsPerCat(posts);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [category]);

  useEffect(() => {
    setShow(typeof window !== 'undefined');
  }, []);

  const Banner = [Banner1, Banner3, Banner4];

  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    setRandomBanner(random);
  }, [category]);

  const breadcrumb = [
    { id: `single_category_${category[0]?.id}_breadcrumb_1`, link: '/blog/', title: 'Blog' },
    { id: `single_category_${category[0]?.id}_breadcrumb_2`, link: null, title: category[0]?.name || '' },
  ];

  return (
    <>
      {category.length > 0 && (
        <Head>
          <title>{category[0].yoast_head_json?.title || ''}</title>
          <meta name="description" content={category[0].yoast_head_json?.description || ''} />
          <meta name="robots" content="index" />
          <link rel="canonical" href={`/category/${category[0].slug || ''}/`} />
        </Head>
      )}
      <CommonHero bg={Banner[randomBanner]} breadcrumb={breadcrumb} title={category[0]?.name} />
      {show ? (
        <>

          {console.log("object", category[0]?.name)}
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={8}>
                        <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                          {blogsPerCat.map((item) => (
                            <XBlock key={item.id}>
                              <CustomCard
                                cardMedia={item._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                                navlink={true}
                                link={`/${item.slug}/`}
                                cardTitle={item.title.rendered}
                                cardPara={`${item.excerpt.rendered.split(' ').slice(0, 20).join(' ')} [...]`}
                                cardHeight="auto"
                                cardCls="shadow grow m-3"
                                List={null}
                                cardMediaAlt={item._embedded?.['wp:featuredmedia']?.[0]?.alt_text}
                              />
                            </XBlock>
                          ))}
                        </XMasonry>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        <BlogSidebar blogs={allBlogs} cat={categories} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default BlogsPerCategory;
