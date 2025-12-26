---
title: "Enhancing RAG Systems with Rerankers: A Practical Guide"
author: Sam Keen
date: June 25, 2024
url: https://samkeen.dev/enhancing-rag-systems-with-rerankers-a-practical-guide
---

![Enhancing RAG Systems with Rerankers: A Practical Guide](/images/samkeen-dev/enhancing-rag-systems-with-rerankers-a-practical-guide-0.png)

# Enhancing RAG Systems with Rerankers: A Practical Guide

*By Sam Keen on June 25, 2024*

---

In the rapidly evolving field of AI, Retrieval-Augmented Generation (RAG) has emerged as a powerful technique for enhancing the capabilities of large language models. This post will guide you through the process of improving RAG systems using rerankers, with a focus on the FlashRank library. We'll cover the basics of RAG, explore the role and benefits of rerankers, and provide hands-on Python examples to implement and compare RAG systems with and without reranking.

## Quick recap: RAG in a Nutshell

RAG has become a game-changer in the world of generative AI, bridging the gap between vast knowledge bases and the dynamic capabilities of large language models (LLMs). But what exactly is RAG, and why has it gained so much traction?

At its core, RAG is a hybrid AI framework that combines the power of information retrieval with the fluency and contextual understanding of generative AI. Here's how it works:

1. When a user poses a query, the system first searches through a knowledge base to find relevant information.
2. This retrieved information is then fed into a large language model along with the original query.
3. The LLM uses this context to generate a response that's both informative and contextually appropriate.

![RAG Process Diagram](/images/samkeen-dev/enhancing-rag-systems-with-rerankers-a-practical-guide-0.png)

This approach offers several advantages:

* **Improved Accuracy**: By grounding responses in retrieved information, RAG systems can provide more factual and up-to-date answers.
* **Reduced Hallucination**: LLMs are less likely to generate false or misleading information when they have relevant context to work with.
* **Customizability**: Organizations can use their own knowledge bases, allowing for specialized and proprietary information to be incorporated into responses.

While RAG has proven its worth, there's always room for improvement. As we strive for more accurate and contextually relevant responses, rerankers have emerged as a crucial component in taking RAG systems to the next level.

## Leveling Up with Rerankers

### What's a Reranker, Anyway?

Imagine you're planning a trip and ask a travel agent for recommendations. They might initially pull out a stack of brochures (retrieved information) based on your request. A reranker is like a seasoned travel expert who then steps in, quickly scans through these brochures, and reorganizes them based on what they know will be most relevant and exciting for your specific journey.

In the context of RAG systems, a reranker is a specialized component that takes the initial set of retrieved documents and gives them a second, more discerning look. It's designed to understand the nuances of relevance and can often pick up on subtle connections that the initial retrieval process might miss.

### How Rerankers Enhance RAG

Rerankers bring several key benefits to RAG systems:

1. **Improved Relevance and Accuracy**: Rerankers refine the initial document ranking, ensuring that the most pertinent information reaches the LLM. This leads to more accurate and informed outputs while reducing noise.
2. **Enhanced Contextual Understanding**: By employing advanced NLP techniques, rerankers can grasp the context and intent behind a query, identifying relevant information that might not share exact keywords with the query.
3. **Specialization and Personalization**: Rerankers can be fine-tuned for specific domains or tailored to individual user preferences, improving performance in niche areas and delivering more personalized results.

### The Mechanics of Reranking

To understand how rerankers work, let's break down the process:

1. **Initial Retrieval**: The RAG system performs its standard retrieval, pulling a set of potentially relevant documents from the knowledge base.
2. **Feature Extraction**: The reranker analyzes both the query and the retrieved documents, extracting features that represent their content and relationships.
3. **Scoring**: Using these features, the reranker assigns a relevance score to each document. This score reflects how well the document matches the query's intent and content.
4. **Reordering**: Based on these scores, the documents are reordered, with the highest-scoring (most relevant) documents moved to the top of the list.
5. **Selection**: Typically, only the top N reranked documents are passed on to the LLM for the final generation step.

![Reranking Process Diagram](/images/samkeen-dev/enhancing-rag-systems-with-rerankers-a-practical-guide-1.png)

This process ensures that the LLM receives the most relevant and diverse set of information to work with when generating its response.

### Embedding vs. Reranker LLMs: Understanding the Difference

While both embedding and reranker LLMs play crucial roles in LLM systems, they serve distinct purposes:

Embedding LLMs (Bi-Encoders) generate vector representations of individual sentences or documents. These embeddings enable efficient similarity searches in vector spaces, making them ideal for initial retrieval in large datasets. However, they process sentences independently, potentially missing nuanced relationships between queries and documents.

Reranker LLMs (Cross-Encoders), on the other hand, analyze query-document pairs simultaneously. This allows them to capture complex interactions and contextual relevance more accurately. While computationally intensive for large-scale retrieval, they excel at fine-tuning relevance rankings for a smaller set of pre-retrieved documents.

In practice, combining both approaches using embedding LLMs for initial retrieval and reranker LLMs for refinement often yields the best results in RAG systems.

## Introducing FlashRank

To demonstrate the practical implementation of reranking in RAG systems, we'll focus on [FlashRank](https://github.com/PrithivirajDamodaran/FlashRank/blob/main/README.md), an ultra-lite and convenient Python library. FlashRank offers an excellent balance of performance and efficiency, making it an ideal choice for enhancing RAG systems.

Key features of FlashRank include:

1. **Ultra-lite**: No need for PyTorch or Transformers. It runs on CPU and boasts a tiny reranking model at ~4MB (there are other larger, options).
2. **Super-fast**: Reranking speed depends on the number of tokens in passages, query, and model depth.
3. **Cost-effective**: Its small footprint makes it ideal for serverless deployments, reducing costs and cold start times.
4. **Multiple model options**: Supports various models, from the tiny default model to larger, more powerful options for different use cases.

## Hands-on: Building a RAG System with FlashRank

Let's build a RAG system and see how FlashRank can improve its performance. We'll start with a basic RAG system and then enhance it with FlashRank reranking.

### Setting Up the Environment

First, set up a Python environment using your preferred method, then install the necessary libraries:

```python
pip install langchain openai flashrank python-dotenv faiss-cpu
```

We'll be using LangChain for our RAG pipeline, OpenAI for embeddings and the language model, FlashRank for reranking, and FAISS for our vector store.

Add a `.env` file with your OpenAI API key

```python
# file: .envOPENAI_API_KEY={{you API key}}
```

### RAG Without Rerankers: The Baseline

Let's set up a basic RAG system using LangChain:

```python
from langchain_openai import OpenAIEmbeddings, ChatOpenAIfrom langchain_community.vectorstores import FAISSfrom langchain.text_splitter import CharacterTextSplitterfrom langchain.chains import RetrievalQAfrom dotenv import load_dotenv# Load environment variables from .env fileload_dotenv()# For this example, we'll use a small set of documents about the benefits# of exercise. In a real-world scenario, your knowledge base would # be much larger and more diverse.documents = [ "Regular exercise improves cardiovascular health and reduces the risk of heart disease.", "Exercise increases muscle strength and bone density, reducing the risk of osteoporosis.", "Physical activity boosts mood and reduces symptoms of depression and anxiety.", "Regular exercise can help maintain a healthy weight and improve metabolism.", "Exercise improves cognitive function and may reduce the risk of neurodegenerative diseases.", "Consistent physical activity can lower blood pressure and improve cholesterol levels.", "Exercise enhances insulin sensitivity, reducing the risk of type 2 diabetes.", "Regular workouts can improve sleep quality and duration.", "Physical activity strengthens the immune system, potentially reducing the risk of infections.", "Exercise can increase energy levels and reduce fatigue in daily life."]# Create a vector storetext_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)texts = text_splitter.create_documents(documents)for idx, text in enumerate(texts): text.metadata["id"] = idx # Add an ID to each document for easy reference# Create embeddings and store them in a FAISS indexembedding = OpenAIEmbeddings()vectorstore = FAISS.from_documents(texts, embedding)# Set up the base retriever# We're retrieving the top 5 most similar documentsretriever = vectorstore.as_retriever(search_kwargs={"k": 5})# Set up the language modelllm = ChatOpenAI(temperature=0) # Using temperature=0 for more consistent outputs# Helper function to print documentsdef pretty_print_docs(docs): print(f"\n{'-' * 100}\n".join([f"Document {doc.metadata['id']}:\n\n{doc.page_content}" for doc in docs]))# Create a question-answering chainqa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)# Test the systemquery = "What are the long-term benefits of regular exercise?"result = qa_chain.invoke(query)print("RAG without reranking:")print(result['result'])print("\nRetrieved documents:")pretty_print_docs(retriever.invoke(query))
```

In this baseline example, we're creating a simple RAG system:

1. We split our documents (even though not needed with this sample data), and create embeddings using OpenAI's model.
2. These embeddings are stored in a FAISS vector store for efficient similarity search.
3. We set up a retriever that will fetch the top 5 most similar documents for a given query.
4. A question-answering chain is created using the retriever and a ChatGPT model.
5. We test the system with a query about the long-term benefits of exercise.

The output will show the generated answer followed by the documents that were retrieved and used as context. Notice how the retrieval is based solely on vector similarity, which might not always capture the nuances of relevance.

```python
RAG without reranking:The long-term benefits of regular exercise include improved cardiovascular health, reduced risk of heart disease, increased work productivity and creativity, enhanced cognitive function, reduced risk of neurodegenerative diseases, increased muscle strength and bone density, and potential management of various health conditions like arthritis, fibromyalgia, and chronic fatigue syndrome.Retrieved documents:Document 0:Regular exercise improves cardiovascular health and reduces the risk of heart disease. Studies show that 30 minutes of moderate exercise five times a week can significantly lower the risk of heart attacks and strokes.----------------------------------------------------------------------------------------------------Document 6:The benefits of exercise extend beyond physical health, potentially improving work productivity and creativity. Some companies are now incorporating exercise breaks into the workday to boost employee well-being and performance.----------------------------------------------------------------------------------------------------Document 4:Exercise improves cognitive function and may reduce the risk of neurodegenerative diseases. Research suggests that regular physical activity can enhance memory, increase focus, and potentially delay the onset of conditions like Alzheimer's.----------------------------------------------------------------------------------------------------Document 1:Exercise increases muscle strength and bone density, reducing the risk of osteoporosis. Weight-bearing exercises and resistance training are particularly effective for maintaining strong bones as we age.----------------------------------------------------------------------------------------------------Document 13:Exercise can be an effective complementary treatment for various health conditions. For example, studies have shown that regular physical activity can help manage symptoms of arthritis, fibromyalgia, and chronic fatigue syndrome.
```

### Evolving to RAG with FlashRank

Now, let's enhance our system with FlashRank reranking:

```python
from langchain.retrievers import ContextualCompressionRetrieverfrom langchain_community.document_compressors import FlashrankRerankfrom langchain_openai import OpenAIEmbeddings, ChatOpenAIfrom langchain_community.vectorstores import FAISSfrom langchain.text_splitter import CharacterTextSplitterfrom langchain.chains import RetrievalQAfrom dotenv import load_dotenv################################# ################################## Same code as no-reranker exampleload_dotenv()documents = [ "Regular exercise improves cardiovascular health and reduces the risk of heart disease.", "Exercise increases muscle strength and bone density, reducing the risk of osteoporosis.", "Physical activity boosts mood and reduces symptoms of depression and anxiety.", "Regular exercise can help maintain a healthy weight and improve metabolism.", "Exercise improves cognitive function and may reduce the risk of neurodegenerative diseases.", "Consistent physical activity can lower blood pressure and improve cholesterol levels.", "Exercise enhances insulin sensitivity, reducing the risk of type 2 diabetes.", "Regular workouts can improve sleep quality and duration.", "Physical activity strengthens the immune system, potentially reducing the risk of infections.", "Exercise can increase energy levels and reduce fatigue in daily life."]text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)texts = text_splitter.create_documents(documents)for idx, text in enumerate(texts): text.metadata["id"] = idx embedding = OpenAIEmbeddings()vectorstore = FAISS.from_documents(texts, embedding)retriever = vectorstore.as_retriever(search_kwargs={"k": 5})query = "Can exercise increase longevity"llm = ChatOpenAI(temperature=0)def pretty_print_docs(docs): print(f"\n{'-' * 100}\n".join([f"Document {doc.metadata['id']}:\n\n{doc.page_content}" for doc in docs]))################################################################### Set up FlashRank rerankercompressor = FlashrankRerank()compression_retriever = ContextualCompressionRetriever(base_compressor=compressor, base_retriever=retriever)# Create a new QA chain with the reranking retrieverqa_chain_with_rerank = RetrievalQA.from_chain_type(llm=llm, retriever=compression_retriever)# Test the enhanced systemprint("RAG with FlashRank reranking:")result_with_rerank = qa_chain_with_rerank.invoke(query)print(result_with_rerank['result'])print("\nReranked documents:")pretty_print_docs(compression_retriever.invoke(query))
```

In this enhanced version:

1. We introduce FlashRank as a document compressor within a ContextualCompressionRetriever.
2. The ContextualCompressionRetriever first uses our base retriever to get documents, then applies FlashRank to rerank them.
3. We create a new QA chain using this enhanced retriever.
4. We test the system with the same query as before.

The output will again show the generated answer and the retrieved documents. However, you should notice that:

* The order of the documents might be different, reflecting FlashRank's reranking.
* The answer might be more focused or relevant, as it's based on better-ranked input documents.

```python
RAG with FlashRank reranking:The long-term benefits of regular exercise include improved cardiovascular health, reduced risk of heart disease, lower risk of heart attacks and strokes, enhanced cognitive function, potential reduction in the risk of neurodegenerative diseases like Alzheimer's, improved memory, increased focus, and potentially delayed onset of cognitive decline. Additionally, regular exercise can improve work productivity and creativity, leading to overall better well-being and performance.Reranked documents:Document 0:Regular exercise improves cardiovascular health and reduces the risk of heart disease. Studies show that 30 minutes of moderate exercise five times a week can significantly lower the risk of heart attacks and strokes.----------------------------------------------------------------------------------------------------Document 4:Exercise improves cognitive function and may reduce the risk of neurodegenerative diseases. Research suggests that regular physical activity can enhance memory, increase focus, and potentially delay the onset of conditions like Alzheimer's.----------------------------------------------------------------------------------------------------Document 6:The benefits of exercise extend beyond physical health, potentially improving work productivity and creativity. Some companies are now incorporating exercise breaks into the workday to boost employee well-being and performance.
```

## Comparing Results

It's important to note that the dataset we're using here is a small, curated set of documents for demonstration purposes. In real-world applications, knowledge bases are typically much larger and more diverse, which is where rerankers truly shine.

While the benefits might not be as dramatic in our limited example, rerankers like FlashRank offer significant advantages in larger-scale applications. You are encouraged to integrate a reranker on one of your real datasets and make comparisons. In doing so, ask these questions:

1. The content of the answers: Is the reranked version more comprehensive or accurate?
2. The order of the retrieved documents: How has FlashRank changed the priority?
3. The relevance of each retrieved document to the query: Are the top documents in the reranked version more on-topic?

By comparing these aspects, you can see how a reranker improves the RAG system's performance by providing more relevant context to the language model.

## Conclusion

Rerankers like FlashRank represent a significant advancement in RAG systems, addressing the crucial challenge of delivering the most relevant information to language models. By integrating FlashRank, we've seen how a lightweight addition can improve output quality without requiring massive computational resources.

For AI practitioners and developers, the key takeaways are:

1. Prioritize context quality in your RAG pipelines.
2. Consider efficiency alongside performance in real-world applications.
3. Stay flexible and adaptable as AI continues to evolve.

As you build and refine your AI systems, remember that each component, including rerankers, plays a vital role in creating more intelligent, context-aware applications. We encourage you to experiment with FlashRank in your projects and contribute to the ongoing evolution of AI technology.