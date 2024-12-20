import CircleIcon from '@mui/icons-material/Circle'
import { Box, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SleepDentistrySlider from '../../../components/SleepDentistrySlider/SleepDentistrySlider'
import { CommonHero, SectionalHeading } from '../../../components/components'
import SleepDentistryWhat from "../../../public/sleep-denstistry/sleep-dentistry-section-new.jpg"
import SleepImg from "../../../public/sleep-denstistry/Image-1-new.jpg"
import Doctor2 from "../../../public/sleep-denstistry/Image-2.jpeg"
import Doctor3 from "../../../public/sleep-denstistry/Image.jpeg"
import Image1 from "../../../public/sleep-denstistry/fear.jpg"
import Twilight from "../../../public/sleep-denstistry/female-dentist.jpg"
import Sedation from "../../../public/sleep-denstistry/female-patient.jpg"
import HappyGas from "../../../public/sleep-denstistry/happy-gas.jpg"
import Image3 from "../../../public/sleep-denstistry/prevention-negative-treatment.jpg"
import Image2 from "../../../public/sleep-denstistry/safe.jpg"
import Banner from '../../../public/sleep-denstistry/sleep-dentistry-hero.jpg'
import Special from "../../../public/sleep-denstistry/special-needs-img-opt.jpg"
import styles from '../../../styles/CardLayout.module.css'

const SleepDentistry = () => {
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, []);

    const breadcrumb = [
        { id: "Sleep_dentistry_breadcrumb_1", link: "/service/", title: "Service" },
        { id: "Sleep_dentistry_breadcrumb_2", link: null, title: 'Sleep Dentistry' }
    ];

    return (
        <>
            <Head>
                <title>Sleep Dentistry In Carrum Downs | Carrum Downs Dental</title>
                <meta name="description" content="Sleep Dentistry at Carrum Downs Dental Group contact us now to learn about our services and how we can improve your dental health." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={Banner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} color="#fff" title="Sleep Dentistry" />
            <section className="py-4 my-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Box className='mb-2 mx-auto'>
                                <SectionalHeading variant="h2" title="Sleep Dentistry using General Anaesthesia" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" sx={{ alignItems: 'center' }} />
                            </Box>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} className="mt-2">
                                    <Box sx={{ width: '100%', height: 'auto' }}>
                                        <Image
                                            src={SleepDentistryWhat}
                                            alt="Sleep Dentistry Carrum Downs"
                                            priority
                                            layout="responsive"
                                            width={550}
                                            height={500}
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                            className='object-cover'
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                                    <Box>
                                        <SectionalHeading variant="h3" title="Pain-free Dental Procedures using Sleep Dentistry" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                        <Typography className="para mt-2" >
                                            For many individuals, visiting the dentist can be a daunting and anxiety-inducing experience. The fear of dental procedures can be so intense that some people avoid seeking necessary dental care, even when faced with oral health problems. Over time, this avoidance can lead to a deterioration of dental health and more complex issues. Sleep dentistry offers a solution for those who struggle with severe dental anxiety, providing a way to receive essential dental treatments without the associated pain or emotional distress.
                                        </Typography>

                                        <Typography className="para" gutterBottom>
                                            In Carrum Downs, sleep dentistry is widely recognised as one of the safest and most effective approaches to delivering dental care. By enabling patients to feel relaxed and comfortable during potentially challenging treatments, sleep dentistry ensures a more positive experience compared to traditional dental visits. When patients are placed under general anaesthesia, they are completely unaware of the procedure and do not experience any discomfort, creating a more pleasant and stress-free dental experience.
                                        </Typography>

                                        <SectionalHeading variant="p" title="Sleep dentistry can address a wide range of concerns, including:" align="left" color="var(--dark-blue)" />
                                        <List>
                                            {
                                                ["Dental anxiety and phobia", "Complex dental procedures", "Strong gag reflex", "	Patients with special healthcare needs", "Pain management and amnesia", "Efficiency in treatment for multiple procedures", "Dental treatment for babies and toddlers"].map(item => <ListItem key={item} style={{ padding: "0px" }}>
                                                    <ListItemIcon>
                                                        <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem" }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>)
                                            }
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Severe Dental Anxiety in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} >
                                    <Box sx={{ padding: { xs: 2, md: 0 }, width: '100%' }}>
                                        <Typography className="para mt-2" gutterBottom>
                                            For adults and children who experience extreme fear or anxiety related to dental visits, sleep dentistry using general anaesthesia can provide a transformative solution. When a patient is asleep during the procedure, they are completely unaware of the dental work being performed, eliminating any potential for fear, pain, or discomfort. This approach allows necessary dental treatments to be completed without causing psychological distress or trauma, which is particularly important for those with severe dental phobia.
                                        </Typography>

                                        <Typography className="para" gutterBottom>
                                            By removing the emotional barrier to seeking dental care, sleep dentistry enables patients with severe anxiety to maintain better oral health and address dental issues before they become more complex and difficult to treat. This proactive approach to dental care can lead to improved overall health and well-being, as poor oral health has been linked to various systemic health issues.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} className='d-flex justify-content-center align-items-center'>
                                    <video width="100%" height="100%" controls autoPlay muted>
                                        <source src="/sleep-denstistry/sleep-dentistry-video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="py-4 my-4" >
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Box py={2}>
                                <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Severe Gag Reflex" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Typography className="para mt-2">A strong gag reflex can make dental treatments challenging and uncomfortable for both the patient and the dentist. In some cases, a severe gag reflex can render certain dental procedures nearly impossible to complete while the patient is awake. Sleep dentistry using general anaesthesia offers a solution by temporarily suppressing the gag reflex while the patient is unconscious.</Typography>
                                <Typography className="para">With the gag reflex inactive during the procedure, the dentist can work more efficiently and effectively, ensuring that necessary dental treatments are completed without causing distress or discomfort to the patient. This approach is particularly beneficial for patients who have previously struggled to receive dental care due to their severe gag reflex, as it allows them to access the treatment they need for optimal oral health.</Typography>
                                <Box mt={2}>
                                    <Image src={SleepImg} alt="sleepImg" height={650} width={1200} className="img-fluid" priority />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="py-4 my-4">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Box py={2}>
                                <SectionalHeading variant="h2" title="Sleep Dentistry for Patients with Special Healthcare Needs" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                <Image src={Special} priority alt="specialHealcareNeeds" height={800} width={1200} className="img-fluid mt-4" />
                            </Box>
                            <Box className="mt-2">
                                <Typography className="para">For adults and children with special healthcare needs, such as severe anxiety, phobia, or certain medical conditions, receiving dental care in a traditional setting can be challenging or even impossible. Sleep dentistry using general anaesthesia provides a safe and comfortable way for these individuals to receive necessary dental treatments without the emotional or physical distress that may be associated with being awake during the procedure.</Typography>
                                <Typography className="para">By ensuring a pain-free and anxiety-free dental experience, sleep dentistry can be a transformative solution for patients with special healthcare needs. This approach allows dental professionals to provide essential care that might otherwise be neglected due to the patient's inability to tolerate treatments while awake. Maintaining good oral health is crucial for overall well-being, and sleep dentistry helps make this possible for individuals with unique needs.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} >
                                    <Box sx={{ width: '100%', height: 'auto' }}>
                                        <Image src={Doctor3} priority alt="complex Sleep Dentistry Carrum Downs" width={550} height={400} layout="responsive" style={{ maxWidth: '100%', height: 'auto' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} className='d-flex justify-content-center py-4'>
                                    <Box>
                                        <SectionalHeading variant="h2" title="Sleep Dentistry for Patients Who Need Complex Dental Procedures." align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                        <Typography className="para mt-2" gutterBottom>
                                            Complex dental procedures, such as multiple dental surgeries, extensive restorative work, or treatments for patients with special needs, can be lengthy, uncomfortable, and emotionally taxing when performed while the patient is awake. Sleep dentistry using general anaesthesia offers a more comfortable and efficient approach to these intricate procedures.
                                        </Typography>
                                        <Typography className="para mt-2" gutterBottom>When a patient is asleep during a complex dental procedure, they are completely unaware of the treatment being performed and do not experience any pain or anxiety. This allows the dental team to work more efficiently and effectively, as they can focus on the task at hand without the need to manage the patient's discomfort or distress. Additionally, performing multiple procedures in one appointment under general anaesthesia can reduce the overall treatment time and the number of dental visits required, making the process more convenient for the patient.
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section >
            <section className="py-4 my-4" >
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Sleep Dentistry for Babies and Young Children in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className="para mt-2">For parents of young children who experience severe anxiety or fear during dental visits, finding a way to ensure their child receives necessary dental care without causing emotional trauma can be a significant concern. Paediatric dentists in Carrum Downs recommend sleep dentistry for babies and young children who are unable to cooperate or tolerate dental treatments due to their age or level of anxiety.</Typography>
                            <Typography className='para mt-2'>
                                The benefits of sleep dentistry for young patients include:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <Grid container justifyContent="center" spacing={4} mb={2}>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Image1.src} alt="scale and clean" className={styles.cardImage} style={{ aspectRatio: "6/4" }} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography gutterBottom variant="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                Elimination of fear and discomfort
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Since the child is fully asleep during the procedure, they do not experience any pain or anxiety associated with dental treatments.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Image2.src} alt="scale and clean" className={styles.cardImage} />
                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className="maintainance-title-font veneer-font-color fs-4">
                                                Safe and accurate treatment
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Paediatric dentists can perform necessary dental work safely and precisely without the need to manage a distressed or uncooperative child.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Image3.src} alt="scale and clean" className={styles.cardImage} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className=" maintainance-title-font veneer-font-color fs-4">
                                                Prevention of negative dental experiences
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                By avoiding traumatic dental experiences at a young age, sleep dentistry can help prevent the development of dental phobia or anxiety later in life.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <Typography className='para fw-semibold'>
                                To help children feel more comfortable during dental visits, parents and guardians can try the following strategies:
                            </Typography>
                            <List>
                                {
                                    ["Preparing the child for the visit by explaining the process in simple, age-appropriate terms",
                                        "Allowing the child to bring a favourite toy or comfort object to the appointment",
                                        "Providing positive reinforcement and rewards after the visit to help build positive associations with dental care"].map(item => <ListItem key={item} style={{ padding: "0px" }}>
                                            <ListItemIcon>
                                                <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>)
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="my-4 py-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Alternative Relaxation Techniques in Dentistry Beyond Full Sleep Sedation" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Typography className="para mt-2">While sleep dentistry using general anaesthesia is an effective solution for many patients with severe dental anxiety or complex treatment needs, there are alternative relaxation techniques available that do not involve complete unconsciousness. These options include:</Typography>
                        </Grid>
                        <Grid item xs={12} md={9} className="mx-auto pb-4">
                            <Grid container justifyContent="center" spacing={4}>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={HappyGas.src} alt="scale and clean" className={styles.ChoosecardImage} style={{ aspectRatio: "5/4" }} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className="maintainance-title-font veneer-font-color fs-4">
                                                Nitrous Oxide (Laughing Gas)
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Nitrous oxide, also known as laughing gas, is a mild sedative that is inhaled through a mask during a dental procedure. This technique helps patients feel relaxed and at ease while remaining awake and responsive. Laughing gas is a popular choice for both adults and children with mild to moderate levels of dental anxiety. It is considered safe for children around 3-4 years of age who are able to tolerate wearing the mask and follow instructions. However, for very young or uncooperative children, sleep dentistry may be a more suitable option.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        <CardMedia component="img" src={Sedation.src} alt="scale and clean" className={styles.ChoosecardImage} style={{ aspectRatio: "5/4" }} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className="mb-4 maintainance-title-font veneer-font-color fs-4">
                                                IV Sedation
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Intravenous (IV) sedation involves administering sedative medications directly into the patient's bloodstream through an IV line. This method provides a deeper level of relaxation compared to laughing gas or oral sedatives while still allowing the patient to remain awake and responsive. IV sedation is typically recommended for adults with moderate to severe dental anxiety, as it can help them feel more comfortable and less anxious during the procedure. However, IV sedation is generally not used for young children, who may instead benefit from sleep dentistry if laughing gas is not sufficient.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4} sm={6}>
                                    <Card className={styles.card}>
                                        {/* <img src="/path/to/image2.jpg" alt="Image 2" className={styles.cardImage} /> */}
                                        <CardMedia component="img" src={Twilight.src} alt="scale and clean" className={styles.ChoosecardImage} style={{ aspectRatio: "5/4" }} />

                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h3" className="mb-4 maintainance-title-font veneer-font-color fs-4">
                                                Twilight Sedation
                                            </Typography>
                                            <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                                Twilight sedation is a type of IV sedation that puts patients in a deeply relaxed, dream-like state. While under twilight sedation, patients are still able to respond to verbal cues and instructions but may have little to no memory of the procedure afterwards. This approach is highly effective for adults with significant dental anxiety, as it allows them to receive necessary dental care without the emotional distress often associated with being fully aware during the treatment.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section>
                <SleepDentistrySlider />
            </section>
            <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Payment Options to Make Sleep Dentistry Affordable in Carrum Downs" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Box sx={{ padding: { xs: 2, md: 0 }, width: '100%' }}>
                                <Typography variant="body1" paragraph className="para">
                                    Although sleep dentistry can be more expensive than traditional dental treatments, there are several payment options available to help make this approach more affordable and accessible for patients in Carrum Downs:
                                </Typography>
                                <List>
                                    <ListItem style={{ padding: "0px" }}>
                                        <ListItemText
                                            primary={
                                                <Typography className='para ms-3 fw-bold' variant="body2">
                                                    1. Humm and AfterPay
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography className=' ms-3' variant="body2" style={{ color: '#1c1a1a' }}>
                                                    These payment plans allow patients to spread the cost of their dental treatment over time rather than paying the full amount upfront. By breaking the cost into more manageable instalments, patients can access the benefits of sleep dentistry without the immediate financial burden.
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem style={{ padding: "0px" }}>
                                        <ListItemText primary={
                                            <Typography className='para ms-3 fw-bold' variant="body2">
                                                2. Applying for early release of superannuation funds on compassionate grounds through the Australian Taxation Office (ATO)
                                            </Typography>
                                        }
                                            secondary={<Typography className=' ms-3' variant="body2" style={{ color: '#1c1a1a' }}>In some cases, individuals may be eligible to access their superannuation funds early to cover the cost of necessary dental treatments. A dental coordinator can assist patients in navigating the application process and understanding the requirements for early release of funds on compassionate grounds.</Typography>}
                                        />
                                    </ListItem>
                                </List>
                                <Typography variant="body1" paragraph className="para">
                                    By exploring these payment options, patients in Carrum Downs can make sleep dentistry a more financially feasible solution for their dental needs, ensuring they receive the care they require for optimal oral health.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="py-4 my-4" >
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Dental Procedures Suitable for Sleep Dentistry" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Box sx={{ padding: { xs: 2, md: 0 }, width: '100%' }}>
                                <Typography variant="body1" paragraph   >
                                    A wide range of dental procedures can be performed under general anaesthesia, making sleep dentistry a versatile solution for various patient needs. Some common treatments that may benefit from sleep dentistry include:
                                </Typography>
                                <List>
                                    {
                                        ["Paediatric dental care for toddlers or very young children with extensive tooth decay",
                                            "Extraction of multiple teeth, particularly wisdom teeth removals",
                                            "Placement of dental implants, which can be a complex and time-consuming procedure",
                                            "Major reconstructive or restorative work, such as placing several crowns or bridges in one appointment",
                                            "Extensive root canal treatments that may require multiple visits or lengthy appointments"].map(item => <ListItem key={item} style={{ padding: "0px" }}>
                                                <ListItemIcon>
                                                    <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem" }} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>)
                                    }
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className="py-4 my-4" style={{ background: "#d1cbcb52" }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Advantages of Dental Sedation: Experience Relaxing, Pain-free Dentistry" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6} className="mt-2">
                                    <Box sx={{ width: '100%', height: 'auto' }}>
                                        <Image src={Doctor2} alt="Sleep Dentistry Carrum Downs" width={550} height={500} layout="responsive"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                            priority
                                            className='object-cover'
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} className='d-flex justify-content-center'>
                                    <Box sx={{ padding: { xs: 2, md: 0 }, marginTop: { md: 2, xs: 2 }, width: '100%' }}>

                                        <Typography variant="p" gutterBottom style={{ fontSize: "1rem !important" }}>
                                            Dental sedation, including sleep dentistry, offers numerous benefits for patients seeking a more comfortable and stress-free dental experience:
                                        </Typography>
                                        <List>
                                            {
                                                ["Improved access to dental care for even the most anxious or fearful patients", "Effective relief of pain and anxiety during dental procedures", "Assistance for patients with a strong gag reflex that may otherwise impede treatment", "Increased comfort and cooperation for patients requiring extensive dental work", "Enhanced dental experience for individuals with special needs, such as those with general anxiety disorder or autism", "Efficient completion of lengthy, surgical, or invasive dental procedures", "Reduced need for multiple dental visits, as the dentist can work more efficiently while the patient is sedated"].map(item => <ListItem key={item} style={{ lineHeight: 1.8 }}>
                                                    <ListItemIcon>
                                                        <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem" }} className='circleIcon' />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>)
                                            }
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </section>

            <section className="py-4 my-4" >
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={9} className="mx-auto">
                            <SectionalHeading variant="h2" title="Putting off Dental Treatments" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />

                            <Box sx={{ padding: { xs: 2, md: 0 }, marginTop: { md: 2, xs: 2 }, width: '100%' }}>
                                <Typography variant="p" gutterBottom style={{ fontSize: "1rem !important", lineHeight: "1.4 !important" }}>Delaying or avoiding necessary dental care due to fear or anxiety can have serious consequences for an individual's oral health. When dental issues are left untreated, they can quickly escalate into more complex and severe problems that may require invasive procedures to resolve. Some potential consequences of postponing dental treatments include:
                                </Typography>
                                <List>
                                    {
                                        ["Worsening of existing dental problems, such as cavities progressing into infections that spread to the root of the tooth",
                                            "Increased pain and discomfort as untreated dental issues become more severe",
                                            " Higher treatment costs associated with more extensive and complex procedures needed to address advanced dental problems",
                                            " Elevated risk of infection spreading beyond the mouth and affecting other parts of the body",
                                            "Potential loss of teeth due to untreated gum disease or extensive tooth decay",
                                            "Negative impact on overall health, as poor oral health has been linked to various systemic conditions, such as heart disease and diabetes",
                                        ].map(item => <ListItem key={item} style={{ lineHeight: "1.8 !important" }}>
                                            <ListItemIcon>
                                                <CircleIcon style={{ color: "#117295", fontSize: "12px", marginTop: "0.5rem" }} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>)
                                    }
                                </List>
                                <Typography className="para mt-2">
                                    Seeking prompt dental care is essential for maintaining good oral health and preventing the development of more serious dental and general health issues. For individuals who experience severe dental anxiety or phobia, sleep dentistry can provide a safe and comfortable way to access necessary treatments, enabling them to prioritize their oral health without the emotional distress that may have previously prevented them from seeking care.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default SleepDentistry
