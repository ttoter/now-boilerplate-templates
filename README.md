# now-boilerplate-templates

Added bd run script that combinds the build and install commands
```bash
# calling bd calls: now-sdk build && now-sdk install
npm run bd
```

Added keyboard shortcut to run the command automaticaly

```json
{
    "key": "ctrl+'",
    "command": "workbench.action.terminal.sendSequence",
    "args": {
        "text": "npm run bd\u000D"
    }
}
```