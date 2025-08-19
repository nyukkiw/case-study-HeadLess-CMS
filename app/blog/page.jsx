import Link from "next/link"
import Heading from "@/components/Heading"

export default function BlogPage(){
    return (
        <>
    <Heading>blog</Heading>
        <p className="text-2xl mb-3">list of post</p>
        
                <div className="flex flex-wrap">
                    <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                            <img src="/images/20230204_082308.jpg"  class= "w-full"/>
                            <Link href="/blog/belajar-nextjs">
                                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                        <h5 className="text-lg font-bold">Belajar Next.js</h5>
                        <p className="mb-3 text-gray-800">
                            <small>
                                published <u>13.01.2022</u> by {""}
                                <a href="#">Admin</a>
                            </small>
                        </p>
                        <p className="text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio architecto autem fugit rerum reiciendis, recusandae blanditiis vero repudiandae a voluptas labore nisi vitae cum, ipsa officia ea ex expedita animi.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-wrap">
                    <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                            <img src="/images/20230204_082308.jpg"  class= "w-full"/>
                            <Link href="/blog/belajar-nextjs">
                                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                        <h5 className="text-lg font-bold">Belajar Next.js</h5>
                        <p className="mb-3 text-gray-800">
                            <small>
                                published <u>13.01.2022</u> by {""}
                                <a href="#">Admin</a>
                            </small>
                        </p>
                        <p className="text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio architecto autem fugit rerum reiciendis, recusandae blanditiis vero repudiandae a voluptas labore nisi vitae cum, ipsa officia ea ex expedita animi.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
                        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
                            <img src="/images/20230204_082308.jpg"  class= "w-full"/>
                            <Link href="/blog/belajar-nextjs">
                                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                        <h5 className="text-lg font-bold">Belajar Next.js</h5>
                        <p className="mb-3 text-gray-800">
                            <small>
                                published <u>13.01.2022</u> by {""}
                                <a href="#">Admin</a>
                            </small>
                        </p>
                        <p className="text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio architecto autem fugit rerum reiciendis, recusandae blanditiis vero repudiandae a voluptas labore nisi vitae cum, ipsa officia ea ex expedita animi.
                        </p>
                    </div>
                </div>
      


        </>
)
}


