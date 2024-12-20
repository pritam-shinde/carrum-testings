import { Card, CardContent, CardMedia, ListItem, Typography } from '@mui/material'
import React from 'react'

const CustomCard = ({ cardMedia, resizedImage, navlink, anchor, link, cardTitle, cardPara, List, sec, cardCls, cardHeight, alt, resizedImageWidth, headAlign, paraAlign, cardMediaAlt }) => {
    return (
        <>
            <Card className={`${cardCls}`} style={{ height: cardHeight, }}>
                {
                    cardMedia ? <CardMedia component="img" image={cardMedia} loading='lazy' alt={alt}
                    /> : resizedImage ? <CardMedia component="img" image={resizedImage} style={{ width: '60% !important' }} className="mx-auto" loading='lazy' alt={alt} /> : null
                }
                <CardContent>
                    {
                        (cardTitle && navlink) ? <Typography variant='h5' component="h2" align={headAlign} gutterBottom><a href={link} className='text-dark-blue'>{cardTitle}</a></Typography> : (cardTitle && anchor) ? <Typography variant='h5' component="h2" align={headAlign} gutterBottom><a href={link} className='text-dark-blue'>{cardTitle}</a></Typography> : <Typography variant='h5' component="h2" align={headAlign} gutterBottom>{cardTitle}</Typography>
                    }
                    {
                        cardPara !== null ? <Typography align={paraAlign} dangerouslySetInnerHTML={{ __html: cardPara }} /> : null
                    }
                    {
                        List !== null ? <List>
                            {
                                List.map((item, index) => <ListItem key={`${sec}-List-${index}`}>{item}</ListItem>)
                            }
                        </List> : null
                    }
                </CardContent>
            </Card>
        </>
    )
}

export default CustomCard
