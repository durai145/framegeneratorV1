define(function (require, exports, module) {
    "use strict";
    exports.createField = function (fieldObj) {
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
        return this.tableBodyElmnt;
    }
});