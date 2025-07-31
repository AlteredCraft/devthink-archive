---
title: Why Fine-Tuning is (Probably) Not for You
author: Sam Keen
date: July 29, 2024
url: https://devthink.ai/p/why-fine-tuning-is-probably-not-for-you
scraped_at: 2025-07-29T19:22:37.598190
---

# Why Fine-Tuning is (Probably) Not for You

*By Sam Keen on July 29, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Another jam-packed edition of our newsletter is here, filled with insights that will help you stay ahead of the curve in the world of generative AI. This week, we explore cost-effective techniques for enhancing large language models, dive into how Mantle used LLMs to streamline code conversion, and unpack the pros and cons of fine-tuning versus Retrieval Augmented Generation. Let's dive in!



## 📖 **TUTORIALS & CASE STUDIES**

### **Generating Powerful LLMs from Scratch: A Cost-Effective Approach**

Read Time: 12 minutes



This article explores several [cutting-edge techniques to enhance LLMs]("https://www.linkedin.com/pulse/instruction-pretraining-llms-sebastian-raschka-phd-x6zoc/") for software developers. It covers a novel method called "Magpie" that can generate high-quality instruction datasets for LLM finetuning using just a local Llama 3 8B model. It also examines "Instruction Pretraining", a technique that improves LLM performance by incorporating synthetic instruction-response pairs during pretraining. Finally, it provides an in-depth overview of Google's new Gemma 2 models, highlighting their architectural innovations for creating efficient and capable LLMs.

### **Working with AI (Part 2): Code Conversion**

Read time: 9 minutes



[This article]("https://blog.withmantle.com/code-conversion-using-ai/") explores how Mantle used large language models ( LLMs) to streamline code conversion from prototype to production, saving two-thirds of the development time. By leveraging LLM capabilities to generate code with context, such as existing code patterns, libraries, and visual references, the team was able to rapidly create production-ready code. As token windows continue to grow, this approach demonstrates the potential for LLMs to drive more efficient and higher-quality software development.

### **Why Fine-Tuning is (Probably) Not for You**

Read time: 11 minutes



[This article]("https://blog.promptlayer.com/why-fine-tuning-is-probably-not-for-you-37d8c4987530") examines the pros and cons of fine-tuning generative AI models versus using Retrieval Augmented Generation (RAG). It suggests that for most software developers, RAG often outperforms fine-tuning while being less complex, faster to iterate, and more cost-effective. The article highlights use cases where fine-tuning may still be beneficial, such as for specific output formats or editing writing style, but overall recommends focusing on prompting and RAG for faster development and lower costs.

### **Building A Generative AI Platform**

Read time: 30 minutes



This article provides a comprehensive [overview of the common components and architecture of a Generative AI platform]("https://huyenchip.com/2024/07/25/genai-platform.html"). It covers key steps such as enhancing context with Retrieval-Augmented Generation (RAG), implementing guardrails to ensure reliability, adding model routers and gateways for security and scalability, leveraging caching techniques to reduce latency, and incorporating complex logic and write actions. The article also discusses the importance of observability and AI pipeline orchestration, making it a valuable resource for software developers looking to leverage GenAI in their applications.

##

## 🧰 **TOOLS**

### **Run Your Own AI Cluster at Home with Everyday Devices**

Read time: 8 minutes



[exo]("https://github.com/exo-explore/exo") is an experimental open-source framework that allows software developers to run powerful AI models like LLaMA on a cluster of their own devices, including smartphones, laptops, and desktops. exo features dynamic model partitioning, automatic device discovery, and a ChatGPT-compatible API, enabling developers to leverage large-scale generative AI in their applications without expensive specialized hardware.

### **PraisonAI: A Low-Code Solution for Building Multi-Agent LLM Systems**

Read time: 8 minutes



[PraisonAI]("https://github.com/MervinPraison/PraisonAI") is a low-code, centralized framework that simplifies the creation and orchestration of multi-agent systems for various LLM applications. It leverages both AutoGen and CrewAI frameworks, emphasizing ease of use, customization, and efficient human-agent collaboration. PraisonAI offers different user interfaces, including a multi-agent UI, a chat interface for 100+ LLMs, and a "chat with your entire codebase" feature, making it a versatile tool for software developers seeking to leverage generative AI in their applications.

### **MambaVision: A Hybrid Mamba-Transformer Vision Backbone**

Read Time: 5 minutes



[MambaVision]("https://github.com/NVlabs/MambaVision") is a new PyTorch-based vision backbone that combines the strengths of Mamba and Transformer models. This hybrid approach aims to improve performance on various computer vision tasks. Developers interested in leveraging cutting-edge AI models in their applications will find this official implementation from NVIDIA Labs valuable for exploring the capabilities of MambaVision and potentially integrating it into their projects.

### **llama-agentic-system: Leveraging Agentic Components of the Llama Stack**

Read time: 10 minutes



This GitHub repo introduces the [llama-agentic-system]("https://github.com/meta-llama/llama-agentic-system"), a framework that allows running Llama 3.1 as an "agentic" system capable of multi-step reasoning, tool usage, and safety-focused configuration. The system enables software developers to leverage Llama's capabilities in their applications, with features like built-in and zero-shot tool integration, as well as customizable safety shields like Llama Guard. The repo provides detailed installation, setup, and usage guides to help developers get started.

### **Open-Source Python Toolkit for Ordinal Deep Learning**

Read Time: 6 minutes

[dlordinal]("https://github.com/ayrna/dlordinal") is an open-source Python library that provides a unified toolkit for deep learning with ordinal methodologies. Developed using PyTorch, it implements state-of-the-art techniques for ordinal classification problems, which leverage the ordering information in target variables. The library includes loss functions, output layers, dropout techniques, soft labeling, and ordinal evaluation metrics, all designed to handle ordinal data. dlordinal offers a comprehensive solution for software developers looking to leverage advanced ordinal deep learning capabilities in their applications.

## 📰 **NEWS & EDITORIALS**

### **Open Source AI Is the Path Forward**

Read time: 12 minutes

[This article]("https://about-fb-com.cdn.ampproject.org/c/s/about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/amp/") from Meta argues that open-source AI, exemplified by the Llama 3.1 model, is the best choice for software developers to leverage the latest advancements in generative AI. It highlights the benefits of open source, including customization, portability, data privacy, and cost-efficiency, as well as Meta's commitment to growing the open-source AI ecosystem through partnerships and tooling support. The article also discusses the safety and security advantages of open-source AI over closed models.

### **Large Enough: Mistral's Latest Generative AI Model**

Read Time: 8 minutes



[Mistral's latest Mistral Large 2 model]("https://mistral.ai/news/mistral-large-2407/") offers software developers a powerful AI tool with enhanced performance, reasoning, and language capabilities. The model boasts a 128k context window, supports dozens of languages, and delivers state-of-the-art results on code generation and mathematical benchmarks. Developers can access Mistral Large 2 through la Plateforme, cloud service providers, and open-source releases, helping them build innovative AI-powered applications.

### **Introducing Llama 3.1: Meta's Most Capable Open-Source Models Yet**

Read Time: 9 minutes



[Meta has released Llama 3.1]("https://ai.meta.com/blog/meta-llama-3-1/"), an open-source large language model they believe rivals top AI models in capabilities for general knowledge, math, coding, and more. The flagship 405B model, along with upgraded 8B and 70B versions, offer enhanced context length, multilingual support, and advanced features like synthetic data generation and model distillation. Meta is also providing a reference system and new safety tools to help developers build responsibly with Llama 3.1, which is now available on platforms like AWS, Azure, and Google Cloud.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/samkeen"), DM me links you would like included in a future newsletter.
