
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const actionModal = new bootstrap.Modal(document.getElementById('actionModal'));
    const modalTitle = document.getElementById('actionModalLabel');
    const modalBody = document.getElementById('actionModalBody');

    const actionDetails = {
        'query-analysis': {
            title: 'User Query Analysis',
            content: 'In this step, the web agent uses natural language processing techniques to break down the user's query. It identifies key terms, understands the context, and determines the user's intent. This analysis helps the agent to formulate an effective search strategy and anticipate the type of information the user is seeking.'
        },
        'web-search': {
            title: 'Web Search',
            content: 'Based on the query analysis, the agent performs a targeted web search. It uses advanced algorithms to search across multiple reliable sources, considering factors like relevance, credibility, and recency of information. The agent may use a combination of general search engines, specialized databases, and pre-approved information sources to gather a comprehensive set of results.'
        },
        'content-extraction': {
            title: 'Content Extraction',
            content: 'Once search results are obtained, the agent employs sophisticated content extraction techniques. It parses through web pages, PDFs, and other document types to identify and extract the most relevant information. This process involves text summarization, keyword extraction, and sometimes even image or data table analysis to compile the most pertinent details related to the user's query.'
        },
        'response-generation': {
            title: 'Response Generation',
            content: 'In this critical step, the agent synthesizes the extracted information into a coherent and informative response. It uses natural language generation techniques to create a response that directly addresses the user's query. The agent structures the information logically, provides citations or sources where appropriate, and ensures that the language and complexity level are suitable for the user.'
        },
        'user-interaction': {
            title: 'User Interaction',
            content: 'The final step involves presenting the generated response to the user in an easily digestible format. The agent is prepared to handle follow-up questions, requests for clarification, or additional details. It maintains context from the previous interactions, allowing for a conversational flow. The agent can also suggest related topics or ask if the user needs more information, enhancing the overall user experience.'
        }
    };

    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const details = actionDetails[action];
            
            modalTitle.textContent = details.title;
            modalBody.innerHTML = `<p>${details.content}</p>`;
            
            actionModal.show();
        });
    });
});
