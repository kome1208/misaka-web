export default function Screenshot({ file, type }) {
    return (
    <div className="flex justify-center items-center relative rounded-xl w-[15.85rem] h-[34.4rem] bg-black overflow-hidden">
        {
            type?.startsWith("video") ?
            <video controls className="w-full h-auto">
                <source src={file} type={type} />
            </video> :
            <img src={file} alt="screenshot" className="object-contain" />
        }
    </div>
    );
}