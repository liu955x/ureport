/**
 * Created by Jacky.Gao on 2017-10-12.
 */
import Container from './Container.js';
export default class CanvasContainer extends Container{
    constructor(canvas){
        super();
        this.container=canvas;
        this.container.uniqueId();
        this.id=this.container.prop("id");
    }
    addElement(element){
        this.container.append(element);
    }
    toJSON(){
        var json={};
        var children=[];
        $.each(this.getChildren(),function(index,child){
            children.push(child.toJSON());
        });
        json.children=children;
        return json;
    }
    getType(){
        return "Canvas";
    }
    toHtml(){
        var div=$("<div class='container' style='width: 100%;;'>");
        var row=$("<div class='row'>");
        var col=$("<div class='col-md-12'>");
        row.append(col);
        div.append(row);
        this.buildChildrenHtml(col);
        return div;
    }
}