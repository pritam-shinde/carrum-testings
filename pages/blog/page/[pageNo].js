import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { XMasonry, XBlock } from 'react-xmasonry'
import { CommonHero, BlogSidebar, CustomCard, BlueFilledBtn, BlueOulinedBtn } from '../../../components/components';
import Banner2 from '../../../public/CommonHero/blog-index-2.jpg';
import Banner1 from '../../../public/CommonHero/blog-index-1.jpg';
import Banner3 from '../../../public/CommonHero/single-blog-1.jpg';
import Banner4 from '../../../public/CommonHero/blog-3-0.jpg';
import { Box, Container, Grid } from '@mui/material';
import WPAPI from 'wpapi';

export const getServerSideProps = async (context) => {
  const { pageNo } = context.params;
  const res = await fetch(`https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&page=${pageNo}`);
  const catRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/categories?_embed=true&per_page=99')
  const latestBlogRes = await fetch('https://apicarrumdownsdental.myconcept.website/wp-json/wp/v2/posts?_embed=true&per_page=5&page=1')
  const data = await res.json();
  const category = await catRes.json();
  const latestBlog = await latestBlogRes.json()
  return {
    props: {
      data,
      category,
      latestBlog
    }
  }
}
const MultipleBlogs = ({ data, category, latestBlog }) => {
  const [blogs, setBlogs] = useState([])
  const [show, setShow] = useState(false);
  const [randomBanner, setRandomBanner] = useState(1)
  const router = useRouter();
  const { pageNo } = router.query;

  const wp = new WPAPI({
    endpoint: "https://apicarrumdownsdental.myconcept.website/wp-json"
  });

  const fetchBlog = async () => {
    const posts = await wp.posts().page(pageNo).get();
    setBlogs(posts);
  }

  useEffect(() => {
    fetchBlog()
  })

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [])

  const breadcrumb = [
    { id: "blog_page_index", link: null, title: "BLOG" }
  ]
  const Banner = [Banner1, Banner2, Banner3, Banner4];

  useEffect(() => {
    const random = Math.floor(Math.random() * 4);
    setRandomBanner(random)
  }, [pageNo])

  return (
    <>
      {
        show ? <>
          <Head>
            <title>Blog | Carrum Downs Dental Group | Dentist Carrum Downs {pageNo}</title>
            <meta name="description" content={`Our blog contains various posts related to the dental conditions, treatments and vouchers. Read our blogs for dental tips and be aware of the dental problems ${pageNo}.`} />
            <meta name="robots" content="index" />
            <link rel="canonical" href={`/blog/page/${pageNo}/`} />
          </Head>
          <CommonHero title="Blog" breadcrumb={breadcrumb} bg={Banner[randomBanner]} color={"#fff"} />
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={8}>
                        <XMasonry maxColumns={2} responsive targetBlockWidth={400}>
                          {
                            data ? data.map(item => <XBlock key={item.id}>
                              <CustomCard cardMedia={item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].source_url ? item._embedded['wp:featuredmedia'][0].source_url : null : null : null : null : null} navlink={true} link={`/${item.slug}/`} cardTitle={item.title.rendered} cardPara={`${item.excerpt.rendered.split(" ").slice(0, 20).join(" ")} [...]`} cardHeight="auto" cardCls="shadow grow m-3" List={null} cardMediaAlt={item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].alt_text ? item._embedded['wp:featuredmedia'][0].alt_text : null : null : null : null : null} />
                            </XBlock>) : null
                          }
                        </XMasonry>
                        <Box pt={3} className="d-flex justify-content-center align-items-center">
                          <BlueFilledBtn btnLink="/blog/" btnTitle="FIRST" navlink={true} />
                          {
                            blogs ? blogs._paging ? Number(pageNo) != Number(blogs._paging.totalPages) ? blogs._paging.links ? blogs._paging.links.next ? <BlueOulinedBtn btnLink={`/blog/page/${Number(pageNo) + 1}/`} btnTitle="NEXT" navlink={true} /> : null : null : null : null : null
                          }
                          {
                            pageNo !== '2' && blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.prev ? <BlueFilledBtn btnLink={`/blog/page/${Number(pageNo) - 1}/`} btnTitle="PREV" navlink={true} /> : null : null : null : null
                          }
                          {
                            blogs ? blogs._paging ? Number(pageNo) != Number(blogs._paging.totalPages) ? <BlueOulinedBtn btnLink={`/blog/page/${blogs._paging.totalPages}/`} btnTitle="LAST" navlink={true} /> : null : null : null
                          }
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={4}>
                        {data && category ? <BlogSidebar blogs={latestBlog} cat={category} /> : null}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </main>
        </> : null
      }
    </>
  )
}
export default MultipleBlogs;


