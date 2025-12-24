"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import MaxWidthWrapper from "@/src/components/ui/MaxWidthWrapper";
import { SkillRow } from "./SkillRow";
import { PROFILE_TEXT, SKILLS_DATA } from "./constants";

const ProfileSection = () => {
    return (
        <MaxWidthWrapper>
            <section className="mt-10">
                <div className="grid gap-12 rounded-2xl bg-white p-10 lg:grid-cols-2 lg:gap-20">
                    {/* LEFT COLUMN: Bio & Image */}
                    <div className="flex flex-col gap-8">
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-lg sm:w-[80%] lg:w-full">
                            <Image
                                src="/myBaba.PNG" // Update this path
                                alt="Profile Picture"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h2 className="text-4xl font-bold text-sky-950">
                                    {PROFILE_TEXT.name}
                                </h2>
                                <p className="text-lg font-medium text-sky-800">
                                    {PROFILE_TEXT.title}
                                </p>
                            </div>
                            <p className="leading-relaxed text-neutral-600">
                                {PROFILE_TEXT.bio}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Skills & Animation */}
                    <div className="flex flex-col  gap-5">
                        <h3 className="text-2xl font-bold text-neutral-900">
                            {PROFILE_TEXT.skillsHeader}
                        </h3>

                        {/* Render the extracted SkillRows */}
                        <div className="flex flex-col mt-5 gap-8">
                            {SKILLS_DATA.map((skill, index) => (
                                <SkillRow
                                    key={skill.label}
                                    skill={skill}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Certification Card
						<div className="mt-4 flex items-center gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-6">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
								<GraduationCap size={28} />
							</div>
							<div>
								<h4 className="font-bold text-neutral-900">
									{PROFILE_TEXT.certification.title}
								</h4>
								<p className="text-sm text-neutral-500">
									{PROFILE_TEXT.certification.details}
								</p>
							</div>
						</div> */}
                    </div>
                </div>
            </section>
        </MaxWidthWrapper>
    );
};

export default ProfileSection;
