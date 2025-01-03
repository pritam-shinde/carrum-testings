import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { CommonHero } from '../../components/components';
import childBenefit from '../../public/Services/child-benefit-01.png';
import CnB from '../../public/Services/crowns-and-bridge-01.png';
import dentalImplant from '../../public/Services/dental-implants-01.png';
import denture from '../../public/Services/dentures-01.png';
import dentalEmergency from '../../public/Services/emergency-01.png';
import toothFilling from '../../public/Services/fillings-01.png';
import invisalign from '../../public/Services/invisalign-01.png';
import RC from '../../public/Services/root-canal-01.png';
import Banner from '../../public/Services/service-bg.jpg';
import teethCleaning from '../../public/Services/teeth-cleaning-01.png';
import teethWhitening from '../../public/Services/teeth-whitening-01.png';
import veneers from '../../public/Services/veneers-01.png';
import Wisdom from '../../public/Services/wisdom-teeth-removal-01.png';
import DigitalDenture from '../../public/Services/digital-dentures.png';
import ImplantDenture from "../../public/Services/implant-supported-denture.png"
import InvisalignOpen from "../../public/Services/invisalign-open-day.png"
import SleepDentistry from "../../public/Services/sleep-dentistry.png"
import SmileDesign from "../../public/Services/smile-design.png"
import DentureTechnology from "../../public/Services/denture-technology.png"

const Service = () => {

    return (
        <>
            <Head>
                <title>Dental Health Services Carrum Downs | Carrum Downs Dental</title>
                <meta name="description" content="Carrum Downs Dental offers wisdom teeth extraction, dental implants, teeth whitening, dentures, root canal, & other services in Carrum Downs, you can count on Us." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={null} title="Services" align="left" color="#fff" />
            <main>
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Grid container spacing={5}>
                                        {
                                            [
                                                {
                                                    id: "service-1",
                                                    title: "Wisdom Teeth Removal in Carrum Downs",
                                                    anchor: "/service/wisdom-teeth-removal/",
                                                    link: null,
                                                    excerpt: "Our Dentist can perform wisdom tooth removal in an affordable pain freeway, starting from $200*.",
                                                    image: Wisdom
                                                },
                                                {
                                                    id: "service-2",
                                                    title: "Child Benefit",
                                                    link: "/service/child-benefit/",
                                                    excerpt: "Eligible Kids between 2 – 17 years can get up to $1000* worth of dental services.",
                                                    image: childBenefit,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-3",
                                                    title: "Dental Implants in Carrum Downs",
                                                    link: "/service/dental-implants/",
                                                    excerpt: "Renew your smile and chewing ability. We offer complete implant procedure including Implant, Abutment and Crown.",
                                                    image: dentalImplant,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-4",
                                                    title: "Dentures in Carrum Downs",
                                                    link: "/service/dentures/",
                                                    excerpt: "You don’t have to live with missing teeth. At Carrum Downs Dental we have affordable denture options.",
                                                    image: denture,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-5",
                                                    title: "Teeth Whitening in Carrum Downs",
                                                    link: "/service/teeth-whitening/",
                                                    excerpt: "Teeth Whitening is one of the most effective ways to remove the discolouration, leaving with a Whiter, Brighter and Fresher looking smile.",
                                                    image: teethWhitening,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-6",
                                                    title: "Crowns and bridge in Carrum Downs",
                                                    link: "/service/crowns-and-bridge/",
                                                    excerpt: "Crown and Bridge restores the size, shape, strength, or appearance of a tooth.",
                                                    image: CnB,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-7",
                                                    title: "Dental Veneers in Carrum Downs",
                                                    link: "/service/veneers/",
                                                    excerpt: "When you look at pictures do you ever wish your teeth were whiter, straighter, more aligned?",
                                                    image: veneers,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-8",
                                                    title: "Invisalign",
                                                    link: "/service/teeth-aligners/",
                                                    excerpt: "The Most Effective and Affordable way to Brighten Your Smile.",
                                                    image: invisalign,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-9",
                                                    title: "Root Canal in Carrum Downs",
                                                    link: "/service/root-canal/",
                                                    excerpt: "Do you feel a shooting pain in your teeth when eating or drinking something hot?",
                                                    image: RC,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-10",
                                                    title: "Teeth Cleaning in Carrum Downs",
                                                    link: "/service/teeth-cleaning/",
                                                    excerpt: "Professional Dental Scale and Clean",
                                                    image: teethCleaning,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-11",
                                                    title: "Dental Emergency in Carrum Downs",
                                                    link: "/service/dental-emergency/",
                                                    excerpt: "Nothing is worse than having an issue with your tooth.",
                                                    image: dentalEmergency,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-12",
                                                    title: "Tooth Fillings",
                                                    link: "/service/tooth-fillings/",
                                                    excerpt: "Your teeth will be restored to a natural look and feel.",
                                                    image: toothFilling,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-13",
                                                    title: "Invisalign Open Day",
                                                    link: "/service/invisalign-open-day/",
                                                    excerpt: "Explore Invisalign and enjoy exclusive offers on our open day!",
                                                    image: InvisalignOpen,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-14",
                                                    title: "Smile Design",
                                                    link: "/service/smile-design/",
                                                    excerpt: "Achieve your dream smile with personalized design solutions!",
                                                    image: SmileDesign,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-15",
                                                    title: "Digital Dentures",
                                                    link: "/service/digital-dentures/",
                                                    excerpt: "Experience comfort and precision with advanced digital dentures!",
                                                    image: DigitalDenture,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-16",
                                                    title: "Implant Supported Denture",
                                                    link: "/service/implant-supported-denture/",
                                                    excerpt: "Enjoy stability and confidence with implant-supported dentures!",
                                                    image: ImplantDenture,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-17",
                                                    title: "Denture Technology",
                                                    link: "/service/denture-technology/",
                                                    excerpt: "Discover innovative solutions with advanced denture technology.",
                                                    image: DentureTechnology,
                                                    anchor: null
                                                },
                                                {
                                                    id: "service-18",
                                                    title: "Sleep Dentistry",
                                                    link: "/service/sleep-dentistry/",
                                                    excerpt: "Experience stress-free dental care with comfortable sleep dentistry.",
                                                    image: SleepDentistry,
                                                    anchor: null
                                                },
                                            ].map(item => <Grid item key={item.id} xs={12} sm={6} md={4}>
                                                <Box className='shadow' p={3} component={Paper} style={{
                                                    display: "flex", flexDirection: 'column', minHeight: "350px", height: "100%",
                                                    justifyContent: "space-between",
                                                }}>
                                                    <Box className="d-flex justify-content-center align-items-center py-3">
                                                        <Box p={2} style={{ height: "5rem", width: "5rem", borderRadius: "50%", border: "1px solid var(--dark-green)" }} className="d-flex justify-content-center align-items-center">
                                                            <img src={item.image.src} alt={item.title} className="img-fluid" />
                                                        </Box>
                                                    </Box>
                                                    <Box mt={4} style={{ flexGrow: 1, textAlign: 'center' }}>
                                                        <Typography gutterBottom variant='h5' align='center' style={{ color: "var(--dark-blue)" }}><a href={item.link} style={{ color: "var(--dark-blue)" }}>{item.title}</a></Typography>
                                                        <Typography align="center">{item.excerpt}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>)
                                        }
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Service