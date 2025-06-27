- a webview may be easy to reach for but it's resource intensive: https://code.visualstudio.com/api/extension-guides/webview

- For the lineage view, it needs to be a panel: https://code.visualstudio.com/api/ux-guidelines/panel

## Lineage Panel View
Use the mockup for reference to build a lineage graph that I can move around and zoom in and out on. When I click on a column it will highlight the path that column takes upstream and downstream.

Try and do this with the VS code api, but if you can't, make it a webview.

References:
- https://github.com/TobikoData/sqlmesh in the web ui and vs code extension implementations
- https://github.com/AltimateAI/vscode-dbt-power-user in the lineage implementation for vs code