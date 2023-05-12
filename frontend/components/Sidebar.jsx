import FileUpload from './UpLoadFile';

export default function Sidebar() {
    return (
        <div className="relative w-[300px] h-full bg-black text-green-400 float-right text-center pt-10">
            <h1 className="text-xl mb-5">Sidebar</h1>
            <div className="mt-5">
                <FileUpload />
            </div>
        </div>
    );
}
