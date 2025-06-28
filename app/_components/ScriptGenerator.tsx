"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function AIScriptGenerator() {
  const [isUser, setISUser] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productCategory: "",
      keyBenefits: "",
      targetAudience: "",
      scriptTone: "Casual",
    },
  });

  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    keyBenefits: "",
    targetAudience: "",
    scriptTone: "Casual",
  });

  const [selectedTone, setSelectedTone] = useState("Casual");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToneSelect = (tone) => {
    setSelectedTone(tone);
    setFormData((prev) => ({
      ...prev,
      scriptTone: tone,
    }));
  };

  const toneOptions = ["Casual", "Professional", "Excited", "Educational"];

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClick = () => {
    if (isUser) {
      console.log("proccess upcomming");
    } else {
      const modal = document.getElementById(
        "login_modal_button",
      ) as HTMLDialogElement | null;
      if (modal) {
        modal.showModal();
      }
    }
  };

  return (
    <div className=" section-container flex items-center justify-center p-4 py-10 md:py-14">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--text-primary)] via-[#ff3898] to-purple-900 bg-clip-text text-transparent mb-6">
            AI Script Generator
          </h1>

          <p className="text-center text-lg md:text-xl text-[#6b7280] dark:text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed mb-8">
            Our advanced AI will create custom UGC scripts tailored to your
            specific product, niche, and target audience.
          </p>
        </div>

        <section className="card py-10 md:py-16 px-4 mt-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 ">
              ✨ Discover the Power of AI Script Generation
            </h2>
            <p className="text-md md:text-lg  mb-8">
              Generate engaging, customized UGC scripts in seconds – tailored to
              your brand, product, and tone.
            </p>

            {/* Notify Button */}
            <div className="pt-2">
              <button
                onClick={handleClick}
                className="w-full group font-semibold py-4 px-2 md:px-6 rounded-xl cursor-pointer btn-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex gap-1 items-center justify-center">
                  Try the AI Script Generator
                  <span className="text-xl mt-[1px] transform transition-transform duration-2000 ease-in-out group-hover:translate-x-2">
                    <FaLongArrowAltRight />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* form section */}

     

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm" style={{ opacity: 0.75 }}>
            AI Script Generator is here – Start creating your scripts today.
          </p>
        </div>
      </div>
    </div>
  );
}
