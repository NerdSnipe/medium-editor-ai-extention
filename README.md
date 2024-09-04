# AI Assistant Extension for Medium Editor

This extension adds an AI Assistant feature to [Medium Editor](https://github.com/yabwe/medium-editor), allowing users to generate AI-powered content directly within the editor.

## Installing

To use the AIAssistantExtension, you must include Medium Editor before including this extension. For example:

```html
<script src="https://cdn.jsdelivr.net/medium-editor/latest/js/medium-editor.min.js"></script>
<script src="/path/to/ai-assistant-extension.js"></script>
```

## Example

Let's say you have HTML which looks like this:

```html
<div class='editable'>
    This is an editable area. Try using the AI Assistant!
</div>
```

To add the AI Assistant feature to your Medium Editor instance, you would do the following:

```javascript
var editor = new MediumEditor('.editable', {
    toolbar: {
        buttons: ['bold', 'italic', 'underline', 'ai-assistant']
    },
    extensions: {
        'ai-assistant': new AIAssistantExtension()
    },
    openAIApiKey: 'your-openai-api-key',
    claudeApiKey: 'your-claude-api-key',
    openAISystemPrompt: 'You are a helpful assistant.',
    claudeSystemPrompt: 'You are Claude, an AI assistant created by Anthropic.'
});
```

## Config Options

* __openAIApiKey__: Your OpenAI API key for making requests to the OpenAI API.
* __claudeApiKey__: Your Claude AI API key for making requests to the Claude AI API.
* __openAISystemPrompt__: The system prompt to use when making requests to the OpenAI API.
* __claudeSystemPrompt__: The system prompt to use when making requests to the Claude AI API.

## Features

- Adds an AI Assistant button to the Medium Editor toolbar.
- Opens a dialog for entering prompts and selecting between OpenAI and Claude AI services.
- Inserts AI-generated responses into the editor.

## Customization

You can customize the appearance of the AI Assistant dialog and button by modifying the CSS in the extension file.

## Security Note

This extension is designed to keep API keys secure by storing them in the editor configuration rather than exposing them in the client-side code. However, please ensure that you're following best practices for API key management in your application.

## Minifying

The extension can be minified using your preferred JavaScript minification tool. For example, using UglifyJS:

```sh
uglifyjs ai-assistant-extension.js -c -m -o ai-assistant-extension.min.js
```

## Contributing

Contributions to improve the AI Assistant Extension are welcome. Please submit pull requests or open issues on the project's GitHub repository.

## License

[MIT License](https://opensource.org/licenses/MIT)
