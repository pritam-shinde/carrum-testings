import { Card, CardMedia } from "@mui/material"
import { useEffect, useState } from "react"

const SleepDentistryCard = ({ height, cardMedia, cardMediaAlt, mediaHeight, navlink, anchor, link, cardText, cardTitle, bgColor, cardList, icon, offerBtn, price, small, blogMedia, cls, date }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <Card className={`shadow grow ${cls}`} style={{ height: height && width > 900 ? height : "auto", position: "relative" }}>
                {
                    cardMedia ? <CardMedia component="img" image={cardMedia.src} alt={cardMediaAlt} height={mediaHeight ? mediaHeight : "400"} /> : null
                }
                {
                    blogMedia ? <CardMedia component="img" image={blogMedia} alt={cardMediaAlt} height={mediaHeight ? mediaHeight : "200"} /> : null
                }
                {/* {
                    cardTitle || cardText || cardList ? <CardContent className={bgColor ? 'isColor' : null}  >
                        {date ? <Typography style={{ color: `var(--light-green)` }} gutterBottom>{date}</Typography> : null}
                        {
                            cardTitle ? <Typography variant="h5" className="cardHead" gutterBottom>{navlink ? <a href={link}>
                                <a>{cardTitle}</a>
                            </a> : anchor ? <a href={link}>{cardTitle}</a> : cardTitle}</Typography> : null
                        }
                        {
                            cardText ? <Typography className="para" dangerouslySetInnerHTML={{ __html: cardText }} /> : null
                        }
                        {
                            cardList !== null ? cardList.length > 0 ? <Box mb={3}>
                                <List>
                                    {
                                        cardList.map(item => <ListItem key={item.id}>
                                            {icon ? <ListItemIcon><Check style={{ color: "#117295" }} /></ListItemIcon> : null}
                                            <ListItemText primary={item} className="para" />
                                        </ListItem>)
                                    }
                                </List>
                            </Box> : null : null
                        }
                    </CardContent> : null}
                {
                    offerBtn ? <CardActions className={`d-block ${Styles.OfferBtnSmall} mt-1`}><Box py={2} style={{ backgroundColor: "var(--navy)", borderRadius: "0.5rem", width:"100%", display:"block" }}>
                        <Typography align="center" style={{ color: "#fff", fontWeight: "600", fontSize: "1.5rem" }}>{price}</Typography>
                    </Box>
                       <Typography className="para font-weight-bold" style={{ color: "#117295" }} align="center">{small}</Typography>
                    </CardActions> : null
                } */}
            </Card>
        </>
    )
}

export default SleepDentistryCard