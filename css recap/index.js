document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const chatbotIcon = document.getElementById('chatbot-icon');
  const chatbotWindow = document.getElementById('chatbot-window');
  const closeButton = document.getElementById('close-button');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chatbot-messages');

  // Toggle chat window visibility
  chatbotIcon.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
  });

  closeButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
  });

  // Handle sending messages
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
      addMessage(message, 'user');
      messageInput.value = '';

      // Show typing indicator
      const typingIndicator = addTypingIndicator();

      // Call AI API
      callDeepseekAPI(message)
        .then(aiResponse => {
          // Remove typing indicator and add AI response
          chatMessages.removeChild(typingIndicator);
          addMessage(aiResponse, 'bot');
        })
        .catch(error => {
          chatMessages.removeChild(typingIndicator);
          addMessage("Sorry, I encountered an error. Please try again later.", 'bot');
          console.error('API Error:', error);
        });
    }
  }

  // Send message on button click or Enter key
  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // --- Core Issue & Fix Here ---
  // Add a message to the chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`; // Add 'user' or 'bot' class to the messageDiv

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    // No need to add 'sender' class here, as 'message.user .message-content' handles it in CSS
    contentDiv.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = getCurrentTime();

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeDiv); // Append timeDiv directly to messageDiv
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  // --- End Core Issue & Fix ---

  // Add typing indicator
  function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';

    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return typingDiv;
  }

  // Get current time in HH:MM format
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Call Deepseek API
  async function callDeepseekAPI(message) {
    const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
    const API_KEY = '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'; // Your OpenRouter key

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat', // Using DeepSeek via OpenRouter
          messages: [{
            role: 'system',
            content: 'You are a helpful Git/GitHub assistant. Provide clear, concise explanations about Git commands, workflows, and best practices.'
          }, {
            role: 'user',
            content: message
          }],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling API:', error);
      throw error;
    }
  }
});