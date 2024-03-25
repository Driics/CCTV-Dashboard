import React from "react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import style from "./style.module.css"

export function CameraCard({className,}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Card className="bg-[#151929]!">
            <CardContent className="p-4">
                <Image
                    alt="Big Image"
                    className="object-cover w-full h-64 rounded-lg"
                    height={400}
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "800/400",
                        objectFit: "cover",
                    }}
                    width={800}
                />
            </CardContent>
            <CardHeader className="p-4">
                <div className="flex items-center gap-4">
                    <div className="-mr-1">
                        <span className={style.avatar}>
                            <Image
                                alt="Logo"
                                height={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width={32}
                            />
                        </span>
                    </div>
                    <div className="min-w-0 flex flex-col items-start justify-start gap-0">
                        <p className="font-medium text-primary text-sm">Ломоносова, 16</p>
                        <p className="font-normal text-gray-900 text-sm">Тесе</p>
                    </div>
                    <a href="/dashboard" className={style.cardLink}></a>
                </div>
            </CardHeader>
        </Card>
    )
}