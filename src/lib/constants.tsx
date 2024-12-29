import Image from "next/image";

export const timelineAssets = {
    cogoAcademy: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/cogo-academy.png?t=2024-12-29T10%3A11%3A12.317Z",
    worldPortInfo: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/port-info.png?t=2024-12-29T12%3A10%3A09.037Z",
    notificationSystem: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/notification-system.png?t=2024-12-29T12%3A16%3A03.103Z",
    tracking: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/tracking.png?t=2024-12-29T12%3A26%3A46.195Z",
    fibr1: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/fibr-1.png?t=2024-12-29T13%3A56%3A58.928Z",
    fibr2: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/fibr-2.png?t=2024-12-29T13%3A57%3A31.327Z",
    fibr3: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/fibr-3.png?t=2024-12-29T13%3A57%3A41.668Z",
    fibr4: "https://raevmuktjsgqgxiugoro.supabase.co/storage/v1/object/public/io-bucket/fibr-4.png?t=2024-12-29T13%3A57%3A54.565Z"
}

export const cogoportExperienceCards = [
    {

        title: "Cogo Academy",
        src: timelineAssets.cogoAcademy,
        ctaText: "Visit",
        ctaLink: "https://academy.cogoport.com",
        content: (
            <ul className="list-disc pl-4 text-lg font-medium ">
                <li className="mb-2">Led a team to build a full stack application that is used for training new employess at the company.</li>
                <li className="mb-2">Has features like coding exercices with code editor and testcases, project submissions and articles. </li>
                <li className="mb-2">Has admin dashboards to control the curriculum in the applications and also give grades to the students.</li>
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
                <li className="mb-2">Curated details of top 3000+ ports in the world</li>
                <li className="mb-2">The ports are all mapped on to the map </li>
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
                <li className="mb-2">Built a centralized dashboard to manage the notifications.</li>
                <li className="mb-2">THe system is built on top of service workers. </li>
                <li className="mb-2">enhanced user engagement and thus contributing to a 60% boost in lead generation.</li>
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
                <li className="mb-2">Built the service
                    using SpringBoot and integrated the user interface with Next.js and Leaflet maps API </li>
            </ul>
        )
    },
];

export const fibrExperienceCards = [
    {
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
            <div className="">
                <Image src={timelineAssets.fibr1} width={1200} height={1200} alt="fibr1" />
            </div>
        ),
    },
    {
        id: 1,
        name: "Elon Musk",
        designation: "Senior Shitposter",
        content: (
            <div className="">
                <Image src={timelineAssets.fibr2} width={1200} height={1200} alt="fibr2" />
            </div>
        ),
    },
    {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <div className="">
                <Image src={timelineAssets.fibr3} width={1200} height={1200} alt="fibr3" />
            </div>
        ),
    },
    {
        id: 3,
        name: "Tyler Durden",
        designation: "Manager Project Mayhem",
        content: (
            <div className="">
                <Image src={timelineAssets.fibr4} width={1200} height={1200} alt="fibr4" />
            </div>
        ),
    },
];
