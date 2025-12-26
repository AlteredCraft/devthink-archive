---
title: 🤗 What is Hugging Face
author: Sam Keen
date: July 13, 2023
url: https://devthink.ai/p/what-is-hugging-face-plus-code-interpreter
scraped_at: 2025-07-29T19:29:50.895001
---

# 🤗 What is Hugging Face

*By Unknown on July 13, 2023*

---

### **Essential AI Topics for Software Devs,** **Minus the Hype**

**In this edition**

- 🔍️ Focus on Hugging Face 🤗
- Latests AI tool and trends for software developers
- Top tutorials & learning resources

## 🔎 Focus on: What is Hugging Face 🤗

*Hugging Face has done for Machine learning and Generative AI what GitHub did for git source control; 10X’d the discoverability and usability of their given domains*

HuggingFace has emerged as a leader in the Machine Learning (ML) domains including Generative AI, offering a range of services and tools that facilitate the development and deployment of ML models. Hugging Face makes it easy to share tools, models, model weights, and datasets between other practitioners. The company is driven by the principles of open-source and collaboration, making it a go-to platform for ML enthusiasts and professionals.

At the center of Hugging Face is what is referred to as the Hub. As of July/2023, the Hugging Face Hub hosts more than;

- 120,000 **models**
- 20,000 **datasets**
- 50,000 demonstration applications (**spaces**)

All of which are open source and freely accessible. This online environment encourages seamless collaboration and collective ML development. In the hub anyone can delve into, experiment with, team up and craft technology using ML.

### Models

Within Hugging Face the [Model Hub]("https://huggingface.co/models") is a repository of community contributed pre-trained models over a variety of ML tasks including NLP, computer vision, and audio. The Hub makes it easy to find and use models for a variety of tasks, such as text classification, question answering, and summarization.

Each model displays a very informative model card, giving you all the needed metadata about the model and even allowing you to interact with the model.



The model card for stable-diffusion 2.1

One way to easily leverage these models in with the Hugging Face provided Transformers library, but there is also a [growing list]("https://huggingface.co/docs/hub/models-libraries") of open source integrations.



### Datasets

[Datasets]("https://huggingface.co/datasets") is a collection of community-curated and popular research datasets covering Audio, Computer Vision, and Natural Language Processing (NLP) tasks. Hugging Face has created the hub site and tools to enable ease in accessing and sharing datasets.

With the provided Hugging Face python libraries, utilizing datasets couldn’t be easier.



Jump into the [Dataset Quickstart]("https://huggingface.co/docs/datasets/quickstart") and start building today!

### Spaces

[Spaces]("https://huggingface.co/spaces") is a platform for hosting and sharing ML demo apps. They allow you to create your own ML portfolio, showcase your projects at conferences or to stakeholders, and work collaboratively with other people in the ML ecosystem.

Spaces are built on top of Streamlit and Gradio, two popular Python libraries for building ML apps. This means that you can use Spaces to create a wide variety of ML apps, from simple text classification apps to complex image recognition apps.

Spaces are also easy to use. You can create a new Space in just a few minutes, and you can deploy your app with a single click. Spaces are also free to use, so there's no risk in trying them out.

Here are some examples of Spaces that have been created by the community:

- [DALL-E mini]("https://huggingface.co/spaces/Manjushri/Dall-E-Mini")**:** A text-to-image diffusion model that can be used to create realistic images from text descriptions.
- [Bark]("https://huggingface.co/spaces/suno/bark")**:** A text to audio AI model that can generate highly realistic, multilingual speech as well as other audio - including music, background noise and simple sound effects.
- [Open LLM Leaderboard]("https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard")**:** A leaderboard that tracks the performance of different LLM models on a variety of tasks.

These are just a few examples of the many Spaces that have been created by the community. If you are interested in creating your own Space, you can learn more on the Hugging Face website.

## Wrapping up

With Hugging Face’s focus on usability, this brief overview is really all you need to get started, but rest assured, they also have a great set of [documentation]("https://huggingface.co/docs") to help along the way.

### A few resources to dive deeper

- Hugging Face offers their own [free online course]("https://huggingface.co/learn/nlp-course/chapter1/1") [Courses]
- [An Introduction To HuggingFace Transformers for NLP]("https://wandb.ai/int_pb/huggingface/reports/An-Introduction-To-HuggingFace-Transformers-for-NLP--VmlldzoyOTgzMjI5") [blog post]
- [Hugging Face Transformers Agent | LangChain comparisons]("https://www.youtube.com/watch?v=rn4eIxuxx2g&utm_source=devthink.ai&utm_medium=referral&utm_campaign=what-is-hugging-face") [Watch]
- [Hugging Face Datasets #1 | Hosting Your Datasets (for Beginners)]("https://youtu.be/-S20nblUuNw") [Watch]

##

🧰 **Software Dev AI tools and trends**

**ChatGPT's Code Interpreter: A Comprehensive Overview**  
The new ChatGPT Code Interpreter plugin offers numerous benefits for users, particularly in the realm of data science and software development. It allows users to run Python code in a sandboxed environment, ensuring safe experimentation without affecting their computer or data. [In this article]("https://www.oneusefulthing.org/p/what-ai-can-do-with-a-toolbox-getting"), Ethan Mollick covers a long list of use cases.

**ChatDB: Augmenting LLMs with Databases as Their Symbolic Memory**



LLMs with symbolic memory can perform complex reasoning tasks. This brief propose a new approach that [uses SQL databases as symbolic memory]("https://chatdatabase.github.io/").

**Unity Muse and Sentis: AI-powered tools for game developers**  
Unity has announced two new AI-powered tools for game developers: [Unity Muse and Unity Sentis]("https://blog.unity.com/engine-platform/introducing-unity-muse-and-unity-sentis-ai"). Muse is an AI platform that accelerates the creation of real-time 3D applications and experiences, while Sentis allows developers to embed neural networks in their builds to enable previously unimaginable real-time experiences.

**Claude 2: A More Powerful and Conversational AI Assistant**  
[Claude 2]("https://www.anthropic.com/index/claude-2") is a new AI assistant from Anthropic that is more powerful and conversational than its predecessor. Claude 2 can help with a variety of tasks, including coding, math, and reasoning.

**Tinyvector: A Tiny, Fast, and Open Source Vector Embedding Database**  
[Tinyvector]("https://github.com/0hq/tinyvector") is a tiny, fast, and open source vector embedding database built with SQLite and PyTorch. It is extremely easy to customize, under 500 lines of code, and comparable in speed to advanced vector databases when it comes to speed on small to medium datasets. Tinyvector stores all indexes in memory for fast querying, and is very easy to scale up to 100 million+ vector dimensions without issue.

**GPTCache: A Library for Creating Semantic Cache for LLM Queries**



[GPTCache]("https://github.com/zilliztech/GPTCache") is a library for creating semantic caches for large language model (LLM) queries. It can reduce the latency of LLM queries by 100x, making it ideal for applications where LLMs are used in real-time. GPTCache is easy to use and can be customized to fit the specific needs of your application.

**AI to curate your git Pull Requests**  
[Codium-ai’s pr-agent]("https://github.com/Codium-ai/pr-agent") is an open-source Pull Request agent that provides an overview of the pull request (with a focus on the PR’s commits). It gives developers and repo maintainers information to expedite the PR approval process such as the PR’s main theme, whether the PR follows the repo guidelines, whether it is focused, etc.

**Handle OpenAI Errors in Production**  
[reliableGPT]("https://github.com/BerriAI/reliableGPT") is a Python package that helps developers avoid errors when using OpenAI's GPT-3 API. The package provides a number of features, such as retrying requests, handling rate limits, and detecting invalid API keys.

**Superdash - AI for your workflows**  
[Superdash]("https://superdashhq.com/") is a tool that helps you implement AI in your workflows. It offers ready-to-use components in a sort of plug and play mentality to easily develop and manage an AI-powered apps. Wide selection of LLMs, train on multiple formats of data, and built in monitoring of AI performance.

**AI Coding Mentor on Slack**  
[Taiga]("https://asktaiga.ai/") is not just another chatbot, it offers real-time feedback, guidance, and tailored recommendations to help you learn software engineering in a fun and interactive way. Taiga can also act as an interviewer and help you prepare for coding interviews.

**Pair programming with AI**  
The article “[Coding with AI: Tips and best practices from developers]("https://www.infoworld.com/article/3700771/coding-with-ai-developer-tips-and-best-practices.html")” talks about how AI pair programming could be a coder’s dream or a nightmare in the making. Nine developers talk shop about how they’re using generative AI today

🏫 **Read/Listen/Watch: Learn**  
*Increase the breadth and depth of your AI knowledge*

**LangChain: Chat with Your Data**  
[course: 1hr]  
In this [new course from DeepLearningAI]("https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/") learn how to build a chat with data app with LangChain from the CEO at LangChain; Harrison Chase

**What’s AI Podcast**  
[Listen, ~1hr]  
Louis Bouchard is an AI researcher and the host of the [What’s AI Podcast]("https://www.louisbouchard.ai/podcast/"). The goal of this podcast is to share his longer-form audio recordings, such as interviews, and exciting discussions with experts in the field, to demystify what they do and what they work on.

**Learn AI topics with Google cloud**  
[10, 1 day paths]  
Dive into a [Google cloud curated learning path]("https://www.cloudskillsboost.google/journeys/118"). The learning path guides you through a curated collection of content on generative AI products and technologies, from the fundamentals of Large Language Models to how to create and deploy generative AI solutions on Google Cloud

**Thanks for reading and we will see you next time**

Follow me on [twitter]("https://twitter.com/devthinkai"), DM me links you would like included in a future newsletters.
