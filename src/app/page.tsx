"use client"

import {CameraCard} from "@/components/CameraCard";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Nav} from "@/components/Nav";
import {CctvIcon, Inbox, Settings2Icon} from "lucide-react";
import React from "react";

export default function Home() {

    return (
        <div className="flex flex-row h-full w-[350px]">
            <Nav className="border-r border-gray-alpha-400" isCollapsed={false} links={[
                {
                    title: "Главная",
                    icon: Inbox,
                    variant: "default",
                },
                {
                    title: "Настройки",
                    icon: Settings2Icon,
                    variant: "ghost",
                },
            ]}/>
            <div className="min-h-[calc(100vh-90px)] pl-4 text-sm bg-background-100 w-full">
                <main
                    className="relative auto-rows-fr grid-rows-[auto] grid-cols-[minmax(24px,1fr)_minmax(0,1200px)_minmax(24px,1fr)] grid">
                    <section
                        className="col-span-full relative auto-rows-fr grid-rows-[auto] grid-cols-[minmax(24px,1fr)_minmax(0,1200px)_minmax(24px,1fr)] grid container mx-auto py-6">
                        <div className="flex flex-initial flex-col items-stretch justify-start gap-4 md:gap-6">
                            <form action="" method="GET">
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <Input type="text" placeholder="Название"
                                           style={{"flex": "2 1", width: "auto"}}/>
                                    <Button type="submit"><CctvIcon className="size-4 mr-2"/> Добавить камеру</Button>
                                </div>
                            </form>
                            <div className="flex flex-initial flex-col items-stretch justify-start">
                                <section className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(330px,1fr))]">
                                    <CameraCard/>
                                </section>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
