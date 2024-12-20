import Head from "next/head";
import React, { useEffect, useState } from "react";
import AboutNew from "../sections/Home/About/AboutNew";
import AddressNew from "../sections/Home/Address/AddressNew";
import OfferNew from "../sections/Home/Offer/OfferNew";
import ServiceSectionNew from "../sections/Home/ServiceSec/ServiceSectionNew";
import { Hero, PaymentPlan } from "../sections/sections";
import AdvantageSecNew from "../sections/Home/AdvantageSec/AdvantageSecNew";

const Home = ({ data }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Trusted Family Dentist in Carrum Downs | Carrum Downs Dental Clinic</title>
                <meta name="description" content="Experience the best dental treatment from Carrum Downs Dental Group. Our Dentist knowledge and skills will provide you all Dental Care under one roof." />
                <meta name="robots" content="index" />
            </Head>
            <Hero />
            <main style={{ backgroundColor: "#F5F5F5" }}>
                <section>
                    <ServiceSectionNew />
                </section>
                <section>
                    <AboutNew />
                </section>
                <section>
                    <AdvantageSecNew />
                </section>
                <section>
                    <OfferNew />
                </section>
                <section>
                    <PaymentPlan />
                </section>
                <section>
                    <AddressNew />
                </section>
            </main>
        </>
    );
};

export default Home;