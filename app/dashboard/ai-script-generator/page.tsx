"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import jsPDF from "jspdf";
import { Loading } from "@/app/_components/Loading";

const toneOptions = ["Casual", "Professional", "Excited", "Educational"];

const AIScripts = () => {
  const [selectedTone, setSelectedTone] = useState("Casual");
  const [generatedScript, setGeneratedScript] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleToneSelect = (tone) => {
    setSelectedTone(tone);
    setValue("scriptTone", tone);
  };

  const onSubmit = (data) => {
    setLoading(true);

    const {
      productName,
      productCategory,
      keyBenefits,
      targetAudience,
      scriptTone,
    } = data;

    const script = `
UGC Script for ${productName}

Tone: ${scriptTone}
Category: ${productCategory}

Target Audience:
${targetAudience}

Key Benefits:
${keyBenefits}

Hey there! Looking for something amazing? Try ${productName}. 
It's made just for ${targetAudience} and comes with awesome benefits like ${keyBenefits}.
Don't miss out — experience the difference today!

#${productCategory} #${productName}
    `.trim();

    setGeneratedScript(script);

    setLoading(false);
  };

  const downloadPDF = (text) => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save("AI_Script.pdf");
  };

  const handleBack = () => {
    setGeneratedScript("");
    reset();
    setSelectedTone("Casual");
  };

  return (
    <div className="min-h-screen section-container">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-96">
              <Loading />
              <p className="mt-[-30px] text-lg text-base-300">
                Crafting your perfect script...
              </p>
            </div>
          ) : !generatedScript ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold  mb-4">
                  AI Script Generator
                </h1>
                <p
                  className=" text-lg max-w-md mx-auto"
                  style={{ opacity: 0.9 }}
                >
                  Our advanced AI will create custom UGC scripts tailored to
                  your specific product, niche, and target audience.
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="rounded-3xl p-4 md:p-8 shadow-2xl card">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Product Name
                        </label>
                        <input
                          {...register("productName", { required: true })}
                          type="text"
                          placeholder="e.g. GlowBoost Serum"
                          className="bg-white dark:bg-black input w-full px-4 py-3 rounded-xl focus:outline-none input-lg transition-all duration-200"
                        />
                        
                        {errors.productName && (
                          <span className="text-red-300 text-sm">Required</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Product Category
                        </label>
                        <select
                          {...register("productCategory", { required: true })}
                          className="bg-white dark:bg-black select select-lg w-full px-4 py-3 rounded-xl focus:outline-none transition-all duration-200 cursor-pointer"
                        >
                          <option disabled value="">
                            Select a category
                          </option>
                          <option value="skincare">Skincare</option>
                          <option value="makeup">Makeup</option>
                          <option value="wellness">Wellness</option>
                          <option value="fashion">Fashion</option>
                          <option value="tech">Technology</option>
                          <option value="home">Home & Living</option>
                        </select>
                        {errors.productCategory && (
                          <span className="text-red-300 text-sm">Required</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Key Benefits (up to 3)
                        </label>
                        <input
                          {...register("keyBenefits", { required: true })}
                          placeholder="e.g. Reduces fine lines, Hydrates for 24 hours"
                          className="bg-white dark:bg-black input input-lg w-full px-4 py-3 rounded-xl  focus:outline-none transition-all duration-200"
                         
                        />
                        {errors.keyBenefits && (
                          <span className="text-red-300 text-sm">Required</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Target Audience
                        </label>
                        <input
                          {...register("targetAudience", { required: true })}
                          placeholder="e.g. Women 25-45 with dry, sensitive skin"
                          className="bg-white dark:bg-black input input-lg w-full px-4 py-3 rounded-xl  focus:outline-none transition-all duration-200"
                        />
                        {errors.targetAudience && (
                          <span className="text-red-300 text-sm">Required</span>
                        )}
                      </div>
                    </div>

                    <input type="hidden" {...register("scriptTone")} />

                    <div>
                      <label className="block text-sm font-medium mb-3">
                        Script Tone
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {toneOptions.map((tone) => (
                          <button
                            key={tone}
                            type="button"
                            onClick={() => handleToneSelect(tone)}
                            className={`cursor-pointer px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                              selectedTone === tone ? "shadow-lg" : ""
                            }`}
                            style={{
                              backgroundColor:
                                selectedTone === tone
                                  ? "#ffffff"
                                  : "#BEBEBE",
                              color:
                                selectedTone === tone ? "#ec4899" : "#000000",
                              border:
                                selectedTone === tone
                                  ? "1px solid #ec4899"
                                  : "none",
                              transform:
                                selectedTone === tone
                                  ? "scale(1.05)"
                                  : "scale(1)",
                            }}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full font-semibold group cursor-pointer btn-primary px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        Generate Script
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <> 
              {/* Generated Script Section */}
              <div className="card  rounded-2xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">
                  Your Generated Script
                </h2>
                <pre className="whitespace-pre-wrap font-mono">
                  {generatedScript}
                </pre>

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <button
                    onClick={() => downloadPDF(generatedScript)}
                    className="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl"
                  >
                    Download as PDF
                  </button>
                  <button
                    onClick={handleBack}
                    className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-xl"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIScripts;
