import One from "../../public/Veneers/1-1.png"
import Two from "../../public/Veneers/2.png"
import Three from "../../public/Veneers/3.png"
import Four from "../../public/Veneers/4.png"
import Five from "../../public/Veneers/5.png"
import Six from "../../public/Veneers/6.png"
import Seven from "../../public/Veneers/7.png"

const veneerProcessData = [
    {
        id: 1,
        title: "Initial Consultation",
        description: "During this appointment, we'll discuss your desired outcome, address any concerns, and review your medical history. The dentist will assess your teeth to determine if veneers are a suitable option for you.",
        imageUrl: One,
    },
    {
        id: 2,
        title: "X-ray & Digital Smile Design",
        description: "Capturing detailed images of your teeth and jaw structure for accurate veneer design. This will include two steps:",
        imageUrl: Two,
        list1: "Digital Smile Design",
        desc1: "Using software to preview your potential smile with veneers virtually.",
        list2: "X-rays Impressions",
        desc2: "It involves taking impressions using an x-ray to capture your teeth and jaw structure so as to make an accurate design.",
    },
    {
        id: 3,
        title: "Shade Selection ",
        description: "You'll collaborate with the dentist to choose the ideal colour and shade for your veneers, aiming for a natural and aesthetically pleasing match.",
        imageUrl: Three,
    }, {
        id: 4,
        title: "Temporary Veneers ",
        description: "Temporary veneers may be placed on your prepared teeth while the permanent ones are being fabricated in a dental lab. This allows you to adjust to the feel of veneers and protect your teeth during the process.",
        imageUrl: Four,
    }, {
        id: 5,
        title: "Veneer Placement",
        description: "The dentist will thoroughly clean and prepare the tooth surface. A special dental cement is applied, and the veneer is meticulously positioned and secured using a light source to activate the bonding agent.",
        imageUrl: Five,
    }, {
        id: 6,
        title: "Aftercare",
        description: "The dentist will provide specific instructions on maintaining your veneers, including proper brushing, flossing, and avoiding habits that could damage them.",
        imageUrl: Six,
    }, {
        id: 7,
        title: "Regular Dental Check-ups",
        description: "Scheduling regular dental cleanings and check-ups is crucial to ensure the longevity of your veneers and overall oral health.",
        imageUrl: Seven,
    },
];

export default veneerProcessData;