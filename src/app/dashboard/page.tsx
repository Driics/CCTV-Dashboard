import Image from "next/image";
import {MapPin} from "lucide-react";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VDLYoTKAuH7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div className="flex h-full text-white">
            <div className="flex flex-col w-1/2 p-4">
                <Image
                    alt="City view"
                    className="rounded-lg"
                    height="500"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                    }}
                    width="800"
                />
            </div>
            <div className="flex flex-col w-1/2 p-4 space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1a1a1d] rounded-lg">
                    <div className="flex items-center space-x-4">
                        <div>
                            <h2 className="text-lg font-bold">Статус</h2>
                            <p className="text-sm">Работает</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">IP</h2>
                        <p className="text-sm">192.168.1.1</p>
                    </div>
                </div>
                <div className="p-4 bg-[#1a1a1d] rounded-lg">
                    <div className="flex">
                        <MapPin/>
                        <h2 className="text-lg font-bold mb-2">Адрес</h2>
                    </div>
                    <p className="text-sm">г. Воронеж, ул. Московская, д. 147</p>
                </div>
                <div className="p-4 bg-[#1a1a1d] rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Ошибка</h2>
                    <p className="text-sm">WARNING: Failed to activate VS environment: Could not...</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#1a1a1d] rounded-lg">
                        <h2 className="text-lg font-bold mb-2">V(Batt)</h2>
                        <p className="text-sm">35v</p>
                    </div>
                    <div className="p-4 bg-[#1a1a1d] rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Kg(Килограммы)</h2>
                        <p className="text-sm">228kg</p>
                    </div>
                    <div className="p-4 bg-[#1a1a1d] rounded-lg">
                        <h2 className="text-lg font-bold mb-2">T(Тягенс)</h2>
                        <p className="text-sm">111T</p>
                    </div>
                    <div className="p-4 bg-[#1a1a1d] rounded-lg">
                        <h2 className="text-lg font-bold mb-2">A(Арбузы)</h2>
                        <p className="text-sm">8A</p>
                    </div>
                    <div className="p-4 bg-[#1a1a1d] rounded-lg">
                        <h2 className="text-lg font-bold mb-2">H(разы)</h2>
                        <p className="text-sm">5H</p>
                    </div>
                </div>
            </div>
        </div>
    )
}