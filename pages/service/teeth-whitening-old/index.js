import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BookAndCall, CommonHero, CommonSidebar, InterestFree, SectionalHeading, TermsNCondition } from '../../../components/components'
import AgingAfter from '../../../public/TeethWhitening/aging-after.jpg'
import AgingBefore from '../../../public/TeethWhitening/aging-before.jpg'
import Banner from '../../../public/TeethWhitening/Banner.jpg'
import GeneticAfter from '../../../public/TeethWhitening/genetic-after.jpg'
import GeneticBefore from '../../../public/TeethWhitening/genetic-before.jpg'
import PolaTeethWhitening from '../../../public/TeethWhitening/pola-teeth-whitening.png'
import Poladay from '../../../public/TeethWhitening/poladay.jpg'
import Polanight from '../../../public/TeethWhitening/polanight.jpg'
import SmokingAfter from '../../../public/TeethWhitening/smoking-after.jpg'
import SmokingBefore from '../../../public/TeethWhitening/smoking-before.jpg'
import ZoomTeethWhitening from '../../../public/TeethWhitening/zoom.jpeg'

const TeethWhitening = ({ data }) => {
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
    { id: "TeethWhitening_breadcrumb_1", link: "/service/", title: "Service" },
    { id: "TeethWhitening_breadcrumb_2", link: null, title: 'Teeth Whitening in Carrum Downs' }
  ]

  return (
    <>
      <Head>
        <title>Teeth Whitening in Carrum Downs | Carrum Downs Dentist</title>
        <meta name="description" content="Teeth Whitening is the most effective way to restore the whiteness of your tooth. We use Pola Whitening system to remove the discoloration." />
        <meta name="robots" content="index" />
      </Head>
      <CommonHero bg={Banner} breadcrumb={breadcrumb} title="Teeth Whitening in Carrum Downs" align='left' color="#fff" />
      {
        show ? <>
          <main>
            <Container maxWidth="xxl">
              <Grid container>
                <Grid item xs={12} md={10} className="mx-auto">
                  <Box py={5}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} lg={8}>
                        <section>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Teeth Whitening – Whiter Brighter You" align='left' color="var(--dark-blue)" />
                            <Typography className='para'>Has your tooth enamel discoloured? Teeth Whitening is one of the most effective ways to remove the discolouration, leaving with a Whiter, Brighter and Fresher looking smile.</Typography>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4 bg-grey">
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Zoom Teeth Whitening" align='center' color="var(--dark-blue)" />
                              <Box mt={3}>
                                <Grid container spacing={3}>
                                  <Grid item xs={12} md={6}>
                                    <Image src={ZoomTeethWhitening} alt="teeth whitening" />
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    <Typography className='para'>Regular brushing and flossing are one of the best ways to keep your teeth white, bright, and healthy. However, if you feel like your smile is missing some sparkle, or is a bit yellow than it used to be, you are not alone. A bright and sparkling smile always makes a difference when it comes to your appearance. It is the very first thing people notice about you when you enter a room.</Typography>
                                  </Grid>
                                  <Grid item xs={12} className='pt-1'>
                                    <Typography className='para'>Naturally, teeth discolour from factors such as wear and tear, some habits such as drinking, smoking as well as eating certain types of foods or using certain medications. However, this does not mean you are stuck with your unsightly, discoloured teeth.</Typography>
                                    <Typography className='para'>All thanks to professional teeth whitening, you can now achieve your dream smile in a safe environment. This article takes a look at zoom teeth whitening.</Typography>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="What Is Zoom Teeth Whitening?" align='left' color="var(--dark-blue)" />
                            <Box my={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={GeneticBefore} alt="Genetic Before" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Image src={GeneticAfter} alt="Genetic After" />
                                </Grid>
                                <Grid item xs={12} className="pt-1">
                                  <Typography className='para'>Zoom teeth whitening is a form of laser treatment widely used throughout the country and across the globe. It helps in lightening the stain or discolouration of the enamel. The process uses the advanced zoom power chairside lamp and a hydrogen peroxide whitening gel that accelerates the bleaching process.</Typography>
                                  <Typography className='para'>The process is simple and non-invasive. It takes 45 minutes to one hour to complete. You can achieve 8 to 15 shades of whiter teeth with just one treatment.</Typography>
                                  <Box className='ratio ratio-16x9' mt={1}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Hro29kh8l6A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 nt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="How Does It Work?" align='left' color="var(--dark-blue)" />
                            <Box my={5}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={AgingBefore} alt="aging before" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Image src={AgingAfter} alt="aging after" />
                                </Grid>
                                <Grid item xs={12} className="pt-0">
                                  <Typography className='para'>The dentist uses a high concentration of hydrogen peroxide gel to cover your teeth enamel. When the hydrogen peroxide comes into contact with the light from the chairside lamp, it breaks down to a thin layer over the enamel. It then releases oxygen to the teeth, which helps flush out all the teeth discolouration.</Typography>
                                  <Typography className='para'>Before taking the procedure, the dentist will walk you through all about the whole procedure and what to expect. During the consultation, you can let the dentist know about your goals. You will also discuss other teeth whitening options so that you can make an informed decision.</Typography>
                                  <Typography className='para'>After the procedure, the dentist will let you know some aftercare treatment you should follow to make sure that the results last for a long time. Of course, it is vital to know that you cannot eat or drink anything immediately after the procedure. It is also discouraged to continue with habits such as smoking. You might experience some sensitivity after the treatment, but your dentist will discuss some remedies for that.</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 nt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="How Does It Work?" align='left' color="var(--dark-blue)" />
                            <Box my={5}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={6}>
                                  <Image src={SmokingBefore} alt="smoking before" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Image src={SmokingAfter} alt="smoking after" />
                                </Grid>
                                <Grid item xs={12} className="pt-0">
                                  <Typography className='para'>Zoom teeth whitening is an easy and quick treatment. In less than an hour, you’ll have achieved your teeth whitening goals. This is a huge advantage over other methods such as at-home whitening that requires you to diligently use the treatment for a few weeks.</Typography>
                                  <Typography className='para'>It is also a type of treatment that achieves high-quality results. With this treatment, you will achieve eight to fifteen shades in one session. You can schedule a second meeting with your dentist to achieve even a brighter smile.</Typography>
                                  <Typography className='para'>The process is also safe, non-invasive, and painless. Zoom teeth whitening technology is considered one of the safest and fastest dental procedures you can undergo. The dentist will add special protection to keep your lips, cheeks, and gums safe during the procedure.</Typography>
                                </Grid>
                              </Grid>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4 bg-grey">
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <SectionalHeading variant="h2" title="Visit Us Today Professional Teeth Whitening" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>If your teeth are stained or discoloured, and you feel like it is time to take action, our dentist is here to help. Our dentist is well trained and has years of experience to offer such treatment. We will whiten your teeth, boost your aesthetics and enhance your confidence.</Typography>
                              <Box mt={3}>
                                <BookAndCall appointment={true} call={true} />
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <Container maxWidth="xxl" className='p-0'>
                            <SectionalHeading variant="h2" title="Pola Whitening – the Quickest Way to Whiten Your Teeth" align='left' color="var(--dark-blue)" />
                            <Typography className='para'>Our take home Pola Whitening System normally $400* for $299*</Typography>
                            <Typography className='para'>At Carrum Downs Dental Group at Shop T5, 100 Hall Road we use Pola Teeth Whitening system which will restore the natural whiteness of your tooth easily, comfortably and with utmost convenience. Treatment is pain free and very often results can be seen from the first application.</Typography>
                            <Typography className='para'>Pola tooth whitening is available for use in the surgery or as a handy ‘home-use’ kit.</Typography>
                            <Typography className='para'>Our in-surgery whitening is powerful and will give visible results in a much quicker time. In fact, Pola Office + is one of the world’s fastest whitening treatments, dramatically lightening the enamel in as little as 30 minutes. Often, a UV light is not even necessary to help speed up the process.</Typography>
                            <Typography className='para'>This type of treatment is ideal for those with heavy staining or who would prefer the convenience of one appointment rather than having to take a kit home with them.</Typography>
                            <Typography className='para'>With Pola Office we can fully protect your gums before treatment with a flexible and easily placed barrier. One thin layer of bleach is all that is required for noticeable results. Thanks to the composition of the gel it stays in place on your teeth for maximum effect. As an added bonus, the unique whitening bleach contains potassium nitrate, which actually helps to prevent increased tooth sensitivity, a common side-effect in many other types of treatment.</Typography>
                            <Box>
                              <Grid container spacing={5}>
                                <Grid item xs={12} md={8}>
                                  <Typography className='para'>If you would prefer a home kit, for use at your own convenience, we can provide Pola day or Pola night. Using impressions of your teeth we will manufacture special trays for the top and bottom teeth. Full instructions will be given when you take your product away from the practice. Simply wear your trays with the bleaching gel for between 15 and 30 minutes a day.</Typography>
                                  <Typography className='para'>It can take up to 2 weeks for full effect but many patients can see a difference within just a few days.</Typography>
                                  <Typography className='para'>The pleasant tasting spearmint flavoured gels contain a unique formula which helps to hydrate, soothe and condition your tooth enamel, decreasing sensitivity and plaque build-up. In fact, it’s highly likely your teeth will feel healthier and stronger after treatment.</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                  <Image src={PolaTeethWhitening} alt="pola teeth whitenng" />
                                </Grid>
                              </Grid>
                            </Box>
                            <Typography className='para'>Thanks to the thickness of the gel you can be assured that every tooth is fully and evenly covered.</Typography>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className='p-0'>
                            <Box p={3}>
                              <Box>
                                <SectionalHeading variant="h2" title="The Safety of Tooth Whitening" align='left' color="var(--dark-blue)" />
                                <Typography className='para'>Tooth whitening is highly safe and suitable for use on the majority of people. Provided it is carried out by a registered, qualified and experienced dentist the risks of damage are minimal. We would always advise that you avoid whitening kits that can be bought online, as these are usually unregulated and therefore illegal. Often it is impossible to tell what is contained in such kits, meaning they could cause serious damage to your teeth and gums.</Typography>
                              </Box>
                              <Box>
                                <SectionalHeading variant="h2" title="What Sort of Whitening Treatment Do I Need?" align='left' color="var(--dark-blue)" />
                                <Typography className='para'>Everyone is different and we can advise you following a consultation and full check of your teeth.</Typography>
                                <Typography className='para'>Bear in mind that manufactured teeth or restorations such as crowns, fillings, dentures and bridges can’t be whitened. They can however be replaced (at an additional cost) to match the shade of your new teeth.</Typography>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className="mt-md-5 mt-4">
                          <Container maxWidth="xxl">
                            <SectionalHeading variant="h2" title="How to Use Take Home Pola Kits?" align='left' color="var(--dark-blue)" />
                            <Box mt={1}>
                              <SectionalHeading variant="h3" title="POLADAY" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>Whiter smile! Our Dentist will make custom fitted trays to allow you to whiten your smile at home during the day. You can wear the trays with Pola Day inside for as little as 30 minutes a day (depending on the concentration your dentist supplies you with). You repeat this procedure for about 5 – 10 days depending on requirements. Whiten your teeth before you go to work, cleaning the house or whilst cooking for the family!</Typography>
                              <Box mt={1}>
                                <Image src={Poladay} alt="poladay" />
                              </Box>
                            </Box>
                            <Box mt={3}>
                              <SectionalHeading variant="h3" title="POLANIGHT" align='left' color="var(--dark-blue)" />
                              <Typography className='para'>Our Dentist will make custom fitted trays to allow you to whiten your smile at home whilst you sleep. You can wear the trays with Pola Night inside overnight or for as little as 40 minutes a day (depending on the concentration your doctor supplies you with). You repeat this procedure for about 5 – 10 nights depending on requirements</Typography>
                              <Box mt={1}>
                                <Image src={Polanight} alt="polanight" />
                              </Box>
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
                                        How much does teeth whitening cost?
                                      </button>
                                    </h3>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Teeth-whitening cost varies depending on budget and preference. At-home teeth whitening kits are the best alternative to brighten the smile, but this may take more time. For speedy whitening results, you can try the professional in-office whitening option, which is more expensive but highly effective.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is teeth whitening safe?
                                      </button>
                                    </h3>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>A majority of people can safely use teeth whitening, provided an experienced dentist is involved. You could also use at-home kits, but you should also be careful to avoid unregulated kits that could cause severe damage to your teeth and gums.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Does baking soda whiten teeth?
                                      </button>
                                    </h3>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Baking soda is a popular ingredient in many commercial kinds of toothpaste due to its natural whitening properties. It is a safe and effective option to whiten the smile.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What to eat after teeth whitening?
                                      </button>
                                    </h3>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>In the first couple of days of having your teeth whitened, avoid highly acidic foods and those with pigments and chemicals. Try fish, chicken, yoghurt, Rice, Pasta, white cheese, leafy veggies and water. Avoid wine, coffee and teas, soft drinks, dark fruits, candy and smoking.</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFive">
                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Can grey teeth be whitened?
                                      </button>
                                    </h3>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                      <div className="accordion-body">
                                        <p className='para'>Grey teeth that are still strong can be whitened using a take-home solution or dental treatments. However, the results will be determined by the cause and extent of discoloration.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Box>
                            </Box>
                          </Container>
                        </section>
                        <section className='mt-md-5 mt-4'>
                          <InterestFree />
                          <TermsNCondition />
                        </section>
                        <section className='mt-md-5 mt-4 bg-grey'>
                          <Container maxWidth="xxl" className="p-0">
                            <Box p={2}>
                              <div className='sectional-heading1 text-center' style={{ color: "var(--dark-blue)" }} >Book an appointment with Carrum Downs Dental (100 Hall Road) on 03-9782 1200 for your wisdom tooth extraction.</div>
                              <Box mt={2} className="d-flex justify-content-center">
                                <BookAndCall appointment={true} call={true} />
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
          </main>
        </> : null
      }
    </>
  )
}
export default TeethWhitening;