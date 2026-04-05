export interface Album {
    id: number;
    title: string;
    images: { id: number; imageUrl: string }[];
}

export const mockAlbums: Album[] = [
    {
        id: 1,
        title: "Annual Convention 1.0",
        images: [
            { id: 101, imageUrl: "https://lh3.googleusercontent.com/d/19zr63Nkdhc7Kjx_-HXwyyp6EWy3khN6H=s1369-no" },
            { id: 102, imageUrl: "https://lh3.googleusercontent.com/d/1GmZTq7npKAQ3pAkPinzJRyGSrfNZT1Hh=s1369-no" },
            { id: 103, imageUrl: "https://lh3.googleusercontent.com/d/1ikJ6Y9u3ypgcBcaFHIQ1ktsUg4CjH2OM=s1369-no" },
            { id: 104, imageUrl: "https://lh3.googleusercontent.com/d/1JzRNPxBC3JEGJmF_LgiBTAosM3wxNlRm=s1369-no" },
            { id: 105, imageUrl: "https://lh3.googleusercontent.com/d/1GmZTq7npKAQ3pAkPinzJRyGSrfNZT1Hh=s1369-no" },
        ]
    },
    {
        id: 2,
        title: "Tech Symposium 2023",
        images: [
            { id: 201, imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop" },
            { id: 202, imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2670&auto=format&fit=crop" },
            { id: 203, imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop" },
        ]
    },
    {
        id: 3,
        title: "Workshop Highlights",
        images: [
            { id: 301, imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop" },
            { id: 302, imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop" },
            { id: 303, imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" },
            { id: 304, imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2670&auto=format&fit=crop" },
        ]
    }
];

export async function fetchAlbums(): Promise<Album[]> {
    // Simulate network delay to demonstrate loading states
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockAlbums);
        }, 800);
    });
}
