"use client"

import {CameraCard} from "@/components/CameraCard";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Nav} from "@/components/Nav";
import {File, Inbox} from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-85px)] text-sm bg-background-100">
            <Nav isCollapsed={false} links={[{
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
            },
                {
                    title: "Drafts",
                    label: "9",
                    icon: File,
                    variant: "ghost",
                }]}/>
            <main
                className="relative auto-rows-fr grid-rows-[auto] grid-cols-[minmax(24px,1fr)_minmax(0,1200px)_minmax(24px,1fr)] grid">
                <section
                    className="col-span-full relative auto-rows-fr grid-rows-[auto] grid-cols-[minmax(24px,1fr)_minmax(0,1200px)_minmax(24px,1fr)] grid container mx-auto py-6">
                    <div className="flex flex-initial flex-col items-stretch justify-start gap-4 md:gap-6">
                        <form action="" method="GET">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="text" placeholder="Название" style={{"flex": "2 1", width: "auto"}}/>
                                <Button type="submit">Добавить</Button>
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
    );
}
