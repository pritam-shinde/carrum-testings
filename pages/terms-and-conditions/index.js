import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Banner from '../../public/terms-and-conditions/terms-and-conditions.jpg';
import { CommonHero, SectionalHeading } from '../../components/components'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material'

const TermsNConditions = () => {
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== undefined) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, []);

  useEffect(() => {
    setWidth[window.innerWidth]
  }, [width])

  const breadcrumb = [
    { id: "terms_and_conditions_breadcrumb_1", link: null, title: 'Terms And Conditions' }
  ]

  return (
    <>

      <Head>
        <title>Terms and Conditions | Carrum Downs Dental Group</title>
        <meta name="description" content="Go through our Terms and Conditions that unveils all the information regarding our services, prices & more. By using this site, you are agreeing to the terms of use." />
        <meta name="robots" content="noindex" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Terms And Conditions" align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box>
                    <SectionalHeading variant="h2" align="left" title="Child Dental Benefit Scheme (CDBS) – Terms and Conditions:" color="var(--dark-blue)" />
                    <Typography className='para'>Up to $1000 worth of free dental care</Typography>
                    <Typography className='para'>This offer is only valid for dental appointments made and attended before the announced set date of schedule by the Australia Department of Health</Typography>
                    <Box>
                      <List>
                        {
                          ["The offer is only available on the condition of the availability of appointments with participating practitioners.", "Service is dependent on necessity. This service will only be given to children who clinically need it.", "This offer cannot be redeemed or substituted for cash. In addition, it cannot be used together with other offers.", "Children must meet the eligibility basics for the CDBS and must be in the set age bracket (2-17 years)", "Parents should be aware that the CDBS will pay for dental procedures, including routine cleaning, filing, repairing cracked teeth, examination, and root canal treatment. However, dental procedures that are not covered include cosmetic dental procedures (missing tooth replacement), orthodontic treatment (braces to align crooked teeth), and dental procedures that require a hospital.", "Children eligible for bulk-billed dental items must meet Medicare requirements"].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className='mt-4'>
                    <SectionalHeading variant="h2" align="left" title="Dental Implant (implant, crown, and abutment) for just $3900 – Terms and Conditions" color="var(--dark-blue)" />
                    <Box>
                      <List>
                        {
                          ["This offer is only valid for dental appointments made and attended before the year-end (31st December 2024).", "Offer does not include CT Scans and radiographs performed outside our facility", "Offer is inclusive of consultation and x-rays were done at our facility in preparation for this treatment", "The promotion package includes placement of a single implant crown, single titanium screw and single dental implant abutment for one tooth only.", "A prior examination will be performed on all patients to determine treatment suitability.A dental implant is not suitable for everyone.", "The patient will be required to pay for any additional dental treatments such as tooth extraction or bone grafting separately.", "The procedure is surgically invasive, which comes with several risks. It is important to seek a second opinion before proceeding with the treatment.", "Not to be used with other offers."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className='mt-4'>
                    <SectionalHeading variant="h2" align="left" title="Dental Implant (implant, crown, and abutment) at 87$ per week – Terms and Conditions" color="var(--dark-blue)" />
                    <Box>
                      <List>
                        {
                          ["This offer is only valid for dental appointments made and attended before the year-end (31st December 2024).", "Patient will need to pay an initial deposit of $740 and the repayment is spread across 9 months.", "Total cost Includes consultation fees of 60$ that will be paid by patient on the day of consultation", "Not all customers are eligible and meet the requirements. We can confirm your eligibility on the day of consultation.", "Higher initial payment map be applicable if the customer does not meet the requirements.", "Credit provider is Openpay Pty Ltd and their Terms and Conditions are available at Openpay.com.au", "Treatment will start only after the payment plan is processed successfully", "Offer does not include CT Scans and radiographs performed outside our facility", "Offer is inclusive of consultation and x-rays were done at our facility in preparation for this treatment", "The promotion package includes placement of a single implant crown, single titanium screw and single dental implant abutment for one tooth only.", "A prior examination will be performed on all patients to determine treatment suitability. A dental implant is not suitable for everyone.", "The patient will be required to pay for any additional dental treatments such as tooth extraction or bone grafting separately.", "Not everyone is suitable for Dental Implant. Dental Implant treatment will only be provided if patient found to be suitable after examination.", "The procedure is surgically invasive, which comes with several risks. It is important to seek a second opinion before proceeding with the treatment.", "Not to be used with other offers."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className="mt-4">
                    <SectionalHeading variant="h2" align="left" title="*New Patient Offer – Scale & Clean with Full Check-up – Terms and Conditions" color="var(--dark-blue)" />
                    <Box>
                      <List>
                        {
                          ["This offer applies to New Patient dental appointments only and valid until Dec 2024", "The offer is only available on the condition of the availability of appointments with participating practitioners.", "Service is dependent on necessity. This service will only be given to patients who clinically need it.", "Independent practitioners will provide the dental services and procedures at our dental clinics.", "Xray or other Dental procedures are not included in this offer.", "Patients eligible for this offer are those who practice good oral hygiene, such as brushing twice a day, flossing, and regular dental checkups. If you require several sittings to get your teeth thoroughly cleaned, this offer will not be available for you.", "This offer cannot be redeemed or substituted for cash. In addition, it cannot be used together with other offers or Government schemes."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className="mt-4">
                    <SectionalHeading variant="h2" align="left" title="Kids Dental Offer – Terms and Conditions" color="var(--dark-blue)" />
                    <Box>
                      <List>
                        {
                          ["This offer applies to New Patient dental appointments only and valid until Dec 2024", "The offer is only available on the condition of the availability of appointments with participating practitioners.", "Service is dependent on necessity. This service will only be given to patients who clinically need it.", "Independent practitioners will provide the dental services and procedures at our dental clinics.", "Xray or other Dental procedures are not included in this offer.", "Patients eligible for this offer are those who practice good oral hygiene, such as brushing twice a day, flossing, and regular dental checkups. If you require several sittings to get your teeth thoroughly cleaned, this offer will not be available for you.", "This offer cannot be redeemed or substituted for cash. In addition, it cannot be used together with other offers or Government schemes."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: 'var(--dark-blue)' }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                  </Box>
                  <Box className="mt-4">
                    <SectionalHeading variant="h2" align="left" title="Patient Referral Program – Terms and Conditions" color="var(--dark-blue)" />
                    <Box>
                      <List>
                        {
                          ["For each successful referral a $25 credit will be given.", "Referral Credit can be used for either yourself or for a family member.", "Cannot be redeemed for cash.", "Referring patient must be current active patient in our clinic.", "Referred patient to provide name of referring patient when booking in their appointment.", "Only one credit can be applied per visit.", "Terms and conditions are subject to change anytime."].map(item => <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline style={{ color: "var(--dark-blue)" }} />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>)
                        }
                      </List>
                    </Box>
                    <Box>
                      <Typography className='para'><a href="https://www.afterpay.com/en-AU/terms-of-service" target="_blank" rel="noreferrer">*Openpay terms and conditions</a></Typography>
                      <Typography className='para'><a href="https://www.opy.com/au/au-terms-conditions/" target="_blank" rel="noreferrer">*Afterpay terms and conditions</a></Typography>
                    </Box>
                  </Box>
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

export default TermsNConditions