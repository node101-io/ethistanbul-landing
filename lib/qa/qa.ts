export interface QAItem {
    question: string;
    answer: string;
}

export interface QASection {
    title: string;
    items: QAItem[];
}

export const qa: QASection[] = [
    {
        title: "Event Details",
        items: [
            {
                question: "What is ETHistanbul?",
                answer: "ETHistanbul is a hackathon and conference focused on Ethereum and the broader blockchain ecosystem. It's a space where developers, innovators, and entrepreneurs come together to push the boundaries of decentralized technology, create, and collaborate. Located in Istanbul, at the intersection of East and West, we're gathering with blockchain developers from around the world to build tomorrow. Don't hesitate or wait, get your conference ticket [here](https://lu.ma/ethistanbul) and apply for the hackathon [here](https://taikai.network/ethistanbul/hackathons/ethistanbul-2025?token=TMRNZ9CZIQYYQNMM) in five minutes. Görüşmek üzere!",
            },
            {
                question: "When and where is ETHistanbul taking place?",
                answer: "ETHistanbul will take place at the [Rami Library](https://ramikutuphanesi.gov.tr/tr), one of Istanbul's first modern Ottoman-era buildings, from September 5th to 7th. ETHIstanbul isn't just a hackathon; it's also a conference. The ETHIstanbul Conference will take place on Friday, September 5th, hosting over eight hundred participants. On Saturday and Sunday, September 6th and 7th, we'll bring together hundreds of developers for the ETHIstanbul Hackathon. Hurry up and get your conference ticket [here](https://lu.ma/ethistanbul) and apply for the hackathon [here](https://taikai.network/ethistanbul/hackathons/ethistanbul-2025?token=TMRNZ9CZIQYYQNMM). See you soon.",
            },
        ],
    },
    {
        title: "Participation & Application",
        items: [
            {
                question: "Who can participate?",
                answer: "Anyone passionate about blockchain is welcome to join the ETHIstanbul Conference! Whether you're a developer, designer, or simply curious about Ethereum, we welcome your applications. No previous experience? No problem; the conference has been designed with flows suitable for all levels.\n\nThe ETHIstanbul Hackathon is open to hackers of all skill levels! Don't worry if you're new to blockchain; you'll find plenty of support from mentors and other hackers.",
            },
            {
                question: "How can I apply to participate?",
                answer: "Get your conference ticket [here](https://lu.ma/ethistanbul) and apply for a hackathon [here](https://taikai.network/ethistanbul/hackathons/ethistanbul-2025?token=TMRNZ9CZIQYYQNMM). We review applications regularly, so be sure to apply early to increase your chances of acceptance.\n\nThe ETHIstanbul Conference will take place on Friday, September 5th, hosting over 800 participants. On Saturday and Sunday, September 6th and 7th, we'll bring together hundreds of developers for the ETHIstanbul Hackathon. Hurry up and get your conference ticket here and apply for the hackathon here. See you soon.",
            },
            {
                question: "Can I apply as a team to the hackathon?",
                answer: "Absolutely! You can apply solo or as a team. If you don't have a team, don't worry. We'll have a team formation session at the start of the hackathon.",
            },
        ],
    },
    {
        title: "Costs & Benefits",
        items: [
            {
                question: "How much does it cost to attend?",
                answer: "ETHistanbul is completely free for accepted students and hackers. We're waiting for you with meals, Wi-Fi, and even some great gifts! But of course, we're not just for students or hackers; you can purchase various ticket types for the conference day. Get your ticket now and apply! For the conference ticket click [here](https://lu.ma/ethistanbul), and apply for the hackathon [here](https://taikai.network/ethistanbul/hackathons/ethistanbul-2025?token=TMRNZ9CZIQYYQNMM).",
            },
            {
                question: "Are there prizes?",
                answer: "Yes! We'll have a bounty pool supported by leading protocols and projects. The amount of bounties distributed is increasing daily! Scroll up to check out our sponsors. Follow us on [X](https://x.com/ETHIstanbul_io) to stay informed about new bounties.",
            },
            {
                question: "Will food and drinks be provided?",
                answer: "Yes! During ETHIstanbul, food, drinks, and snacks will be available throughout the event to keep you energized and focused. Delicious Turkish foods will be your accompaniment as you wish.",
            },
            {
                question: "Do I need to bring my own equipment?",
                answer: "Yes, please bring your own laptop and any equipment you need for hacking. We'll have Wi-Fi and power outlets available, but make sure your devices are fully charged!",
            },
        ],
    },
    {
        title: "Experience & Networking",
        items: [
            {
                question: "Can I attend just as a spectator?",
                answer: "ETHistanbul Hackathon, which will be held on 6-7 September, is primarily for builders and participants. However, the demo day and final presentations will be open to the public, stay tuned for more details!",
            },
            {
                question: "Can I work on my project after hours?",
                answer: "Absolutely! ETHistanbul is a 48-hour hackathon, so you're welcome to work on your project at any time. Just remember to rest and recharge when you can! Do not miss the deadline. If you want to continue building your project after the hackathon is finished, we are here to support you in any case.",
            },
            {
                question: "Will there be networking opportunities?",
                answer: "Yes, ETHistanbul is a fantastic opportunity to meet fellow developers, entrepreneurs, and industry leaders. We'll have dedicated networking sessions throughout the event to help you connect. We especially recommend that all attendees spend some time around the booths during the ETHIstanbul Hackathon.",
            },
            {
                question: "How can I become a partner?",
                answer: "We'd love to have you on board! Reach out to us via this form for partnership opportunities. Here are all the forms;\n\n- [Speaker Applications](https://forms.gle/WZP2XJYB7eYtGH27A)\n- [Partnership Applications](https://forms.gle/ggqv6H2uTE96PeiUA)\n- [Mentor Applications](https://forms.gle/9dyq2hU5S8mjyb7Q6)\n- [Judge Applications](https://forms.gle/wScryQRSKbwWsNhCA)\n- [Volunteer Applications](https://forms.gle/XTHDc5XWFyhTAJgA9)",
            },
        ],
    },
];
