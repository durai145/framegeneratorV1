define(["exports", "mapper", "toaster"], function (exports, Mapper, toaster) {
    console.log("Frame Generator index.js")
    exports.CreateField = function (frameObj) {
      //  toaster.pop('success','this', "test");
        console.log(Mapper.mapper[frameObj.HtmlType]);
        return Mapper.mapper[frameObj.HtmlType].createField(frameObj);
    }

});
/*
define(function (require, exports, module) {
    var FieldMapper = require("Mapper");
    exports.CreateField = function (frameObj) {
        console.log(FieldMapper.mapper[frameObj.HtmlType]);
        return FieldMapper.mapper[frameObj.HtmlType].createField(frameObj);
    }
    var USS = function() {
        
    }
    USS.prototype.CreateField = function (fieldObj, USSTableRow) {
        var rtString = "";
        var fldStr = "";
        var jsfunc = "";
        try {
            pre_cust_CreateField(fieldObj, USSTableRow)
        } catch (e) {}

        //try
        {
            if (fieldObj.htmlType == "") {
                alert("[" + fieldObj.name + "] " + FLDFCF00001);
                return false;
            } else if (fieldObj.dataType == "") {
                alert(FLDFCF00002);
                return false;
            } else if (fieldObj.groupId == "") {
                alert(FLDFCF00003);
                return false;
            } else {
                this.tableBodyElmntDesc = document.createElement("span");
                this.tableBodyElmntScript = document.createElement("script");
                this.tableBodyTr = document.createElement("div");
                this.tableBodyTr.className = "row tableRow";
                if (fieldObj.parentHtmlType == 'HEADER' || fieldObj.parentHtmlType == 'TABLE') {
                    this.tableBodyTd1 = document.createElement("div");
                    this.tableBodyTd1.id = "td";
                    this.tableBodyTd1.className = 'col-sm-' + this.ceil(12 / (fieldObj.maxCol * 1)) + ' ' + 'col-md-' + this.ceil(12 / (fieldObj.maxCol * 1)) + ' col-xs-12 ';
                    this.tableBodyTd2 = document.createElement("div");
                    this.tableBodyTd2.id = "td";
                    this.tableBodyTd2.className = 'col-sm-' + this.ceil(12 / (fieldObj.maxCol * 1)) + ' ' + 'col-xs-12  col-md-' + +this.ceil(12 / (fieldObj.maxCol * 1));
                } else {
                    this.tableBodyTd1 = document.createElement("div");
                    this.tableBodyTd1.id = "td";
                    this.tableBodyTd1.className = 'col-md-' + parseInt(12 / (fieldObj.maxCol * 2)) + ' col-sm-' + parseInt(12 / (fieldObj.maxCol * 2)) + ' ' + 'col-xs-12';
                    this.tableBodyTd2 = document.createElement("div");
                    this.tableBodyTd2.id = "td";
                    this.tableBodyTd2.className = 'col-md-' + parseInt(12 / (fieldObj.maxCol * 2)) + ' col-sm-' + parseInt(12 / (fieldObj.maxCol * 2)) + ' ' + 'col-xs-12';

                }
                if ((fieldObj.dataType == 'HIDDEN') || (fieldObj.dataType == 'XMLCONTAINER') || (fieldObj.dataType == 'BUTTON')) {
                    //don't include the lable for hidden
                    ;
                } else {
                    this.tableBodyLabel = FieldMapper.mapper["LABEL"].createField(frameObj);
                    /*
                    this.tableBodyLabel = document.createElement("label");
                    if (fieldObj.parentHtmlType == 'TABLE') {
                        this.tableBodyLabel.className = 'cclabel';
                    } else {
                        this.tableBodyLabel.className = 'chlabel';
                    }
                    this.tableBodyLabel.setAttribute("for", fieldObj.name);
                    this.tableBodyLabelContent = document.createTextNode(fieldObj.label);
                    this.tableBodyMndf = document.createElement("span");
                    this.tableBodyMndf.id = "mndf";
                    this.tableBodyMndf.className = 'mandatory';
                    this.tableBodyLabelContentMndf = document.createTextNode("*");
                    this.tableBodyMndf.appendChild(this.tableBodyLabelContentMndf);
                    this.tableBodyLabel.appendChild(this.tableBodyLabelContent);
                    if (fieldObj.mndf == 'Y') {
                        this.tableBodyLabel.appendChild(this.tableBodyMndf);
                    }
                    *//*

                }
                if (fieldObj.htmlType == 'LIST') {

                    this.tableBodySelect = document.createElement("select");
                    this.tableBodySelect.className = 'clabel';
                    this.tableBodySelect.name = fieldObj.name;
                    this.tableBodySelect.for = fieldObj.name;
                    var inpStrArr = fieldObj.listVal.split('|');
                    for (var i = 0; i < inpStrArr.length; i += 2) {
                        if (fieldObj.dflt == inpStrArr[i]) {
                            this.tableBodyOption = document.createElement("option");
                            this.tableBodyOption.value = inpStrArr[i];
                            this.tableBodyOption.setAttribute('selected', 'true');
                            this.tableBodyOption.appendChild(document.createTextNode(inpStrArr[i + 1]));
                            this.tableBodyOption.id = "option";

                        } else {
                            this.tableBodyOption = document.createElement("option");
                            this.tableBodyOption.value = inpStrArr[i];
                            this.tableBodyOption.appendChild(document.createTextNode(inpStrArr[i + 1]));
                            this.tableBodyOption.id = "option";

                        }
                        this.tableBodySelect.appendChild(this.tableBodyOption);

                    }
                    this.tableBodyElmnt = this.tableBodySelect;

                } else if (fieldObj.htmlType == 'DIV') {
                    this.tableBodyElmnt = document.createElement("div");
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = '';
                    //<img src="../img/loading.gif">
                    this.tableBodyElmntImg = document.createElement("img");
                    this.tableBodyElmntImg.src = "../img/loading.gif";
                    this.tableBodyElmnt.appendChild(this.tableBodyElmntImg);
                } else if (fieldObj.htmlType == 'BUTTON') {
                    this.tableBodyElmnt = document.createElement("button");
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                    this.tableBodyElmnt.appendChild(document.createTextNode(fieldObj.dflt));
                } else if (fieldObj.htmlType == 'LOB') {
                    this.tableBodyElmnt = document.createElement("textarea");
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                } else if (fieldObj.htmlType == 'HIDDEN') {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "hidden";
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                } else if (fieldObj.htmlType == 'LABEL') {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "text";
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'clabel';
                    this.tableBodyElmnt.readonly = true;
                    this.tableBodyElmnt.setAttribute('readonly', 'true');
                } else if (fieldObj.htmlType == 'PASSWORD') {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "password";
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                } else if (fieldObj.htmlType == 'OPTION') {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "hidden";
                    this.tableBodyElmnt.setAttribute("readonly", "true");

                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                    var inpStrArr = fieldObj.listVal.split('|');
                    var fldStr = "";
                    var rtString = "";
                    for (var i = 0; i < inpStrArr.length; i += 2) {
                        if (fieldObj.entitle == 'READONLY') {
                            if (fieldObj.dflt == inpStrArr[i]) {

                                fldStr = '<div class="col-sm-6" > <input disabled="true" type="radio" checked=true dataType="' + fieldObj.dataType + '" htmlType="' + fieldObj.htmlType + '"    xmlname="' + fieldObj.name + '" name="' + fieldObj.name + '"  parent="' + fieldObj.parent + '" id="' + fieldObj.name + '"  value="' + inpStrArr[i] + '"  > <label class="clabel" >' + inpStrArr[i + 1] + '</label > </div>';
                            } else {
                                fldStr = '<div class="col-sm-6" >  <input disabled="true"   type="radio" dataType="' + fieldObj.dataType + '"   xmlname="' + fieldObj.name + '" htmlType="' + fieldObj.htmlType + '"   name="' + fieldObj.name + '"  parent="' + fieldObj.parent + '" id="' + fieldObj.name + '"  value="' + inpStrArr[i] + '"  >  <label class="clabel" >' + inpStrArr[i + 1] + '</label >  </div>';
                            }
                        } else {
                            if (fieldObj.dflt == inpStrArr[i]) {

                                fldStr = ' <div class="col-sm-6" >  <input  type="radio" checked=true dataType="' + fieldObj.dataType + '" htmlType="' + fieldObj.htmlType + '"    xmlname="' + fieldObj.name + '" name="' + fieldObj.name + '"  parent="' + fieldObj.parent + '" id="' + fieldObj.name + '"  value="' + inpStrArr[i] + '"   >  <label class="clabel" >' + inpStrArr[i + 1] + '</label >  </div>';
                            } else {
                                fldStr = '<div class="col-sm-6" >  <input  type="radio" dataType="' + fieldObj.dataType + '"   xmlname="' + fieldObj.name + '" htmlType="' + fieldObj.htmlType + '"              name="' + fieldObj.name + '"  parent="' + fieldObj.parent + '" id="' + fieldObj.name + '"  value="' + inpStrArr[i] + '"  >  <label class="clabel" >' + inpStrArr[i + 1] + '</label >  </div>';
                            }

                        }

                        rtString += fldStr;
                    }
                    this.tableBodyElmntRadio = document.createElement("div");
                    this.tableBodyElmntRadio.innerHTML = rtString;
                } else if (fieldObj.htmlType == 'CONTAINER' || fieldObj.htmlType == 'PAGE' || fieldObj.htmlType == 'hidden') {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "hidden";
                    this.tableBodyElmnt.name = fieldObj.name;
                    this.tableBodyElmnt.className = 'ctable';
                } else {
                    this.tableBodyElmnt = document.createElement("input");
                    this.tableBodyElmnt.type = "TEXT";
                    this.tableBodyElmnt.name = fieldObj.group + '_' + fieldObj.name;
                    this.tableBodyElmnt.className = 'ctext';
                    var fldStr = "";
                    var rtString = "";
                    if (fieldObj.help == 'Y') {
                        fldStr = '<a id=link   HREF="javascript:onClickLink(\'' + fieldObj.name + '\',\'' + this.helpLink + ' \',\'calender\');"> <img src="../img/' + this.helpLink + '.png" width="20px" height="20px" />  </a>';
                        rtString += fldStr;
                    }
                    if (fieldObj.desc == 'Y') {
                        fldStr = '<input type="text"  readonly class="label" name="' + fieldObj.name + 'Desc"     xmlname="' + fieldObj.name + 'Desc" id="' + fieldObj.name + 'Desc" xml="' + fieldObj.xml + '"  parent="' + fieldObj.parent + '" dataType="LABEL" value=""  label="' + fieldObj.label + '"  >';
                        rtString += fldStr;
                    }
                    this.tableBodyElmntDesc.innerHTML = rtString;
                }



            }
        }
        /*catch(e)
        {
                alert("CFCException :" +e);
        }
      *//*
        this.clearfix = document.createElement("div");
        this.clearfix.className = "clearfix visible-xs-block";
        this.clearfix.innerHTML = "";
        this.tableErrorBox = document.createElement("div");
        this.tableErrorBox.id = fieldObj.name + "ErrorBox";

        //this.tableErrorBox.className="ui-state-highlight";
        //	this.tableErrorBox.appendChild(document.createTextNode(""));

        //this.tableBodyElmnt.className = 'ctext';  ### fixd for div tag on 27/dec/2014

        if (fieldObj.htmlType != 'DIV') {
            this.tableBodyElmnt.className = 'ctext';
        }
        this.tableBodyElmnt.setAttribute("xml", fieldObj.xml);
        this.tableBodyElmnt.setAttribute("mndf", fieldObj.mndf);
        this.tableBodyElmnt.setAttribute("dataType", fieldObj.dataType);
        this.tableBodyElmnt.setAttribute("htmlType", fieldObj.htmlType);

        if (fieldObj.dataType == 'DATE') {
            this.tableBodyElmnt.setAttribute("placeholder", "DD-MON-YYYY");
        } else if (fieldObj.dataType == 'AMOUNT') {
            this.tableBodyElmnt.setAttribute("placeholder", "999999999999999.99");
        }

        this.tableBodyElmnt.id = fieldObj.name;
        if (this.tableBodyElmnt.type != "hidden") {
            this.tableBodyElmnt.setAttribute("ng-model", fieldObj.Xpath); // added for angular js
        }
        this.tableBodyElmnt.setAttribute("maxlength", fieldObj.max);
        this.tableBodyElmnt.setAttribute("min", fieldObj.min);
        this.tableBodyElmnt.value = fieldObj.dflt;

        if (fieldObj.mndf == 'Y') {
            this.tableBodyElmnt.setAttribute("required", "");
        }

        this.tableBodyElmnt.setAttribute("value", fieldObj.dflt);
        this.tableBodyElmnt.setAttribute("maxCol", fieldObj.maxCol);
        this.tableBodyElmnt.setAttribute("col", fieldObj.col);
        this.tableBodyElmnt.setAttribute("dflt", fieldObj.dflt);
        this.tableBodyElmnt.setAttribute("ErrorBox", fieldObj.name + "ErrorBox");
        this.tableBodyElmnt.setAttribute("label", fieldObj.label);
        this.tableBodyElmnt.setAttribute("title", fieldObj.tips);
        this.tableBodyElmnt.setAttribute("Xpath", fieldObj.Xpath);
        this.tableBodyElmnt.onchange = fieldObj.onchange;
        this.tableBodyElmnt.setAttribute("onclick", fieldObj.onclick);
        this.tableBodyElmnt.setAttribute("onblure", fieldObj.onblure);
        this.tableBodyElmnt.setAttribute("onkeydown", fieldObj.onkeydown);
        this.tableBodyElmnt.setAttribute("onkeyup", fieldObj.onkeyup);
        this.tableBodyElmnt.setAttribute("onkeypress", fieldObj.onkeypress);
        this.tableBodyElmnt.setAttribute("onchange", fieldObj.onchange);



        this.tableBodyElmnt.setAttribute("task", fieldObj.task);
        if (fieldObj.dataType == 'PAGE') {
            this.tableBodyElmnt.setAttribute("parent", "/");
            //this.tableBodyElmnt.setAttribute("type","hidden");
        } else {
            this.tableBodyElmnt.setAttribute("parent", fieldObj.parent);
        }

        this.tableBodyElmnt.setAttribute("xmlname", fieldObj.name);



        if (fieldObj.dataType == 'CONTAINER' || fieldObj.dataType == 'PAGE' || fieldObj.dataType == 'TAP' || fieldObj.dataType == 'COLLECTION') {
            this.tableBodyElmnt.setAttribute("container", "Y");
        } else {
            this.tableBodyElmnt.setAttribute("container", "N");
        }

        if (fieldObj.entitle == 'READONLY') {
            this.tableBodyElmnt.className = 'clabel';
            this.tableBodyElmnt.setAttribute('readonly', 'true');
            if (fieldObj.htmlType == 'LIST') {
                this.tableBodyElmnt.setAttribute('disabled', 'true');

            }

        }

        if ((fieldObj.dataType == 'PAGE') || (fieldObj.dataType == 'HIDDEN') || (fieldObj.dataType == 'XMLCONTAINER') || (fieldObj.dataType == 'BUTTON') || (fieldObj.parentHtmlType == 'TABLE')) {} else {
            this.tableBodyTd1.appendChild(this.tableBodyLabel);

        }




        if (fieldObj.htmlType == 'OPTION') {
            this.tableBodyTd2.appendChild(this.tableBodyElmntRadio);
        }

        this.tableBodyTd2.appendChild(this.tableErrorBox);

        if (fieldObj.htmlType == 'DIV') {


            jsfunc = "	 div='" + fieldObj.name + "';";
            //jsfunc += "	 url='getMotherTongue.php';";
            // str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase(); 
            //jsfunc += "	 url='get"+ fieldObj.name.substring(0,1)+ fieldObj.name.substring(1,fieldObj.name.length) +".php';";
            jsfunc += "	 url='../service/" + fieldObj.name.substring(0, 1).toUpperCase() + fieldObj.name.substring(1, fieldObj.name.length) + "';";
            //jsfunc += "	 json={USRID:glUserId, GROUPID:glGroupId ,class:'ctext' ,name:'Religion'  ,class:'ctext' ,xml:'N' ,mndf:'N' ,datatype:'VARCHAR' ,htmltype:'DIV' ,id : 'religion' ,errorbox :'religionErrorBox' ,label : 'Religion' ,title :'' ,onchange :'onChange(this)' ,onclick :'onClick(this)' ,onblure :'onBlure(this)' ,onkeydown : 'onKeyDown(this)' ,onkeyup :'onKeyUp(this)' ,onkeypress :'onKeyPress(this)' ,task : 'NONE' };";
            //TODO: Copy object need to fix 
            var jsonObj = {
                USRID: glUserId,
                GROUPID: glGroupId,
                name: fieldObj.name,
                label: fieldObj.label,
                task: fieldObj.task,
                desc: fieldObj.desc,
                htmlType: fieldObj.htmlType,
                entitle: fieldObj.entitle,
                enttlname: fieldObj.enttlname,
                mndf: fieldObj.mndf,
                dataType: fieldObj.dataType,
                cclass: fieldObj.cclass,
                parent: fieldObj.parent,
                validate: fieldObj.validate,
                dflt: fieldObj.dflt,
                min: fieldObj.min,
                max: fieldObj.max,
                tips: fieldObj.tips,
                onkeyup: fieldObj.onkeyup,
                onchange: fieldObj.onchange,
                onkeydown: fieldObj.onkeydown,
                onkeypress: fieldObj.onkeypress,
                onclick: fieldObj.onclick,
                listVal: fieldObj.listVal,
                help: fieldObj.help,
                helpLink: fieldObj.helpLink,
                xml: fieldObj.xml,
                xmlname: fieldObj.xmlname,
                Xpath: fieldObj.Xpath
            };

            jsfunc += "json =" + JSON.stringify(jsonObj) + ";";
            jsfunc += "	onPostReq(url,json,div,'DIV');";



            //this.USSScript +=  jsfunc;
            //var scriptElmnt= document.createElement("script");



            //scriptElmnt.appendChild(document.createTextNode(jsfunc));

            //USS.USSSetScript_(jsfunc);

            //document.getElementById('middleid').appendChild(scriptElmnt);
            /*[
            this.jsfunc =  " div='" + fieldObj.name+"';";
            //url='get"+ fieldObj.name.substring(0,1)+ fieldObj.name.substring(1,str.length).toLowerCase() +".php';
            
            //this.jsfunc+="url='get" +  fieldObj.name + ".php;";
            this.jsfunc+="url='../service/" +  fieldObj.name + ";";
            this.jsfunc+="json={USRID:glUserId, GROUPID:glGroupId }; onPostReq(url,json,div,'DIV');";
            
                    this.tableBodyElmntScript.appendChild( document.createTextNode(this.jsfunc) );
            //	document.header.
            *//*
        }

        this.tableBodyElmntScript.text = jsfunc;
        USSTableRow.appendChild(this.clearfix);
        if (fieldObj.parentHtmlType != 'TABLE') {
            USSTableRow.appendChild(this.tableBodyTd1);
        }
        if (fieldObj.parentHtmlType != 'HEADER') {
            this.tableBodyTd2.appendChild(this.tableBodyElmnt);
            this.tableBodyTd2.appendChild(this.tableBodyElmntDesc);
            this.tableBodyTd2.appendChild(this.tableBodyElmntScript);
            USSTableRow.appendChild(this.tableBodyTd2);
        }

        try {
            post_cust_CreateField(fieldObj, USSTableRow);
        } catch (e) {}

        return USSTableRow;
    }
    exports.USS = USS;
});

*/