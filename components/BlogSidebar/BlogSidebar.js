import { Box, Container, Paper } from '@mui/material'
import React from 'react'
import Styles from '../../styles/components-style/BlogSidebar/BlogSidebar.module.css'

const BlogSidebar = ({ blogs, cat }) => {
    return (
        <>
            <aside style={{ height: "100%" }}>
                <Container maxWidth="xxl" style={{ position: "relative !important", height: "100%" }}>
                    <Box component={Paper} className="shadow rounded">
                        <Box py={2} className="rounded-top" style={{ backgroundColor: 'var(--dark-blue)' }}>
                            <div className='sectional-heading1 text-white text-center'>Recent Post</div>
                        </Box>
                        <Box p={2}>
                            {
                                blogs.map(item => <Box key={`sidebar-blog-${item.id}`} className="mb-3">
                                    <Box className='ms-3'>
                                        <div className='sectional-heading2'><a className='text-dark-blue' href={`/${item.slug}/`}>{item.title.rendered}</a></div>
                                    </Box>
                                </Box>)
                            }
                        </Box>
                    </Box>
                    <Box mt={5} component={Paper} className={`shadow rounded ${Styles.fixedCategory}`}>
                        <Box py={2} className="rounded-top" style={{ backgroundColor: 'var(--dark-blue)' }}>
                            <div className='sectional-heading1 text-white text-center'>Category</div>
                        </Box>
                        <Box p={2}>
                            {
                                cat.map(item => <Box key={`blog_sidebar_cat${item.id}`} className="mb-3">
                                    <div className='sectional-heading2'><a className='text-dark-blue' href={`/category/${item.slug}/`}>{item.name}</a></div>
                                </Box>)
                            }
                        </Box>
                    </Box>
                </Container>
            </aside>
        </>
    )
}

export default BlogSidebar;
