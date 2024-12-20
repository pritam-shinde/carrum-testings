import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { CommonHero } from '../../components/components';
import Banner from '../../public/meet-our-team/meet-our-team.jpg'
import Swati from "../../public/meet-our-team/DrSwati.webp"
import Divya from "../../public/meet-our-team/DrDivya.webp"
import Chandni from "../../public/meet-our-team/DrChandni.jpeg"
import Chanrith from "../../public/meet-our-team/Chanrith.jpeg"
import Ken from "../../public/meet-our-team/ken.webp"
import Neha from "../../public/meet-our-team/neha.jpg"
import Rochelle from "../../public/meet-our-team/Rochelle1.jpg";
import smita from '../../public/meet-our-team/SmithaVincent (1).jpg'
import Ash from '../../public/meet-our-team/Dr.AshGulati.jpg'

const MeetOurTeam = () => {
  const [show, setShow] = useState(false);
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
    { id: "new_technology_breadcrumb_1", link: null, title: "Meet Our Team" }
  ]

  return (
    <>
      <Head>
        <title>Meet Our Team – Carrum Downs Dental Group</title>
        <meta name="description" content="Our dental clinic has introduced new technologies to help enhance our practice and patient education. Explore the technologies" />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Meet Our Professional Dental Team." align={width < 600 ? 'center' : 'left'} color="#fff" />
      {
        show ? <><main>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Typography className="para" >This is us – the carrumdowns dental Team.</Typography>
                  <Typography className="para" >We pride ourselves on delivering the best cosmetic and restorative dental care possible and love getting to know our patients on a personal level. More importantly, we strive to go beyond the obvious to create a great environment in which you can feel safe and welcome.</Typography>
                  <Typography className="para">We’re excited to meet you!</Typography>
                  <Box mt={3}>
                    <Grid container>
                      {
                        [
                          { id: "doc-1", docName: "Dr. Swati", image: Swati, para: ["Dr Swati is a qualified dental professional with over 15 years of experience. She is registered with the Australian Health and Practice Regulatory Authority and certified by the Australian Dental Council.Her expertise lies in performing tooth extractions, root canal treatments, crown and bridge procedures, wisdom teeth extractions, restorative fillings, gum disease management, and cosmetic procedures such as veneers and teeth whitening.Dr Swati attends workshops and dental conferences regularly to keep up with the latest techniques and procedures. She uses her knowledge to help patients make informed decisions about their oral health and how to protect their gum and teeth.Dr Swati is not all work. She enjoys spending time with family and listening to music during her free time. She speaks three languages, including English, Hindi, and Marathi."] },
                          { id: "doc-2", docName: "Dr. Divya", image: Divya, para: ["Selva graduated in 2010 with a Bachelor’s degree in Dental surgery and is certified by the Australian Dental Council. Since then, she has been a top provider of dental care and treatment.Working for several dental practices for over a decade has provided Selva with vast work experience and a massive loyal patient base.Dr Selva strives to bring the latest procedures and practices to Springvale Dental Clinic; She has also been instrumental in ensuring that the dental team is always equipped with the necessary tools and knowledge.Her interests include cosmetic dentistry, restorative dentistry and root canal treatments along with surgical wisdom teeth extractions. She has experience with complex smile makeovers, porcelain and composite veneers, teeth whitening and makes patients confident about their smile. She speaks fluent English, Hindi, Tamil and Kannada."] },
                          { id: "doc-3", docName: "Dr. Chandni", image: Chandni, para: ["Dr Chandni is your down to earth general dentist who is passionate about providing the best care for her patients. She graduated in 2013 with a Bachelor’s degree in Dental Science and is certified by the Australian Dental Council. She is a member of the Australian society of Endodontology as well.Chandni has worked in both the public and private sector. Her special interests include preventive and restorative dentistry, pedodontics and managing dental anxiety.Chandni places a strong emphasis on ensuring every patient is comfortable and relaxed while visiting the dentist. She keeps her skills updated by continuing professional development and going for different courses.Outside of Dentistry Chandni enjoys gardening and going for runs. She speaks fluent English, Punjabi and Hindi."] },
                          { id: "doc-4", docName: "Dr. Ash Gulati ", image: Ash, para: ["Dr Ashish Gulati (Ash) is a well accomplished, adept clinician with substantial experience in general Dentistry with special interests in Dental Implants, Oral surgery, Cosmetic Dentistry and Orthodontics. He has been practicing Dentistry since 15 years in Australia and Overseas.He keeps himself up to date with continuously attending regular CPD programmes in all aspect of Dentistry. He is also certified provider for Smile Styler/Clear Aligners.Dr Ash places immense emphasis on evidence based high quality dentistry, with his scientific background; an artistic eye and extensive experience he brings the highest quality of personalize care to each of his patients. His approach is caring, gentle and is highly efficient. He strives to make dental and surgical treatment as special and pleasant as it can be.In his free time he loves to spend his time with his family, two kids and play soccer."] },
                          { id: "doc-5", docName: "Dr. Smitha", image: smita, para: ["Dr. Smitha is a general dentist registered under the Australian Health Practitioner Regulation Agency. She has over 10 years clinical experience in dentistry. She loves all aspects of dentistry and thrives on providing exceptional care to all her patients. In her spare time, she enjoys reading and spending time with family and friends.", "Dr. Smitha is fluent in English, Hindi, and Kannada."] },

                          { id: "doc-6", docName: "Dr. Neha Sharma", image: Neha, para: ["Dr Neha Sharma is a qualified dental professional certified by the AUSTRALIAN DENTAL COUNCIL and registered with the AUSTRALIAN HEALTH AND PRACTICE REGULATORY AUTHORITY.   With her years of experience, she understands dental phobias and fears. Therefore, she takes special interest in helping patients overcome their dental anxiety by focusing on their specific individual needs. She always attempts her best to ensure each patient has a calm, relaxing and pain free dental experience. She loves to educate and help patients achieve excellent oral health in a relaxed atmosphere and make positive changes in their life style to achieve optimal oral hygiene. She regularly attends further dental educational programmes in Australia as a part of her continued efforts to provide the best care to her patients. She is a member of Australian Dental Association. She enjoys all aspects of general dentistry with special interest in Implants, Cosmetic dentistry including Veneers and Teeth Whitening, Preventive dentistry, Restorative dentistry and Crown and bridges. When she is not creating beautiful smiles, she likes to spend time with her kids. She loves shopping, watching movies and travelling."] },
                          
                          { id: "doc-7", docName: "Dr. Rochelle", image: Rochelle, para: ["Dr Rochelle obtained her Bachelor of Dental Surgery from James Cook University. After growing up in Queensland, she decided to move to Victoria to start a new chapter in her life. Outside of dentistry, she enjoys travelling, trying different cuisines (dining recommendations always welcome)and being outdoors. As a pianist, Rochelle has developed great attention to detail in providing long-lasting treatment that both looks and feels great! She is dedicated to clinical excellence and shows it by keeping up to date with the latest advancements in dentistry. Through past experience, she has especially developed an interest in treating nervous patients with compassion. Her gentle and calm approach to patient care will put you right at ease. Whilst striving to perform high quality dentistry, Rochelle’s ultimate goal is to make all her patients feel comfortable, relaxed and to have a pleasant experience at our clinic."] },
                          { id: "doc-8", docName: "Mr. Ken", image: Ken, para: ["Ken is an accredited Biofunctional Prosthetic System (BPS) dental practitioner. His specialty lies in indentures. He provides high-quality dentures and expert consultations to clients regarding denture requirements. With over 40 years of experience in the industry, Ken ensures that his patients receive dentures of durable material and the necessary knowledge to properly take care of them.  In his spare time, Ken enjoys spending time with his grandchildren at his family farm. He teaches them how to herd the cows and occasionally gives them a ride on his tractor."] },
                          { id: "doc-9", docName: "Ms. Chanrith", image: Chanrith, para: ["Ms Chanrith Hean is a female Dental Prosthetist who speaks Cambodian and Khmer (as well as English). A 2012 graduate of RMIT University, Chanrith is passionate about helping patients smile confidently with the assistance of the various dental appliances that she custom-crafts. She also uses latest in digital technology to ensure the patient gets the best treatment outcome and it includes; Digital Dentures, Snap-on-Dentures or Implant Supported Dentures; Sleep Appliances etc."] },
                        ].map(item =>
                          <Grid key={item.id} className="mt-5">
                            <Box>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={3}>
                                  <Card >
                                    <CardMedia component="img" image={item.image.src} alt="dr_img" />
                                    <CardContent>
                                      <Typography variant="h3" className="text-center">{item.docName}</Typography>
                                    </CardContent>
                                  </Card>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                  <Box>
                                    {
                                      item.para.map((para, index) => <Typography key={`${item.id}.${index}`} className="para">{para}</Typography>)
                                    }
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Grid>)
                      }
                    </Grid>
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

export default MeetOurTeam
