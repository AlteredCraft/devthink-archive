---
title: Corrective RAG (CRAG): Improving RAG with Enhanced Document Retrieval
author: Sam Keen
date: September 24, 2024
url: https://devthink.ai/p/introducing-contextual-retrieval-boosting-performance-of-rag-systems
scraped_at: 2025-07-29T19:21:28.967790
---

# Corrective RAG (CRAG): Improving RAG with Enhanced Document Retrieval

*By Sam Keen on September 24, 2024*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

Thank you for being a loyal subscriber to our newsletter! This week, we have an exceptional lineup of content that I'm confident you'll find valuable. Dive into the latest advancements in Retrieval Augmented Generation, discover new AI tools like AutoGluon and WordLlama, and get insights on the evolving landscape of large language models. From thought-provoking editorials to practical tutorials, this issue is packed with information to help you stay ahead in the world of generative AI.

## 📖 **TUTORIALS & CASE STUDIES**

### **Contextual Retrieval: Boosting Performance of RAG for Large Knowledge Bases**

Read time: 9 minutes



[Anthropic's Contextual Retrieval]("https://www.anthropic.com/news/contextual-retrieval") is a novel technique that significantly improves the retrieval accuracy of RAG systems by preserving context when embedding and indexing knowledge base chunks. By combining Contextual Embeddings and Contextual BM25, Contextual Retrieval can reduce retrieval failure rates by up to 49%. When further combined with reranking, the failure rate drops by 67%, unlocking new levels of performance for large-scale knowledge base applications.

### **A Visual Exploration of Semantic Text Chunking**

Read Time: 10 minutes

This [article]("https://towardsdatascience.com/a-visual-exploration-of-semantic-text-chunking-6bb46f728e30") demonstrates how software developers can leverage semantic chunking and visualization techniques to enhance Retrieval Augmented Generation (RAG) and other applications that leverage LLMs. It explores methods to split text into coherent chunks, visualize the chunking process, and use clustering and LLM-powered labeling to gain insights from the generated chunks. The author provides a step-by-step walkthrough and Python code to apply these techniques on example texts, including the Wizard of Oz, illustrating how the approach can be adapted to different corpora.

### **Corrective RAG (CRAG): Improving RAG with Enhanced Document Retrieval**

Read Time: 8 minutes



[Corrective RAG (CRAG)]("https://www.datacamp.com/tutorial/corrective-rag-crag") is an enhanced version of the Retrieval-Augmented Generation (RAG) framework that improves language model accuracy by actively checking and refining retrieved documents before using them for text generation. CRAG incorporates a retrieval evaluator, web search capabilities, and a query refinement process to reduce the risk of generating misleading content, making it a valuable tool for software developers leveraging generative AI in their applications.

### **Benchmarking Hallucination Detection Methods in RAG**

Read time: 8 minutes



This article evaluates various techniques for automatically detecting hallucinations - incorrect LLM responses - in Retrieval Augmented Generation (RAG) systems. By comparing methods like Trustworthy Language Model, Self-Evaluation, and RAGAS Faithfulness across multiple RAG datasets, the author identifies the most reliable approaches for ensuring the accuracy and trustworthiness of RAG-generated answers, which is crucial for high-stakes applications. The [detailed benchmarks and insights]("https://towardsdatascience.com/benchmarking-hallucination-detection-methods-in-rag-6a03c555f063") provide software developers valuable guidance on enhancing the reliability of their RAG-based applications.

### **Choosing Between LLM Agent Frameworks**

Read time: 9 minutes



This article explores the tradeoffs between [building custom code-based agents and using the major agent frameworks]("https://towardsdatascience.com/choosing-between-llm-agent-frameworks-69019493b259"), LangGraph and LlamaIndex Workflows. It provides a technical comparison of implementing the same agent across these approaches, highlighting the strengths and challenges of each. The author concludes that the choice ultimately depends on factors like existing investments in LlamaIndex or LangChain, familiarity with agent structures, and availability of framework-specific examples. Importantly, the article emphasizes the need for robust guardrails and LLM tracing when deploying generative AI systems in production.

##

## 🧰 **TOOLS**

### **Fast and Accurate ML in 3 Lines of Code**

Read time: 5 minutes



[AutoGluon]("https://github.com/autogluon/autogluon") is an open-source library that enables software developers to quickly and easily integrate state-of-the-art machine learning models into their applications. With just 3 lines of code, developers can train highly accurate models across a variety of supervised learning tasks, including tabular, image, and text data. The framework's automated model selection and tuning capabilities make it a powerful tool for developers looking to leverage advanced AI capabilities in their software projects.

### **Recycled Token Embeddings for Efficient NLP: WordLlama**

Read time: 5 minutes



[WordLlama]("https://github.com/dleemiller/WordLlama") is a lightweight NLP toolkit that leverages token embeddings from large language models (LLMs) to enable efficient CPU-based NLP tasks. It offers features like fuzzy deduplication, similarity ranking, and clustering, while being much smaller in size than traditional word embedding models. WordLlama's Matryoshka representation learning approach allows developers to tradeoff model size and performance, making it a versatile choice for building AI-powered applications that require fast, portable NLP capabilities.

### **AI for JQ: A Powerful CLI for Generative AI Workflows**

Read time: 8 minutes

[aiq]("https://github.com/taylorai/aiq") is a CLI tool that enables software developers to seamlessly integrate generative AI into their workflows. It provides commands to label text using LLMs, compute text embeddings, train text classifiers, and perform inference - all while operating on text and JSON data streams. The tool's modular and composable design allows developers to chain these commands together, creating powerful pipelines to leverage generative AI in their applications.

## 📰 **NEWS & EDITORIALS**

### **Announcing Pixtral 12B: A Powerful Multimodal AI Model for Software Developers**

Read time: 7 minutes

[Pixtral 12B]("https://mistral.ai/news/pixtral-12b/") is a new multimodal AI model from Mistral that can understand both images and text, excelling in tasks like chart analysis, document question answering, and multimodal instruction following. Pixtral maintains state-of-the-art performance on text-only benchmarks while delivering best-in-class multimodal reasoning, making it a valuable tool for software developers leveraging generative AI in their applications.

### **Notes on OpenAI's New o1 Chain-of-Thought Models**

Read time: 8 minutes

[This article]("https://simonwillison.net/2024/Sep/12/openai-o1/") explores OpenAI's new o1-preview and o1-mini models, which are designed to "spend more time thinking" through complex prompts using a reinforcement learning-based chain-of-thought approach. The models offer improved reasoning capabilities but come with trade-offs in cost, performance, and transparency. The article discusses key details, examples, and implications for software developers leveraging generative AI in their applications.

### **Forget ChatGPT: Why Researchers Now Run Small AIs on Their Laptops**

Read time: 9 minutes

[This article]("https://www.nature.com/articles/d41586-024-02998-y") explores how software developers are increasingly turning to small, open-source Large Language Models (LLMs) that can run on their local devices. These models, such as Phi-3 from Microsoft, rival the performance of larger cloud-based models like ChatGPT, while offering benefits like cost savings, privacy preservation, and reproducibility. The article highlights use cases in bioinformatics, healthcare, and industry, showcasing how researchers are leveraging these accessible AI tools to enhance their work.

### **Jumping Over AI's Uncanny Valley**

Read time: 12 minutes



This article explores the Uncanny Valley, a psychological phenomenon that could either [hinder or help the adoption of advanced AI technologies]("https://every.to/p/jumping-over-ai-s-uncanny-valley-4b1c3436-b424-4a62-b563-50e1469bba6c") like humanoid robots and AI-generated content. While the existence of the Uncanny Valley is debated, the author argues it is worth investigating, as it could impact how developers leverage AI as a tool versus a replacement for human abilities. The piece provides insights on navigating the Uncanny Valley and suggests opportunities for companies that embrace AI's limitations rather than mask them.

### **Scaling: The State of Play in AI**

Read Time: 11 minutes



This article provides an overview of the current state of Large Language Models (LLMs), focusing on the importance of scale and the progression of model generations from ChatGPT-3.5 to the upcoming GPT-5 and Grok 3. It compares the capabilities of five leading Gen2 frontier models, including GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro, and highlights the emergence of a new "thinking" scaling law that could drive further advancements. [This in-depth analysis]("https://www.oneusefulthing.org/p/scaling-the-state-of-play-in-ai") will help software developers stay informed on the latest trends in generative AI tools and their implications.

**Thanks for reading, and we will see you next time**

Follow me on [LinkedIn]("http://Follow me on LinkedIn: www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=samkeen") or [Threads](https://www.threads.net/@sam.keen"https://www.threads.net/@sam.keen")
