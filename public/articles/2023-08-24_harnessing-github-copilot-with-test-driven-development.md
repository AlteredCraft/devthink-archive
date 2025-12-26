---
title: 🪢 Harnessing GitHub Copilot with Test-Driven Development
author: Sam Keen
date: August 24, 2023
url: https://devthink.ai/p/harnessing-github-copilot-with-test-driven-development
scraped_at: 2025-07-29T19:29:02.497525
---

# 🪢 Harnessing GitHub Copilot with Test-Driven Development

*By Unknown on August 24, 2023*

---

### **Essential AI Content for Software Devs,** **Minus the Hype**

In this edition:

- 📖 TUTORIALS & CASE STUDIES
- 🧰 TOOLS
- 📰 NEWS
- ⌨️ PUT DOWN THE KEYBOARD

## 📖 **TUTORIALS & CASE STUDIES**

**Harnessing GitHub Copilot with Test-Driven Development**  
Read Time: 7 minutes  
[Paul Sobocinski delves into]("https://martinfowler.com/articles/exploring-gen-ai.html") the dynamic between the emerging AI coding assistant, and the ever-important Test-Driven Development (TDD). He confronts the question: Does Copilot's emergence mark the end of TDD? Sobocinski emphasizes that TDD's strengths, such as delivering rapid, precise feedback, remain crucial—even with AI assistants. TDD’s "divide-and-conquer" approach to problem-solving aligns with how AI coding assistants like Copilot function. Thoughtworks has been integrating Copilot with TDD, and Paul offers insights into best practices. Key takeaways include: beginning with context (e.g., user stories or acceptance criteria) improves Copilot's predictions; a well-defined test setup maximizes Copilot's implementation help; while Copilot can backfill tests and regenerate code, its refactoring support is limited. The overarching message is clear: TDD’s discipline and structure can guide AI coding assistants towards higher performance.

**Exploring OpenAI’s Functions API with a Calendar Agent**  
Read Time: 10 minutes



This [blog post]("https://revelry.co/insights/artificial-intelligence/creating-an-agent-using-openais-functions-api/") provides a detailed walkthrough of using OpenAI’s Functions API to create a Calendar Agent. The author demonstrates how to use the API to perform scheduling tasks, highlighting the potential of AI “Agents” in practical applications.

**Master the Art of Finetuning Large Language Models**  
Read Time: 4 minutes  
[DeepLearning.AI]("http://deeplearning.ai/") offers a free short course on [finetuning Large Language Models (LLMs)](https://www.deeplearning.ai/short-courses/finetuning-large-language-models/"https://www.deeplearning.ai/short-courses/finetuning-large-language-models/"). The course, led by Sharon Zhou, CEO of Lamini, provides practical experience with real datasets and teaches how to prepare data for finetuning, train, and evaluate an LLM on your data. Ideal for learners with Python and deep learning framework knowledge.

**Why Fine-tuning Large Language Models Might Not Be Necessary**  
Read Time: 15 minutes  
This [article]("https://www.tidepool.so/2023/08/17/why-you-probably-dont-need-to-fine-tune-an-llm/") discusses why fine-tuning Large Language Models (LLMs) may not be necessary for most applications. It suggests that techniques like few-shot prompting and retrieval-augmented generation (RAG) can often achieve desired results without the need for fine-tuning, saving time and computational resources.

**Building LLM Apps with LangChain.js and Zep**  
Read Time: 15 minutes  
This [tutorial]("https://blog.langchain.dev/zep-x-langsmith-foundations-of-llm-app-development-with-langchain-js-and-zep/") guides developers through building three foundational Large Language Model (LLM) apps using TypeScript, LangChain.js, and Zep. It covers creating a conversational bot, a Retrieval Augmented Generation app, and a REACT-type agent, providing insights into the use of Zep’s memory store and LangChain’s features.

**Exploring History-Aware Commit Message Completion**  
Read Time: 8 minutes  
This [repository]("https://github.com/JetBrains-Research/commit_message_generation") provides a replication package for a paper on history-aware commit message completion. It includes code, models, and datasets, and explores two types of input for commit message completion: diff and commit message history. The project supports several models and offers detailed instructions for data preparation, model configuration, training, and evaluation.

**Customize Your AI with GPT-3.5 Turbo Fine-Tuning**  
Read Time: 7 minutes  
OpenAI has launched fine-tuning for [GPT-3.5 Turbo]("https://openai.com/blog/gpt-3-5-turbo-fine-tuning-and-api-updates"), allowing developers to customize models for better performance in specific tasks. This feature enhances steerability, output formatting, and custom tone. It also enables shorter prompts and increased token handling. Fine-tuning costs are based on token usage. GPT-4 fine-tuning is expected this fall.

**SeamlessM4T: A Breakthrough in Multimodal Translation**  
Read Time: 8 minutes  
Meta has introduced [SeamlessM4T]("https://ai.meta.com/resources/models-and-libraries/seamless-communication/"), the first all-in-one multimodal translation model. It supports nearly 100 languages for input and output, overcoming limitations of previous systems. The model can perform multiple tasks across speech and text, reducing errors and delays, and increasing the efficiency of the translation process.

##

## 🧰 **TOOLS**

**Cursor: The AI-First Code Editor Boosting Developer Productivity**  
Read Time: 4 minutes  
[Cursor]("https://www.cursor.so/"), an AI-first code editor, offers features such as code generation, bug spotting, and automatic debugging. It also allows developers to chat with their projects, browse documentation, and make code changes. The platform, a VSCode fork, supports one-click migration and ensures data security with a local mode.

**AI-Driven Git Commit Messages with aicommits**  
Read Time: 7 minutes  
[aicommits]("https://github.com/Nutlope/aicommits") is a CLI tool that leverages OpenAI’s GPT-3 to generate git commit messages. It supports multiple recommendations, conventional commits, and can be integrated with Git via the prepare-commit-msg hook. The tool also allows for customization of commit message generation through various configuration options.

**PromptLayer: A Dedicated Platform for Prompt Engineers**  
Read Time: 2 minutes  
[PromptLayer]("https://promptlayer.com/home") is the first platform specifically designed for prompt engineers, offering a dedicated environment for developing and refining AI prompts.

**The Potato Prompt: Streamlining AI Interactions**  
Read Time: 3 minutes  
The [Potato Prompt]("https://dev.to/sip/the-potato-prompt-mij") is a tool in prompt engineering that elicits concise responses from AI models, reducing verbosity and saving time in AI interactions. It’s a simple yet powerful way to make AI responses more direct and efficient.

**IDEFICS: An Open-Source Visual Language Model**  
Read Time: 8 minutes  
The creators of IDEFICS, an open-source visual language model, have released two variants of the model, each with 9 billion and 80 billion parameters. IDEFICS, based on DeepMind’s Flamingo, accepts image and text inputs to produce text outputs. The model was developed with transparency in mind, using only publicly available data. Learn more about [IDEFICS]("https://huggingface.co/blog/idefics") and its potential for open research in multimodal AI systems.

**Introducing Llama-2-7B-32K-Instruct: A Long-Context Instruction Model Fine-Tuned with Together API**  
Read Time: 12 minutes  
The team at Together API has released [Llama-2-7B-32K-Instruct]("https://together.ai/blog/llama-2-7b-32k-instruct"), a long-context instruction model that excels in tasks such as summarization and multi-document question answering. This model maintains similar performance to Llama-2-7B in shorter contexts. The model was built using the Together API, and the full recipe for distillation, training, testing, and deployment is now publicly available. The model was fine-tuned over a mixture of three data sources, including single- and multi-round conversations generated by human instructions and Llama-2-70B-Chat outputs. The fine-tuning process is straightforward, involving data upload, fine-tuning job initiation, progress tracking, and model testing. The model can then be integrated into applications using the Together Inference API. The Llama-2-7B-32K-Instruct model has demonstrated robust performance across long-context benchmarks, often outperforming other baseline models.

## 📰 **NEWS**

**Big Tech’s Q2 Update on Generative AI**  
Read Time: 15 minutes



In this [weekly newsletter]("https://tanay.substack.com/p/big-tech-x-generative-ai-q2-update"), Tanay provides a comprehensive roundup of the latest developments in Generative AI from major tech companies based on their Q2 earnings calls. Amazon is investing heavily in the LLM stack, offering LLMs as a service through Amazon Bedrock, and developing applications like Amazon CodeWhisperer. Microsoft is focusing on Azure, Copilots, and Bing, with Github Copilot being used by over 27,000 organizations. Meta is investing in infrastructure, recommendation systems, ad products, and consumer products, with AI-recommended content driving a 7% increase in time spent on the platform. Alphabet is focusing on search, productivity, and cloud infrastructure, with Google Duet now available to over 750K users. Apple, while less vocal about their AI efforts, emphasizes that AI and ML are integral to their products.

**Navigating the Wild West of Generative AI: Lessons from Open Source**  
Read Time: 10 minutes  
Generative AI, much like the early days of open source, is an exciting yet uncharted territory with complex intellectual property issues. [This article]("https://www.infoworld.com/article/3705051/applying-the-lessons-of-open-source-to-generative-ai.html") discusses the challenges and potential solutions for managing generative AI models, such as ChatGPT. Unlike humans, these models can’t remember or cite the information they’ve ingested, raising questions about ownership, licensing, and infringement. The article explores four potential mechanisms to control AI models: regulation, licensing, contracts, and technical controls. Drawing parallels with the evolution of open source, the author suggests that consistent and well-understood licensing could be key to widespread business adoption of AI. The Open Source Initiative (OSI) is stepping in to define what’s acceptable for AI systems to be ‘Open Source’, similar to their role in standardizing open source licenses. The author recommends closely following OSI’s work and pushing vendors for transparency on their AI usage.

**IBM’s GenAI to Modernize COBOL Code to Java**  
Read Time: 7 minutes  
IBM is set to release a tool, the [watsonx Code Assistant for Z]("https://www.theregister.com/2023/08/22/ibm_says_genai_can_convert/"), that uses generative AI to translate COBOL code to Java, aiming to modernize applications on its Z mainframes. The tool, expected to be available in Q4 2023, is designed to speed up the translation process, addressing the challenge of maintaining COBOL code due to a shortage of COBOL programmers.

**Securing AI: The Next Big Opportunity in Cybersecurity**  
Read Time: 12 minutes  
In this [article]("https://greylock.com/greymatter/securing-ai/"), the author discusses the growing importance of AI and foundation models in the IT and security priorities of CISOs and CIOs. The shift towards AI-native software is compared to the cloud platform shift initiated by AWS, with AI properties becoming a core consideration in software architecture. The article highlights the challenges enterprises face as they move towards production with Large Language Models (LLMs), particularly around data management, inference cost/latency, scalability, and security. The author emphasizes the need for visibility, governance, and auditability to mitigate risk, and outlines potential AI security use cases.

**Exploring the Open Challenges in Large Language Model (LLM) Research**  
Read Time: 15 minutes  
In this comprehensive [article]("https://huyenchip.com/2023/08/16/llm-research-open-challenges.html"), the author outlines ten major research directions in the field of Large Language Models (LLMs). These include reducing and measuring hallucinations, optimizing context length and construction, incorporating other data modalities, making LLMs faster and cheaper, designing new model architectures, developing GPU alternatives, making agents usable, improving learning from human preference, enhancing the efficiency of the chat interface, and building LLMs for non-English languages. The author provides a detailed analysis of each challenge, discussing the current state of research, potential solutions, and the implications for the future of LLMs. This article is a must-read for developers interested in the cutting-edge of generative AI and its applications in software development.

## ⌨️ **PUT DOWN THE KEYBOARD**

**Understanding Attention and the Transformer in Language Models**  
Read Time: 12 minutes  
This [article]("https://eugeneyan.com/writing/attention/") provides an intuitive explanation of the attention mechanism and the Transformer architecture, which are key components of Large Language Models (LLMs) like ChatGPT. The author explains how attention allows the model to focus on different parts of the input sequence, increasing its informational capacity and handling long-range dependencies more effectively. The Transformer architecture, which uses attention, is also discussed in detail. It allows for parallelization, making it more efficient than previous recurrent models. The article also covers the concepts of self-attention, cross-attention, multiple attention heads, and layers, and the role of skip connections. The author uses the analogy of a library to explain how attention works, making the concept more accessible to those new to it. The article concludes with a quote from Andrej Karpathy, praising the Transformer as a “general-purpose differentiable computer”.

**The Attention Mechanism in Large Language Models**  
Watch: 21 minutes  
[Luis Serrano's video]("https://www.youtube.com/watch?v=OxCpWwDCDFQ&utm_source=devthink.ai&utm_medium=referral&utm_campaign=harnessing-github-copilot-with-test-driven-development") discusses attention mechanisms, the pivotal force behind advanced language models like Transformers. He visualizes attention as words gravitating towards each other, emphasizing their role in contextual understanding. Dive deeper into his series for mathematical explanations and Transformer architectures. Explore further at llm.university.

**A Comprehensive Guide to Large Language Models**  
Read Time: 30+ articles of various reading lengths  
This [web page]("https://gist.github.com/veekaybee/be375ab33085102f9027853128dc5f0e") provides a comprehensive reading list for understanding Large Language Models (LLMs). It includes foundational papers, practical guides for training your own LLMs, discussions on algorithms, deployment considerations, and evaluation methods. The list is designed to be hype-free and focuses on practical, first-hand accounts and experiences. It covers key topics such as self-attention and transformer networks, embeddings, and the state of GPT. It also delves into the challenges and applications of LLMs, including the hard aspects often overlooked when building products with LLMs. This resource is a valuable starting point for developers looking to deepen their understanding of LLMs and leverage them in their applications.

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/devthinkai"), DM me links you would like included in a future newsletters.
