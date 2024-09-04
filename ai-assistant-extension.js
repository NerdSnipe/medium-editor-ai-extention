const AIAssistantExtension = MediumEditor.Extension.extend({
    name: 'ai-assistant',

    init: function () {
        this.button = this.document.createElement('button');
        this.button.classList.add('medium-editor-action');
        this.button.innerHTML = '<i class="fa fa-robot"></i>';
        this.button.title = 'AI Assistant';

        this.on(this.button, 'click', this.handleClick.bind(this));
    },

    getButton: function () {
        return this.button;
    },

    handleClick: function (event) {
        event.preventDefault();
        event.stopPropagation();

        this.showAIAssistantDialog();
    },

    showAIAssistantDialog: function () {
        var dialog = this.document.createElement('div');
        dialog.className = 'medium-editor-ai-assistant-dialog';
        dialog.innerHTML = `
                <textarea placeholder="Enter your prompt here..."></textarea>
                <div class="ai-service-selection">
                    <label>
                        <input type="radio" name="ai-service" value="openai" checked> OpenAI
                    </label>
                    <label>
                        <input type="radio" name="ai-service" value="claude"> Claude AI
                    </label>
                </div>
                <button class="submit-button"><i class="fa fa-paper-plane"></i> Submit</button>
            `;

        var textarea = dialog.querySelector('textarea');
        var submitButton = dialog.querySelector('.submit-button');

        this.on(submitButton, 'click', function () {
            var selectedService = dialog.querySelector('input[name="ai-service"]:checked').value;
            this.submitToAI(textarea.value, selectedService);
            dialog.parentNode.removeChild(dialog);
        }.bind(this));

        document.body.appendChild(dialog);
        textarea.focus();
    },

    submitToAI: function (prompt, service) {
        // For demo purposes, we'll just insert a mock response
        var mockResponse = "This is a mock AI response for the " + service + " service. Your prompt was: " + prompt;
        this.insertAIResponse(mockResponse);

        // In a real implementation, you would make an API call here
        // var apiKey, apiUrl, headers, body;
        // if (service === 'openai') {
        //     // OpenAI API setup
        // } else if (service === 'claude') {
        //     // Claude AI API setup
        // }
        //
        // fetch(apiUrl, {
        //     method: 'POST',
        //     headers: headers,
        //     body: body
        // })
        // .then(response => response.json())
        // .then(data => {
        //     var aiResponse = service === 'openai' ? data.choices[0].message.content : data.content[0].text;
        //     this.insertAIResponse(aiResponse);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     // Handle error (e.g., show error message to user)
        // });
    },

    insertAIResponse: function (response) {
        var editable = document.querySelector('.editable');
        var responseElement = this.document.createElement('p');
        responseElement.textContent = response;
        editable.appendChild(responseElement);

        // Manually trigger MediumEditor's content changed event
        var event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        editable.dispatchEvent(event);
    }
});

MediumEditor.extensions.aiAssistant = AIAssistantExtension;
