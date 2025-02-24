'use client';

export default function Page({ params }: { params: { room: string } }) {
    const { room } = params;

    return (
        <div>
            <h1>{room}</h1>
        </div>
    );
}