import {Controllers} from "./Controllers.js";

export class DocsController extends Controllers {
  getTree() {
    this.response.json({data: "Hello world"})
  }

  getPage() {
    this.response.json({data: this.params})
  }
}