I created the modal window, following these instructions

```
Create modal dialog component (without using a component library).
Requirements:
1) Component is dynamic and allow to display any content in body.
2) Caption and action buttons must be configurable.
3) Develop possibility to call modal dialog dynamically from code. e.g. modal.open(...) With possibility to handle dialog result
4) Add animation effects when dialog is opening/closing
5) At least 5 unit test
6) Show couple of various examples how dialog can be used/what it can display, including nested dialogs
7) There are no specific requirements for design, but it must have a pretty look

You can use Angular 7-8
```


Used: Angular 8

In current aplication App component call two modals component, and you can send inside header, footer and body. Was added posibility to detect submit or cancel, from outside. Was created 5 new tests and 2 default which check that component was created. Was added opacity animation and styles similar to Bootstrap. Was created methods open() and close() which can be called from outside.
