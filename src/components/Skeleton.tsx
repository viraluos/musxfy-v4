export default function Skeleton() {
    return (
        <div
            className={`w-full h-full bg-gradient-to-br from-indigo-600 to-green-600 animate-skeleton`}
            style={{ backgroundSize: "200% 200%" }}
        />
    );
}
