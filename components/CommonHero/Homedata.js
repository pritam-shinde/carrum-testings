const navbarMenu = [
  {
    label: "Home",
    href: "/",
    dropdown: null,
  },
  {
    label: "About Us",
    href: "/about-us/",
    dropdown: [
      { label: "Patient Referral Program", href: "/referral-program/" },
      { label: "Payment Plan", href: "/payment-plan/" },
      { label: "New Technologies", href: "/new-technologies/" },
      { label: "Offer", href: "/offer/" },
      { label: "Meet Our Team", href: "/meet-our-team/" },
      {
        label: "Access My Super",
        href: "/superannuation-to-pay-for-dental-treatment/",
      },
      {
        label: "Covid-19",
        href: "/how-we-can-reduce-the-spread-of-corona-virus-together/",
      },
    ],
  },
  {
    label: "Services",
    href: "/service/",
    dropdown: [
      { label: "Missing Teeth", href: "/service/missing-teeth/" },
      { label: "Wisdom Teeth Removal", href: "/service/wisdom-teeth-removal/" },
      { label: "Child Benefit", href: "/service/child-benefit/" },
      { label: "Dental Implants", href: "/service/dental-implants/" },
      { label: "Denture", href: "/service/dentures/" },
      { label: "Teeth Whitening", href: "/service/teeth-whitening/" },
      { label: "Crown And Bridges", href: "/service/crowns-and-bridge/" },
      { label: "Veneers", href: "/service/veneers/" },
      {
        label: "Invisalign",
        href: "/service/invisalign/",
        subDropdown: [
          {
            label: "Invisalign Open Day",
            href: "/service/invisalign-open-day/",
          },
        ],
      },
      { label: "Root Canal", href: "/service/root-canal/" },
      { label: "Teeth Cleaning", href: "/service/teeth-cleaning/" },
      { label: "Dental Emergency", href: "/service/dental-emergency/" },
      { label: "Tooth Filling", href: "/service/tooth-fillings/" },
      { label: "Smile Design", href: "/service/smile-design/" },
      { label: "Digital Dentures", href: "/service/digital-dentures/" },
      {
        label: "Implant Supported Denture",
        href: "/service/implant-supported-denture/",
      },
      { label: "Denture Technology", href: "/service/denture-technology/" },
      { label: "Sleep Dentistry", href: "/service/sleep-dentistry/" },
    ],
  },
  {
    label: "Dental Problems",
    href: "/dental-problems/",
    dropdown: [
      { label: "Bad Breath", href: "/dental-problems/bad-breath" },
      { label: "Bite Problems", href: "/dental-problems/bite-problems" },
      { label: "Bleeding Gums", href: "/dental-problems/bleeding-gums" },
      { label: "Bruxism", href: "/dental-problems/bruxism" },
      {
        label: "Chipped Or Cracked Tooth",
        href: "/dental-problems/chipped-or-cracked-tooth",
      },
      { label: "Crooked Teeth", href: "/dental-problems/crooked-teeth" },
      { label: "Dental Abscess", href: "/dental-problems/dental-abscess" },
      { label: "Dry Socket", href: "/dental-problems/dry-socket" },
      { label: "Gum Disease", href: "/dental-problems/gum-disease" },
      {
        label: "Knocked Out Teeth",
        href: "/dental-problems/knocked-out-tooth",
      },
      { label: "Severe Toothache", href: "/dental-problems/severe-toothache" },
      { label: "Stained Teeth", href: "/dental-problems/stained-teeth" },
      {
        label: "Teeth Sensitivity",
        href: "/dental-problems/teeth-sensitivity",
      },
      { label: "Tooth Gaps", href: "/dental-problems/tooth-gap" },
      {
        label: "Wisdom Tooth Pain",
        href: "/dental-problems/wisdom-tooth-pain",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog/",
    dropdown: [{ label: "Video Gallery", href: "/video-gallery" }],
  },
  {
    label: "Contact Us",
    href: "/contact-us/",
  },
];
export default navbarMenu;
