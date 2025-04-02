import { QueryBuilderDndWithoutProvider } from "@react-querybuilder/dnd";
import React from "react";
import { QueryBuilder } from "react-querybuilder";
import * as ReactDnD from "react-dnd";
import * as ReactDndHTML5Backend from "react-dnd-html5-backend";
import "react-querybuilder/dist/query-builder.css";
import "./App.css";

const App = () => {
  return (
    <ReactDnD.DndProvider backend={ReactDndHTML5Backend.HTML5Backend}>
      <QueryBuilderDndWithoutProvider
        dnd={{ ...ReactDnD, ...ReactDndHTML5Backend }}
      >
        <QueryBuilder />
      </QueryBuilderDndWithoutProvider>
    </ReactDnD.DndProvider>
  );
};

export default App;
