import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { SectionalHeading } from '../components'

const FaqVeneers = () => {
  return (
    <>
      <Container>
        <Box>
          <Box>
            <SectionalHeading variant="h2" color="var(--dark-blue)" title="Frequently Asked Questions (FAQs)" align="center" />
            <Typography className='para text-center veneer-font-color mt-4' style={{lineHeight:1.6, fontWeight:"bold"}}>Below are some of our most frequently asked questions regarding our porcelain veneers. If you have a different question, please don't hesitate to get in touch with our team.</Typography>
          </Box>
          <Box mt={3}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    ARE PORCELAIN VENEERS WHAT I NEED?
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="para">A trial smile is precisely that – a chance for you to experience your new smile in real life, using temporary veneers. If you have any feedback or require changes, this allows us the opportunity to refine the color, shape, texture, and thickness before the final placement of your porcelain veneers.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    HOW STRONG ARE VENEERS AND HOW LONG DO THEY LAST?
                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="para">Porcelain veneers are exceptionally strong and durable. With proper care and maintenance, they can last for many years, typically between 10 to 15 years or even longer. The longevity of your veneers depends on factors such as the quality of the veneers, the skill of the dentist, your oral hygiene habits, and avoiding habits like teeth grinding or biting on hard objects.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    WHY DO PEOPLE CHOOSE PORCELAIN VENEERS?
                  </button>
                </h3>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="para">People choose porcelain veneers for various reasons, including cosmetic enhancement, stain resistance, durability, versatility, and minimal tooth preparation. Veneers can dramatically improve the appearance of teeth, providing a beautiful, natural-looking smile while addressing concerns such as discoloration, minor misalignments, and shape issues.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    HOW MUCH DO PORCELAIN VENEERS COST?
                  </button>
                </h3>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="para">The cost of porcelain veneers can vary based on several factors, including the location of the dental practice, the experience and expertise of the dentist, and the number of veneers required. On average, the cost for a single veneer can range from $900 to $2,500, while a complete smile makeover involving multiple veneers can range from $10,000 to $25,000 or more.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    HOW LONG DOES THE DENTAL VENEERS PROCEDURE TAKE?
                  </button>
                </h3>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="para">The porcelain veneer procedure typically requires two or more visits to the dental clinic. The process includes an initial consultation, X-rays and digital smile design, shade selection, temporary veneers (if needed), permanent veneer placement, aftercare instructions, and regular dental check-ups. The entire process can take anywhere from two to four weeks, depending on the number of veneers required and the complexity of the case.</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default FaqVeneers;
