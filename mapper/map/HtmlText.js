define(function (require, exports, module) {
    exports.createField = function (fieldObj) {
        this.tableBodyElmnt=document.createElement("input");
        this.tableBodyElmnt.type="TEXT";
        this.tableBodyElmnt.name=fieldObj.group+'_'+fieldObj.name ;
        this.tableBodyElmnt.className = 'ctext';
        var fldStr="";
        var rtString="";
        if(fieldObj.help=='Y')
        {
            fldStr='<a id=link   HREF="javascript:onClickLink(\''+fieldObj.name+'\',\'' +this.helpLink+' \',\'calender\');"> <img src="../img/'+this.helpLink+'.png" width="20px" height="20px" />  </a>';
            rtString+=fldStr;
        }
        if(fieldObj.desc=='Y')
        {
            fldStr='<input type="text"  readonly class="label" name="'+fieldObj.name+'Desc"     xmlname="'+fieldObj.name+'Desc" id="'+fieldObj.name+'Desc" xml="'+fieldObj.xml+'"  parent="'+fieldObj.parent+'" dataType="LABEL" value=""  label="'+fieldObj.label+'"  >';
            rtString+=fldStr;
        }
     //   this.tableBodyElmntDesc.innerHTML=rtString;
        return this.tableBodyElmnt;
    }
});