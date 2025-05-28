import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const SectionHeading = ({ title, subtitle, link, linkHref, linkLabel }) => {
    return (
        <>
            <div className="flex w-full items-center justify-between px-5 mt-5">
                <div className="flex flex-col gap-2 w-fit">
                    <h2 className="text-lg font-medium lg:font-bold md:text-2xl lg:text-2xl flex flex-col w-fit">
                        <span>{title}</span>
                    </h2>
                    {subtitle ? (
                        <span className="text-sm text-gray-500 font-medium md:text-sm lg:text-sm flex flex-col w-fit">
                            {subtitle}
                        </span>
                    ) : (
                        ""
                    )}
                </div>
                {link ? (
                    <Link
                        href={linkHref}
                        className="flex items-center gap-2 hover:text-black text-[#6f272b] text-sm md:text-sm md:font-semibold"
                    >
                        <span className="hidden md:flex">{linkLabel}</span>
                        <ChevronDown className="md:w-[18]" />
                    </Link>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default SectionHeading;
