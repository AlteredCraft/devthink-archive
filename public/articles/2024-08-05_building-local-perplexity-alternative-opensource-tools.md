---
title: Building a Local Perplexity Alternative with Open-Source Tools
author: Sam Keen
date: August 05, 2024
url: https://devthink.ai/p/building-local-perplexity-alternative-opensource-tools
scraped_at: 2025-07-29T19:22:28.898648
---

# Building a Local Perplexity Alternative with Open-Source Tools

*By Sam Keen on August 05, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thank you for being a loyal subscriber to our Generative AI newsletter! This week, we have some particularly compelling content to share. Get an inside look at building a Retrieval Augmented Generation (RAG) chatbot, learn how to fine-tune language models to detect factual inconsistencies, and explore the new GitHub Models platform that empowers developers to build with cutting-edge AI. Don't miss these insightful tutorials and the latest industry news that will keep you ahead of the curve.



## 📖 **TUTORIALS & CASE STUDIES**

**Running a RAG Chatbot with Ollama on Fly.io**

Read Time: 9 minutes

This article details the implementation of a Retrieval-Augmented Generation (RAG) chatbot that leverages Ollama, an open-source platform for running large language models, and Upstash Vector, a serverless vector database. The chatbot uses the Mistral 7B language model to generate responses and Nomic Embeddings to extract relevant information from a knowledge base. [The article]("https://upstash.com/blog/ollama-rag") demonstrates how to deploy the chatbot and its supporting infrastructure on Fly.io, a platform for running web applications globally.

### **Finetune a model to detect hallucinations**

Read time: 8 minutes



This repository demonstrates how to [fine-tune a Mistral AI language model]("https://github.com/mistralai/cookbook/tree/main/third_party/wandb") to detect factual inconsistencies and hallucinations in text summaries. It includes datasets from Factual Inconsistency Benchmark (FIB) and USB, and integrates with Weights & Biases for experiment tracking. The project shows improvements in hallucination detection after fine-tuning, with detailed metrics and comparisons between model versions.

### **Building Powerful Chains and Agents in LangChain**

Read time: 10 minutes

[This article]("https://dev.to/jamesbmour/part-3-building-powerful-chains-and-agents-in-langchain-5g04") provides a comprehensive guide to constructing sophisticated AI-driven systems using LangChain's chains and agents. It covers the fundamentals of chains, explains how to integrate them with prompts and large language models (LLMs), and introduces powerful agent capabilities that can leverage external tools to solve complex problems. The article equips developers with the knowledge to create adaptable, modular, and reusable AI applications.

### **Building a Local Perplexity Alternative with Open-Source Tools**

Read Time: 8 minutes



This article shows software developers how to build a [self-hosted AI search engine]("https://jointerminus.medium.com/building-a-local-perplexity-alternative-with-perplexica-ollama-and-searxng-71602523e256") similar to Perplexity, using open-source tools like Ollama, SearXNG, and Perplexica on the Terminus platform. By leveraging these tools, developers can create a powerful, customizable AI search engine without monthly fees or usage limits, providing greater control over their data and search experience.

### **A Visual Guide to Quantization**

Read time: 20 minutes



This article provides a [comprehensive overview of quantization]("https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization"), a technique to reduce the size and improve the efficiency of large language models (LLMs) by representing their parameters with fewer bits. It explores symmetric and asymmetric quantization, calibration methods, and advanced techniques like GPTQ and BitNet that enable 4-bit and even 1-bit LLMs. With detailed visualizations and intuitive explanations, this guide equips software developers with the knowledge to leverage quantization in their own projects leveraging generative AI.

##

## 🧰 **TOOLS**

### **Introducing GitHub Models: A new generation of AI engineers building on GitHub**

Read time: 5 minutes



[GitHub is launching GitHub Models]("https://github.blog/news-insights/product-news/introducing-github-models/"), enabling over 100 million developers to become "AI engineers" and build with industry-leading AI models. The new interactive model playground allows users to explore and experiment with popular private and open models, while the integration with Codespaces and Azure AI provides a seamless path to develop and deploy AI applications. GitHub is positioning itself as "the creator network for the age of AI" by democratizing access to cutting-edge AI technologies.

### **Introducing torchchat: Accelerating Local LLM Inference on Laptop, Desktop and Mobile**

Read time: 6 minutes



[torchchat]("https://pytorch.org/blog/torchchat-local-llm-inference/") is a new PyTorch library that enables seamless and high-performance local inference of large language models like LLaMA 3 and 3.1 on laptops, desktops, and mobile devices. It provides a REST API, desktop binaries, and mobile exports, with impressive performance benchmarks across various hardware and quantization levels. This tool empowers software developers to leverage advanced generative AI capabilities on constrained devices, unlocking new possibilities for their applications.

### **Dioptra: Test Software for the Characterization of AI Technologies**

Read time: 7 minutes

[Dioptra]("https://pages.nist.gov/dioptra/") is a software test platform for assessing the trustworthy characteristics of artificial intelligence (AI), such as validity, safety, security, and fairness. It provides a REST API, web interface, and Python client to design, manage, execute, and track experiments for evaluating AI models throughout their development lifecycle. Dioptra supports the NIST AI Risk Management Framework by enabling the measurement and analysis of AI risks, making it a valuable tool for software developers building applications with generative AI.

### **Odyssey: Empowering Agents with Open-World Skills**

Read Time: 8 minutes



[Odyssey]("https://github.com/zju-vipa/Odyssey") is a new framework that empowers Large Language Model (LLM)-based agents with open-world skills to explore the vast Minecraft world. It includes a skill library of 40 primitive and 183 compositional skills, a fine-tuned LLaMA-3 model trained on Minecraft Wiki data, and a benchmark for evaluating agent planning and exploration capabilities. The open-source project aims to advance autonomous agent solutions and inspire future research in this area.

## 📰 **NEWS & EDITORIALS**

### **The EU's AI Act is now in force**

Read time: 8 minutes

The [European Union's risk-based regulation for AI applications]("https://techcrunch.com/2024/08/01/the-eus-ai-act-is-now-in-force/") has come into force, starting a series of compliance deadlines for AI developers and users. The law takes a tiered approach, banning a few AI uses, regulating high-risk systems, and requiring some transparency for "limited risk" technologies like chatbots. Notably, the law also sets standards for the most powerful "general purpose" AI models.

### **NVIDIA Accelerates Humanoid Robotics Development**

Read time: 8 minutes

[NVIDIA is providing a suite of services, models and computing platforms]("https://nvidianews.nvidia.com/news/nvidia-accelerates-worldwide-humanoid-robotics-development"), to accelerate the development of humanoid robots globally. Key offerings include NIM microservices for simulation and generative AI, the OSMO orchestration service, and an AI-enabled teleoperation workflow. NVIDIA also announced a Humanoid Robot Developer Program to provide early access to these technologies, benefiting companies like Boston Dynamics that are pushing the boundaries of humanoid robotics.

### **Why Big Tech Wants to Make AI Cost Nothing**

Read time: 8 minutes

[This article]("https://dublog.net/blog/commoditize-complement") discusses how major tech companies like Meta, Google, and Microsoft are open-sourcing powerful Large Language Models (LLMs) to commoditize the technology. By making LLMs readily available, these companies aim to increase demand for their complementary products like cloud computing and GPU hardware. The article explores the strategic reasoning behind this approach and the potential impact on AI startups struggling to compete with the vast resources of Big Tech.

### **Announcing New Azure AI Updates: Customizable Models and Expanded Choices**

Read Time: 8 minutes

This article highlights [key updates to the Azure AI platform]("https://azure.microsoft.com/en-us/blog/announcing-phi-3-fine-tuning-new-generative-ai-models-and-other-azure-ai-updates-to-empower-organizations-to-customize-and-scale-ai-applications/"), including serverless fine-tuning for Phi-3 models, improvements to the Phi-3-mini model, and the addition of new models from OpenAI, Meta, and Mistral. It also discusses enabling safe and responsible AI development through Azure AI evaluations and content safety features. These updates provide software developers with greater flexibility, performance, and choice when leveraging generative AI in their applications.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/samkeen"), DM me links you would like included in a future newsletter.
