import { Box, CircularProgress, Container, Grid, Stack } from "@mui/material";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { CommonHero } from "../../components/components";
import GalleryBanner from '../../public/video-gallery/carrum-video-gallery-banner1.jpg'

const VideoGallery = () => {
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const observedDivRef = useRef(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    useEffect(() => {
        if (typeof window !== undefined) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [])


    useEffect(() => {
        if (!scriptLoaded) {
            const script = document.createElement("script");
            script.src = "//www.deardoctor.com/widgets/video-gallery/js/dear_doctor_video_widget.js";
            script.async = true;
            script.onload = () => {
                const Widget = new window.DearDoctorVideoWidget(); // Ensure DearDoctorVideoWidget is available globally
                Widget.Specialty = "general_dentistry";
                Widget.OmitVideos = "";
                Widget.VideoPlayButtonColor = "#9c9c9c";
                Widget.HeaderFooterBG = "#ffffff";
                Widget.HeaderFooterBorderColor = "#f3f3f3";
                Widget.VideoFrameBG = "#ffffff";
                Widget.VideoFrameBorderColor = "#f1f1f1";
                Widget.VideoFrameHoverBG = "#f2f2f2";
                Widget.VideoFrameTitleHoverColor = "#01488E";
                Widget.VideoFrameTitleColor = "#545454";
                Widget.TextColor = "#545454";
                Widget.FooterLinkColor = "#545454";
                Widget.FooterLinkHoverColor = "#01488E";
                Widget.show();
                setScriptLoaded(true);

                const videoGalleryContainer = document.getElementById("video_gallery_container");
                if (videoGalleryContainer.firstChild) {
                    videoGalleryContainer.removeChild(videoGalleryContainer.firstChild);
                }
            };
            document.body.appendChild(script);
        }
    }, [scriptLoaded]);

    // Observer for loading
    useEffect(() => {
        const checkObservedDiv = () => {
            const observedDiv = document.querySelector('.dear_doctor_video_widget_header');
            if (observedDiv) {
                const observer = new IntersectionObserver(handleIntersection, {
                    /* IntersectionObserver options */
                });
                observer.observe(observedDiv);
            } else {
                setTimeout(checkObservedDiv, 100);
            }
        };

        checkObservedDiv();
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (isLoading) { setIsLoading(false) }
            }
        });
    }

    // MutationObserver to detect popup open/close
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const popup = document.querySelector('.fancybox-opened');
            if (popup) {
                // Popup is open
                document.body.classList.add('no-scroll');
            } else {
                // Popup is closed
                document.body.classList.remove('no-scroll');
            }
        });

        // Start observing the body for changes in the child list and subtree
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

    const breadcrumb = [
        { id: "patient_referral_program_breadcrumb_1", link: null, title: "Video Gallery" }
    ]

    return (
        <>
            <Head>
                <title>Check Out Video Gallery | Carrum Downs Dental Clinic</title>
                <meta name="description" content="Explore our comprehensive video gallery at Carrum Downs Dental Clinic, showcasing informative videos on dental treatments tips, patient testimonials." />
                <meta name="robots" content="index" />
            </Head>
            <CommonHero bg={GalleryBanner} breadcrumb={breadcrumb} align={width < 600 ? 'center' : 'left'} color="#fff" title="Video Gallery" />

            <section>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5} id="video_gallery_container"  >
                                <div id="dear_doctor_video_widget">
                                    <div id="dear_doctor_video_widget_video_container" ref={observedDivRef} />
                                </div>
                            </Box>
                            {isLoading && <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} py={8}>
                                <CircularProgress />
                            </Stack>}
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default VideoGallery;

