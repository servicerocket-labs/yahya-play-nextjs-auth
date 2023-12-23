export default async function CustomPage() {

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-5xl">Custom Page!</h1>
            <p className="text-x text-center">This page is authorized using NextJS Middleware.</p>
        </div>
    );
}
