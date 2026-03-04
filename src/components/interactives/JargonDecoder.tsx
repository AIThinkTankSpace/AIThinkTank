"use client";

import { useState } from "react";

type Mode = "scenario" | "term";

interface Term {
  id: string;
  name: string;
  definition: string;
  analogy: string;
  useCase: string;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  terms: Term[];
}

const terms: { [key: string]: Term } = {
  aiAgent: {
    id: "aiAgent",
    name: "AI Agent",
    definition:
      "An AI system that can independently perform tasks or make decisions with minimal human intervention",
    analogy:
      "Think of it like a helpful assistant who can work independently, understand goals, and take actions to achieve them without needing approval for every step",
    useCase: "Customer service representatives that handle issues without human oversight",
  },
  algorithm: {
    id: "algorithm",
    name: "Algorithm",
    definition: "A step-by-step set of instructions that a computer follows to solve a problem or complete a task",
    analogy: "Like a recipe that tells you exactly what ingredients to use and in what order to make a dish",
    useCase: "The logic behind Google's search ranking system",
  },
  api: {
    id: "api",
    name: "API",
    definition:
      "A tool that allows different software applications to communicate and share data with each other",
    analogy: "Like a waiter in a restaurant who takes your order and brings back what you requested from the kitchen",
    useCase:
      "Connecting your company's CRM system with an AI chatbot service to access customer data",
  },
  bias: {
    id: "bias",
    name: "Bias",
    definition:
      "When an AI system makes unfair or inaccurate decisions because it learned from skewed training data",
    analogy: "Like a person who always favors certain groups due to their past experiences",
    useCase: "An AI hiring tool that unfairly rejects qualified candidates from certain demographics",
  },
  chatbot: {
    id: "chatbot",
    name: "Chatbot",
    definition:
      "An AI program designed to have conversations with people and answer their questions",
    analogy: "Like a customer service representative available 24/7 to answer common questions",
    useCase: "Bank chatbots answering questions about account balances and transactions",
  },
  computerVision: {
    id: "computerVision",
    name: "Computer Vision",
    definition: "AI technology that allows computers to understand and interpret images and videos",
    analogy:
      "Like teaching a computer to 'see' and understand what's in a picture the way a human would",
    useCase: "Quality control systems in manufacturing that detect defects on assembly lines",
  },
  dataLake: {
    id: "dataLake",
    name: "Data Lake",
    definition:
      "A large storage system that holds huge amounts of data in various formats before it's organized",
    analogy:
      "Like a warehouse where you dump raw materials before processing them for use",
    useCase: "A company storing millions of customer interactions, sales records, and website logs",
  },
  deepLearning: {
    id: "deepLearning",
    name: "Deep Learning",
    definition:
      "A type of machine learning that uses artificial neural networks with many layers to learn complex patterns",
    analogy: "Like how the human brain has billions of neurons working together to understand the world",
    useCase: "Powering facial recognition in smartphone unlock systems",
  },
  fineTuning: {
    id: "fineTuning",
    name: "Fine-tuning",
    definition:
      "The process of adapting a pre-trained AI model with your company's specific data to improve performance",
    analogy:
      "Like taking a general-purpose tool and customizing it for your specific needs",
    useCase: "Training a general language model on your company's customer support conversations",
  },
  generativeAi: {
    id: "generativeAi",
    name: "Generative AI",
    definition:
      "AI systems that can create new content like text, images, or code based on patterns they've learned",
    analogy:
      "Like a creative employee who can generate new ideas and content based on what they know",
    useCase: "ChatGPT writing marketing copy or generating product descriptions",
  },
  gpt: {
    id: "gpt",
    name: "GPT",
    definition:
      "Generative Pre-trained Transformer — a type of AI model trained on large amounts of text to understand and generate language",
    analogy:
      "Like a highly trained communicator who has read millions of documents and can have intelligent conversations",
    useCase: "The technology behind ChatGPT and similar AI assistants",
  },
  hallucination: {
    id: "hallucination",
    name: "Hallucination",
    definition:
      "When an AI generates false or inaccurate information that sounds plausible but isn't true",
    analogy:
      "Like someone confidently telling you something that sounds true but is actually made up",
    useCase:
      "An AI assistant incorrectly stating a product feature that doesn't actually exist",
  },
  llm: {
    id: "llm",
    name: "LLM (Large Language Model)",
    definition: "A sophisticated AI model trained on vast amounts of text to understand and generate human language",
    analogy:
      "Like having an extremely well-read expert who understands language patterns and can communicate naturally",
    useCase: "Models like GPT-4 that power advanced AI assistants",
  },
  machineLearning: {
    id: "machineLearning",
    name: "Machine Learning",
    definition:
      "Technology that allows computers to learn from data and improve without being explicitly programmed",
    analogy:
      "Like learning to ride a bike — you improve through experience, not by memorizing instructions",
    useCase: "Email spam filters that learn to identify spam based on user feedback",
  },
  model: {
    id: "model",
    name: "Model",
    definition:
      "A mathematical representation trained on data that can make predictions or decisions about new information",
    analogy:
      "Like a blueprint or pattern that you can apply to new situations to get predictions",
    useCase: "A sales prediction model that forecasts next quarter's revenue",
  },
  nlp: {
    id: "nlp",
    name: "Natural Language Processing (NLP)",
    definition:
      "AI technology that helps computers understand, interpret, and work with human language",
    analogy: "Like teaching a computer to understand the nuances of how people actually speak",
    useCase: "Sentiment analysis tools that detect whether customer reviews are positive or negative",
  },
  neuralNetwork: {
    id: "neuralNetwork",
    name: "Neural Network",
    definition:
      "A type of AI system inspired by how the human brain works, with interconnected nodes that process information",
    analogy:
      "Like a network of brain cells (neurons) that communicate to make decisions",
    useCase: "Used in image recognition to identify objects in photos",
  },
  ocr: {
    id: "ocr",
    name: "OCR (Optical Character Recognition)",
    definition:
      "Technology that converts images of text (like scanned documents) into machine-readable text",
    analogy:
      "Like taking a photo of a handwritten letter and converting it to digital text you can search",
    useCase: "Digitizing paper invoices so they can be processed automatically",
  },
  predictiveAnalytics: {
    id: "predictiveAnalytics",
    name: "Predictive Analytics",
    definition:
      "Using historical data and machine learning to forecast future outcomes or trends",
    analogy:
      "Like using past weather patterns to predict tomorrow's weather",
    useCase: "Predicting which customers are likely to churn so you can retain them",
  },
  promptEngineering: {
    id: "promptEngineering",
    name: "Prompt Engineering",
    definition:
      "The skill of crafting the right questions or instructions to get better responses from AI models",
    analogy:
      "Like asking a colleague the right questions in the right way to get the most useful answer",
    useCase:
      "Writing specific instructions to an AI tool to generate exactly the marketing email you need",
  },
  rag: {
    id: "rag",
    name: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique that combines searching through documents with AI generation to provide accurate, sourced answers",
    analogy:
      "Like a lawyer who researches relevant cases before writing an opinion, rather than relying only on memory",
    useCase:
      "Chatbots that answer questions by finding relevant company policies and generating answers from them",
  },
  recommendationEngine: {
    id: "recommendationEngine",
    name: "Recommendation Engine",
    definition:
      "An AI system that suggests products or content based on user behavior and preferences",
    analogy:
      "Like a personal shopper who knows your taste and suggests items you'll probably like",
    useCase: "Netflix recommending shows based on what you've watched before",
  },
  reinforcementLearning: {
    id: "reinforcementLearning",
    name: "Reinforcement Learning",
    definition:
      "AI learning approach where a system improves by getting feedback (rewards or penalties) for its actions",
    analogy:
      "Like training a dog by rewarding good behavior and discouraging bad behavior",
    useCase: "Teaching AI systems to optimize pricing strategies based on sales results",
  },
  sentimentAnalysis: {
    id: "sentimentAnalysis",
    name: "Sentiment Analysis",
    definition:
      "AI technology that determines whether text expresses positive, negative, or neutral sentiment",
    analogy:
      "Like a psychologist who can tell if someone is happy, sad, or neutral just by listening to them talk",
    useCase: "Analyzing customer reviews to understand satisfaction levels",
  },
  trainingData: {
    id: "trainingData",
    name: "Training Data",
    definition:
      "The information used to teach an AI model how to make predictions or decisions",
    analogy:
      "Like examples a teacher uses to help students understand a concept",
    useCase: "Thousands of emails labeled as spam or legitimate used to train a spam filter",
  },
};

const scenarios: Scenario[] = [
  {
    id: "customerService",
    title: "Our customer service team is overwhelmed",
    description:
      "We need to handle customer inquiries faster and more efficiently",
    terms: [
      terms.chatbot,
      terms.nlp,
      terms.sentimentAnalysis,
    ],
  },
  {
    id: "salesPrediction",
    title: "We need to predict next quarter's sales",
    description: "Forecast revenue and understand demand patterns",
    terms: [
      terms.predictiveAnalytics,
      terms.machineLearning,
      terms.algorithm,
    ],
  },
  {
    id: "documents",
    title: "We're drowning in unstructured documents",
    description: "Digitize and extract information from paper and PDF files",
    terms: [
      terms.nlp,
      terms.ocr,
      terms.rag,
    ],
  },
  {
    id: "automation",
    title: "We want to automate repetitive tasks",
    description:
      "Reduce manual work and improve efficiency across departments",
    terms: [
      terms.aiAgent,
      terms.api,
      terms.promptEngineering,
    ],
  },
  {
    id: "hiring",
    title: "Our hiring process takes too long",
    description: "Speed up recruitment and improve candidate evaluation",
    terms: [
      terms.nlp,
      terms.bias,
      terms.machineLearning,
    ],
  },
  {
    id: "recommendations",
    title: "We need better product recommendations",
    description: "Increase sales and improve customer experience",
    terms: [
      terms.recommendationEngine,
      terms.algorithm,
      terms.machineLearning,
    ],
  },
  {
    id: "fraud",
    title: "We need to detect fraud faster",
    description: "Identify suspicious transactions in real-time",
    terms: [
      terms.deepLearning,
      terms.neuralNetwork,
      terms.predictiveAnalytics,
    ],
  },
  {
    id: "marketing",
    title: "We want to create marketing content at scale",
    description: "Generate personalized content for multiple campaigns",
    terms: [
      terms.generativeAi,
      terms.llm,
      terms.promptEngineering,
    ],
  },
];

const allTerms = Object.values(terms).sort((a, b) => a.name.localeCompare(b.name));

export default function JargonDecoder() {
  const [mode, setMode] = useState<Mode>("scenario");
  const [expandedScenario, setExpandedScenario] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredScenarios =
    mode === "scenario"
      ? scenarios.filter((s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  const filteredTerms =
    mode === "term"
      ? allTerms.filter((t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-600">
          <span>Home</span> <span className="mx-2">/</span>
          <span>AI for Corporates</span> <span className="mx-2">/</span>
          <span>Jargon Decoder</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">AI Jargon Decoder</h1>
          <p className="text-lg text-slate-600">
            Understand AI terminology through real business scenarios and plain-English
            explanations
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              setMode("scenario");
              setExpandedTerm(null);
            }}
            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
              mode === "scenario"
                ? "bg-slate-700 text-white"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            Browse by Scenario
          </button>
          <button
            onClick={() => {
              setMode("term");
              setExpandedScenario(null);
            }}
            className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
              mode === "term"
                ? "bg-slate-700 text-white"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            Browse by Term
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder={
              mode === "scenario"
                ? "Search scenarios..."
                : "Search terms..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
          />
        </div>

        {/* Scenario Mode */}
        {mode === "scenario" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedScenario(
                      expandedScenario === scenario.id ? null : scenario.id
                    )
                  }
                  className="w-full text-left p-6 hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {scenario.description}
                  </p>
                  <div className="flex items-center text-slate-700 font-semibold">
                    <span>{expandedScenario === scenario.id ? "−" : "+"}</span>
                    <span className="ml-2">
                      {expandedScenario === scenario.id ? "Hide" : "View"} terms
                    </span>
                  </div>
                </button>

                {expandedScenario === scenario.id && (
                  <div className="border-t border-slate-200 bg-slate-50">
                    <div className="p-6 space-y-6">
                      {scenario.terms.map((term) => (
                        <div key={term.id} className="bg-white rounded-lg p-4 border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-2">
                            {term.name}
                          </h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold text-slate-700 mb-1">
                                Plain English:
                              </p>
                              <p className="text-slate-600">{term.definition}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-slate-700 mb-1">
                                Think of it like:
                              </p>
                              <p className="text-slate-600">{term.analogy}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-slate-700 mb-1">
                                In your business:
                              </p>
                              <p className="text-slate-600">{term.useCase}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Term Mode */}
        {mode === "term" && (
          <div className="space-y-4">
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedTerm(expandedTerm === term.id ? null : term.id)
                  }
                  className="w-full text-left p-6 hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {term.name}
                  </h3>
                  <span className="text-slate-700 font-semibold text-xl">
                    {expandedTerm === term.id ? "−" : "+"}
                  </span>
                </button>

                {expandedTerm === term.id && (
                  <div className="border-t border-slate-200 bg-slate-50 p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">
                          Definition
                        </p>
                        <p className="text-slate-700">{term.definition}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">
                          Think of it like...
                        </p>
                        <p className="text-slate-700">{term.analogy}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">
                          Business use case
                        </p>
                        <p className="text-slate-700">{term.useCase}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {((mode === "scenario" && filteredScenarios.length === 0) ||
          (mode === "term" && filteredTerms.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No results found</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-slate-700 font-semibold underline hover:text-slate-900"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
