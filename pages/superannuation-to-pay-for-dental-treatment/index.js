import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { CommonHero, CommonSidebar, SectionalHeading } from '../../components/components';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import SuperBg from "../../public/superannuation/CarrumBanner1.jpg"
import Super1 from "../../public/superannuation/CarrumImage-01.jpg"
import Super2 from "../../public/superannuation/Carrum image-02.jpg"
import Link from 'next/link';

const AccessMySuper = () => {
    const [show, setShow] = useState();
    const [width, setWidth] = useState()

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const breadcrumb = [
        { id: "payment_plan_breadcrumb_1", link: null, title: "Access My Super" }
    ]

    return (
        <>
            <Head>
                <title>Access My Super | Superannuation | Carrum Downs Dental Group</title>
                <meta name="description" content='We are offering the "Access My Super" superannuation plan. In order to increase accessibility to dental treatments, the program offers a second payment option' />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={SuperBg} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} title="Access My Super" color="#ccc" />
            {
                show ?
                    <main>
                        <section>
                            <Container maxWidth="xxl">
                                <Grid container>
                                    <Grid item xs={12} md={10} className="mx-auto">
                                        <Box py={5}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} lg={8}>
                                                    <Container maxWidth="xxl">
                                                        <SectionalHeading variant="h2" title="Accessing Superannuation to Pay for Dental Treatments" color="var(--dark-blue)" align="left" />
                                                        <Box mt={1}>
                                                            <Typography className='para'>Our Carrum Downs Dental Group Clinic strives to provide patients with excellent oral and dental care. Our goal is for each patient to achieve optimal oral health and well-being.
                                                                We understand that certain dental treatments can be costly for some individuals. That's why we've collaborated with Access My Super to provide an additional payment option specifically designed with your needs in mind.
                                                            </Typography>
                                                            <SectionalHeading variant="h2" title="Can I Access My Superannuation to Pay for My Dental Procedures?" color="var(--dark-blue)" align="left" />
                                                            <Typography className='para'>In Australia, individuals can access their superannuation savings to help pay for substantial essential dental procedures, provided they supply supporting documentation to the Australian Taxation Office (ATO). The ATO may approve the early release of superannuation funds based on severe financial hardship or compassionate circumstances.
                                                                The ATO requires evidence that you are experiencing acute or ongoing dental pain and that the funds will be used to pay for necessary dental treatment to remedy this pain.
                                                            </Typography>
                                                        </Box>
                                                    </Container>
                                                    <section className='mt-md-5 mt-4 bg-light'>
                                                        <Container maxWidth="xxl" className='shadow py-3'>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12} md={4} className="d-flex justify-content-center align-items-center">
                                                                    <Image src={Super2} alt="denticare badge" />
                                                                </Grid>
                                                                <Grid item xs={12} md={8}>
                                                                    <Box>
                                                                        <SectionalHeading title="What is acute dental pain?" variant="h2" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                                                        <Typography className='para'>Acute dental pain is sudden, severe pain caused by dental problems requiring urgent treatment. The quick development or worsening of issues such as dental caries, infected gums, or abscessed teeth brings it on.
                                                                            Urgent dental intervention is necessary to alleviate acute dental pain due to an existing dental condition&apos;s swift onset or progression.
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Container>
                                                    </section>
                                                    <section className='mt-md-5 mt-4'>
                                                        <Container maxWidth="xxl">
                                                            <SectionalHeading variant="h2" title="What is chronic dental pain?" color="var(--dark-blue)" align="left" />
                                                            <Box mt={1}>
                                                                <Typography className='para'>Chronic dental pain is defined as a dental condition persisting for a minimum of three months, with a likelihood of an indefinite duration or less rapid changes.
                                                                </Typography>
                                                                <Typography className='para'>
                                                                    Individuals seeking early access to their superannuation savings for urgent or chronic dental treatment must meet specific eligibility criteria as outlined by the Australian Taxation Office (ATO):
                                                                </Typography>
                                                                <Box>
                                                                    <List className="p-0">
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Proof of financial hardship - Applicants must demonstrate no other financial means to pay for necessary dental care." />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Medically required treatment - The requested funds are for essential care, not cosmetic or elective procedures." />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Public health services are unavailable - Public health services cannot adequately provide the required dental treatment." />
                                                                        </ListItem>
                                                                    </List>
                                                                </Box>
                                                            </Box>
                                                        </Container>
                                                    </section>
                                                    <section className='mt-md-5 mt-4 bg-light'>
                                                        <Container maxWidth="xxl" className='shadow py-3'>
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12} md={4} className="d-flex justify-content-center align-items-center">
                                                                    <Image src={Super1} alt="denticare badge" />
                                                                </Grid>
                                                                <Grid item xs={12} md={8}>
                                                                    <Box>
                                                                        <SectionalHeading title="What Procedures Can I Access My Super for?" variant="h2" align={width < 600 ? 'center' : 'left'} color="var(--dark-blue)" />
                                                                        <Typography className='para'>Many patients utilize superannuation funds to pay for extensive treatments such as All-on-4 dental implants and traditional implants. Other procedures that may qualify include certain orthodontic treatments and root canals.
                                                                        </Typography>
                                                                        <Typography className='para'>
                                                                            As you apply to access your super account funds, our dental office will provide a comprehensive treatment plan as part of the required documentation.
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Container>
                                                    </section>
                                                    <section className='mt-md-5 mt-4'>
                                                        <Container maxWidth="xxl">
                                                            <SectionalHeading variant="h2" title="Who is Access My Super?" color="var(--dark-blue)" align="left" />
                                                            <Box mt={1}>
                                                                <Typography className='para'>Access My Super is a professional company that helps people access their superannuation accounts early to pay for essential dental treatments.
                                                                </Typography>
                                                                <Typography className='para'>
                                                                    The experts at <Link href="/access-my-super">Access My Super</Link> specialize in superannuation and tax law and evaluate eligibility to assist patients in utilizing their super money. They fully guarantee their services and work on a &ldquo;No Approval, No Fee&rdquo; basis.
                                                                </Typography>
                                                                <Box>
                                                                    <SectionalHeading variant="h3" title="The Benefits of Using Access My Super for Dental Costs" color="var(--dark-blue)" align="left" />
                                                                    <List className="p-0">
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Hassle-free access to superannuation money for dental health." />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Consulting with superannuation and tax specialists." />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Support throughout the entire process" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Let the professionals handle everything from application to approval" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="No-obligation initial consultation" />
                                                                        </ListItem>
                                                                        <ListItem>
                                                                            <ListItemIcon>
                                                                                <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                                                            </ListItemIcon>
                                                                            <ListItemText primary="Get funds within ten days of approval" />
                                                                        </ListItem>
                                                                    </List>
                                                                </Box>
                                                            </Box>
                                                        </Container>
                                                    </section>
                                                    <section className='mt-md-5 mt-4'>
                                                        <Container maxWidth="xxl">
                                                            <SectionalHeading variant="h2" title="Schedule an Access My Super Solution Today" color="var(--dark-blue)" align="left" />
                                                            <Box mt={1}>
                                                                <Typography className='para'>You can now confidently proceed with your preferred dental treatment to transform your smile.
                                                                </Typography>
                                                                <Typography className='para'>
                                                                    Talk to our office team in person or call us today.
                                                                </Typography>
                                                            </Box>
                                                        </Container>
                                                    </section>
                                                    <section className="mt-md-5 mt-4">
                                                        <Container maxWidth="xxl" className="p-0">
                                                            <Box>
                                                                <Box>
                                                                    <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
                                                                </Box>
                                                                <Box mt={3}>
                                                                    <div className="accordion" id="accordionExample">
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingOne">
                                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                                    Am I eligible for the Early Release of Super for dental treatments?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>To be eligible for early release of super for dental care, you first must be an Australian or New Zealander who is a permanent resident or citizen. On top of this basic qualifier, you need to be experiencing acute or chronic dental pain requiring treatment. Additionally, early release eligibility depends on not being able to afford dental treatments by other means, and the public health system cannot provide the procedures you need.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingTwo">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                    Are there any limitations on the amount of super I can withdraw?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>What amount can be withdrawn for dental treatments has no limits in place. Whatever specific superannuation amount corresponds to the full cost of your proposed dental treatments is available for early release. So there are no caps that would restrict how much you access.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingThree">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                                    What happens if I don&apos;t have enough funds in my super account to cover my proposed treatment?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>In situations where your personal super account lacks sufficient balances on its own to cover the complete cost of dental treatments, utilizing a spouse&apos;s or partner&apos;s super funds is an option. This allows you to tap into those additional funds when your own falls short of fully paying for the required care.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingFour">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                                    How long does the application process take?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>Expect your Letter of Approval in around two weeks typically. Throughout the process, Access My Super keeps you fully updated on where things stand as the application progresses.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingFive">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                                    What happens if my application is not approved?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>Access My Super has achieved a perfect approval rate to date. However, if your early release application is denied, they provide a detailed ATO explanation of why. Additionally, under their &ldquo;No Approval, No Fee&rdquo; policy, you would not incur any fees after a denial.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingSix">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                                    What will I need to access my super?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>To ultimately access superannuation money early, active MyGov and ATO online account access is mandatory. Your ATO account specifically needs to be formally linked to your MyGov account. Access My Super also supplies the necessary Dental Treatment Plan for ATO early-release applications.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="accordion-item">
                                                                            <h3 className="accordion-header" id="headingSeven">
                                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                                                    What do I need to do before my consultation?
                                                                                </button>
                                                                            </h3>
                                                                            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                                                <div className="accordion-body">
                                                                                    <p className='para'>Before consulting with Access My Super, you should contact your super fund directly. Doing so lets you confirm your current balance is enough for early release to pay for the treatments proposed. Additionally, verify with ATO and MyGov that contact information and account linkages are all set.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Box>
                                                            </Box>
                                                        </Container>
                                                    </section>
                                                </Grid>
                                                <Grid item xs={12} lg={4}>
                                                    <CommonSidebar isContactAvailable={true} isServicesAvailable={true} />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </section>
                    </main>
                    : null
            }
        </>
    )
}

export default AccessMySuper;