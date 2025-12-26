---
title: "What is Hugging Face"
author: Sam Keen
date: July 11, 2023
url: https://samkeen.dev/what-is-hugging-face
---

![What is Hugging Face](/images/samkeen-dev/what-is-hugging-face-0.png)

# What is Hugging Face

*By Sam Keen on July 11, 2023*

---

![The Hugging Face logo](/images/samkeen-dev/what-is-hugging-face-0.png)

#### Hugging Face has done for Machine learning & Generative AI what GitHub did for git source control; **10Xd its discoverability**

## Origin story

In 2016, the HuggingFace was established by French business enthusiasts, Clment Delangue, Julien Chaumond, and Thomas Wolf. Initially, they focused on creating a chatbot application intended for the teenage audience. However, following the decision to make the chatbots model open-source, they pivoted the business and began concentrating on becoming a community-driven ecosystem for building and sharing state-of-the-art NLP models.

## Hugging Face Today

HuggingFace has since emerged as a leader in the ML domains including Generative AI, offering a range of services and tools that facilitate the development and deployment of Machine Learning models. Hugging Face makes it easy to share tools, models, model weights, and datasets between other practitioners. The company is driven by the principles of open-source and collaboration, making it a go-to platform for Machine Learning enthusiasts and professionals.

At the center of Hugging Face is what is referred to as the Hub. As of July/2023, the Hugging Face Hub hosts more than;

* 120,000 models
* 20,000 datasets
* 50,000 demonstration applications

All of which are open source and freely accessible. This online environment encourages seamless collaboration and collective ML development. In the hub anyone can delve into, experiment with, team up and craft technology using ML.

## Hugging Face offerings

### Models

Within Hugging Face the [Model Hub](https://huggingface.co/models) is a repository of community contributed pre-trained models over a variety of ML tasks including NLP, computer vision, and audio. The Hub makes it easy to find and use models for a variety of tasks, such as text classification, question answering, and summarization.

Each model displays a very informative model card, giving you all the needed metadata about the model and even allowing you to interact with the model.

![A card card on hugging face showing the attributes of the Stable Diffusion 1.2 model.](/images/samkeen-dev/what-is-hugging-face-1.jpeg)

The model card for the Stable Diffusion 2.1 model

One way to easily utilize these models is through the Hugging Face Transformers library. Additionally, there is an [expanding list](https://huggingface.co/docs/hub/models-libraries) of open-source integrations available.

![Python code showing the use of the Hugging Face transformers library.](/images/samkeen-dev/what-is-hugging-face-2.jpeg)

Using the HF transformers library to work with the GPT2 LLM

### Datasets

[Datasets](https://huggingface.co/datasets) is a collection of community-curated and popular research datasets covering Audio, Computer Vision, and NLP tasks. Hugging Face has created the hub site and tools to enable ease in accessing and sharing datasets.

With the provided Hugging Face python libraries, utilizing datasets couldnt be easier

![Python code using the Hugging Face datasets library to load an audio dataset. ](/images/samkeen-dev/what-is-hugging-face-3.jpeg)

loading an audio dataset with a HF provided library

Jump into the [Dataset Quickstart](https://huggingface.co/docs/datasets/quickstart) and start building today!

### Spaces

[**Spaces**](https://huggingface.co/spaces) is a platform for hosting and sharing ML demo apps. They allow you to create your own ML portfolio, showcase your projects at conferences or to stakeholders, and work collaboratively with other people in the ML ecosystem.

Spaces are built on top of Streamlit and Gradio, two popular Python libraries for building ML apps. This means that you can use Spaces to create a wide variety of ML apps, from simple text classification apps to complex image recognition apps.

Spaces are also easy to use. You can create a new Space in just a few minutes, and you can deploy your app with a single click. Spaces are also free to use, so theres no risk in trying them out.

Here are some examples of Spaces that have been created by the community:

* [**DALL-E mini**](https://huggingface.co/spaces/Manjushri/Dall-E-Mini)**:** A text-to-image diffusion model that can be used to create realistic images from text descriptions.
* [**Bark**](https://huggingface.co/spaces/suno/bark)**:** A text to audio AI model that can generate highly realistic, multilingual speech as well as other audio including music, background noise and simple sound effects.
* [**Open LLM Leaderboard**](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)**:** A leaderboard that tracks the performance of different LLM models on a variety of tasks.

These are just a few examples of the many Spaces that have been created by the community. If you are interested in creating your own Space, you can learn more on the Hugging Face website.

## Wrapping up

Here we have just skimmed the surface of what Hugging Face offers. Due to Hugging Faces focus on usability though, this is all you need to get started, but rest assured, they also have a great set of [documentation](https://huggingface.co/docs) to help you along the way.

To dive deeper on how to leverage Hugging Face, take their [free online course](https://huggingface.co/learn/nlp-course/chapter1/1)

If you found this helpful, feel free to subscribe to my [weekly newsletter](https://devthinkai.beehiiv.com/) for the latest tools and trends in generative AIcurated specifically to empower developers like you.