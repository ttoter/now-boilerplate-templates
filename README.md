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

## Fun fact

There are two ways to include code into your fluent calls. For example, the ui page located in `/src/fluent/up-pages/incident-manager.now.ts` on `line 3 & 10`

```JavaScript
import incidentPage from '../../client/index.html'
...
html: incidentPage,
```
Whatever content in index.html will be put into the ui-page script field. If you look at the ui page record, `/dist/app/update/sys_ui_page_96a35eaa241143368505e040b9b4484a.xml`. You will see a big disclaimer about modify the record directly. Changes dont automatically sync.

**HOWEVER**

If you simply use the now include (no import statement needed), then any direct changes to the record, the html file is automatically updated (after you sync it). This be is a much better choice than appove...
```JavaScript
Now.include('index.html'),
```