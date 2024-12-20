import { CheckCircleOutline } from '@mui/icons-material';
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'; 
import { SectionalHeading } from '../components';
import { PaymentPlan } from '../../sections/sections';

const AccessMySuperPage = () => {
    return (
        <>
            <Stack spacing={2}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                        className="bg-light mx-auto"
                        style={{ marginTop: '-120px', width: '80%', borderRadius: '8px', padding: '20px', zIndex: 1 }}
                    >
                        <Typography variant='h2' className='sectional-heading4'>Do you need funding to cover the cost of your dental needs including orthodontics, implants, crowns, braces and dentures? Speak with Access My Super</Typography>

                        <h3 className='sectional-heading3'>Who is Access My Super?</h3>
                        <p className='mt-2'>
                            Access My Super is a professional company that offers individuals the option to gain early access to their super for essential dental procedures.
                        </p>
                        <p>
                            If you need a dental procedure, however aren’t able to access funds to cover the cost, <Link href="/superannuation-to-pay-for-dental-treatment">Access My Super</Link> can assess your eligibility and assist you to gain access to your super.
                        </p>
                        <p>We’re proud of our work helping individuals in need to access their super early and always go above and beyond for our clients. All our work is 100% guaranteed and we offer a ‘no approval, no fee’ policy.</p>
                        <h3 className='sectional-heading2'>Benefits of using Access My Super for your dental work</h3>
                        <List>
                            {["Quick and simple access to your superannuation for your dental health needs", "Experienced and expert superannuation and taxation specialists", "100% 'no approval no fee' guarantee", "Complete support from start to finish", "Hassle free - we take care of the entire process including lodgement and approval", "Access to funds within 10 days of approval", "Obligation-free consultation"].map(item => (
                                <ListItem key={item}>
                                    <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>

                        <h3 className='sectional-heading2'>You can access your super early for a wide range of surgical dental procedures </h3>
                        <List>
                            {["Dental implants", "Dentures", 'General dental work including fillings and extractions', "Dental check-ups and cleaning ", "Tooth restoration", "Root canal", "Dental crowns", "Periodontal treatment"].map(item => (
                                <ListItem key={item}>
                                    <ListItemIcon>
                                        <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <h3 className='sectional-heading2'>Choose the stress-free and simple way to access funds from your super to help with your dental needs</h3>
                        <p className='mt-2'>
                            Access My Super is the easy way to access the early release of your super to pay for essential dental care.
                        </p>
                        <p>
                            We understand the financial stress associated with medical treatments and procedures and offer a quick and straightforward solution to ensure you get the best care and funding within 14-days of application.
                        </p>
                        <p>Our team are superannuation and taxation experts and offer a complete solution to ensure you gain access to timely and effective health and dental care.</p>
                        <p>We’ve partnered with some of Australia’s finest health providers and medical professionals to offer a premium and effective solution for your dental and health care.</p>
                        <p>Get in touch with Access My Super today to find out more. </p>
                        <div className='d-flex justify-content-end'>
                            <Image src="/super/super.png" width={220} height={120} />
                        </div>
                    </Box>
                    <PaymentPlan />
                    <Box className="bg-light mx-auto"
                        style={{ marginTop: '40px', width: '80%', borderRadius: '8px', padding: '20px', zIndex: 1 }}>
                        <SectionalHeading variant="h2" color="var(--dark-blue)" title="Get In Touch" align="left" />
                        <form id="contactForm" method='post' action='https://formsubmit.co/d53a69bc539b96c63b2afdcb0767af8d' encType="multipart/form-data" className='px-2'>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your Email"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="Phone" className="form-label">Phone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="Phone"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <Typography className="sectional-heading2" sx={{ fontWeight: "bold", mb: 1 }}>How would you like to be contacted?</Typography>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="contactMethod"
                                            id="option1"
                                            value="callback"
                                        />
                                        <label className="form-check-label" htmlFor="option1">
                                            I would like a call back
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="contactMethod"
                                            id="email1"
                                            value="email"
                                        />
                                        <label className="form-check-label" htmlFor="email1">
                                            I would like information by email
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Stack direction={"row"} justifyContent={"end"}>
                                <button type="submit" className="btn btn-color mt-4" style={{ maxWidth: "160px", width: "100%" }}>
                                    Submit
                                </button>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </Stack>
        </>
    )
}

export default AccessMySuperPage
