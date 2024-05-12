import {Button} from "@/components/ui/button";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c7VqqBXzEYQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
        <div key="1" className="flex flex-col items-center justify-center h-screen">
            <div className="bg-white dark:bg-[#222] shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-white text-center">Загрузить видео с переносного
                    комплекса</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-[#a1a1a1] font-medium mb-2" htmlFor="file">
                            Выберите файл
                        </label>
                        <input
                            className="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-12 flex items-center justify-center"
                            type="file"
                        />
                    </div>
                    <Button type="submit" className={"w-full"}>Подтвердить</Button>
                </form>
            </div>
        </div>
    )
}