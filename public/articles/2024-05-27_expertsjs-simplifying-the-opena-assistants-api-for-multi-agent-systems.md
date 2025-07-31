---
title: Experts.js: Simplifying the OpenAI Assistants API for Multi-Agent Systems
author: Sam Keen
date: May 27, 2024
url: https://devthink.ai/p/expertsjs-simplifying-the-opena-assistants-api-for-multi-agent-systems
scraped_at: 2025-07-29T19:23:56.358100
---

# Experts.js: Simplifying the OpenAI Assistants API for Multi-Agent Systems

*By Sam Keen on May 27, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Greetings, fellow software developers! We have an action-packed edition of the Generative AI Newsletter for you this week. Get ready to dive into step-by-step guides on implementing LLaMA 3 and building agentic RAG systems. You'll also discover powerful new tools like Experts.js, which simplifies the OpenAI Assistants API, and the DeepSeek-VL model for real-world vision-language tasks. Plus, don't miss the insightful editorials on the future of "malleable software" and the inner workings of large language models.



## 📖 **TUTORIALS & CASE STUDIES**

### **Implementing LLaMA 3 from Scratch: A Step-by-Step Guide**

Read Time: 14 minutes



This detailed article walks through the implementation of the LLaMA 3 language model from scratch, covering topics like tokenization, model file reading, and building the transformer architecture one layer at a time. The author provides a hands-on, technical overview that software developers can use to gain a deeper understanding of how these powerful AI models work [under the hood]("https://github.com/naklecha/llama3-from-scratch"). This implementation serves as a valuable educational resource for those looking to leverage generative AI in their own applications.

### **How to Run Multiple AI Models with Ollama and Open WebUI in Docker**

Read Time: 10 minutes

[This guide]("https://github.com/CtrlAiDel/How-to-Run-Multiple-AI-Models-with-Ollama-and-Open-WebUI-in-Docker") walks software developers through setting up Ollama, an AI framework, and the Open WebUI, a user interface, using Docker. It covers enabling WSL, installing Docker Desktop, deploying the containers, downloading AI models, and accessing the UI for image generation and analysis. The guide also provides steps for updating the components and configuring Stable Diffusion, highlighting the importance of a powerful computing environment for leveraging these advanced generative AI tools.

### **Building Agentic RAG with Rust, Qdrant & OpenAI**

Read time: 15 minutes

This article demonstrates how to build an "agentic RAG" (Retrieval Augmented Generation) workflow using Rust, Qdrant vector database, and OpenAI. It walks through embedding a CSV file into Qdrant, then retrieving relevant embeddings to power an AI agent that can answer questions about the CSV data. The agent leverages Rust's performance benefits and integrates with Shuttle for easy deployment. [This detailed tutorial]("https://www.shuttle.rs/blog/2024/05/23/building-agentic-rag-rust-qdrant") will help software developers use generative AI and retrieval models to build powerful, customized applications.

### **Langchain: Vectorstores and Embeddings**

Read Time: 15 minutes



[This article]("https://dev.to/rutamstwt/langchain-vectorstores-and-embeddings-3i30") explores how vectorstores and embeddings, key components of Retrieval Augmented Generation (RAG) frameworks, can be used to build chatbots and perform semantic search. It covers setting up embeddings, storing them in a vector store, and discusses edge cases like duplicate documents and unstructured information. The article provides a solid foundation for software developers interested in leveraging generative AI tools and techniques in their applications.

### **Guiding LLM Output with DSPy Assertions and Suggestions**

Read Time: 20 minutes



[This article]("https://learnbybuilding.ai/tutorials/guiding-llm-output-with-dspy-assertions-and-suggestions") explores how to use DSPy's assertions and suggestions to guide the output of large language models (LLMs) and ensure high-quality, reliable results. It demonstrates practical examples of implementing assertions to enforce constraints, and suggestions to provide flexible feedback, enabling developers to tailor LLM outputs to their specific requirements. The article covers techniques for balancing guidance and flexibility, and considerations around performance impact, making it a valuable resource for software developers leveraging generative AI in their applications.

##

## 🧰 **TOOLS**

### **Experts.js: Simplifying the OpenAI Assistants API for Multi-Agent Systems**

Read Time: 10 minutes



[Experts.js]("https://github.com/metaskills/experts") is a framework that simplifies the usage of OpenAI's new Assistants API, allowing software developers to easily create and deploy AI agents as "Tools" within a multi-agent system. The framework handles the complexities of managing the Assistants API, enabling developers to focus on building advanced applications that leverage the power of LLMs. Experts.js introduces features like Assistants as reusable Tools, streaming events, and thread management, making it easier to develop intelligent systems that leverage the latest advancements in generative AI.

### **Introducing Transformers Agents 2.0**

Read time: 18 minutes



[Transformers Agents 2.0]("https://huggingface.co/blog/agents") introduces two new agent types that can iterate based on past observations to solve complex tasks, offering a clear and modular framework for building agent systems powered by large language models. This article showcases examples of self-correcting retrieval-augmented generation and a multi-agent setup for efficient web browsing, and demonstrates how the new Transformers Agents framework can outperform GPT-4 based agents on the GAIA benchmark, a challenging evaluation of reasoning abilities.

### **LLaMA Factory: Unify Efficient Fine-Tuning of 100+ LLMs**

Read time: 15 minutes



[LLaMA Factory]("https://github.com/hiyouga/LLaMA-Factory") is a powerful framework that simplifies the fine-tuning of over 100 large language models (LLMs) like LLaMA, ChatGLM, and Mistral. It offers various training approaches, including pre-training, supervised fine-tuning, and reinforcement learning, with support for efficient techniques like LoRA and quantization. LLaMA Factory also provides a rich set of datasets, benchmarks, and deployment options, making it a comprehensive solution for software developers looking to leverage state-of-the-art LLMs in their applications.

### **Model Explorer: A Powerful Tool for Visualizing and Debugging ML Models**

Read time: 9 minutes

[Model Explorer]("https://github.com/google-ai-edge/model-explorer/wiki") is a graph visualization tool that helps software developers understand and debug their machine learning models. It offers a hierarchical layout, metadata overlays, interactive features, and support for popular ML frameworks like TensorFlow, JAX, and PyTorch. With GPU-accelerated rendering and extension capabilities, Model Explorer simplifies the process of analyzing complex ML models, enabling developers to stay on top of the latest generative AI technologies.

### **DeepSeek-VL: Towards Real-World Vision-Language Understanding**

Read time: 8 minutes

[DeepSeek-VL]("https://github.com/deepseek-ai/deepseek-vl") is an open-source Vision-Language (VL) model designed for real-world applications. It offers general multimodal understanding capabilities, processing diverse content like diagrams, web pages, formulas, and scientific literature. The DeepSeek-VL family includes 7B and 1.3B parameter models in base and chat variants to support a wide range of developer needs. Developers can explore the model's capabilities through a gradio demo and leverage the pre-trained models for their own vision-language projects.

### **A GPT-4V Level Multimodal LLM on Your Phone**

Read Time: 12 minutes

[MiniCPM-Llama3-V 2.5]("https://github.com/OpenBMB/MiniCPM-V") is a powerful open-source multimodal language model that can be deployed on end-user devices. With 8B parameters, it surpasses proprietary models like GPT-4V in performance, while offering strong OCR capabilities, trustworthy behavior, multilingual support, and efficient deployment on mobile phones. This newsletter highlights MiniCPM-Llama3-V 2.5's cutting-edge features, making it an attractive option for software developers looking to leverage state-of-the-art generative AI in their applications.

## 📰 **NEWS & EDITORIALS**

### **Malleable Software in the Age of LLMs**

Read time: 23 minutes



[This article]("https://www.geoffreylitt.com/2023/03/25/llm-end-user-programming.html") explores how Large Language Models (LLMs) could empower software developers to create more flexible and customizable applications. The author envisions a future where LLMs help users specify their intent, generate code, and even build one-off graphical user interfaces tailored to specific tasks. By enabling "malleable software" that can be easily extended and recombined, LLMs could fundamentally change how software is created and distributed.

### **Mapping the Mind of a Large Language Model**

Read time: 16 minutes



[This article]("https://www.anthropic.com/research/mapping-mind-language-model") describes a significant breakthrough in understanding the inner workings of large language models like Anthropic's Claude. By applying "dictionary learning" techniques, the researchers were able to identify millions of interpretable features representing a vast range of concepts, from specific entities to abstract ideas. This offers insights into how these models represent and use knowledge, which could lead to improved safety and reliability in future AI systems.

### **New Falcon AI Model: A Small Yet Powerful Challenger to Meta's Llama 3**

Read Time: 12 minutes



The Technology Innovation Institute has released [Falcon 2]("https://aibusiness.com/nlp/new-falcon-ai-model-a-small-yet-powerful-challenger-to-meta-s-llama-3"), an 11 billion parameter open-source AI model that claims to outperform Meta's Llama 3 on popular benchmarks. Falcon 2 comes in a base version and a visual-optimized version, both of which can efficiently run on a single GPU, making them accessible for developers. While smaller than the previous 180 billion parameter Falcon, the new model maintains high performance and offers benefits like enhanced flexibility and reduced computing power requirements.

### **Hugging Face is Sharing $10 Million Worth of Free GPUs to Boost Open-Source AI Development**

Read time: 9 minutes

[Hugging Face]("https://www.theverge.com/2024/5/16/24156755/hugging-face-celement-delangue-free-shared-gpus-ai"), a leading machine learning company, is committing $10 million in free shared GPUs to help developers, academics, and startups create new AI technologies. The goal is to counter the centralization of AI advancements within tech giants and make state-of-the-art AI accessible to everyone through open-source initiatives like Hugging Face's new ZeroGPU program.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/samkeen"), DM me links you would like included in a future newsletters.
