import Image from "next/image";

export const timelineAssets = {
    cogoAcademy: "/images/cogo-academy.png",
    worldPortInfo: "/images/port-info.png",
    notificationSystem: "/images/notification-system.png",
    tracking: "/images/tracking.png",
    fibr1: "/images/fibr-1.png",
    fibr2: "/images/fibr-2.png",
    fibr3: "/images/fibr-3.png",
    fibr4: "/images/fibr-4.png",
};

export const cogoportExperienceCards = [
    {

        title: "Cogo Academy",
        src: timelineAssets.cogoAcademy,
        ctaText: "Visit",
        ctaLink: "https://academy.cogoport.com",
        content: (
            <ul className="list-disc pl-4 text-lg font-medium ">
                <li className="mb-2">Led a 3-member team through the design and development phases of Cogo Academy.</li>
                <li className="mb-2">Implemented key features such as online tests, challenge submissions, coursework and onboarding processes resulting in an outstanding 80% reduction in associated costs for the company</li>
                <li className="mb-2">Built admin dashboards to control the curriculum in the application and give grades to the students.</li>
            </ul>
        )
    },
    {
        title: "World Port Info",
        src: timelineAssets.worldPortInfo,
        ctaText: "Visit",
        ctaLink: "https://www.cogoport.com/en-IN/knowledge-center/resources/world-port-info/india",
        content: (
            <ul className="list-disc pl-4 text-lg font-medium ">
                <li className="mb-2">Single-Handedly developed a feature World Port Info using Leaflet maps</li>
                <li className="mb-2">Curated details of top 3000+ ports in the world</li>
                <li className="mb-2">Enhanced the lead generation by 13%</li>
            </ul>
        )
    },
    {
        title: "Notification System",
        src: timelineAssets.notificationSystem,
        ctaText: "Visit",
        ctaLink: "https://cms.cogoport.com/login",
        content: (
            <ul className="list-disc pl-4 text-lg font-medium ">
                <li className="mb-2">Engineered a platform-independent Notification System</li>
                <li className="mb-2">A centralized notification creation/management tool used by multiple products at cogoport.</li>
                <li className="mb-2">Enhanced user engagement and thus contributing to a 60% boost in lead generation.</li>
            </ul>
        )
    },
    {
        title: "Container Tracking",
        src: timelineAssets.tracking,
        ctaText: "Visit",
        ctaLink: "https://www.cogoport.com/en-IN/tools/tracking",
        content: (
            <ul className="list-disc pl-4 text-lg font-medium ">
                <li className="mb-2">Revamped a feature Container Tracking to track the containers across the world in real-time.</li>
                <li className="mb-2">More than 90,000 businesses around the world use Container Tracking by Cogoport.</li>
            </ul>
        )
    },
];

export const fibrExperienceCards = [
    {
        id: 0,
        content: (
            <div className="">
                <Image src={timelineAssets.fibr1} width={1200} height={1200} alt="fibr1" />
            </div>
        ),
    },
    {
        id: 1,
        content: (
            <div className="">
                <Image src={timelineAssets.fibr2} width={1200} height={1200} alt="fibr2" />
            </div>
        ),
    },
    {
        id: 2,
        content: (
            <div className="">
                <Image src={timelineAssets.fibr3} width={1200} height={1200} alt="fibr3" />
            </div>
        ),
    },
    {
        id: 3,
        content: (
            <div className="">
                <Image src={timelineAssets.fibr4} width={1200} height={1200} alt="fibr4" />
            </div>
        ),
    },
];
