import Image from "next/image";
import {MapPin} from "lucide-react";

const contentData = {
    imageLink: "/img.png",
    data: [
        {
            title: "Статус",
            value: (
                <p className="text-sm text-green-500 inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"/>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"/>
        </span>
                    Работает
                </p>
            ),
        },
        {
            title: "IP",
            value: <p className="text-sm">87.67.80.25</p>,
        },
        {
            title: "Адрес",
            value: (
                <div className="flex items-center gap-2">
                    <MapPin/>
                    <p className="text-sm">г. Воронеж, ул. Московская, д. 147</p>
                </div>
            ),
        },
        {
            title: "Тип",
            value: <p className="text-sm">Стационарная камера</p>,
        },
        {
            title: "Направленность",
            value: <p className="text-sm">Навстречу потоку</p>,
        },
        {
            title: "Направление потока",
            value: <p className="text-sm">3°</p>,
        },
        {
            title: "Длинна зоны оповещения",
            value: <p className="text-sm">15°</p>,
        },
        {
            title: "Скорость",
            value: <p className="text-sm">90 км/ч всегда</p>,
        },
    ]
};

export default function Component() {
    return (
        <div className="flex h-full text-white container mx-auto">
            <div className="flex flex-col w-1/2 p-4">
                <Image
                    alt="City view"
                    className="rounded-lg"
                    height="500"
                    src={contentData.imageLink}
                    style={{
                        aspectRatio: "800/500",
                        objectFit: "cover",
                    }}
                    width="800"
                />
            </div>
            <div className="flex flex-col w-1/2 p-4 space-y-4">
                {contentData.data.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-[#222] rounded-lg"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold">{item.title}</h2>
                            </div>
                            <div>{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}