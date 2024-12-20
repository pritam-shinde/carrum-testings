import { Box, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// key={index} className={index === 6 ? "centered-box" : ""}

const VeneersProcessDataComponent = ({ image, title, description, list1, desc1, desc2, list2 }) => {
    return (
        <>
         <Box display="flex" alignItems="start">
                {image ?
                    <Box textAlign="center" p={2} className='img-process'>
                        <Image src={image} alt='title' />
                    </Box>
                : ""}
                <Box>
                    {title ?
                        <Typography variant="h6" component="h3" className='veneer-font-color' gutterBottom>
                            {title}
                        </Typography>
                        : ''}
                    {description ?
                        <Box variant="body1" >
                            {description}

                            {(list1 || list2) ?
                                <List>
                                    {list1 ? <ListItem>{list1}: {desc1}</ListItem> : null}
                                    {list2 ? <ListItem>{list2}: {desc2}</ListItem> : null}
                                </List>
                                : null}
                        </Box>
                        : ''}
                </Box>
            </Box>
           
        </>
    )
}

export default VeneersProcessDataComponent